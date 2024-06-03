import { Injectable, Injector } from '@angular/core';
import { FetchFlowApiService } from './fetch-flow-api.service';
import { InitializeJourneyService } from './initialize-journey.service';
import { LogicFunctions } from '../shared/helpers/JsonLogic';
import { ApiService } from './api.service';
import { JourneyEventsService } from './journey-events.service';
import { CommonVariableService } from './common-variable-service';
import { SharedService } from '../shared/services/utils/shared.service';
import { LocalStorage } from "@kcc-renewal-app/shared/helpers/localStorage";

@Injectable({
  providedIn: 'root'
})
export class SubmitFlowApiService {

  localStorage: LocalStorage;
  sharedService: SharedService
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

  handleErrorSubmitflow(submitflow, currentIndex, totalLength, configList, pageconfig, pageCode, journey) {
    return (err) => {
      this.apiErrorDirectionFormSubmit({
        submitflow,
        _res: err,
        currentIndex,
        totalLength,
        configList,
        pageconfig,
        pageCode,
        _journey: journey
      });
    }
  }

  submitFlowApiCalls({
    submitflow,
    journey,
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

    if (submitflow.journeyEventCodeBeforeResponse) {
      if (Array.isArray(submitflow.journeyEventCodeBeforeResponse)) {
        submitflow.journeyEventCodeBeforeResponse.map(journeyEventCode => {
          this.journeyEventsService.journeyEventsExecutor(journeyEventCode)
        })
      } else {
        this.journeyEventsService.journeyEventsExecutor(submitflow.journeyEventCodeBeforeResponse)
      }
    }
    const API_NAME_MAPPING = this.commonVariableService.SUBMIT_FLOW_METHOD_MAPPER
    if (API_NAME_MAPPING[submitflow.submitflow]) {
      const apiMethod = API_NAME_MAPPING[submitflow.submitflow];
      this.theme1ApiService[apiMethod](submitflow.mappedParameters)
        .then(
          (res) => {
            this.apiResponseDirectionFormSubmit({
              submitflow,
              res,
              currentIndex,
              totalLength,
              configList,
              pageconfig,
              pageCode,
              journey,
              extraCloudParams
            });
          },
          this.handleErrorSubmitflow(submitflow, currentIndex, totalLength, configList, pageconfig, pageCode, journey)
        );
    } else {
      let res
      switch (submitflow.submitflow) {
        case 'checkKeyfactStatus':
          res = {}
          this.apiResponseDirectionFormSubmit({
            submitflow,
            res,
            currentIndex,
            totalLength,
            configList,
            pageconfig,
            pageCode,
            journey,
            extraCloudParams
          })
          break;
        case 'bureauCall':
          setTimeout(() => {
            this.theme1ApiService.cibilCheck(submitflow.mappedParameters).then((response) => {
              this.apiResponseDirectionFormSubmit({
                submitflow,
                res: response,
                currentIndex,
                totalLength,
                configList,
                pageconfig,
                pageCode,
                journey,
                extraCloudParams
              });
            },
              this.handleErrorSubmitflow(submitflow, currentIndex, totalLength, configList, pageconfig, pageCode, journey)
            );
          }, 10000)
          break;
        default:
          console.error(`Your API [ ${submitflow.submitflow} ]  is not in the API_NAME_MAPPING list, please add`)
          break;
      }
    }
  }

  executeResponseJourneyEventCode(result, data_cloud) {
    if (result?.includes('[JOURNEY_EVENT_CODE]')) {
      let jeventcode = result.split('[JOURNEY_EVENT_CODE]')
      result = jeventcode[0]
      jeventcode.forEach((j, i) => {
        if (i != 0) {
          this.journeyEventsService.journeyEventsExecutor(j, data_cloud)
        }
      })
    }
    return result
  }

  executeNavigateSequence(result, _data_cloud, submitflow, pageconfig, pageCode) {
    result = result.replace('[NAVIGATE]', '')
    let splited = result.split('[PARAMS]')
    this.formSubmitEventExecutor(submitflow)
    if (splited.length == 1) {
      this.initializeJourneyService.navigateJourney(splited[0], undefined, pageconfig, undefined, pageCode)
      this.commonVariableService.globalLoaderState = false
    } else {
      this.initializeJourneyService.navigateJourney(splited[0], undefined, pageconfig, splited[1], pageCode)
      this.commonVariableService.globalLoaderState = false
    }
    return result
  }

  mapFormSubmitErrorMessages(result, errorMessages) {
    if (result?.includes('[ERROR_MESSAGE]')) {
      let splited = result.split('[ERROR_MESSAGE]')
      if (splited.length > 1) {
        errorMessages = splited[1]
        result = splited[0]
      }
    }
    return [result, errorMessages]
  }

  executeFormsubmitErrorMessage(submitflow, errorMessages) {
    if (submitflow.validationErrorMessage) {
      this.sharedService.openSnackBar(submitflow.validationErrorMessage)
    }
    if (errorMessages) {
      this.sharedService.openSnackBar(errorMessages)
    }
    this.commonVariableService.globalLoaderState = false
  }

  executeNormalPageFormSubmit(submitflow, pageCode, pageconfig, result) {
    this.formSubmitEventExecutor(submitflow)
    let splited = result.split('[PARAMS]')
    if (splited.length < 1) {
      this.initializeJourneyService.navigateJourney(result, undefined, pageconfig, undefined, pageCode)
    } else {
      this.initializeJourneyService.navigateJourney(splited[0], undefined, pageconfig, splited[1], pageCode)
    }
    this.commonVariableService.globalLoaderState = false
  }

  mapExtraCloudParams(extraCloudParams, submitflow, res) {
    if (extraCloudParams?.['currentFormSubmitResponses']) {
      extraCloudParams['currentFormSubmitResponses'][submitflow.submitflow] = res
    } else {
      extraCloudParams['currentFormSubmitResponses'] = {}
      extraCloudParams['currentFormSubmitResponses'][submitflow.submitflow] = res
    }
    return extraCloudParams
  }

  formSubmitValidateResponseValidatorParser({
    res,
    submitflow,
    extraCloudParams,
    pageconfig,
    pageCode,
    currentIndex,
    totalLength,
    configList,
    lastIndex
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
    let data_cloud = { ...res, ...submitflow.dataCloud, formSubmitResponse: res, ...extraCloudParams }
    extraCloudParams = this.mapExtraCloudParams(extraCloudParams, submitflow, res)
    let result = this.applyJsonLogic(submitflow.validateResponse, data_cloud)
    result = this.executeResponseJourneyEventCode(result, data_cloud)
    if (result?.includes('[NAVIGATE]')) {
      this.executeNavigateSequence(result, data_cloud, submitflow, pageconfig, pageCode)
    } else {
      let errorMessages
      [result, errorMessages] = this.mapFormSubmitErrorMessages(result, errorMessages)
      switch (result) {
        case 'NEXT':
        case null:
          this.formSubmitEventExecutor(submitflow)
          this.proceedJourney(pageCode, undefined, pageconfig)
          this.commonVariableService.globalLoaderState = false
          break;
        case 'PROCEED':
          if (lastIndex) {
            this.formSubmitEventExecutor(submitflow)
            this.proceedJourney(pageCode, undefined, pageconfig)
            this.commonVariableService.globalLoaderState = false
          } else {
            this.formSubmitEventExecutor(submitflow)
            this.apiCall(configList.formSubmitFlow[currentIndex + 1], currentIndex + 1, totalLength, pageCode, configList, pageconfig, extraCloudParams)
          }
          break;
        case 'ERROR':
          this.executeFormsubmitErrorMessage(submitflow, errorMessages)
          break;
        default:
          this.executeNormalPageFormSubmit(submitflow, pageCode, pageconfig, result)
          break;
      }
    }

  }

  apiresponseValidator({
    submitflow,
    res,
    currentIndex,
    totalLength,
    configList,
    pageconfig,
    pageCode,
    extraCloudParams,
    journeyPage
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
          lastIndex: false
        })
      } else {
        this.formSubmitEventExecutor(submitflow)
        if (journeyPage) {
          this.apiCallJourneyPage(configList.formSubmitFlow[currentIndex + 1], currentIndex + 1, totalLength, pageCode, configList, pageconfig, extraCloudParams)
        } else {
          this.apiCall(configList.formSubmitFlow[currentIndex + 1], currentIndex + 1, totalLength, pageCode, configList, pageconfig, extraCloudParams)
        }
      }
    } else {
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
          lastIndex: true
        })
      } else {
        this.formSubmitEventExecutor(submitflow)
        if (!journeyPage) {
          this.proceedJourney(pageCode, undefined, pageconfig)
        }
        this.commonVariableService.globalLoaderState = false
      }
    }
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
      extraCloudParams
    })
  }

  apiErrorDirectionFormSubmit({
    submitflow,
    _res,
    currentIndex,
    totalLength,
    configList,
    pageconfig,
    pageCode,
    _journey
  }) {
    if (!submitflow.apiError) return;

    let result = this.applyJsonLogic(submitflow.apiError, submitflow.dataCloud);

    if (result?.includes('[JOURNEY_EVENT_CODE]')) {
      const [jeventcode, ...remainingJeventcodes] = result.split('[JOURNEY_EVENT_CODE]');
      result = jeventcode;

      remainingJeventcodes.forEach(j => {
        this.journeyEventsService.journeyEventsExecutor(j);
      });
    }

    if (result?.includes('[NAVIGATE]')) {
      result = result.replace('[NAVIGATE]', '');
      const splited = result.split('[PARAMS]');
      this.formSubmitEventExecutor(submitflow);
      if (splited.length == 1) {
        this.navigateJourneyWithoutParams(splited[0], pageconfig, pageCode);
      } else {
        this.navigateJourneyWithParams(splited[0], splited[1], pageconfig, pageCode);
      }
      this.commonVariableService.globalLoaderState = false;
    } else {
      let errorMessages;
      if (result?.includes('[ERROR_MESSAGE]')) {
        const splited = result.split('[ERROR_MESSAGE]');

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
        pageconfig
      });
    }
  }

  navigateJourneyWithoutParams(destination, pageconfig, pageCode) {
    this.initializeJourneyService.navigateJourney(destination, undefined, pageconfig, undefined, pageCode);
    this.commonVariableService.globalLoaderState = false;
  }

  navigateJourneyWithParams(destination, params, pageconfig, pageCode) {
    this.initializeJourneyService.navigateJourney(destination, undefined, pageconfig, params, pageCode);
    this.commonVariableService.globalLoaderState = false;
  }

  handleErrorMessage({
    result,
    submitflow,
    errorMessages,
    currentIndex,
    totalLength,
    pageCode,
    configList,
    pageconfig
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
      case 'NEXT':
      case null:
        this.handleNextAction(submitflow, pageCode, pageconfig);
        break;
      case 'PROCEED':
        this.handleProceedAction(submitflow, currentIndex, totalLength, pageCode, configList, pageconfig);
        break;
      case 'ERROR':
        this.handleErrorAction(submitflow.validationErrorMessage, errorMessages);
        break;
      case 'ERROR_AND_PROCEED':
        this.handleErrorAndProceedAction(submitflow, currentIndex, totalLength, pageCode, configList, pageconfig);
        break;
      default:
        this.handleDefaultAction(result, submitflow, pageconfig, pageCode);
        break;
    }
  }

  handleNextAction(submitflow, pageCode, pageconfig) {
    this.formSubmitEventExecutor(submitflow);
    this.proceedJourney(pageCode, undefined, pageconfig);
    this.commonVariableService.globalLoaderState = false;
  }

  handleProceedAction(submitflow, currentIndex, totalLength, pageCode, configList, pageconfig) {
    this.formSubmitEventExecutor(submitflow);
    this.apiCall(configList.formSubmitFlow[currentIndex + 1], currentIndex + 1, totalLength, pageCode, configList, pageconfig);
  }

  handleErrorAction(validationErrorMessage, errorMessages) {
    if (validationErrorMessage) {
      this.sharedService.openSnackBar(validationErrorMessage);
    }
    if (errorMessages) {
      this.sharedService.openSnackBar(errorMessages);
    }
    this.commonVariableService.globalLoaderState = false;
  }

  handleErrorAndProceedAction(_submitflow, currentIndex, totalLength, pageCode, configList, pageconfig) {
    this.sharedService.openSnackBar('something went Wrong!!!!!');
    this.apiCall(configList.formSubmitFlow[currentIndex + 1], currentIndex + 1, totalLength, pageCode, configList, pageconfig);
  }

  handleDefaultAction(result, submitflow, pageconfig, pageCode) {
    this.formSubmitEventExecutor(submitflow);
    const splited = result.split('[PARAMS]');

    if (splited.length < 1) {
      this.navigateJourneyWithoutParams(result, pageconfig, pageCode);
    } else {
      this.navigateJourneyWithParams(splited[0], splited[1], pageconfig, pageCode);
    }

    this.commonVariableService.globalLoaderState = false;
  }

  formSubmitEventExecutor(formsubmit) {
    if (this.commonVariableService._formSubmitEvents.closed === false) {
      this.commonVariableService._formSubmitEvents.next(formsubmit)
    }
  }

  proceedJourney(pageCode?, skipped?, pageconfig?) {
    if (pageconfig) {
      this.initializeJourneyService.configSubmitFlowValidator(pageconfig)
    }
    let currentPage = pageCode
    let journey = this.getJourney()
    let nextpageCode = this.initializeJourneyService.findNextpageCode(pageCode)
    this.initializeJourneyService.steppUpdaterforPageSequnece(nextpageCode, pageCode, journey, skipped, currentPage)
  }

  apiCall(submitflow, currentIndex, totalLength, pageCode, configList, pageconfig?, extraCloudParams?) {
    let journey = this.getJourney()
    submitflow.dataCloud = this.fetchFlowApiService.fetchDataCloud(submitflow, pageconfig)
    if (extraCloudParams) {
      submitflow.dataCloud = { ...submitflow.dataCloud, ...extraCloudParams }
    }
    submitflow.mappedParameters = this.initializeJourneyService.mapDataFromCloudParameter(submitflow, submitflow.dataCloud)
    if (submitflow.validationJson) {
      let result = this.applyJsonLogic(submitflow.validationJson, submitflow.dataCloud)
      if (result == 'NEXT') {

        this.formSubmitEventExecutor(submitflow)
        if (currentIndex != totalLength - 1) {
          this.apiCall(configList.formSubmitFlow[currentIndex + 1], currentIndex + 1, totalLength, pageCode, configList, pageconfig, extraCloudParams)
        } else {
          this.proceedJourney(pageCode, undefined, pageconfig)
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
          extraCloudParams
        })

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
        extraCloudParams
      })
    }
  }

  applyJsonLogic(validationJson, supplyData) {
    return this.JsonLogic.Jsonlogic.apply(validationJson, supplyData)
  }

  saveFormSubmitFlowToJourney(submitflow, _journeyref, response) {
    let _journey = this.getJourney()
    // journey = j
    if (submitflow.saveResponseToProduct) {
      _journey.product = { ..._journey.product, ...response }
    }
    if (submitflow.saveResponseToCapturedData) {
      switch (submitflow.submitflow) {
        case 'cbsDedupe':
          _journey.metaData.capturedData = { ..._journey.metaData.capturedData, cbsData: response }
          break;
        case 'nameMatch':
          _journey.metaData.capturedData = { ..._journey.metaData.capturedData, nameMatchData: response }
          break;
        case 'nameMatch_v2':
          _journey.metaData.capturedData = { ..._journey.metaData.capturedData, nameMatchData: response }
          break;
        case 'fetchGeneralAccountResponse':
          _journey.metaData.capturedData = {
            ..._journey.metaData.capturedData,
            fetchGeneralAccountResponse: response
          }
          break;
        case 'fetchAccountData':
          _journey.metaData.capturedData = { ..._journey.metaData.capturedData, AccountData: response.object }
          break;
        case 'demographicDetailsFetch':
          _journey.metaData.capturedData = { ..._journey.metaData.capturedData, demographicDetails: response }
          break;
        case 'bureauCall':
          _journey.metaData.capturedData = { ..._journey.metaData.capturedData, bureauData: response }
          break;
        case 'BRECall':
          _journey.metaData.capturedData = { ..._journey.metaData.capturedData, BREData: response }
          break;
        case 'fetchEligibiltyDetails':
          _journey.metaData.capturedData = { ..._journey.metaData.capturedData, BREData: response }
          break;
        case 'rating_score_personal_loan':
          _journey.metaData.capturedData = { ..._journey.metaData.capturedData, RatingScoreCardData: response }
          break;
        case 'fetchRatingScore':
          _journey.metaData.capturedData = { ..._journey.metaData.capturedData, RatingScoreCardData: response }
          break;
        case 'esignStatus':
          _journey.metaData.capturedData = { ..._journey.metaData.capturedData, esignStatus: response }
          break;
        case 'npaCheck':
          _journey.metaData.capturedData = { ..._journey.metaData.capturedData, npaCheck: response }
          break;
        default:
          _journey.metaData.capturedData = { ..._journey.metaData.capturedData, ...response }
          break;
      }
    }
    this.setJourney(_journey)
  }

  setJourney(journey) {
    this.localStorage.SessionSetItem('CURRENT_JOURNEY', journey)
  }

  getJourney() {
    return this.localStorage.SessionGetItem("CURRENT_JOURNEY")
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
    journeyPage
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
    submitflow.submitflowResponse = res
    let _journey = this.getJourney()
    if (res?.code == '200') {
      this.saveFormSubmitFlowToJourney(submitflow, _journey, res)
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
        journeyPage
      })

      if (submitflow.journeyEventCodeAfterResponseSucess) {
        if (Array.isArray(submitflow.journeyEventCodeAfterResponseSucess)) {
          submitflow.journeyEventCodeAfterResponseSucess.forEach(journeyEventCode => {
            this.journeyEventsService.journeyEventsExecutor(this.applyJsonLogic(journeyEventCode, submitflow.dataCloud), submitflow.dataCloud)
          })
        } else {
          this.journeyEventsService.journeyEventsExecutor(this.applyJsonLogic(submitflow.journeyEventCodeAfterResponseSucess, submitflow.dataCloud), submitflow.dataCloud)
        }
      }
    } else {
      this.saveFormSubmitFlowToJourney(submitflow, journey, res)
      if (submitflow.journeyEventCodeAfterResponseFailure) {
        if (Array.isArray(submitflow.journeyEventCodeAfterResponseFailure)) {
          submitflow.journeyEventCodeAfterResponseFailure.forEach(journeyEventCode => {
            this.journeyEventsService.journeyEventsExecutor(this.applyJsonLogic(journeyEventCode, submitflow.dataCloud))
          })
        } else {
          this.journeyEventsService.journeyEventsExecutor(this.applyJsonLogic(submitflow.journeyEventCodeAfterResponseFailure, submitflow.dataCloud))
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
        journeyPage
      })
    }
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
}
