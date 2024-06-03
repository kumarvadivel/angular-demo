import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';
import { InitializeJourneyService } from './initialize-journey.service';
import { LogicFunctions } from '../shared/helpers/JsonLogic';
import { CommonVariableService } from './common-variable-service';
import { SharedService } from '../shared/services/utils/shared.service';
import { EnvironmentService } from '@kcc-environments/environment.service';
import { JourneyEventsService } from './journey-events.service';
import { LocalStorage } from '../shared/helpers/localStorage';

@Injectable({
  providedIn: 'root'
})
export class FetchFlowApiService {

  localStorage: LocalStorage;
  environmentService: EnvironmentService;

  constructor(
    public theme1ApiService: ApiService,
    public initializeJourneyService: InitializeJourneyService,
    public journeyEventsService: JourneyEventsService,
    public commonVariableService: CommonVariableService,
    public JsonLogic: LogicFunctions,
    public sharedService: SharedService,
    private injector: Injector
  ) {
    this.environmentService = this.injector.get<EnvironmentService>(EnvironmentService)
    this.localStorage = this.injector.get<LocalStorage>(LocalStorage)
  }


  fetchFlowApiCalls(fetchflow, totalLength, currentIndex, scope, fetchflowList, pageconfig, pageCode) {
    const API_NAME_MAPPING = {
      'multiFacilityRetreive':'retreiveFacilityDetails',
      'showBorrowerDetails':'showBorrowerDetails',
     'fetchBankDetails':'fetchBankDetails',
      'fetchMultiFacilityList':'fetchMultiFacilityList',
      'loanDetails': 'fetchLoanDetails',
      'loanWithOutBorrowerDetails': 'loanWithOutBorrowerDetails',
      'borrowerDetails': 'fetchBorrowerDetails',
      'productListForProductGroup': 'getProductListForProductGroup',
      'fetchEligibility':'fetchEligibilityDtls',
      'verifyPanNumber': 'verifyPanNumber',
      'fetchRatingScore':'fetchRatingScore',
      'updateMainLoanApplicationStatus':'updateMainLoanApplicationStatus',
      'fetchLoanDetails':'fetchLoanDetails'
    }

    if (API_NAME_MAPPING[fetchflow.fetchflow]) {
      const apiMethod = API_NAME_MAPPING[fetchflow.fetchflow];
      this.theme1ApiService[apiMethod](fetchflow.mappedParameters).then((res: any) => {
        this.fetchflowResponseDirection({fetchflow, totalLength, currentIndex, scope, fetchflowList, pageconfig, response: res, pageCode})
      }, (err) => {
        this.fetchflowErrorResponseDirection({fetchflow, totalLength, currentIndex, scope, fetchflowList, pageconfig, error: err, pageCode})
      })
    } else {
      console.error(`Your API [ ${fetchflow.fetchflow} ]  is not in the API_NAME_MAPPING list, please add`)
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
    let journey = this.getJourney();
    journey.metaData.globalScopeData[fetchflow.fetchflow] = response;
    this.setJourney(journey);
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
      fetchflowList[currentIndex]?.retry &&
      fetchflowList[currentIndex]?.delayMS
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
    let journey = this.getJourney();
    journey.metaData.globalScopeData[fetchflow.fetchflow] = {};
    this.setJourney(journey);
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


  fetchDataScopeData(fetchflow, totalLength, currentIndex, scope, fetchflowList, pageconfig, pageCode) {
    fetchflow.dataCloud = this.fetchDataCloud(fetchflow, pageconfig)
    fetchflow.dataCloud = { ...fetchflow.dataCloud, scope: scope }

    fetchflow.mappedParameters = this.initializeJourneyService.mapDataFromCloudParameter(fetchflow, fetchflow.dataCloud)
    if (fetchflow.validate) {
      let result = this.applyJsonLogic(fetchflow.validate, fetchflow.dataCloud)
      switch (result) {
        case 'EXECUTE':
          this.fetchFlowApiCalls(fetchflow, totalLength, currentIndex, scope, fetchflowList, pageconfig, pageCode)
          break;
        case 'NEXT':
          if (currentIndex != totalLength - 1) {
            this.fetchDataScopeData(fetchflowList[currentIndex + 1], totalLength, currentIndex + 1, scope, fetchflowList, pageconfig, pageCode)
          }
          break
      }
    } else {
      this.fetchFlowApiCalls(fetchflow, totalLength, currentIndex, scope, fetchflowList, pageconfig, pageCode)
    }
  }

  fetchDataCloud(submitFlow, config) {
    let data = {}
    let journey = this.getJourney()
    submitFlow.dataFeedCloud.map(feed => {
      switch (feed) {
        case 'product':
          data = { ...data, ...journey.product, product: journey.product }
          break;
        case 'formValue':
          data = {
            ...data, ...this.mergeAllFormsInConfig(config),
            formValue: this.mergeAllFormsInConfig(config)
          }
          break;
        case 'capturedData':
          data = { ...data, ...journey.metaData.capturedData, capturedData: journey.metaData.capturedData }
          break;
        case 'resumeJourney':
          data = { ...data, resumeJourney: journey.resumeJourney }
          break;
        case 'metaData':
          data = { ...data, metaData: journey.metaData }
          break;
      }
    })
    data = { ...data, appConfig: this.environmentService.configData.appConfig }
    return data
  }


  private mergeAllFormsInConfig(config) {
    let val = {}
    config.forEach(c=>{
      if(c.componentType=='FORM'){
        val = {...val,...c.sectionContent.formValue}
      }
    })
    return val
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

  private applyJsonLogic(validationJson, supplyData) {
    return this.JsonLogic.Jsonlogic.apply(validationJson, supplyData)
  }


  setJourney(journey) {
    this.localStorage.SessionSetItem('CURRENT_JOURNEY', journey)

  }

  getJourney() {
    return this.localStorage.SessionGetItem('CURRENT_JOURNEY');
  }
}
