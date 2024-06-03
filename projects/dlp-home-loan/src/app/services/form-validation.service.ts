import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})

export class FormValidationService {

    MainMandatorySystem(data) {
        let form = this.checkMandatoryFeilds(data)
        let custom_address_sanity;
        custom_address_sanity = this.checkAddressSanity(data)
        if (form === true && custom_address_sanity === true) {
            form = true
        } else {
            form = false
        }
        let error = this.checkErrors(data);
        let verfied = this.checkVerified(data)
        let allNonMandatory = this.checkAllNonMandatory(data)

        if (form === true && error === true) {
            form = true
        } else {
            form = false
        }

        if (form === true) {
            if (verfied === true) {
                return true;
            } else {
                return false;
            }
        } else {
            if (allNonMandatory === true && error === true) {
                return true;
            } else {
                return false;
            }
        }

    }

    checkAllNonMandatory(dynamicGroupList) {
        let nonMandatoyDatacount = 0, totallistcount = 0;

        dynamicGroupList.forEach(field => {
                    if (field.fieldDataType != 'ADDRESS') {
                        totallistcount += 1
                        if (field.isMandatory === false) {
                            nonMandatoyDatacount += 1
                        }
                    } else {
                        totallistcount += 1
                        if (!(field.addressFields.some(a => a.isMandatory === true))) {
                            nonMandatoyDatacount += 1
                        }
                    }
                });
           
        return totallistcount == nonMandatoyDatacount
    }

    checkVerified(data): boolean {
        const verificationData = [];

        data.forEach(field => {
            if (field.showField && field.fieldDataType !== 'ADDRESS') {
                if (field.verificationType != null && field.isMandatory === true && field.skipVerification !== true) {
                    verificationData.push({
                        fieldName: field.fieldName,
                        ok: field.isVerified || field.skipVerification === true
                    });
                }
            } else if (field.fieldDataType === 'ADDRESS') {
                field.addressFields.forEach(addressField => {
                    if (addressField.verificationType != null && addressField.isMandatory === true) {
                        verificationData.push({
                            fieldName: field.fieldName,
                            ok: addressField.isVerified || addressField.skipVerification === true
                        });
                    }
                });
            }
        });

        const failedVerifications = verificationData.filter(e => e.ok === false);

        return failedVerifications.length === 0;
    }

    checkErrors(data): boolean {
        return data
            .filter(field => field.showField)
            .every(field => {
                if (field.fieldDataType !== 'ADDRESS') {
                    return !field.error || field.error === 'null';
                } else {
                    return field.addressFields.every(addressField => !addressField.error || addressField.error === 'null');
                }
            });
    }

    mandatorySubFormMandatory(addresssubFieldStates,temp){
        let subformhasMandatory = addresssubFieldStates.some(t => t.isMandatory === true)
        if (subformhasMandatory === true) {
            let somesubfieldisFilled = addresssubFieldStates.some(t => t.ok === true)
            if (somesubfieldisFilled === true) {
              let subfieldmandatoryandnotfilled = addresssubFieldStates.some(t => t.isMandatory === true && t.ok === false)
              temp['ok'] = !subfieldmandatoryandnotfilled
            } else {
              temp['ok'] = true
            }
          } else {
            temp['ok'] = true
          }
        return temp
    }

    checkAddressSanity(data) {
        //this method is exclusive for checking the non mandatory addresses check
        let formState = false;
        let nonMandatoryAddressCount = 0
        let mandatoryAddressCount = 0
        let fieldStates = [];
            data.forEach((e) => {
                  if (e.showField===true && e.fieldDataType == 'ADDRESS' && e.isMandatory === false) {
                    let addresssubFieldStates = []
                    nonMandatoryAddressCount += 1
                    let temp = {
                      fieldLabel: e.fieldLabel,
                    }
                    addresssubFieldStates = this.getAddressSubFieldStates(e)
                   
                    //find out the sub form is touched or not
                    temp = this.mandatorySubFormMandatory(addresssubFieldStates,temp)
                    
                    fieldStates.push(temp)
                  } 
                  if(e.showField===true && e.fieldDataType == 'ADDRESS' && e.isMandatory !== false) {
                    let addresssubFieldStates = []
                    mandatoryAddressCount += 1
                    let temp = {
                      fieldLabel: e.fieldLabel
                    }
                    addresssubFieldStates = this.getAddressSubFieldStates(e)
                    //find out the 
                    let subformhasMandatory = addresssubFieldStates.some(t => t.isMandatory === true)
                    if (subformhasMandatory === true) {
                      let issomemandatoryisnotfilled = addresssubFieldStates.some(t => t.isMandatory === true && t.ok === false)
                      temp['ok'] = !issomemandatoryisnotfilled
                    } else {
                      let isanythingisfilled = addresssubFieldStates.some(t => t.ok === true)
                      temp['ok'] = isanythingisfilled;
                    }
                    fieldStates.push(temp)
                  }
              
            })
          
       
        formState = !fieldStates.some(t => t.ok === false)
        
        return formState
    }

