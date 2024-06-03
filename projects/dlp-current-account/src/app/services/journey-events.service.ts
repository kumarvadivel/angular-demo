import { Injectable } from "@angular/core";
import { CommonVariableService } from "./common-variable-service";
import { ApiService } from "./api.service";
import { ArrayMethod } from "../shared/helpers/ArrayMethods";
import { LogicFunctions } from "../shared/helpers/JsonLogic";
import { LocalStorage } from "@ca-app/shared/helpers/LocalStorage";

declare let Appice: any;

@Injectable({
  providedIn: "root",
})
export class JourneyEventsService {
  constructor(
    public commonVariableService: CommonVariableService,
    public apiService: ApiService,
    public ArrayMethods: ArrayMethod,
    public JsonLogic: LogicFunctions,
    public localStorage: LocalStorage
  ) {}

  journeyEventsExecutor(data?, params?) {
    let journey = this.getJourney();
    let eventsObj;
    if (
      this.commonVariableService.tenentConfiguration
        .FETCH_PRODUCT_CONFIG_FROM_JSON_FILE
    ) {
      let productConfig =  
        this.localStorage.SessionGetItem("PRODUCT_CONFIGURATION")
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
  triggerAppiceEvent(eventName?, params?) {
    let journey = this.getJourney();
    let userObj = {};
    if (eventName == "setUser") {
      this.triggerSetUser(journey, userObj);
    } else {
      let obj = { key: eventName, properties: params };
      try{
        if(typeof Appice != 'undefined'){
          Appice.recordEvent({ key: obj.key, segment: obj.properties });
        }
      }catch(e){
          
      }
    }
  }

  private triggerSetUser(journey, userObj) {
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
        if(typeof Appice != 'undefined'){
          Appice.setCustomVariables(userObj);
          Appice.setUser(userObj);
        }
      }catch(e){
          
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
      this.executeJourneyEvents_subMethod1(
        eventsObj,
        prop,
        params,
        journey,
        currentIndex,
        totalLength,
        externalData
      );
    } else {
      this.executeJourneyEvents_subMethod2(
        eventsObj,
        prop,
        params,
        journey,
        externalData
      );
    }
  }

  private executeJourneyEvents_subMethod15(eventsObj, prop, externalData) {
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
            if(typeof Appice != 'undefined'){
              Appice.setCustomVariables(t);
            }
          }catch(e){
              
          }
        } else if(typeof Appice != 'undefined'){
          t[k] = d["properties"][k];
          try{
            Appice.setCustomVariables(t);
          }catch(e){
              
          }
        }
      }
    });
  }

  private executeJourneyEvents_subMethod2( eventsObj, prop, params,  journey,  externalData ) {
    if (Array.isArray(eventsObj[prop])) {
      switch (prop) {
        case "subStatus":
          eventsObj[prop].map((d) => {
            params = {
              access_token: journey.product.access_token,
              loanUuid: journey.product.loanUuid,
              ...d,
            };
            this.apiService.updateLoanApplicationStatus(params).catch(console.error);
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
            this.apiService.updateMainLoanApplicationStatus(params).catch(console.error);
          });
          break;
        case "APPICE_EVENT":
          this.executeJourneyEvents_subMethod12(eventsObj, prop, externalData);
          break;
        case "APPICE_SETUSERID":
          this.executeJourneyEvents_subMethod13(eventsObj, prop, externalData);
          break;
        case "APPICE_SETUSER":
          this.executeJourneyEvents_subMethod14(eventsObj, prop, externalData);

          break;
        case "APPICE_SET_CUSTOMVARIABLE":
          this.executeJourneyEvents_subMethod15(eventsObj, prop, externalData);

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
          this.apiService.updateLoanApplicationStatus(params).catch(console.error);

          break;
        case "status":
          params = {
            access_token: journey.product.access_token,
            loanUuid: journey.product.loanUuid,
            applicationSource: "WEB_JOURNEY",
            ...eventsObj[prop],
          };
          this.apiService.updateMainLoanApplicationStatus(params).catch(console.error);

          break;
        case "APPICE_EVENT":
          this.executeJourneyEvents_subMethod16(externalData, eventsObj, prop);

          break;
        case "APPICE_SETUSERID":
          this.executeJourneyEvents_subMethod17(eventsObj, prop, externalData);

          break;
        case "APPICE_SETUSER":
          this.executeJourneyEvents_subMethod18(eventsObj, prop, externalData);
          break;
        case "APPICE_SET_CUSTOMVARIABLE":
          this.executeJourneyEvents_subMethod26(eventsObj, prop, externalData);
          break;
      }
    }
  }

  executeJourneyEvents_subMethod26(eventsObj, prop, externalData) {
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
        try {
          if(typeof Appice != 'undefined'){
            Appice.setCustomVariables(t);
          }
        } catch (e) {

        }
      } else if(typeof Appice != 'undefined'){
        t[k] = eventsObj[prop]["properties"][k];
        try {
          Appice.setCustomVariables(t);
        } catch (e) {
        }
      }
    }
  }

  private executeJourneyEvents_subMethod16(externalData, eventsObj, prop) {
    let mappingparams = {};
    if (externalData && typeof Appice != 'undefined') {
      if(eventsObj[prop].validateKey){
        eventsObj[prop].key =  this.applyJsonLogic(eventsObj[prop].validateKey,externalData);
      }
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
    } else if(typeof Appice != 'undefined'){
      try{
        Appice.recordEvent({
          key: eventsObj[prop].key,
          segment: { ...eventsObj[prop]["properties"] },
        });
      }catch(e){
          
      }
    }
  }
  private executeJourneyEvents_subMethod17(eventsObj, prop, externalData) {
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
        if(typeof Appice != 'undefined'){
          Appice.setUserId(userid);
        }
      }catch(e){
          
      }
    } else if(typeof Appice != 'undefined'){
      try{
        Appice.setUserId(eventsObj[prop]["properties"]["userId"]);
      }catch(e){
          
      }
    }
  }
  private executeJourneyEvents_subMethod18(eventsObj, prop, externalData) {
    let user = {};
    if (externalData) {
      for (const k in eventsObj[prop]["properties"]) {
        user[k] = Array.isArray(eventsObj[prop]["properties"][k])
          ? this.ArrayMethods.getPathVal(
              externalData,
              this.applyJsonLogic(
                eventsObj[prop]["properties"][k][0],
                externalData
              )
            )
          : eventsObj[prop]["properties"][k];
      }
      try{
        if(typeof Appice != 'undefined'){
          Appice.setUser(user);
        }
      }catch(e){
          
      }
    } else if(typeof Appice != 'undefined'){
      try{
        Appice.setUser(eventsObj[prop]["properties"]);
      }catch(e){
          
      }
    }
  }

  private executeJourneyEvents_subMethod14(eventsObj, prop, externalData) {
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
          if(typeof Appice != 'undefined'){
            Appice.setUser(user);
          }
        }catch(e){
            
        }
      } else if(typeof Appice != 'undefined'){
        try{
          Appice.setUser(d["properties"]);
        }catch(e){
            
        }
      }
    });
  }

  private executeJourneyEvents_subMethod13(eventsObj, prop, externalData) {
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
          if(typeof Appice != 'undefined'){
            Appice.setUserId(userid);
          }
        }catch(e){
            
        }
      } else if(typeof Appice != 'undefined'){
        try{
          Appice.setUserId(d["properties"]["userId"]);
        }catch(e){
            
        }
      }
    });
  }

  private executeJourneyEvents_subMethod12(eventsObj, prop, externalData) {
    eventsObj[prop].map((d) => {
      let mappingparams = {};
      if (externalData && typeof Appice != 'undefined') {
        if(eventsObj[prop].validateKey){
          eventsObj[prop].key =  this.applyJsonLogic(eventsObj[prop].validateKey,externalData);
        }
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
      } else if(typeof Appice != 'undefined'){
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

  executeJourneyEvents_subMethod3(
    eventsObj,
    prop,
    journey,
    currentIndex,
    totalLength
  ) {
    eventsObj[prop].map((d) => {
      let params = {
        access_token: journey.product.access_token,
        loanUuid: journey.product.loanUuid,
        ...d,
      };
      this.apiService.updateLoanApplicationStatus(params).catch(console.error);
    });
    this.executeJourneyEvents(
      eventsObj,
      journey,
      currentIndex + 1,
      totalLength
    );
  }

  private executeJourneyEvents_subMethod1(eventsObj, prop, params, journey, currentIndex, totalLength, externalData) {
    if (Array.isArray(eventsObj[prop])) {
      switch (prop) {
        case "subStatus":
          this.executeJourneyEvents_subMethod3(eventsObj, prop, journey, currentIndex, totalLength)
          break;
        case "status":
          this.executeJourneyEvents_subMethod4(eventsObj, prop, journey, currentIndex, totalLength);
          break;
        case "APPICE_EVENT":
          this.executeJourneyEvents_subMethod5(eventsObj, prop, externalData, journey, totalLength, currentIndex);
          break;
        case "APPICE_SETUSERID":
          this.executeJourneyEvents_subMethod6(eventsObj, prop, externalData, journey, currentIndex, totalLength);
          break;
        case "APPICE_SETUSER":
          this.executeJourneyEvents_subMethod7(eventsObj, prop, externalData, journey, currentIndex, totalLength);
          break;
        case "APPICE_SET_CUSTOMVARIABLE":
          this.executeJourneyEvents_subMethod8(eventsObj, prop, externalData, journey, currentIndex, totalLength);
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
          this.apiService.updateLoanApplicationStatus(params).then(this.executeJourneyEvents_subMethod19(eventsObj, journey, currentIndex, totalLength, externalData)
          ).catch(console.error);
          break;
        case "status":
          params = {
            access_token: journey.product.access_token,
            loanUuid: journey.product.loanUuid,
            applicationSource: "WEB_JOURNEY",
            ...eventsObj[prop],
          };
          this.apiService.updateMainLoanApplicationStatus(params).then(this.executeJourneyEvents_subMethod19(eventsObj, journey, currentIndex, totalLength, externalData)
          ).catch(console.error);
          break;
        case "APPICE_EVENT":
          this.executeJourneyEvents_subMethod9(eventsObj, externalData, prop, journey, currentIndex, totalLength);
          break;
        case "APPICE_SETUSERID":
          this.executeJourneyEvents_subMethod10(eventsObj, prop, externalData, journey, currentIndex, totalLength);
          break;
        case "APPICE_SETUSER":
          this.executeJourneyEvents_subMethod11(eventsObj, prop, externalData, journey, currentIndex, totalLength);
          break;
        case "APPICE_SET_CUSTOMVARIABLE":
          this.executeJourneyEvents_subMethod25(eventsObj, prop, externalData, journey, currentIndex, totalLength)
          break;
      }
    }
  }

  executeJourneyEvents_subMethod25(eventsObj, prop, externalData, journey, currentIndex, totalLength) {
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
        try {
          if(typeof Appice != 'undefined'){
            Appice.setCustomVariables(t);
          }
        } catch (e) {

        }
      } else if(typeof Appice != 'undefined'){
        t[k] = eventsObj[prop]["properties"][k];
        try {
          Appice.setCustomVariables(t);
        } catch (e) {

        }
      }
    }

    this.executeJourneyEvents( eventsObj, journey, currentIndex + 1, totalLength, externalData);
  }

  private executeJourneyEvents_subMethod4( eventsObj, prop, journey, currentIndex, totalLength) {
    eventsObj[prop].map((d) => {
      let params = {
        access_token: journey.product.access_token,
        loanUuid: journey.product.loanUuid,
        applicationSource: "WEB_JOURNEY",
        ...d,
      };
      this.apiService.updateMainLoanApplicationStatus(params);
    });
    this.executeJourneyEvents( eventsObj, journey, currentIndex + 1, totalLength);
  }
  private executeJourneyEvents_subMethod5(eventsObj, prop, externalData, journey, totalLength, currentIndex) {
    this.executeJourneyEvents_subMethod12(eventsObj, prop, externalData);
    this.executeJourneyEvents(eventsObj, journey, currentIndex + 1, totalLength, externalData);
  }
  private executeJourneyEvents_subMethod6(eventsObj, prop, externalData, journey, currentIndex, totalLength) {
    this.executeJourneyEvents_subMethod13(eventsObj, prop, externalData);
    this.executeJourneyEvents(eventsObj, journey, currentIndex + 1, totalLength, externalData);
  }
  private executeJourneyEvents_subMethod7(eventsObj, prop, externalData, journey, currentIndex, totalLength) {
    this.executeJourneyEvents_subMethod14(eventsObj, prop, externalData);
    this.executeJourneyEvents(eventsObj, journey, currentIndex + 1, totalLength, externalData);
  }
  executeJourneyEvents_subMethod8(eventsObj, prop, externalData, journey, currentIndex, totalLength) {
    eventsObj[prop].map((d) => {
      this.executeJourneyEvents_subMethod8Properties(d, externalData)
    });
    this.executeJourneyEvents(eventsObj, journey, currentIndex + 1, totalLength, externalData);
  }

  executeJourneyEvents_subMethod8Properties(d, externalData) {
    for (const k in d["properties"]) {
      let t = {};
      if (Array.isArray(d["properties"][k])) {
        t[k] = this.ArrayMethods.getPathVal(
          externalData,
          this.applyJsonLogic(d["properties"][k][0], externalData)
        );
        try {
          if(typeof Appice != 'undefined'){
            Appice.setCustomVariables(t);
          }
        } catch (e) {

        }
      } else if(typeof Appice != 'undefined'){
        t[k] = d["properties"][k];
        try {
          Appice.setCustomVariables(t);
        } catch (e) {

        }
      }
    }
  }

  private executeJourneyEvents_subMethod9(
    eventsObj,
    externalData,
    prop,
    journey,
    currentIndex,
    totalLength
  ) {
    let mappingparams = {};
    if (externalData && typeof Appice != 'undefined') {
      if(eventsObj[prop].validateKey){
        eventsObj[prop].key =  this.applyJsonLogic(eventsObj[prop].validateKey,externalData);
      }
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
    } else if(typeof Appice != 'undefined'){
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
  private executeJourneyEvents_subMethod10(
    eventsObj,
    prop,
    externalData,
    journey,
    currentIndex,
    totalLength
  ) {
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
        if(typeof Appice != 'undefined'){
          Appice.setUserId(userid);
        }
      }catch(e){
          
      }
    } else if(typeof Appice != 'undefined'){
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

  private executeJourneyEvents_subMethod11(
    eventsObj,
    prop,
    externalData,
    journey,
    currentIndex,
    totalLength
  ) {
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
        if(typeof Appice != 'undefined'){
          Appice.setUser(user);
        }
      }catch(e){
          
      }
    } else if(typeof Appice != 'undefined'){
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

  private executeJourneyEvents_subMethod19(
    eventsObj,
    journey,
    currentIndex,
    totalLength,
    externalData
  ) {
    return (_res) => {
      this.executeJourneyEvents(
        eventsObj,
        journey,
        currentIndex + 1,
        totalLength,
        externalData
      );
    };
  } 

  applyJsonLogic(validationJson, supplyData) {
    return this.JsonLogic.Jsonlogic.apply(validationJson, supplyData);
  }

  setJourney(journey) {
    this.localStorage.SessionSetItem("CURRENT_JOURNEY", journey);
  }

  getJourney() {
    return this.localStorage.SessionGetItem("CURRENT_JOURNEY");
  }
}
