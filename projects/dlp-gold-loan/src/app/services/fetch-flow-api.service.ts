import { Injectable, Injector } from "@angular/core";
import { ApiService } from "./api.service";
import { InitializeJourneyService } from "./initialize-journey.service";
import { LogicFunctions } from "../shared/helpers/JsonLogic";
import { CommonVariableService } from "./common-variable-service";
import { SharedService } from "../shared/services/utils/shared.service";
import { EnvironmentService } from "../../environments/environment.service";
import { JourneyEventsService } from "./journey-events.service";
import { LocalStorage } from "../shared/helpers/localStorage";
import { CommonCommonService } from "./common-common.service";

@Injectable({
  providedIn: "root",
})
export class FetchFlowApiService {
  localStorage: LocalStorage;
  environmentService: EnvironmentService;
  JsonLogic: LogicFunctions;
  commonVariableService: CommonVariableService;
  sharedService: SharedService;
  commonCommonService: CommonCommonService;
  constructor(
    public apiService: ApiService,
    public initializeJourneyService: InitializeJourneyService,
    public journeyEventsService: JourneyEventsService,
    private inject: Injector
  ) {
    this.environmentService =
      this.inject.get<EnvironmentService>(EnvironmentService);
    this.localStorage = this.inject.get<LocalStorage>(LocalStorage);
    this.JsonLogic = this.inject.get<LogicFunctions>(LogicFunctions);
    this.commonVariableService = this.inject.get<CommonVariableService>(
      CommonVariableService
    );
    this.commonCommonService =
      this.inject.get<CommonCommonService>(CommonCommonService);
    this.sharedService = this.inject.get<SharedService>(SharedService);
  }

  fetchDataScopeData(
    fetchflow,
    totalLength,
    currentIndex,
    scope,
    fetchflowList,
    pageconfig,
    pageCode
  ) {
    fetchflow.dataCloud = this.commonCommonService.fetchDataCloud(
      fetchflow,
      pageconfig
    );
    fetchflow.dataCloud = { ...fetchflow.dataCloud, scope: scope };

    fetchflow.mappedParameters =
      this.initializeJourneyService.mapDataFromCloudParameter(
        fetchflow,
        fetchflow.dataCloud
      );
    if (fetchflow.validate) {
      let result = this.applyJsonLogic(fetchflow.validate, fetchflow.dataCloud);
      switch (result) {
        case "EXECUTE":
          this.fetchFlowApiCalls(
            fetchflow,
            totalLength,
            currentIndex,
            scope,
            fetchflowList,
            pageconfig,
            pageCode
          );
          break;
        case "NEXT":
          if (currentIndex != totalLength - 1) {
            this.fetchDataScopeData(
              fetchflowList[currentIndex + 1],
              totalLength,
              currentIndex + 1,
              scope,
              fetchflowList,
              pageconfig,
              pageCode
            );
          }
          break;
      }
    } else {
      this.fetchFlowApiCalls(
        fetchflow,
        totalLength,
        currentIndex,
        scope,
        fetchflowList,
        pageconfig,
        pageCode
      );
    }
  }

