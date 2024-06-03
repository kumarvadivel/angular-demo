import {Injectable} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import * as jsonLogic from 'json-logic-js/logic.js'
import {isEqual} from 'underscore';
import { CommonVariableService } from '@el-app/services/common-variable-service';
import { LocalStorage } from './LocalStorage';

@Injectable()
export class LogicFunctions {
    Jsonlogic = jsonLogic

    constructor(
                public router: ActivatedRoute,
                public localStorage:LocalStorage,
                public commonVariableService: CommonVariableService) {
                    document['jsonLogicRef']= this
        this.init()
    }

    init() {
        this.Jsonlogic.add_operation('plus', this.plus)
        this.Jsonlogic.add_operation('addDate', this.addValuestoDate)
        this.Jsonlogic.add_operation('currentDate', this.currentDate)
        this.Jsonlogic.add_operation("math", Math);
        this.Jsonlogic.add_operation("truncate", this.truncate);
        this.Jsonlogic.add_operation("roundUp", this.roundUp);
        this.Jsonlogic.add_operation("roundDown", this.roundDown);
        this.Jsonlogic.add_operation("roundOff", this.roundOff);
        this.Jsonlogic.add_operation("regex", this.regex)
        this.Jsonlogic.add_operation("getAge", this.getAge)
        this.Jsonlogic.add_operation("length", this.length)
        this.Jsonlogic.add_operation("maskData", this.maskData)
        this.Jsonlogic.add_operation('masterValue', this.masterValue)
        this.Jsonlogic.add_operation('journeyValue', this.JourneyValue)
        this.Jsonlogic.add_operation('subFlowValue', this.subFlowValue)
        this.Jsonlogic.add_operation('returnObject', this.returnObject)
        this.Jsonlogic.add_operation('findMasterObject', this.findMasterObject) // operator deprecated
        this.Jsonlogic.add_operation('findPinMasterObject', this.findPinMasterObject)
        this.Jsonlogic.add_operation('checkNull', this.checkNull)
        this.Jsonlogic.add_operation('getResume', this.getResume)
        this.Jsonlogic.add_operation('checkResumeJourney', this.checkResumeJourney)
        this.Jsonlogic.add_operation('getObjectKeyValue', this.getObjectKeyValue)
        this.Jsonlogic.add_operation('getArrayIndexValue', this.getArrayIndexValue)
        this.Jsonlogic.add_operation('checkArray', this.checkArray)
        this.Jsonlogic.add_operation('Array.find', this.findArray)
        this.Jsonlogic.add_operation('currencyFormatter',this.currencyFormatter)
        this.Jsonlogic.add_operation('getUrlParameter',this.geturlParams)
        this.Jsonlogic.add_operation('getLocalStorage',this.getLocalStorage)
        this.Jsonlogic.add_operation('removeLocalStorage',this.removeItemLs)
    }

    plus(array) {
        return array.reduce((partialSum, a) => partialSum + a, 0)
    }

    addValuestoDate(Date1, addingValue, addingMetric) {
        let object_Date: Date
        if (Date1 == null) {
            object_Date = new Date()
        } else {
            object_Date = new Date(Date1)
        }
        let result_Date
        switch (addingMetric) {
            case 'DAYS':
                result_Date = object_Date.setDate(object_Date.getDate() + addingValue).valueOf();
                break;
            case 'MONTHS':
                result_Date = object_Date.setMonth(object_Date.getMonth() + addingValue).valueOf();
                break;
            case 'WEEKS':
                result_Date = object_Date.setDate(object_Date.getDate() + (addingValue * 7)).valueOf();
                break;
            case 'YEARS':
                result_Date = object_Date.setMonth(object_Date.getMonth() + (addingValue * 12)).valueOf();
                break;
            case 'QUARTERS':
                result_Date = object_Date.setMonth(object_Date.getMonth() + (addingValue * 4)).valueOf();
                break;
            case 'HALFYEARLY':
                result_Date = object_Date.setMonth(object_Date.getMonth() + (addingValue * 6)).valueOf();
                break;
        }
        return result_Date
    }

    currentDate() {
        return Date.now().valueOf()
    }

