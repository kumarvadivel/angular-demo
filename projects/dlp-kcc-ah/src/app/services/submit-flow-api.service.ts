import { Injectable, Injector } from '@angular/core';
import { FetchFlowApiService } from './fetch-flow-api.service';
import { InitializeJourneyService } from './initialize-journey.service';
import { LogicFunctions } from '../shared/helpers/JsonLogic';
import { ApiService } from './api.service';
import { JourneyEventsService } from './journey-events.service';
import { CommonVariableService } from './common-variable-service';
import { SharedService } from '../shared/services/utils/shared.service';
import { LocalStorage } from '../shared/helpers/localStorage';

@Injectable({
  providedIn: 'root'
})
export class SubmitFlowApiService {

  localStorage: LocalStorage;
  sharedService: SharedService;
  constructor(
    public fetchFlowApiService: FetchFlowApiService,
    public initializeJourneyService: InitializeJourneyService,
    public JsonLogic: LogicFunctions,
    public theme1ApiService: ApiService,
    public journeyEventsService: JourneyEventsService,
    public commonVariableService: CommonVariableService,
    private inject: Injector
  ) { 
    this.localStorage = this.inject.get<LocalStorage>(LocalStorage)
    this.sharedService = this.inject.get<SharedService>(SharedService)
  }


  private submitFlowApiCalls({
    submitflow,
    journey,
    currentIndex,
    totalLength,
    configList,
    pageconfig,
    pageCode,
    extraCloudParams,
  }: {
    submitflow;
    journey;
    _dataCloud;
    currentIndex;
    totalLength;
    configList;
    pageconfig;
    pageCode;
    extraCloudParams;
  }) {
    if (submitflow.journeyEventCodeBeforeResponse) {
      if (Array.isArray(submitflow.journeyEventCodeBeforeResponse)) {
        submitflow.journeyEventCodeBeforeResponse.map((journeyEventCode) => {
          this.journeyEventsService.journeyEventsExecutor(journeyEventCode);
        });
      } else {
        this.journeyEventsService.journeyEventsExecutor(
          submitflow.journeyEventCodeBeforeResponse
        );
      }
    }


    /*HERE the mapping is like the json value you provided mapped to the respective API method to call in theme api service */
    const API_NAME_MAPPING = {
      'fetchAccountData': 'fetchAccountData',
      'npaCheck': 'npaCheck',
      'cibilfetch': 'cibilfetch',
      'stpCheck': 'stpCheck',
      'fetchEligibilityDtls': 'fetchEligibilityDtls',
      'updateMainLoanApplicationStatus': 'updateMainLoanApplicationStatus',
      'showBorrowerDetails': 'showBorrowerDetails',
      'applyLoan': 'applyLoan',
      'profileUpdate': 'EmployeeInfoProfileUpdate',
      'updateLoanApplicationTrackingStatus': 'updateLoanApplicationTrackingStatus',
      'verifyPanNumber': 'verifyPanNumber',
      'updatesubStatus': 'updateLoanApplicationStatus',
      'loanUpdate': 'updateLoanApplication',
      'assignUserHierarchyUnit': 'assignUserHierarchy',
      'personalProfileUpdate': 'personalProfileUpdate',
      'saveCampaign':'saveCampaign',
      'duplicateApplicationCheck':'duplicateApplicationCheck',
      'updateLoanSanction':'updateLoanSanction',
      'fetchKccAssesment':'fetchKccAssesment',
      'updateKccAssesment':'updateKccAssesment',
      'esignStatus': 'esignFetchStatus',
      'sanctionUpdate':'sanctionUpdate',
      'companyProfileUpdate':'companyProfileUpdate',
      'verifyPanNumber_v3':'verifyPanNumber_v3',
      'verifyUdyam':'verifyUdyam',
      'nameMatch_v2':'nameMatch_v2'
    }

    if (API_NAME_MAPPING[submitflow.submitflow]) {
      const apiMethod = API_NAME_MAPPING[submitflow.submitflow];
      this.theme1ApiService[apiMethod](submitflow.mappedParameters)
        .then(
          (res) => {
            this.apiResponseDirectionFormSubmit({submitflow, res, currentIndex, totalLength, configList, pageconfig, pageCode, journey, extraCloudParams});
          },
          (err) => {
            this.apiErrorDirectionFormSubmit({
              submitflow,
              _res: err,
              currentIndex,
              totalLength,
              configList,
              pageconfig,
              pageCode,
              _journey: journey,
            });
          }
        );
    } else {
      console.error(`Your API [ ${submitflow.submitflow} ]  is not in the API_NAME_MAPPING list, please add`)
    }
    // Depending on the submitflow type, make an appropriate API call

  }