  private fetchFlowApiCalls(
    fetchflow,
    totalLength,
    currentIndex,
    scope,
    fetchflowList,
    pageconfig,
    pageCode
  ) {
    const API_NAME_MAPPING = {
      loanDetails: "fetchLoanDetails",
      loanWithOutBorrowerDetails: "loanWithOutBorrowerDetails",
      borrowerDetails: "fetchBorrowerDetails",
      productListForProductGroup: "getProductListForProductGroup",
      fetchGoldRateList: "fetchGoldRateList",
      fetchGoldRateTvList: "fetchGoldRateTvList",
      fetchAgriGoldLoanTenure: "fetchAgriGoldLoanTenure",
      fetchPrincipalApprovedDetails: "fetchPrincipalApprovedDetails",
    };
    if (API_NAME_MAPPING[fetchflow.fetchflow]) {
      const apiMethod = API_NAME_MAPPING[fetchflow.fetchflow];
      try {
        this.apiService[apiMethod](fetchflow.mappedParameters).then(
          (res: any) => {
            this.fetchflowResponseDirection({
              fetchflow,
              totalLength,
              currentIndex,
              scope,
              fetchflowList,
              pageconfig,
              response: res,
              pageCode,
            });
          },
          (err) => {
            this.fetchflowErrorResponseDirection({
              fetchflow,
              totalLength,
              currentIndex,
              scope,
              fetchflowList,
              pageconfig,
              error: err,
              pageCode,
            });
          }
        );
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error(
        `Your API [ ${fetchflow.fetchflow} ]  is not in the API_NAME_MAPPING list, please add`
      );
    }
  }
  private fetchflowResponseDirection({
    fetchflow,
    totalLength,
    currentIndex,
    scope,
    fetchflowList,
    pageconfig,
    response,
    pageCode,
  }: {
    fetchflow;
    totalLength;
    currentIndex;
    scope;
    fetchflowList;
    pageconfig;
    response;
    pageCode;
  }) {
    scope[fetchflow.fetchflow] = response;
    let journey = this.commonCommonService.getJourney();
    journey.metaData.globalScopeData[fetchflow.fetchflow] = response;
    this.commonCommonService.setJourney(journey);
    this.fetchflowResponseValidator({
      fetchflow,
      totalLength,
      currentIndex,
      scope,
      fetchflowList,
      pageconfig,
      response,
      pageCode,
      lastIndex: currentIndex === totalLength - 1,
    });
  }

  private fetchflowResponseValidator({
    fetchflow,
    totalLength,
    currentIndex,
    scope,
    fetchflowList,
    pageconfig,
    response,
    pageCode,
    lastIndex,
  }: {
    fetchflow;
    totalLength;
    currentIndex;
    scope;
    fetchflowList;
    pageconfig;
    response;
    pageCode;
    lastIndex;
  }) {
    if (fetchflow.validateResponse) {
      let data_cloud = {
        ...response,
        ...fetchflow.dataCloud,
        fetchFlowResponse: response,
        scope: scope,
      };
      let result = this.applyJsonLogic(fetchflow.validateResponse, data_cloud);
      result = this.fetchflowExecuteEventCodes(result, data_cloud);
      if (result?.includes("[NAVIGATE]")) {
        this.fetchflowNavigateExecutor(result, pageCode, pageconfig);
      } else {
        let errorMessages;
        [result, errorMessages] = this.fetchflowErrorExecutor(
          result,
          errorMessages
        );
        this.fetchflowActionCodeExecutor({
          result,
          fetchflowList,
          currentIndex,
          totalLength,
          scope,
          pageconfig,
          pageCode,
          fetchflow,
          errorMessages,
          lastIndex,
        });
      }
    } else {
      lastIndex
        ? this.commonVariableService.scopeSubject.next(scope)
        : this.fetchDataScopeData(
            fetchflowList[currentIndex + 1],
            totalLength,
            currentIndex + 1,
            scope,
            fetchflowList,
            pageconfig,
            pageCode
          );
    }
  }

  private executeWithDelay(
    fetchflowList,
    currentIndex,
    totalLength,
    scope,
    pageconfig,
    pageCode
  ) {
    if (
      fetchflowList[currentIndex]?.hasOwnProperty("retry") &&
      fetchflowList[currentIndex]?.hasOwnProperty("delayMS")
    ) {
      const timer = setTimeout(() => {
        if (fetchflowList[currentIndex].retry === 0) {
          clearTimeout(timer);
          if (fetchflowList[currentIndex]?.redirectOnReTryFailure) {
            this.initializeJourneyService.navigateJourney(
              fetchflowList[currentIndex]?.redirectOnReTryFailure
            );
          }
        } else {
          this.fetchDataScopeData(
            fetchflowList[currentIndex],
            totalLength,
            currentIndex,
            scope,
            fetchflowList,
            pageconfig,
            pageCode
          );
        }
        fetchflowList[currentIndex].retry -= 1;
      }, fetchflowList[currentIndex]?.delayMS);
    } else {
      this.fetchDataScopeData(
        fetchflowList[currentIndex],
        totalLength,
        currentIndex,
        scope,
        fetchflowList,
        pageconfig,
        pageCode
      );
    }
  }

  private fetchflowActionCodeExecutor({
    result,
    fetchflowList,
    currentIndex,
    totalLength,
    scope,
    pageconfig,
    pageCode,
    fetchflow,
    errorMessages,
    lastIndex,
  }: {
    result;
    fetchflowList;
    currentIndex;
    totalLength;
    scope;
    pageconfig;
    pageCode;
    fetchflow;
    errorMessages;
    lastIndex;
  }) {
    switch (result) {
      case "EXECUTE_WITH_DELAY_MS":
        this.executeWithDelay(
          fetchflowList,
          currentIndex,
          totalLength,
          scope,
          pageconfig,
          pageCode
        );
        break;
      case "NEXT":
      case "PROCEED":
      case null:
        lastIndex
          ? this.commonVariableService.scopeSubject.next(scope)
          : this.fetchDataScopeData(
              fetchflowList[currentIndex + 1],
              totalLength,
              currentIndex + 1,
              scope,
              fetchflowList,
              pageconfig,
              pageCode
            );
        break;
      case "ERROR":
        if (fetchflow.validationErrorMessage) {
          this.sharedService.openSnackBar(fetchflow.validationErrorMessage);
        }
        if (errorMessages) {
          this.sharedService.openSnackBar(errorMessages);
        }
        this.commonVariableService.globalLoaderState = false;
        break;
      default:{
        let splited = result.split("[PARAMS]");
        if (splited.length < 1) {
          this.initializeJourneyService.navigateJourney(
            result,
            undefined,
            pageconfig,
            undefined,
            pageCode
          );
          this.commonVariableService.globalLoaderState = false;
        } else {
          this.initializeJourneyService.navigateJourney(
            splited[0],
            undefined,
            pageconfig,
            splited[1],
            pageCode
          );
          this.commonVariableService.globalLoaderState = false;
        }
        break;
      }  
    }
  }

  private fetchflowErrorExecutor(result, errorMessages) {
    if (result?.includes("[ERROR_MESSAGE]")) {
      let splited = result.split("[ERROR_MESSAGE]");
      if (splited.length > 1) {
        errorMessages = splited[1];
        result = splited[0];
      }
    }
    return [result, errorMessages];
  }

  private fetchflowNavigateExecutor(result, pageCode, pageconfig) {
    result = result.replace("[NAVIGATE]", "");
    let splited = result.split("[PARAMS]");
    if (splited.length == 1) {
      this.initializeJourneyService.navigateJourney(
        splited[0],
        undefined,
        pageconfig,
        undefined,
        pageCode
      );
      this.commonVariableService.globalLoaderState = false;
    } else {
      this.initializeJourneyService.navigateJourney(
        splited[0],
        undefined,
        pageconfig,
        splited[1],
        pageCode
      );
      this.commonVariableService.globalLoaderState = false;
    }
    return result;
  }

  private fetchflowErrorResponseDirection({
    fetchflow,
    totalLength,
    currentIndex,
    scope,
    fetchflowList,
    pageconfig,
    error,
    pageCode,
  }: {
    fetchflow;
    totalLength;
    currentIndex;
    scope;
    fetchflowList;
    pageconfig;
    error;
    pageCode;
  }) {
    scope[fetchflow.fetchflow] = {};
    let journey = this.commonCommonService.getJourney();
    journey.metaData.globalScopeData[fetchflow.fetchflow] = {};
    this.commonCommonService.setJourney(journey);
    if (currentIndex != totalLength - 1) {
      if (fetchflow.apiError) {
        let data_cloud = {
          ...error,
          ...fetchflow.dataCloud,
          fetchFlowResponse: error,
        };
        let result = this.applyJsonLogic(fetchflow.apiError, data_cloud);
        if (result?.includes("[JOURNEY_EVENT_CODE]")) {
          result = this.fetchflowExecuteEventCodes(result, data_cloud);
        }
        if (result?.includes("[NAVIGATE]")) {
          this.fetchflowNavigateExecutor(result, pageCode, pageconfig);
        } else {
          let errorMessages;
          [result, errorMessages] = this.fetchflowErrorExecutor(
            result,
            errorMessages
          );
          this.fetchflowErrorActionCodeExecutor({
            fetchflow,
            totalLength,
            currentIndex,
            scope,
            fetchflowList,
            pageconfig,
            error,
            pageCode,
            result,
            errorMessages,
          });
        }
      } else {
        this.fetchDataScopeData(
          fetchflowList[currentIndex + 1],
          totalLength,
          currentIndex + 1,
          scope,
          fetchflowList,
          pageconfig,
          pageCode
        );
      }
    } else {
      this.commonVariableService.scopeSubject.next(scope);
    }
  }

  private applyJsonLogic(validationJson, supplyData):string {
    return this.JsonLogic.Jsonlogic.apply(validationJson, supplyData);
  }

  private fetchflowExecuteEventCodes(result, data_cloud) {
    if (result?.includes("[JOURNEY_EVENT_CODE]")) {
      let jeventcode = result.split("[JOURNEY_EVENT_CODE]");
      result = jeventcode[0];
      jeventcode.map((j, i) => {
        if (i != 0) {
          this.journeyEventsService.journeyEventsExecutor(j, data_cloud);
        }
      });
    }
    return result;
  }

  private fetchflowErrorActionCodeExecutor({
    fetchflow,
    totalLength,
    currentIndex,
    scope,
    fetchflowList,
    pageconfig,
    pageCode,
    result,
    errorMessages,
  }: {
    fetchflow;
    totalLength;
    currentIndex;
    scope;
    fetchflowList;
    pageconfig;
    error;
    pageCode;
    result;
    errorMessages;
  }) {
    switch (result) {
      case "NEXT":
      case null:
      case "PROCEED":
        this.fetchDataScopeData(
          fetchflowList[currentIndex + 1],
          totalLength,
          currentIndex + 1,
          scope,
          fetchflowList,
          pageconfig,
          pageCode
        );
        break;
      case "ERROR":
        if (fetchflow.validationErrorMessage) {
          this.sharedService.openSnackBar(fetchflow.validationErrorMessage);
        }
        if (errorMessages) {
          this.sharedService.openSnackBar(errorMessages);
        }
        this.commonVariableService.globalLoaderState = false;
        break;
      default:{
        let splited = result.split("[PARAMS]");
        if (splited.length < 1) {
          this.initializeJourneyService.navigateJourney(
            result,
            undefined,
            pageconfig,
            undefined,
            pageCode
          );
          this.commonVariableService.globalLoaderState = false;
        } else {
          this.initializeJourneyService.navigateJourney(
            splited[0],
            undefined,
            pageconfig,
            splited[1],
            pageCode
          );
          this.commonVariableService.globalLoaderState = false;
        }
        break;
      }  
    }
  }
}
