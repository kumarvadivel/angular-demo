import {Injectable, Injector} from "@angular/core";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {CommonVariableService} from "@home-app/services/common-variable.service";
import { LogicFunctions } from "@home-app/shared/helpers/JsonLogic";
import { LocalStorage } from "@home-app/shared/helpers/localStorage";
import { ApiService } from "./api.service";
import { ArrayMethod } from "@home-app/shared/helpers/ArrayMethods";
import { SnackBarService } from "./snackbar.service";
import { findLastIndex, uniqBy } from "@home-app/shared/utils/utils";

declare let Appice: any;

@Injectable({
    providedIn: "root",
})
export class CommonCommonService {
    mySub = new Subject();
    journey: any;
    

    constructor(
        public commonVariableService: CommonVariableService,
        public router: Router,
        private theme1ApiService:ApiService,
        private localStorage:LocalStorage,
        public JsonLogic: LogicFunctions,
        private injector: Injector,
        private ArrayMethods:ArrayMethod,
        private apiService:ApiService
    ) {
     
    }

    ParseConfig(config) {
        this.commonVariableService.globalLoaderState = true
        let lastConsentSectionIndex = findLastIndex(config, n => n.componentType == 'CONSENT');
        if (lastConsentSectionIndex == -1) {
            this.commonVariableService.globalLoaderState = false
        }
        config.forEach((conf, indx) => {
            if (conf.componentType == 'CONSENT') {
                this.parseConsentConfig(conf, indx, lastConsentSectionIndex)
            }
            if (conf.componentType == 'FORM') {
                conf.sectionContent = {
                    ...conf.sectionContent,
                    validityEmitter: new Subject<void>(),
                    formValueEmitter: new Subject<void>(),
                    verificationExternalTrigger: new Subject<void>()
                }
            }
            if (conf.componentType == 'CAPCHA') {
                conf.sectionContent = {...conf.sectionContent, validityEmitter: new Subject<void>()}
            }
        })
        return config
    }

    fetchSubmitConsentCodesData(consent) {
      let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
      let submitConsentData = []
      if (consent.submitConsentCodes) {
          consent.submitConsentCodes.forEach((code, i) => {
              let params = {
                  consentCode: code,
                  loanPurposeUuid:journey.product.loanPurposeUuid
              }
              this.theme1ApiService.fetchConsentList(params).then((res: any) => {
                  if (res.code == '200') {
                      let obj = res.loanPurposeTemplateList[0]
                      submitConsentData.push(obj)
                      if (i == consent.submitConsentCodes.length - 1) {
                          consent['submitConsentData'] = submitConsentData
                      }
                  }
              })
          })
      }
  }

    parseConsentConfig(conf, indx, lastConsentSectionIndex) {
      let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
        conf.sectionContent = {...conf.sectionContent, validityEmitter: new Subject<void>()}
        let lastIndex = findLastIndex(conf.sectionContent.config.options, n => n.consentType == 'APIFETCH')
        if (lastConsentSectionIndex == indx && lastIndex == -1) {
            this.commonVariableService.globalLoaderState = false
        }
        conf.sectionContent.config.options.forEach((consent, i) => {
            if (consent.consentType == 'APIFETCH') {
                let params = {
                    consentCode: consent.consentCode,
                    loanPurposeUuid:journey.product.loanPurposeUuid
                }
                this.theme1ApiService.fetchConsentList(params).then((res: any) => {
                    if (res.code == '200') {
                        let cons = res.loanPurposeTemplateList[0]
                        consent.label = cons.description
                    }
                    if (indx == lastConsentSectionIndex && lastIndex == i) {
                        this.commonVariableService.globalLoaderState = false
                    }
                })
            }
            this.fetchSubmitConsentCodesData(consent)
        })
    }
    sectionMandatoryValidationSystem(config) {
        return !config.every((section) => {
            if (section.sectionContent.isShow && section.mandatory) {
                switch (section.componentType) {
                    case "FORM":
                        section.sectionContent.validityEmitter.next("PINGED");
                        return section.sectionContent.formValidity?.ok;
                    case "CONSENT":
                        return section.sectionContent?.isValid;
                    case "CAPCHA":
                        section.sectionContent.validityEmitter.next();
                        return section.sectionContent?.isValid;
                    default:
                        return false;
                }
            }
            return true;
        });
    }

    SectionMandatoryValidationSystem(config) {
        return this.sectionMandatoryValidationSystem(config);
    }