  private apiResponseDirectionFormSubmit({
    submitflow,
    res,
    currentIndex,
    totalLength,
    configList,
    pageconfig,
    pageCode,
    journey,
    extraCloudParams = {},
    journeyPage,
  }: {
    submitflow;
    res;
    currentIndex;
    totalLength;
    configList;
    pageconfig;
    pageCode;
    journey;
    extraCloudParams?: {};
    journeyPage?;
  }) {
    submitflow.submitflowResponse = res;
    if (res?.code == "200") {
      this.saveFormSubmitFlowToJourney(submitflow, res);
      this.apiresponseValidator({
        submitflow,
        res,
        currentIndex,
        totalLength,
        configList,
        pageconfig,
        pageCode,
        journey,
        extraCloudParams,
        journeyPage,
      });

      if (submitflow.journeyEventCodeAfterResponseSucess) {
        if (Array.isArray(submitflow.journeyEventCodeAfterResponseSucess)) {
          submitflow.journeyEventCodeAfterResponseSucess.forEach(
            (journeyEventCode) => {
              this.journeyEventsService.journeyEventsExecutor(
                this.applyJsonLogic(journeyEventCode, submitflow.dataCloud),
                submitflow.dataCloud
              );
            }
          );
        } else {
          this.journeyEventsService.journeyEventsExecutor(
            this.applyJsonLogic(
              submitflow.journeyEventCodeAfterResponseSucess,
              submitflow.dataCloud
            ),
            submitflow.dataCloud
          );
        }
      }
    } else {
      this.saveFormSubmitFlowToJourney(submitflow, res);
      if (submitflow.journeyEventCodeAfterResponseFailure) {
        if (Array.isArray(submitflow.journeyEventCodeAfterResponseFailure)) {
          submitflow.journeyEventCodeAfterResponseFailure.forEach(
            (journeyEventCode) => {
              this.journeyEventsService.journeyEventsExecutor(
                this.applyJsonLogic(journeyEventCode, submitflow.dataCloud)
              );
            }
          );
        } else {
          this.journeyEventsService.journeyEventsExecutor(
            this.applyJsonLogic(
              submitflow.journeyEventCodeAfterResponseFailure,
              submitflow.dataCloud
            )
          );
        }
      }
      this.apiresponseValidator({
        submitflow,
        res,
        currentIndex,
        totalLength,
        configList,
        pageconfig,
        pageCode,
        journey,
        extraCloudParams,
        journeyPage,
      });
    }
  }