    getAddressSubFieldStates(field): any[] {
    return field.addressFields.map(addressField => {
        return {
            fieldLabel: addressField.fieldLabel,
            isMandatory: addressField.isMandatory,
            ok: addressField.value != '' && addressField.value != null && addressField.value != undefined
        }
        })
    }
    checkMandatoryFeilds(data, _pattern?) {
        let mandatoryData: any[] = [];
        let nonMandatoyData = []
                data.forEach((field) => {
                    let temp: any = {
                        field: field.fieldLabel,
                        datatype: field.fieldDataType,
                    };
                    [mandatoryData, nonMandatoyData] = this.parseMandatoryCheckOnlyForShowFieldData(field, mandatoryData, nonMandatoyData, temp)
                });
            
        if (mandatoryData.length != 0) {
            let ok = JSON.parse(JSON.stringify(mandatoryData.filter(e => e.ok === true)))
            if (ok.length == mandatoryData.length) {
                let addresstypes = JSON.parse(JSON.stringify(nonMandatoyData.filter(e => e.datatype == 'ADDRESS')))
                if (addresstypes.length == 0) {
                    return true
                } else {
                    let t = JSON.parse(JSON.stringify(addresstypes.filter(e => e.ok === true)))
                    return t.length != 0
                }
            }
            return false

        } else {
            let ok = JSON.parse(JSON.stringify(nonMandatoyData.filter(e => e.ok === true)))
            if (ok.length != 0) {
                let adr = ok.filter(e => e.datatype == 'ADDRESS')
                if (adr.length == ok.length) {
                    let pdr = adr.filter(e => e.ok2 === true)
                    return pdr.length != 0
                } else {
                    return true
                }

            }
            return false

        }
    }

    parseMandatoryCheckOnlyForShowFieldData(field, mandatoryData, nonMandatoyData, temp) {
        if (field.showField === true) {
            if (field.fieldDataType != 'ADDRESS') {
                if (field.fieldDataType != 'CHECKBOX') {
                    [mandatoryData, nonMandatoyData] = this.filterMandatoryAndNonMandatory(field, mandatoryData, nonMandatoyData, temp)
                }
            } else {
                temp['ok'] = true
                mandatoryData.push(temp)
            }
        }
        return [mandatoryData, nonMandatoyData]
    }

    filterMandatoryAndNonMandatory(field, mandatoryData, nonMandatoyData, temp) {
        if (field.isMandatory === true && field.fieldAccessModifier != 'HIDDEN' && field.fieldDataType != 'HIDDEN') {
            if (field.fieldDataType == 'TEXT') {
                temp = this.checkMandatoryTextFields(field, temp)
            } else {
                temp = this.checkMandatoryNonTextFields(field, temp)
            }
            temp = this.checkMandatoryNumberFields(field, temp)
            mandatoryData.push(temp);
        } else {
            temp['ok'] = (field.value && field.value != "null" && field.value != null && field.value != "")
            nonMandatoyData.push(temp)
        }
        return [mandatoryData, nonMandatoyData]
    }

    checkMandatoryTextFields(field, temp) {
        if (field.showprefix) {
            temp['ok'] = (field.prefix && field.prefix != "null" && field.prefix != null && field.prefix != "") && (field.value && field.value != "null" && field.value != null && field.value != "")
        } else {
            temp['ok'] = field.value && field.value != "null" && field.value != null && field.value != ""
        }
        return temp
    }

    checkMandatoryNonTextFields(field, temp) {
        if (field.value && field.value != "null" && field.value != null && field.value != "") {
            temp['ok'] = true
        } else {
            temp['ok'] = ((field.fieldDataType == "TABLE" && field.value != undefined && field.value != null && field.value != '' && field.value.length > 0) || (field.fieldDataType == 'SECTION' || (field.fieldDataType == 'DOCUMENT' && field.value != null && field.uploaddone && field.uploaddone === true) || false))
        }
        return temp
    }

    checkMandatoryNumberFields(field, temp) {
        if (field.fieldDataType == 'NUMBER' && field.value == 0) {
            temp['ok'] = true
        }
        return temp
    }
}