    applyJsonLogic(validationJson, supplyData) {
        return this.JsonLogic.Jsonlogic.apply(validationJson, supplyData);
    }
    journeyEventsExecutor(data?, params?) {
        let journey = this.getJourney();
        let eventsObj;
        if (
          this.commonVariableService.tenentConfiguration
            .FETCH_PRODUCT_CONFIG_FROM_JSON_FILE
        ) {
          let productConfig =this.
            localStorage.SessionGetItem("PRODUCT_CONFIGURATION")
          
          if (productConfig.journeyEventCodes) {
            eventsObj = productConfig.journeyEventCodes[data];
          } else {
            eventsObj = {};
          }
        } else {
          eventsObj =
            this.commonVariableService.journeyEventCodes[
              journey.product.productCode
            ][data];
        }
        if (eventsObj) {
          this.executeJourneyEvents(
            eventsObj,
            journey,
            0,
            Object.keys(eventsObj).length,
            params
          );
        }
      }

      executeJourneyEvents(
        eventsObj,
        journey,
        currentIndex,
        totalLength,
        externalData?
      ) {
        let params;
        let prop = Object.keys(eventsObj)[currentIndex];
        if (currentIndex != totalLength - 1) {
            this.executeJourneyEvents_subMethod1(eventsObj,prop,params,journey,currentIndex,totalLength,externalData)
          
        } else {
          this.executeJourneyEvents_subMethod2(eventsObj,prop,params,journey,externalData)
        }
      }