  private apiresponseValidator({
    submitflow,
    res,
    currentIndex,
    totalLength,
    configList,
    pageconfig,
    pageCode,
    extraCloudParams,
    journeyPage,
  }: {
    submitflow;
    res;
    currentIndex;
    totalLength;
    configList;
    pageconfig;
    pageCode;
    journey;
    extraCloudParams;
    journeyPage;
  }) {
    if (currentIndex != totalLength - 1) {
      if (submitflow.validateResponse) {
        this.formSubmitValidateResponseValidatorParser({
          res,
          submitflow,
          extraCloudParams,
          pageconfig,
          pageCode,
          currentIndex,
          totalLength,
          configList,
          lastIndex: false,
        });
      } else {
        this.formSubmitEventExecutor(submitflow);
        if (journeyPage) {
          this.apiCallJourneyPage(
            configList.formSubmitFlow[currentIndex + 1],
            currentIndex + 1,
            totalLength,
            pageCode,
            configList,
            pageconfig,
            extraCloudParams
          );
        } else {
          this.apiCall(
            configList.formSubmitFlow[currentIndex + 1],
            currentIndex + 1,
            totalLength,
            pageCode,
            configList,
            pageconfig,
            extraCloudParams
          );
        }
      }
    } else if (submitflow.validateResponse) {
        this.formSubmitValidateResponseValidatorParser({
          res,
          submitflow,
          extraCloudParams,
          pageconfig,
          pageCode,
          currentIndex,
          totalLength,
          configList,
          lastIndex: true,
        });
      } else {
        this.formSubmitEventExecutor(submitflow);
        if (!journeyPage) {
          this.proceedJourney(pageCode, undefined, pageconfig);
        }
        this.commonVariableService.globalLoaderState = false;
      }
  }

  private formSubmitValidateResponseValidatorParser({
    res,
    submitflow,
    extraCloudParams,
    pageconfig,
    pageCode,
    currentIndex,
    totalLength,
    configList,
    lastIndex,
  }: {
    res;
    submitflow;
    extraCloudParams;
    pageconfig;
    pageCode;
    currentIndex;
    totalLength;
    configList;
    lastIndex?;
  }) {
    //not last index
    let data_cloud = {
      ...res,
      ...submitflow.dataCloud,
      formSubmitResponse: res,
      ...extraCloudParams,
    };
    extraCloudParams = this.mapExtraCloudParams(
      extraCloudParams,
      submitflow,
      res
    );
    let result = this.applyJsonLogic(submitflow.validateResponse, data_cloud);
    result = this.executeResponseJourneyEventCode(result, data_cloud);
    if (result?.includes("[NAVIGATE]")) {
      this.executeNavigateSequence(
        result,
        data_cloud,
        submitflow,
        pageconfig,
        pageCode
      );
    } else {
      let errorMessages;
      [result, errorMessages] = this.mapFormSubmitErrorMessages(
        result,
        errorMessages
      );
      switch (result) {
        case "NEXT":
        case null:
          this.formSubmitEventExecutor(submitflow);
          this.proceedJourney(pageCode, undefined, pageconfig);
          this.commonVariableService.globalLoaderState = false;
          break;
        case "PROCEED":
          if (lastIndex) {
            this.formSubmitEventExecutor(submitflow);
            this.proceedJourney(pageCode, undefined, pageconfig);
          } else {
            this.formSubmitEventExecutor(submitflow);
            this.apiCall(
              configList.formSubmitFlow[currentIndex + 1],
              currentIndex + 1,
              totalLength,
              pageCode,
              configList,
              pageconfig,
              extraCloudParams
            );
          }
          break;
        case "RedirectToExternalPortal": 
        window.open(res.webLink, '_self');
        break;
        case "ERROR":
          this.executeFormsubmitErrorMessage(submitflow, errorMessages);
          break;
        default:
          this.executeNormalPageFormSubmit(
            submitflow,
            pageCode,
            pageconfig,
            result
          );
          break;
      }
    }
  }

  private mapExtraCloudParams(extraCloudParams, submitflow, res) {
    if (extraCloudParams?.["currentFormSubmitResponses"]) {
      extraCloudParams["currentFormSubmitResponses"][submitflow.submitflow] =
        res;
    } else {
      extraCloudParams["currentFormSubmitResponses"] = {};
      extraCloudParams["currentFormSubmitResponses"][submitflow.submitflow] =
        res;
    }
    return extraCloudParams;
  }
  private executeResponseJourneyEventCode(result, data_cloud) {
    if (result?.includes("[JOURNEY_EVENT_CODE]")) {
      let jeventcode = result.split("[JOURNEY_EVENT_CODE]");
      result = jeventcode[0];
      jeventcode.forEach((j, i) => {
        if (i != 0) {
          this.journeyEventsService.journeyEventsExecutor(j, data_cloud);
        }
      });
    }
    return result;
  }

