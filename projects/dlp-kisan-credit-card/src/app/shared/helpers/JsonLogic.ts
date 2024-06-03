import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as jsonLogic from "json-logic-js/logic.js";

import { ArrayMethod } from "./ArrayMethods";
import { LocalStorage } from "./localStorage";
import { isEqual } from "../utils/utils";
import { CommonVariableService } from "@kcc-app/services/common-variable-service";
let values = {
  coinValue: 0,
  jewelleryValue: 0,
};
@Injectable()
export class LogicFunctions {
  Jsonlogic = jsonLogic;

  constructor(
    public ArrayMethods: ArrayMethod,
    public router: ActivatedRoute,
    public commonVariableService: CommonVariableService,
    public localStorage: LocalStorage
  ) {
    document['jsonLogicRef'] = this
    this.init();
  }

  init() {
    this.Jsonlogic.coinValue = 0;
    this.Jsonlogic.add_operation("plus", this.plus);
    this.Jsonlogic.add_operation("addDate", this.addValuestoDate);
    this.Jsonlogic.add_operation("currentDate", this.currentDate);
    this.Jsonlogic.add_operation("math", Math);
    this.Jsonlogic.add_operation("truncate", this.truncate);
    this.Jsonlogic.add_operation("roundUp", this.roundUp);
    this.Jsonlogic.add_operation("roundDown", this.roundDown);
    this.Jsonlogic.add_operation("roundOff", this.roundOff);
    this.Jsonlogic.add_operation("regex", this.regex);
    this.Jsonlogic.add_operation("getAge", this.getAge);
    this.Jsonlogic.add_operation("length", this.length);
    this.Jsonlogic.add_operation("maskData", this.maskData);
    this.Jsonlogic.add_operation("masterValue", this.masterValue);
    this.Jsonlogic.add_operation("journeyValue", this.JourneyValue);
    this.Jsonlogic.add_operation("subFlowValue", this.subFlowValue);
    this.Jsonlogic.add_operation("returnObject", this.returnObject);
    this.Jsonlogic.add_operation("findMasterObject", this.findMasterObject);
    this.Jsonlogic.add_operation("findPinMasterObject", this.findPinMasterObject);
    this.Jsonlogic.add_operation("checkNull", this.checkNull);
    this.Jsonlogic.add_operation("getResume", this.getResume);
    this.Jsonlogic.add_operation("checkResumeJourney", this.checkResumeJourney);
    this.Jsonlogic.add_operation("getObjectKeyValue", this.getObjectKeyValue);
    this.Jsonlogic.add_operation("getArrayIndexValue", this.getArrayIndexValue);
    this.Jsonlogic.add_operation("checkArray", this.checkArray);
    this.Jsonlogic.add_operation("Array.find", this.findArray);
    this.Jsonlogic.add_operation("shouldNotExceedLimit", this.shouldNotExceedLimit);
    this.Jsonlogic.add_operation("checkPreviewUpdate", this.checkPreviewUpdate);
    this.Jsonlogic.add_operation("getLocalStorage", this.getLocalStorage);
    this.Jsonlogic.add_operation("removeLocalStorage", this.removeItemLs);
    this.Jsonlogic.add_operation("TwoDecimal", this.TwoDecimal)
  }

  //adding TableData
  plus(array) {
    return array.reduce((partialSum, a) => partialSum + a, 0);
  }

  addValuestoDate(Date1, addingValue, addingMetric) {
    let object_Date: Date;
    if (Date1 == null) {
      object_Date = new Date();
    } else {
      object_Date = new Date(Date1);
    }
    let result_Date;
    switch (addingMetric) {
      case "DAYS":
        result_Date = object_Date
          .setDate(object_Date.getDate() + addingValue)
          .valueOf();
        break;
      case "MONTHS":
        result_Date = object_Date
          .setMonth(object_Date.getMonth() + addingValue)
          .valueOf();
        break;
      case "WEEKS":
        result_Date = object_Date
          .setDate(object_Date.getDate() + addingValue * 7)
          .valueOf();
        break;
      case "YEARS":
        result_Date = object_Date
          .setMonth(object_Date.getMonth() + addingValue * 12)
          .valueOf();
        break;
      case "QUARTERS":
        result_Date = object_Date
          .setMonth(object_Date.getMonth() + addingValue * 4)
          .valueOf();
        break;
      case "HALFYEARLY":
        result_Date = object_Date
          .setMonth(object_Date.getMonth() + addingValue * 6)
          .valueOf();
        break;
    }
    return result_Date;
  }