      triggerSetUser(journey,userObj){
        let data =
            journey.productUserType == "individual"
              ? journey?.metaData?.capturedData?.aadharData
              : journey?.metaData?.capturedData?.udyamData;
          if (journey.productUserType == "individual") {
            userObj["name"] = data?.firstName
              ? data?.firstName + " " + data?.lastName
              : undefined;
          } else {
            userObj["name"] = data?.companyName ? data?.companyName : undefined;
          }
          userObj["gender"] = data?.gender ? data.gender : undefined;
          userObj["dob"] = data?.dateOfBirth ? data.dateOfBirth : undefined;
          userObj["phone"] = journey?.metaData?.capturedData?.mobileNumber
            ? journey?.metaData?.capturedData?.mobileNumber
            : undefined;
          userObj["email"] = data?.alternativeUsername
            ? data?.alternativeUsername
            : undefined;
          userObj["language"] = journey?.metaData?.capturedData
            ?.borrowerDetailTextVariable44
            ? journey?.metaData?.capturedData?.borrowerDetailTextVariable44
            : undefined;
            try{
              Appice.setCustomVariables(userObj);
              Appice.setUser(userObj);
            }catch(e){
                
            }
      }
      triggerAppiceEvent(eventName?, params?) {
        let journey = this.getJourney();
        let userObj = {};
        if (eventName == "setUser") {
            this.triggerSetUser(journey,userObj)
          
        } else {
          let obj = { key: eventName, properties: params };
          try{
            Appice.recordEvent({ key: obj.key, segment: obj.properties });
          }catch(e){
              
          }
        }
      }
      executeJourneyEvents_subMethod3(eventsObj,prop,journey,currentIndex,totalLength){
        eventsObj[prop].map((d) => {
           let params = {
              access_token: journey.product.access_token,
              loanUuid: journey.product.loanUuid,
              ...d,
            };
            this.apiService
              .updateLoanApplicationStatus(params)
              
          });
          this.executeJourneyEvents(
            eventsObj,
            journey,
            currentIndex + 1,
            totalLength
          );
      }
      executeJourneyEvents_subMethod4(eventsObj,prop,journey,currentIndex,totalLength){
        eventsObj[prop].map((d) => {
            let params = {
              access_token: journey.product.access_token,
              loanUuid: journey.product.loanUuid,
              applicationSource: "WEB_JOURNEY",
              ...d,
            };
            this.apiService
              .updateMainLoanApplicationStatus(params)
              
          });
          this.executeJourneyEvents(
            eventsObj,
            journey,
            currentIndex + 1,
            totalLength
          );
      }
      executeJourneyEvents_subMethod5(eventsObj,prop,externalData,journey,totalLength,currentIndex){
        this.executeJourneyEvents_subMethod12(eventsObj,prop,externalData)
          this.executeJourneyEvents(
            eventsObj,
            journey,
            currentIndex + 1,
            totalLength,
            externalData
          );
      }
      executeJourneyEvents_subMethod6(eventsObj,prop,externalData,journey,currentIndex,totalLength){
          this.executeJourneyEvents_subMethod13(eventsObj,prop,externalData)
          this.executeJourneyEvents(
            eventsObj,
            journey,
            currentIndex + 1,
            totalLength,
            externalData
          );
      }
      executeJourneyEvents_subMethod7(eventsObj,prop,externalData,journey,currentIndex,totalLength){
          this.executeJourneyEvents_subMethod14(eventsObj,prop,externalData)
          this.executeJourneyEvents(
            eventsObj,
            journey,
            currentIndex + 1,
            totalLength,
            externalData
          );
      }
      executeJourneyEvents_subMethod8(eventsObj,prop,externalData,journey,currentIndex,totalLength){
        eventsObj[prop].map((d) => {
            let user = {};
            if (externalData) {
              for (const k in d["properties"]) {
                let t = {};
                if (Array.isArray(d["properties"][k])) {
                  t[k] = this.ArrayMethods.getPathVal(
                    externalData,
                    this.applyJsonLogic(d["properties"][k][0], externalData)
                  );
                  try{
                    Appice.setCustomVariables(t);
                  }catch(e){
                      
                  }
                } else {
                  try{
                    Appice.setCustomVariables(t);
                  }catch(e){
                      
                  }
                  t[k] = d["properties"][k];
                }
              }
            } else {
              for (const k in d["properties"]) {
                let t = {};
                if (Array.isArray(d["properties"][k])) {
                  t[k] = this.ArrayMethods.getPathVal(
                    externalData,
                    this.applyJsonLogic(d["properties"][k][0], externalData)
                  );
                  try{
                    Appice.setCustomVariables(t);
                  }catch(e){
                      
                  }
                } else {
                  t[k] = d["properties"][k];
                  try{
                    Appice.setCustomVariables(t);
                  }catch(e){
                      
                  }
                }
              }
            }
          });
          this.executeJourneyEvents(
            eventsObj,
            journey,
            currentIndex + 1,
            totalLength,
            externalData
          );
      }
      executeJourneyEvents_subMethod9(eventsObj,externalData,prop,journey,currentIndex,totalLength){
        let mappingparams = {};
                if (externalData) {
                  for (const k in eventsObj[prop]["properties"]) {
                    if (Array.isArray(eventsObj[prop]["properties"][k])) {
                      mappingparams[k] = this.ArrayMethods.getPathVal(
                        externalData,
                        this.applyJsonLogic(
                          eventsObj[prop]["properties"][k][0],
                          externalData
                        )
                      );
                    } else {
                      mappingparams[k] = eventsObj[prop]["properties"][k];
                    }
                  }
                  try{
                    Appice.recordEvent({
                      key: eventsObj[prop].key,
                      segment: mappingparams,
                    });
                  }catch(e){
                      
                  }
                } else {
                  try{
                    Appice.recordEvent({
                      key: eventsObj[prop].key,
                      segment: { ...eventsObj[prop]["properties"] },
                    });
                  }catch(e){
                      
                  }
                }
                this.executeJourneyEvents(
                  eventsObj,
                  journey,
                  currentIndex + 1,
                  totalLength,
                  externalData
                );
      }
      executeJourneyEvents_subMethod10(eventsObj,prop,externalData,journey,currentIndex,totalLength){
        let userid;
                if (externalData) {
                  for (const k in eventsObj[prop]["properties"]) {
                    if (Array.isArray(eventsObj[prop]["properties"][k])) {
                      userid = this.ArrayMethods.getPathVal(
                        externalData,
                        this.applyJsonLogic(
                          eventsObj[prop]["properties"][k][0],
                          externalData
                        )
                      );
                    } else {
                      userid = eventsObj[prop]["properties"][k];
                    }
                  }
                  try{
                    Appice.setUserId(userid);
                  }catch(e){
                      
                  }
                } else {
                  try{
                    Appice.setUserId(eventsObj[prop]["properties"]["userId"]);
                  }catch(e){
                      
                  }
                }
                this.executeJourneyEvents(
                  eventsObj,
                  journey,
                  currentIndex + 1,
                  totalLength,
                  externalData
                );
      }
      executeJourneyEvents_subMethod11(eventsObj,prop,externalData,journey,currentIndex,totalLength){
        let user = {};
                if (externalData) {
                  for (const k in eventsObj[prop]["properties"]) {
                    if (Array.isArray(eventsObj[prop]["properties"][k])) {
                      user[k] = this.ArrayMethods.getPathVal(
                        externalData,
                        this.applyJsonLogic(
                          eventsObj[prop]["properties"][k][0],
                          externalData
                        )
                      );
                    } else {
                      user[k] = eventsObj[prop]["properties"][k];
                    }
                  }
                  try{
                    Appice.setUser(user);
                  }catch(e){
                      
                  }
                } else {
                  try{
                    Appice.setUser(eventsObj[prop]["properties"]);
                  }catch(e){
                      
                  }
                }
                this.executeJourneyEvents(
                  eventsObj,
                  journey,
                  currentIndex + 1,
                  totalLength,
                  externalData
                );
      }
      executeJourneyEvents_subMethod19(eventsObj,journey,currentIndex,totalLength,externalData){
        return (_res) => {
            this.executeJourneyEvents(
              eventsObj,
              journey,
              currentIndex + 1,
              totalLength,
              externalData
            );
          }
      }
      executeJourneyEvents_subMethod1(eventsObj,prop,params,journey,currentIndex,totalLength,externalData){
        if (Array.isArray(eventsObj[prop])) {
            switch (prop) {
              case "subStatus":
                this.executeJourneyEvents_subMethod3(eventsObj,prop,journey,currentIndex,totalLength)
                
                break;
              case "status":
                this.executeJourneyEvents_subMethod4(eventsObj,prop,journey,currentIndex,totalLength)
              break;
              case "APPICE_EVENT":
                this.executeJourneyEvents_subMethod5(eventsObj,prop,externalData,journey,totalLength,currentIndex)
                
                break;
              case "APPICE_SETUSERID":
               
                this.executeJourneyEvents_subMethod6(eventsObj,prop,externalData,journey,currentIndex,totalLength)
                break;
              case "APPICE_SETUSER":
                this.executeJourneyEvents_subMethod7(eventsObj,prop,externalData,journey,currentIndex,totalLength)
                
                break;
              case "APPICE_SET_CUSTOMVARIABLE":
                this.executeJourneyEvents_subMethod8(eventsObj,prop,externalData,journey,currentIndex,totalLength)
               
                break;
            }
          } else {
            let user;
            switch (prop) {
              case "subStatus":
                params = {
                  access_token: journey.product.access_token,
                  loanUuid: journey.product.loanUuid,
                  ...eventsObj[prop],
                };
                this.apiService.updateLoanApplicationStatus(params).then(this.executeJourneyEvents_subMethod19(eventsObj,journey,currentIndex,totalLength,externalData));
                break;
              case "status":
                params = {
                  access_token: journey.product.access_token,
                  loanUuid: journey.product.loanUuid,
                  applicationSource: "WEB_JOURNEY",
                  ...eventsObj[prop],
                };
                this.apiService
                  .updateMainLoanApplicationStatus(params)
                  .then(this.executeJourneyEvents_subMethod19(eventsObj,journey,currentIndex,totalLength,externalData));
                break;
              case "APPICE_EVENT":
                this.executeJourneyEvents_subMethod9(eventsObj,externalData,prop,journey,currentIndex,totalLength)
                
              break;
              case "APPICE_SETUSERID":
                this.executeJourneyEvents_subMethod10(eventsObj,prop,externalData,journey,currentIndex,totalLength)
                
                break;
              case "APPICE_SETUSER":
                this.executeJourneyEvents_subMethod11(eventsObj,prop,externalData,journey,currentIndex,totalLength)
                
                break;
              case "APPICE_SET_CUSTOMVARIABLE":
                let custom = {};
                for (const k in eventsObj[prop]["properties"]) {
                  let t = {};
                  if (Array.isArray(eventsObj[prop]["properties"][k])) {
                    t[k] = this.ArrayMethods.getPathVal(
                      externalData,
                      this.applyJsonLogic(
                        eventsObj[prop]["properties"][k][0],
                        externalData
                      )
                    );
                    try{
                      Appice.setCustomVariables(t);
                    }catch(e){
                        
                    }
                  } else {
                    t[k] = eventsObj[prop]["properties"][k];
                    try{
                      Appice.setCustomVariables(t);
                    }catch(e){
                        
                    }
                  }
                }
                
                this.executeJourneyEvents(
                  eventsObj,
                  journey,
                  currentIndex + 1,
                  totalLength,
                  externalData
                );
                break;
            }
          }
      }
     