  private executeNavigateSequence(
    result,
    _data_cloud,
    submitflow,
    pageconfig,
    pageCode
  ) {
    result = result.replace("[NAVIGATE]", "");
    let splited = result.split("[PARAMS]");
    this.formSubmitEventExecutor(submitflow);
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
  private mapFormSubmitErrorMessages(result, errorMessages) {
    if (result?.includes("[ERROR_MESSAGE]")) {
      let splited = result.split("[ERROR_MESSAGE]");
      if (splited.length > 1) {
        errorMessages = splited[1];
        result = splited[0];
      }
    }
    return [result, errorMessages];
  }
  private executeFormsubmitErrorMessage(submitflow, errorMessages) {
    if (submitflow.validationErrorMessage) {
      this.sharedService.openSnackBar(submitflow.validationErrorMessage);
    }
    if (errorMessages) {
      this.sharedService.openSnackBar(errorMessages);
    }
    this.commonVariableService.globalLoaderState = false;
  } 
  private executeNormalPageFormSubmit(
    submitflow,
    pageCode,
    pageconfig,
    result
  ) {
    this.formSubmitEventExecutor(submitflow);
    let splited = result.split("[PARAMS]");
    if (splited.length < 1) {
      this.initializeJourneyService.navigateJourney(
        result,
        undefined,
        pageconfig,
        undefined,
        pageCode
      );
    } else {
      this.initializeJourneyService.navigateJourney(
        splited[0],
        undefined,
        pageconfig,
        splited[1],
        pageCode
      );
    }
    this.commonVariableService.globalLoaderState = false;
  }
  apiCallJourneyPage(submitflow, currentIndex, totalLength, pageCode, configList, pageconfig?, extraCloudParams?) {
    let journey = this.getJourney()
    submitflow.dataCloud = this.fetchFlowApiService.fetchDataCloud(submitflow, pageconfig)
    if (extraCloudParams) {
      submitflow.dataCloud = { ...submitflow.dataCloud, ...extraCloudParams }
    }
    submitflow.mappedParameters = this.initializeJourneyService.mapDataFromCloudParameter(submitflow, submitflow.dataCloud)
    this.submitFlowApiCallsJourneyPage({
      submitflow,
      journey,
      _dataCloud: submitflow.dataCloud,
      currentIndex,
      totalLength,
      configList,
      pageconfig,
      pageCode,
      extraCloudParams,
    });

  }

  private submitFlowApiCallsJourneyPage({
    submitflow,
    journey,
    _dataCloud,
    currentIndex,
    totalLength,
    configList,
    pageconfig,
    pageCode,
    extraCloudParams
  }: {
    submitflow;
    journey;
    _dataCloud;
    currentIndex;
    totalLength;
    configList;
    pageconfig;
    pageCode;
    extraCloudParams;
  }) {
    let res
    if (submitflow.journeyEventCodeBeforeResponse) {
      if (Array.isArray(submitflow.journeyEventCodeBeforeResponse)) {
        submitflow.journeyEventCodeBeforeResponse.map(journeyEventCode => {
          this.journeyEventsService.journeyEventsExecutor(journeyEventCode)
        })
      } else {
        this.journeyEventsService.journeyEventsExecutor(submitflow.journeyEventCodeBeforeResponse)
      }
    }
    let journeyPage = true;
    const STATIC_API_MAPPING = {
      'personalProfileUpdate': 'personalProfileUpdate',
      'EmployeeInfoProfileUpdate': 'EmployeeInfoProfileUpdate',
      'selfemploymentUpdate': 'updateborrowerEmploymentDetails'
    }
    if (STATIC_API_MAPPING[submitflow.submitflow]) {
      this.theme1ApiService[STATIC_API_MAPPING[submitflow.submitflow]](submitflow.mappedParameters).then((response: any) => {
        this.apiResponseDirectionFormSubmit({
          submitflow,
          res: response,
          currentIndex,
          totalLength,
          configList,
          pageconfig,
          pageCode,
          journey,
          extraCloudParams,
          journeyPage
        })
      }, (_err) => {
        this.apiErrorDirectionFormSubmit({
          submitflow,
          _res: res,
          currentIndex,
          totalLength,
          configList,
          pageconfig,
          pageCode,
          _journey: journey
        })
      })
    }

  }

  apiErrorDirectionFormSubmit({
    submitflow,
    _res,
    currentIndex,
    totalLength,
    configList,
    pageconfig,
    pageCode,
    _journey,
  }) {
    if (!submitflow.apiError) return;

    let result = this.applyJsonLogic(submitflow.apiError, submitflow.dataCloud);

    if (result?.includes("[JOURNEY_EVENT_CODE]")) {
      const [jeventcode, ...remainingJeventcodes] = result.split(
        "[JOURNEY_EVENT_CODE]"
      );
      result = jeventcode;

      remainingJeventcodes.forEach((j) => {
        this.journeyEventsService.journeyEventsExecutor(j);
      });
    }

    if (result?.includes("[NAVIGATE]")) {
      result = result.replace("[NAVIGATE]", "");
      const splited = result.split("[PARAMS]");
      this.formSubmitEventExecutor(submitflow);
      if (splited.length == 1) {
        this.navigateJourneyWithoutParams(splited[0], pageconfig, pageCode);
      } else {
        this.navigateJourneyWithParams(
          splited[0],
          splited[1],
          pageconfig,
          pageCode
        );
      }
      this.commonVariableService.globalLoaderState = false;
    } else {
      let errorMessages;
      if (result?.includes("[ERROR_MESSAGE]")) {
        const splited = result.split("[ERROR_MESSAGE]");

        if (splited.length > 1) {
          errorMessages = splited[1];
          result = splited[0];
        }
      }
      this.handleErrorMessage({
        result,
        submitflow,
        errorMessages,
        currentIndex,
        totalLength,
        pageCode,
        configList,
        pageconfig,
      });
    }
  }

  private navigateJourneyWithoutParams(destination, pageconfig, pageCode) {
    this.initializeJourneyService.navigateJourney(
      destination,
      undefined,
      pageconfig,
      undefined,
      pageCode
    );
    this.commonVariableService.globalLoaderState = false;
  }

  private navigateJourneyWithParams(destination, params, pageconfig, pageCode) {
    this.initializeJourneyService.navigateJourney(
      destination,
      undefined,
      pageconfig,
      params,
      pageCode
    );
    this.commonVariableService.globalLoaderState = false;
  }

  private handleErrorMessage({
    result,
    submitflow,
    errorMessages,
    currentIndex,
    totalLength,
    pageCode,
    configList,
    pageconfig,
  }: {
    result;
    submitflow;
    errorMessages;
    currentIndex;
    totalLength;
    pageCode;
    configList;
    pageconfig;
  }) {
    switch (result) {
      case "NEXT":
      case null:
        this.handleNextAction(submitflow, pageCode, pageconfig);
        break;
      case "PROCEED":
        this.handleProceedAction(
          submitflow,
          currentIndex,
          totalLength,
          pageCode,
          configList,
          pageconfig
        );
        break;
      case "ERROR":
        this.handleErrorAction(
          submitflow.validationErrorMessage,
          errorMessages
        );
        break;
      case "ERROR_AND_PROCEED":
        this.handleErrorAndProceedAction(
          submitflow,
          currentIndex,
          totalLength,
          pageCode,
          configList,
          pageconfig
        );
        break;
      default:
        this.handleDefaultAction(result, submitflow, pageconfig, pageCode);
        break;
    }
  }

  private handleNextAction(submitflow, pageCode, pageconfig) {
    this.formSubmitEventExecutor(submitflow);
    this.proceedJourney(pageCode, undefined, pageconfig);
    this.commonVariableService.globalLoaderState = false;
  }

  private handleProceedAction(
    submitflow,
    currentIndex,
    totalLength,
    pageCode,
    configList,
    pageconfig
  ) {
    this.formSubmitEventExecutor(submitflow);
    this.apiCall(
      configList.formSubmitFlow[currentIndex + 1],
      currentIndex + 1,
      totalLength,
      pageCode,
      configList,
      pageconfig
    );
  }

  private handleErrorAction(validationErrorMessage, errorMessages) {
    if (validationErrorMessage) {
      this.sharedService.openSnackBar(validationErrorMessage);
    }
    if (errorMessages) {
      this.sharedService.openSnackBar(errorMessages);
    }
    this.commonVariableService.globalLoaderState = false;
  }

  private handleErrorAndProceedAction(
    _submitflow,
    currentIndex,
    totalLength,
    pageCode,
    configList,
    pageconfig
  ) {
    this.sharedService.openSnackBar("something went Wrong!!!!!");
    this.apiCall(
      configList.formSubmitFlow[currentIndex + 1],
      currentIndex + 1,
      totalLength,
      pageCode,
      configList,
      pageconfig
    );
  }

  private handleDefaultAction(result, submitflow, pageconfig, pageCode) {
    this.formSubmitEventExecutor(submitflow);
    const splited = result.split("[PARAMS]");

    if (splited.length < 1) {
      this.navigateJourneyWithoutParams(result, pageconfig, pageCode);
    } else {
      this.navigateJourneyWithParams(
        splited[0],
        splited[1],
        pageconfig,
        pageCode
      );
    }

    this.commonVariableService.globalLoaderState = false;
  }
  formSubmitEventExecutor(formsubmit) {
    if (this.commonVariableService._formSubmitEvents.closed === false) {
      this.commonVariableService._formSubmitEvents.next(formsubmit)
    }
  }

  //this method is used to proceed and mark all the steps in a journey always move the journey from one page to another page using this
  // method only
  proceedJourney(pageCode?, skipped?, pageconfig?) {
    this.commonVariableService.globalLoaderState = true
    if (pageconfig) {
      this.initializeJourneyService.configSubmitFlowValidator(pageconfig)
    }
    let currentPage = pageCode
    let journey = this.getJourney()
    //fetch the redirect url
    //poc functionality
    let nextpageCode = this.initializeJourneyService.findNextpageCode(pageCode)
    this.initializeJourneyService.steppUpdaterforPageSequnece(nextpageCode, pageCode, journey, skipped, currentPage)

  }

  //silent Submit flow means no loaders
  apiCall(submitflow, currentIndex, totalLength, pageCode, configList, pageconfig?, extraCloudParams?) {
    let journey = this.getJourney()
    submitflow.dataCloud = this.fetchFlowApiService.fetchDataCloud(submitflow, pageconfig)
    if (extraCloudParams) {
      submitflow.dataCloud = { ...submitflow.dataCloud, ...extraCloudParams }
    }
    submitflow.mappedParameters = this.initializeJourneyService.mapDataFromCloudParameter(submitflow, submitflow.dataCloud)

    if (submitflow.validationJson) {
      let result = this.applyJsonLogic(submitflow.validationJson, submitflow.dataCloud)
      switch (result) {
        case 'EXECUTE':
          this.submitFlowApiCalls({
            submitflow,
            journey,
            _dataCloud: submitflow.dataCloud,
            currentIndex,
            totalLength,
            configList,
            pageconfig,
            pageCode,
            extraCloudParams,
          });
          break;
        case 'NEXT':
          //calling event completion trigger as this says that formsubmit is completed ideally
          this.formSubmitEventExecutor(submitflow)
          if (currentIndex != totalLength - 1) {
            this.apiCall(configList.formSubmitFlow[currentIndex + 1], currentIndex + 1, totalLength, pageCode, configList, pageconfig, extraCloudParams)
          } else {
            this.commonVariableService.globalLoaderState = true
            this.proceedJourney(pageCode, undefined, pageconfig)
          }
          break;
        default:
          this.submitFlowApiCalls({
            submitflow,
            journey,
            _dataCloud: submitflow.dataCloud,
            currentIndex,
            totalLength,
            configList,
            pageconfig,
            pageCode,
            extraCloudParams
          });
          break;
      }
    } else {
      this.submitFlowApiCalls({
        submitflow,
        journey,
        _dataCloud: submitflow.dataCloud,
        currentIndex,
        totalLength,
        configList,
        pageconfig,
        pageCode,
        extraCloudParams,
      });
    }

  }

  applyJsonLogic(validationJson, supplyData) {
    return this.JsonLogic.Jsonlogic.apply(validationJson, supplyData)
  }


  saveFormSubmitFlowToJourney(submitflow, response) {
    let journey = this.getJourney()
    if (submitflow.saveResponseToProduct) {
      journey.product = { ...journey.product, ...response }
    }
    if (submitflow.saveResponseToCapturedData) {
      switch (submitflow.submitflow) {
        case 'cbsDedupe':
          journey.metaData.capturedData = { ...journey.metaData.capturedData, cbsData: response }
          break;
        case 'nameMatch':
          journey.metaData.capturedData = { ...journey.metaData.capturedData, nameMatchData: response }
          break;
        case 'nameMatch_v2':
          journey.metaData.capturedData = { ...journey.metaData.capturedData, nameMatchData: response }
          break;
        case 'fetchGeneralAccountResponse':
          journey.metaData.capturedData = { ...journey.metaData.capturedData, fetchGeneralAccountResponse: response }
          break;
        case 'demographicDetailsFetch':
          journey.metaData.capturedData = { ...journey.metaData.capturedData, demographicDetails: response }
          break;
        case 'bureauCall':
          journey.metaData.capturedData = { ...journey.metaData.capturedData, bureauData: response }
          break;
        case 'BRECall':
          journey.metaData.capturedData = { ...journey.metaData.capturedData, BREData: response }
          break;
        case 'fetchEligibiltyDetails':
          journey.metaData.capturedData = { ...journey.metaData.capturedData, BREData: response }
          break;
        case 'rating_score_personal_loan':
          journey.metaData.capturedData = { ...journey.metaData.capturedData, RatingScoreCardData: response }
          break;
        case 'fetchRatingScore':
          journey.metaData.capturedData = { ...journey.metaData.capturedData, RatingScoreCardData: response }
          break;
        case 'esignStatus':
          journey.metaData.capturedData = { ...journey.metaData.capturedData, esignStatus: response }
          break;
          case 'fetchKccAssesment':
            journey.metaData.capturedData = { ...journey.metaData.capturedData, fetchKccAssesment: response }
            break;
            case 'fetchEligibilityDtls':
              journey.metaData.capturedData = { ...journey.metaData.capturedData, fetchEligibilityDtls: response }
              break;
        /*  case 'npaCheck':
           journey.metaData.capturedData = {...journey.metaData.capturedData,npaCheck:response}
         break; */
        default:
          journey.metaData.capturedData = { ...journey.metaData.capturedData, ...response }
          break;
      }
    }
    this.setJourney(journey)
  }


  setJourney(journey) {
    this.localStorage.SessionSetItem('CURRENT_JOURNEY', journey)

  }
  getJourney() {
    return this.localStorage.SessionGetItem('CURRENT_JOURNEY');
  }
}