  //rule to populate the current system Dates on applying
  currentDate() {
    return Date.now().valueOf();
  }

  //method to truncate the number values based on a parameter
  truncate(number, truncate_stripoffValue?) {
    return parseFloat(number).toFixed(
      truncate_stripoffValue != undefined ? truncate_stripoffValue : 3
    );
  }

  //round up the number based on the value parameter
  roundUp(number, decimal_ptr?) {
    if (decimal_ptr != undefined) {
      return Math.ceil(number * Math.pow(10, decimal_ptr)) / 100;
    } else {
      return Math.ceil(number);
    }
  }

  //round down the number based on the value parameter
  roundDown(number, decimal_ptr?) {
    if (decimal_ptr != undefined) {
      return Math.floor(number * Math.pow(10, decimal_ptr)) / 100;
    } else {
      return Math.floor(number);
    }
  }

  //round off the number based on the value parameter
  roundOff(number, decimal_ptr?) {
    if (decimal_ptr != undefined) {
      return Math.round(number * Math.pow(10, decimal_ptr)) / 100;
    } else {
      return Math.round(number);
    }
  }

  //regex method will validate a string with a regex and gives a boolean output
  regex(input_string, regex_string) {
    return new RegExp(regex_string).test(input_string);
  }

  //get age method will get a date input and returns a number output by calculating the age from the current date
  getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  //get length of a value
  length(input_string) {
    return String(input_string).length;
  }

  //mask data of a string
  maskData(input_string) {
    if (input_string != null || input_string != undefined) {
      let len_tobemasked = String(input_string).length - 4;
      input_string = String(input_string);
      return `${input_string[0]}${input_string[1]}${"X".repeat(
        len_tobemasked
      )}${input_string[input_string.length - 2]}${input_string[input_string.length - 1]
        }`;
    } else {
      return null;
    }
  }

  //get data from the master value
  masterValue(masterkeyName) {
    let capturedData = document['jsonLogicRef'].localStorage.SessionGetItem('CURRENT_JOURNEY').metaData.capturedData
    let current = capturedData;
    masterkeyName.split('.').forEach((p) => {
      if (current?.[p]) {
        current = current[p];
      } else {
        current = null

      }
    });
    return current
  }
  //get data from the subflow value
  subFlowValue(masterkeyName) {
    let capturedData = document['jsonLogicRef'].localStorage.SessionGetItem("SUBFLOW").capturedData;
    if (capturedData[masterkeyName]) {
      return capturedData[masterkeyName];
    } else {
      return null;
    }
  }

  //get a data from the journey object
  JourneyValue(path) {
    let current = document['jsonLogicRef'].localStorage.SessionGetItem('CURRENT_JOURNEY');
    if (path.includes('[APPEND]')) {
      current = this.appendPathFetch(path)
    } else {
      path.split('.').forEach((p) => {
        if (current[p] != undefined) {
          if (current[p]) {
            current = current[p];
          } else {
            current = null
            return
          }
        } else {
          current = null
        }
      });
    }
    return current
  }

  appendPathFetch(path) {
    path = path.replace('[APPEND]', "")
    path = path.split('+')
    let val = ""
    path.map(sp => {
      if (sp.includes('[STATIC]')) {
        sp = sp.replace('[STATIC]', "")
        val = val + sp
      } else {
        let curr = document['jsonLogicRef'].localStorage.SessionGetItem('CURRENT_JOURNEY');
        sp.split('.').forEach((p) => {
          if (curr[p] != undefined) {
            if (curr[p] || curr[p] == "") {
              curr = curr[p];
            } else {
              curr = null
              return
            }
          } else {
            curr = null
          }
        });
        val = val + curr
      }
    })
    return val
  }