      executeJourneyEvents_subMethod12(eventsObj,prop,externalData){
        eventsObj[prop].map((d) => {
            let mappingparams = {};
            if (externalData) {
              for (const k in d["properties"]) {
                if (Array.isArray(d["properties"][k])) {
                  mappingparams[k] = this.ArrayMethods.getPathVal(
                    externalData,
                    this.applyJsonLogic(d["properties"][k][0], externalData)
                  );
                } else {
                  mappingparams[k] = d["properties"][k];
                }
              }
              try{
                Appice.recordEvent({ key: d.key, segment: mappingparams });
              }catch(e){
                  
              }
            } else {
              try{
                Appice.recordEvent({
                  key: d.key,
                  segment: { ...d["properties"] },
                });
              }catch(e){
                  
              }
            }
          });
      }
      executeJourneyEvents_subMethod13(eventsObj,prop,externalData){
        eventsObj[prop].map((d) => {
            let userid;
            if (externalData) {
              for (const k in d["properties"]) {
                if (Array.isArray(d["properties"][k])) {
                  userid = this.ArrayMethods.getPathVal(
                    externalData,
                    this.applyJsonLogic(d["properties"][k][0], externalData)
                  );
                } else {
                  userid = d["properties"][k];
                }
              }
              try{
                Appice.setUserId(userid);
              }catch(e){
                  
              }
            } else {
              try{
                Appice.setUserId(d["properties"]["userId"]);
              }catch(e){
                  
              }
            }
          });
      }
      executeJourneyEvents_subMethod14(eventsObj,prop,externalData){
        eventsObj[prop].map((d) => {
            let user = {};
            if (externalData) {
              for (const k in d["properties"]) {
                if (Array.isArray(d["properties"][k])) {
                  user[k] = this.ArrayMethods.getPathVal(
                    externalData,
                    this.applyJsonLogic(d["properties"][k][0], externalData)
                  );
                } else {
                  user[k] = d["properties"][k];
                }
              }
              try{
                Appice.setUser(user);
              }catch(e){
                  
              }
            } else {
              try{
                Appice.setUser(d["properties"]);
              }catch(e){
                  
              }
            }
          });
      }
      executeJourneyEvents_subMethod15(eventsObj,prop,externalData){
        eventsObj[prop].map((d) => {
            let user = {};
            for (const k in d["properties"]) {
              let t = {};
              if (Array.isArray(d["properties"][k])) {
                t[k] = this.ArrayMethods.getPathVal(
                  externalData,
                  this.applyJsonLogic(d["properties"][k][0], externalData)
                );
                try{
                  Appice.setCustomVariables(t);
                }catch(e){
                    
                }
              } else {
                t[k] = d["properties"][k];
                try{
                  Appice.setCustomVariables(t);
                }catch(e){
                    
                }
              }
            }
            
          });
      }
      executeJourneyEvents_subMethod16(externalData,eventsObj,prop){
        let mappingparams = {};
        if (externalData) {
            for (const k in eventsObj[prop]["properties"]) {
            if (Array.isArray(eventsObj[prop]["properties"][k])) {
                mappingparams[k] = this.ArrayMethods.getPathVal(
                externalData,
                this.applyJsonLogic(
                    eventsObj[prop]["properties"][k][0],
                    externalData
                )
                );
            } else {
                mappingparams[k] = eventsObj[prop]["properties"][k];
            }
            }
            try{
              Appice.recordEvent({
              key: eventsObj[prop].key,
              segment: mappingparams,
              });
            }catch(e){
                
            }
        } else {
          try{
            Appice.recordEvent({
            key: eventsObj[prop].key,
            segment: { ...eventsObj[prop]["properties"] },
            });
          }catch(e){
              
          }
        }
      }
      executeJourneyEvents_subMethod17(eventsObj,prop,externalData){
        let userid;
                if (externalData) {
                  for (const k in eventsObj[prop]["properties"]) {
                    if (Array.isArray(eventsObj[prop]["properties"][k])) {
                      userid = this.ArrayMethods.getPathVal(
                        externalData,
                        this.applyJsonLogic(
                          eventsObj[prop]["properties"][k][0],
                          externalData
                        )
                      );
                    } else {
                      userid = eventsObj[prop]["properties"][k];
                    }
                  }
                  try{
                    Appice.setUserId(userid);
                  }catch(e){
                      
                  }
                } else {
                  try{
                    Appice.setUserId(eventsObj[prop]["properties"]["userId"]);
                  }catch(e){
                      
                  }
                }
      }
      executeJourneyEvents_subMethod18(eventsObj,prop,externalData){
        let user = {};
        if (externalData) {
            for (const k in eventsObj[prop]["properties"]) {
            
                user[k] = Array.isArray(eventsObj[prop]["properties"][k])?this.ArrayMethods.getPathVal(
                externalData,
                this.applyJsonLogic(
                    eventsObj[prop]["properties"][k][0],
                    externalData
                )
                ):eventsObj[prop]["properties"][k];
           
            }
            try{
              Appice.setUser(user);
            }catch(e){
                
            }
        } else {
          try{
            Appice.setUser(eventsObj[prop]["properties"]);
          }catch(e){
              
          }
        }
      }
      executeJourneyEvents_subMethod2(eventsObj,prop,params,journey,externalData,){
        if (Array.isArray(eventsObj[prop])) {
            switch (prop) {
              case "subStatus":
                eventsObj[prop].map((d) => {
                  params = {
                    access_token: journey.product.access_token,
                    loanUuid: journey.product.loanUuid,
                    ...d,
                  };
                  this.apiService
                    .updateLoanApplicationStatus(params)
                    
                });
    
                break;
              case "status":
                eventsObj[prop].map((d) => {
                  params = {
                    access_token: journey.product.access_token,
                    loanUuid: journey.product.loanUuid,
                    applicationSource: "WEB_JOURNEY",
                    ...d,
                  };
                  this.apiService
                    .updateMainLoanApplicationStatus(params)
                });
                break;
              case "APPICE_EVENT":
                this.executeJourneyEvents_subMethod12(eventsObj,prop,externalData)
                break;
              case "APPICE_SETUSERID":
                this.executeJourneyEvents_subMethod13(eventsObj,prop,externalData)
                break;
              case "APPICE_SETUSER":
                this.executeJourneyEvents_subMethod14(eventsObj,prop,externalData)
                
                break;
              case "APPICE_SET_CUSTOMVARIABLE":
                this.executeJourneyEvents_subMethod15(eventsObj,prop,externalData)
               
                break;
            }
          } else {
            switch (prop) {
              case "subStatus":
                params = {
                  access_token: journey.product.access_token,
                  loanUuid: journey.product.loanUuid,
                  ...eventsObj[prop],
                };
                this.apiService
                  .updateLoanApplicationStatus(params)
                  
                break;
              case "status":
                params = {
                  access_token: journey.product.access_token,
                  loanUuid: journey.product.loanUuid,
                  applicationSource: "WEB_JOURNEY",
                  ...eventsObj[prop],
                };
                this.apiService
                  .updateMainLoanApplicationStatus(params)
                 
                break;
              case "APPICE_EVENT":
                this.executeJourneyEvents_subMethod16(externalData,eventsObj,prop)
                
                break;
              case "APPICE_SETUSERID":
                this.executeJourneyEvents_subMethod17(eventsObj,prop,externalData)
    
                break;
              case "APPICE_SETUSER":
                this.executeJourneyEvents_subMethod18(eventsObj,prop,externalData)
                break;
              case "APPICE_SET_CUSTOMVARIABLE":
                for (const k in eventsObj[prop]["properties"]) {
                  let t = {};
                  if (Array.isArray(eventsObj[prop]["properties"][k])) {
                    t[k] = this.ArrayMethods.getPathVal(
                      externalData,
                      this.applyJsonLogic(
                        eventsObj[prop]["properties"][k][0],
                        externalData
                      )
                    );
                    try{
                      Appice.setCustomVariables(t);
                    }catch(e){
                        
                    }
                  } else {
                    t[k] = eventsObj[prop]["properties"][k];
                    try{
                      Appice.setCustomVariables(t);
                    }catch(e){
                        
                    }
                  }
                }
                break;
            }
          }
      }
    
    
      setJourney(journey) {
        this.localStorage.SessionSetItem("CURRENT_JOURNEY", journey);
      }
    