    truncate(number, truncate_stripoffValue?) {
        return parseFloat(number).toFixed(truncate_stripoffValue ?? 3)
    }

    roundUp(number, decimal_ptr?) {
        if (decimal_ptr != undefined) {
            return Math.ceil(number * Math.pow(10, decimal_ptr)) / 100
        } else {
            return Math.ceil(number)
        }
    }

    roundDown(number, decimal_ptr?) {
        if (decimal_ptr != undefined) {
            return Math.floor(number * Math.pow(10, decimal_ptr)) / 100
        } else {
            return Math.floor(number)
        }
    }

    roundOff(number, decimal_ptr?) {
        if (decimal_ptr != undefined) {
            return Math.round(number * Math.pow(10, decimal_ptr)) / 100
        } else {
            return Math.round(number)
        }
    }

    regex(input_string, regex_string) {
        return new RegExp(regex_string).test(input_string)
    }

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

    length(input_string) {
        return String(input_string).length
    }

    maskData(input_string) {
        if (input_string != null || input_string != undefined) {
            let len_tobemasked = String(input_string).length - 4
            input_string = String(input_string)
            return `${input_string[0]}${input_string[1]}${'X'.repeat(len_tobemasked)}${input_string[input_string.length - 2]}${input_string[input_string.length - 1]}`
        } else {
            return null
        }
    }

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

    subFlowValue(masterkeyName) {
        let capturedData = document['jsonLogicRef'].localStorage.SessionGetItem('SUBFLOW').capturedData
        if (capturedData[masterkeyName]) {
            return capturedData[masterkeyName]
        } else {
            return null
        }
    }

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

    returnObject(data) {
        return data
    }

    findMasterObject(Mastercode, searchParam, searchValue, returnKey) {
        let data = document['jsonLogicRef'].localStorage.SessionGetItem('MASTER')[Mastercode]
        let dataObj = data.filter(e => e[searchParam] == searchValue)[0]
        if (dataObj) {
            return dataObj[returnKey]
        } else {
            return null
        }
    }

    findPinMasterObject(Mastercode, searchParam, searchValue, returnKey) {
        let data = JSON.parse(sessionStorage.getItem('PINMASTER'))[Mastercode]
        return data.filter(e => e[searchParam] == searchValue)[0][returnKey]
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
        let journey = document['jsonLogicRef'].localStorage.SessionGetItem('CURRENT_JOURNEY')
        if (journey.resumeJourney) {
            return true
        } else {
            return false
        }
    }

    getObjectKeyValue(key, value) {
        if (key) {
            if (key[value]) {
                return key[value]
            }
        }
        return null
    }

    getArrayIndexValue(value, index) {
        if (value) {
            if (value[index]) {
                return value[index]
            }
        }
        return null
    }

    checkArray(keyName) {
        let keyLength = Object.keys(keyName);
        if (keyLength.length > 1) {
            return true;
        } else {
            return false
        }
    }

    findArray(search, searchKey, array) {
        return array.find(f => f[searchKey] == search)
    }

    currencyFormatter(value){
        if(value!=''){
            const numberFormat = BigInt(String(value).replace(/,/g, '').replace('₹',''));
            let symbolized
            if(numberFormat.toString()!= 'NaN'){
                let format = {
                    countryEnum:'INDIAN_RUPEE',
                    symbol:'₹',
                    localeString:'en-IN'
                }
                let seperator = new Intl.NumberFormat(format.localeString).format(numberFormat)
                symbolized = `${format.symbol}${seperator}`
            }else{
                 symbolized = null
            }
            return symbolized
        }else{
            return null
        }
    
    }

    geturlParams(paramName){
        let query = window.location.href;
        let vars = query.split('?');
        if(vars.length> 1){
            let params = vars[1].split('&')
            for (const element of params) {
                let pair = element.split('=');
                if (decodeURIComponent(pair[0]) == paramName) {
                    return pair[1];
                }
            }
        }
       return null
    }

    getLocalStorage(keyName){
        return JSON.parse(sessionStorage.getItem(keyName))
    }

    removeItemLs(keyName){
        sessionStorage.removeItem(keyName)
        return null
    }
}