  //returns a object value
  returnObject(data) {
    return data;
  }

  //this functions searches the data based of the parameters passed in the master data
  findMasterObject(Mastercode, searchParam, searchValue, returnKey) {
    let data = document['jsonLogicRef'].localStorage.SessionGetItem("MASTER")[Mastercode];
    let dataObj = data.filter((e) => e[searchParam] == searchValue)[0];
    if (dataObj) {
      return dataObj[returnKey];
    } else {
      return null;
    }
  }
  //this functions searches the data based of the parameters passed in the Pinmaster
  findPinMasterObject(Mastercode, searchParam, searchValue, returnKey) {
    let data = JSON.parse(sessionStorage.getItem("PINMASTER"))[Mastercode];
    return data.filter((e) => e[searchParam] == searchValue)[0][returnKey];
  }

  checkNull(data) {
    return data ? false : true;
  }

  getResume(_resumeJourney) {
    let journey = document['jsonLogicRef'].localStorage.SessionGetItem('CURRENT_JOURNEY')
    let MainpageSequence = journey.journeyPages.individual;
    let otherpageSequence = journey.otherPages.individual;
    let pageCode = null;
    let param
    [pageCode, param] = document['jsonLogicRef'].getPageCodeParam(MainpageSequence, [journey.resumeJourney.status, journey.resumeJourney.subStatus])
    if (pageCode == null) {
      [pageCode, param] = document['jsonLogicRef'].getPageCodeParam(otherpageSequence, [journey.resumeJourney.status, journey.resumeJourney.subStatus])
    }
    if (param) {
      return '[NAVIGATE]' + pageCode + '[PARAMS]' + param
    } else {
      return '[NAVIGATE]' + pageCode
    }
  }

  getPageCodeParam(pagesequence, sampleSeq) {
    let pageCode, param
    pagesequence.map(pageseq => {
      if (pageseq.resumeJourneySequences) {
        pageseq.resumeJourneySequences.map(seq => {
          if (isEqual(seq[0], sampleSeq[0]) && isEqual(seq[1], sampleSeq[1])) {
            if (seq[2] != undefined) {
              param = seq[2]
            }
            pageCode = pageseq.pageCode
          }
        })
      }
    })
    return [pageCode, param]
  }
  checkResumeJourney() {
    let journey = document['jsonLogicRef'].localStorage.SessionGetItem("CURRENT_JOURNEY");
    if (journey.resumeJourney) {
      return true;
    } else {
      return false;
    }
  }
  checkPreviewUpdate() {
    let isPreviewUpdate = document['jsonLogicRef'].localStorage.SessionGetItem("CURRENT_JOURNEY").isPreviewUpdate;
    return isPreviewUpdate ? true : false;
  }
  getObjectKeyValue(key, value) {
    if (key) {
      if (key[value]) {
        return key[value];
      }
    }

    return null;
  }
  getArrayIndexValue(value, index) {
    if (value) {
      if (value[index]) {
        return value[index];
      }
    }
    return null;
  }

  checkArray(keyName) {
    let keyLength = Object.keys(keyName);
    if (keyLength.length > 1) {
      return true;
    } else {
      return false;
    }
  }

  //find object from array
  findArray(search, searchKey, array) {
    return array.find((f) => f[searchKey] == search);
  }

  shouldNotExceedLimit(data, fieldName, limit) {
    let sum = 0;
    if (Array.isArray(data)) {
      for (let arrayItem of data) {
        sum += arrayItem?.reduce((acc, curr) => {
          if (curr.fieldName === fieldName) {
            acc += Number(curr.value);
          }
          return acc;
        }, 0);
      }
    }
    return sum > limit;
  }
  getLocalStorage(keyName) {
    return JSON.parse(sessionStorage.getItem(keyName))
  }

  removeItemLs(keyName) {
    sessionStorage.removeItem(keyName)
    return null
  }
  TwoDecimal(data){
   if(!Number.isInteger(data)){
    return JSON.parse(data.toFixed(2))
   }else{
    return data
   }
  }
}