      getJourney() {
        return this.localStorage.SessionGetItem("CURRENT_JOURNEY");
      }

      dataparsertoOptions(obj) {
        let options = [];
        obj.forEach((d) => {
            let option = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
                loanPurposeUuid: null,
            };
            option.optionCode = d["name"];
            option.optionKey = d["name"];
            option.optionName = d["name"];
            option.optionParentProperty = d["name"];
            option.optionValue = d["name"];
            if (d.forIndividual) {
                option.optionParentCode = "Individual";
                option.loanPurposeUuid = d["loanPurposeUuid"];
            }
            if (d.forCorporate) {
                option.optionParentCode = "Sole Proprietorship";
                option.loanPurposeUuid = d["loanPurposeUuid"];
            }
            if (d.forIndividual === true && d.forCorporate) {
                let copy_option = JSON.parse(JSON.stringify(option));
                if (d.forIndividual) {
                    copy_option.optionParentCode = "Sole Proprietorship";
                    copy_option.loanPurposeUuid = d["loanPurposeUuid"];
                }
                if (d.forCorporate) {
                    copy_option.optionParentCode = "Individual";
                    copy_option.loanPurposeUuid = d["loanPurposeUuid"];
                }
                options.push(copy_option);
            }
            options.push(option);
        });
        return options;
    }

    mapDataFromParameter(params, dataCloud) {
        let mappedParams = {};
        params.forEach((f) => {
            if (typeof f == "object") {
                if (f[1] == "STATIC") {
                    mappedParams[f[0]] = f[2];
                } else {
                    if (f[1] == "APPEND_VALUES") {
                        let final = "";
                        final = this.mapAppendValuesParameter(final, f[2], dataCloud)
                        mappedParams[f[0]] = final;
                    } else {
                        if (f[1] == "RULE_OUTPUT") {
                            mappedParams[f[0]] = this.applyJsonLogic(f[2], dataCloud);
                        } else {
                            mappedParams[f[0]] = this.ArrayMethods.getPathVal(
                                dataCloud,
                                this.applyJsonLogic(f[1], dataCloud)
                            );
                        }
                    }
                }
            } else {
                mappedParams[f] = this.ArrayMethods.getPathVal(
                    dataCloud,
                    this.applyJsonLogic(f, dataCloud)
                );
            }
        });
        mappedParams = this.modifyParametertypes(mappedParams);
        return mappedParams;
    }

    modifyParametertypes(params) {
        for (const prop in params) {
            if (params[prop] == null || params[prop] == undefined) {
                params[prop] = "";
            }
            if (Array.Array.isArray(params[prop])) {
                params[prop] = JSON.stringify(params[prop]);
            }
        }
       
       
        return params;
    }

    mapAppendValuesParameter(final, list, dataCloud) {
        list.forEach((j) => {
            if (typeof j == "object") {
                final = final + j[0];
            } else {
                final =
                    final +
                    this.ArrayMethods.getPathVal(
                        dataCloud,
                        this.applyJsonLogic(j, dataCloud)
                    );
            }
        });
        return final
    }

    mapCommonPinCode(data, returnKey?) {
        let pincode_state = [];
        let pincode_District = [];
        let pincode_city = [];
        let pincode = [];
        data.map((d) => {
            let state_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            let district_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            let city_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            let country_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            let pincode_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            state_sampleObj.optionCode = d.state;
            state_sampleObj.optionKey = d.state;
            state_sampleObj.optionName = d.state;
            state_sampleObj.optionParentCode = d.pincode;
            state_sampleObj.optionValue = d.state;
            district_sampleObj.optionCode = d.district;
            district_sampleObj.optionKey = d.district;
            district_sampleObj.optionName = d.district;
            district_sampleObj.optionParentCode = d.state;
            district_sampleObj.optionValue = d.district;
            city_sampleObj.optionCode = d.city;
            city_sampleObj.optionKey = d.city;
            city_sampleObj.optionName = d.city;
            city_sampleObj.optionParentCode = d.pincode;
            city_sampleObj.optionValue = d.city;
            country_sampleObj.optionCode = d.country;
            country_sampleObj.optionKey = d.country;
            country_sampleObj.optionName = d.country;
            country_sampleObj.optionParentCode = d.country;
            country_sampleObj.optionValue = d.country;
            pincode_sampleObj.optionCode = d.pincode;
            pincode_sampleObj.optionKey = d.pincode;
            pincode_sampleObj.optionName = d.pincode;
            pincode_sampleObj.optionParentCode = null;
            pincode_sampleObj.optionValue = d.pincode;
            pincode_state.push(state_sampleObj);
            pincode_District.push(district_sampleObj);
            pincode_city.push(city_sampleObj);
            pincode.push(pincode_sampleObj);
        });
        if (returnKey) {
            if (returnKey == "PINCODE_STATE") {
                pincode_state = uniqBy(pincode_state, "optionName");
                return pincode_state;
            }
            if (returnKey == "PINCODE_CITY") {
                pincode_city = uniqBy(pincode_city, "optionName");
                return pincode_city;
            }
            if (returnKey == "PINCODE_DISTRICT") {
                pincode_District = uniqBy(pincode_District, "optionName");
                return pincode_District;
            }
            if (returnKey == "PINCODE") {
                pincode = uniqBy(pincode, "optionName");
                return pincode;
            }
        } else {
            pincode_state = uniqBy(pincode_state, "optionName");
            pincode_District = uniqBy(pincode_District, "optionName");
            pincode_city = uniqBy(pincode_city, "optionName");
            pincode = uniqBy(pincode, "optionName");
            return [pincode_state, pincode_District, pincode_city, pincode];
        }
    }


    public bindHeaderFooterTypes(pageType){
      switch(pageType){
        case 'LANDING':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = true
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = true
        break;
        case 'PRODUCT_ERROR':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'PRODUCT_DESCRIPTION':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = true
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = true
        break;
        case 'CUSTOMER_TYPE':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'MOBILE_VERIFY':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'KCC_CROP':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'KCC_LAND':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'ADD_MORE_PAGE':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'EMAIL_VERIFY':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'PAN_VERIFY':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'EKYC_VERIFY':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'ADDRESS_DETAILS':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'MORE_INFO':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'PERSONAL_DETAILS':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'VEHICLE_DETAILS':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'PRODUCT_SELECTION':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'JOURNEY_PREVIEW':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'BORROWER_EMPLOYEE_INFO':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'ACCOUNT_VERIFICATION':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'RESUME_APPLICATION':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = true
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'TRACK_STATUS':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = true
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'CONTRACT_DETAILS':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = false
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = false
        break;
        case 'ACCOUNT_VERIFY':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'TRACK_APPLICATION':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        case 'APPLICATION_STATUS':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = true
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = false
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = false
        break;
        case 'UDYAM_VERIFY':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'COAPPLICANT_DETAILS':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'UDYAM_VERIFY':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'DECLARATION':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'EMPLOYMENT_DETAILS':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'DOCUMENT_LIST':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'SANCTION_DETAILS':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
        case 'E_SIGN':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = false
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = false
        break;
        case 'ESIGN':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'LOAN_SUMMARY':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'CONTACT_BRANCH':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'BRANCH_DETAILS':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'PROCESS_CHECK':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'KEY_FACT_DETAILS':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'ADDITIONAL_INFORMATION':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'DOCUMENT_UPLOAD_V2':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
        break;
        case 'STATUS_CHECK':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'SESSION_EXPIRED':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'PRODUCT_ERROR':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
        case 'DIRECTOR_PAN_VERIFY':
          this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
          this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
          this.commonVariableService.appLayoutConfig.isShowSubStepper = true
          this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
      }
    }

    isShowError(config) {
      config.forEach((section) => {
          if (section.componentType == "CONSENT") {
              this.mySub.next(
                  section.sectionContent.isValid == undefined ||
                  !section.sectionContent.isValid
              );
          }
      });
  }



    sectionValidationSystem(config) {
      const validationMessages = {
          FORM: "Please fill all the mandatory fields",
          CAPCHA: "Please fill the captcha",
          CONSENT: "Please check all the consent",
          FILE_UPLOAD: "Please upload all the documents",
      };
      const valid = config
          .filter(
              (section) => section.validateSection && section.sectionContent.isShow
          )
          .map((section) => {
              let isValid;
              switch (section.componentType) {
                  case "FORM":
                      section.sectionContent.validityEmitter.next(true);
                      isValid = section.sectionContent.formValidity?.ok;
                      break;
                  case "CONSENT":
                      this.isShowError(config);
                      section.sectionContent.validityEmitter.next();
                      isValid = section.sectionContent?.isValid;
                      break;
                  case "CAPCHA":
                  case "FILE_UPLOAD":
                      section.sectionContent.validityEmitter.next();
                      isValid = section.sectionContent?.isValid;
                      break;
                  default:
                      console.warn(`Unknown componentType: ${section.componentType}`);
                      return null;
              }
              return {ok: isValid, componentType: section.componentType};
          })
          .filter(Boolean);
      if (valid.every(({ok}) => ok)) return true;
      const componentTypefounded = valid.find(({ok}) => !ok).componentType;
      // this.sharedService.openSnackBar(validationMessages[componentTypefounded]);
      return false;
  }

  SectionValidationSystem(config) {
    return this.sectionValidationSystem(config);
}

}
