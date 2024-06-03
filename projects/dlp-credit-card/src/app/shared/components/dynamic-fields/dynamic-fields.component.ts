import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { LogicFunctions } from '../../helpers/JsonLogic';
import { Formatters } from '../../helpers/Formatters';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import {MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { SharedService } from '../../services/utils/shared.service'
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { ArrayMethod } from '../../helpers/ArrayMethods';
import { LocalStorage } from '@cc-app/shared/helpers/localStorage';

@Component({
  selector: 'app-dynamic-fields',
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.scss']
})
export class DynamicFieldsComponent implements OnInit {

  @Input() dynamicGroupList;
  @Input() options;
  @Output() formValidity = new EventEmitter();
  @Output() formValue = new EventEmitter();
  @Input() validityCheck: Observable<void>;
  @Input() formValueEmit: Observable<void>;
  @Input() verificationExternalTrigger: Observable<void>;
  @Output() Status = new EventEmitter()
  @Output() otherEvents = new EventEmitter()
  showRadioIcon: boolean;
  radioIconStr: string = '';
  DropDownconfig = {}
  validitySubscription: Subscription;
  formValueSubscription: Subscription;
  externalTriggerSubscription: Subscription;
  journey
  showloader = false
  JsonLogic: LogicFunctions;
  ArrayMethods: ArrayMethod;
  dialog: MatDialog;
  constructor(public commonVariableService: CommonVariableService,
    public apiService: ApiService,
    public sharedService: SharedService,
    public formatters: Formatters,
    public commonService: CommonCommonService,
    private localStorage: LocalStorage,
    private injector: Injector) {
    this.dialog = this.injector.get<MatDialog>(MatDialog);
    this.formatters = this.injector.get<Formatters>(Formatters);
    this.ArrayMethods = this.injector.get<ArrayMethod>(ArrayMethod);
    this.JsonLogic = this.injector.get<LogicFunctions>(LogicFunctions);
    this.journey = this.commonService.getJourney()
  }
  ngOnInit(): void {
    this.dynamicGroupList = this.groupFieldBasedongroup(this.dynamicGroupList);
    this.mapCommonProperty(this.dynamicGroupList);
    this.dynamicGroupList = this.mapDependentParentLabels(
      this.dynamicGroupList
    );
    this.dynamicGroupList = this.mapDependentValidationAdditionalKeys(
      this.dynamicGroupList
    );
    this.dynamicGroupList = this.preFillDynamicGroupsDropDownSystem(
      this.dynamicGroupList
    );
    if (this.options.mapSupplyData) {
      this.dynamicGroupList = this.mapFormForEdit(this.dynamicGroupList);
    }
    this.dynamicGroupList = this.applyformulaCalculations(
      this.dynamicGroupList
    );
    this.checkColumnConfig();
    this.validitySubscriber();
    this.formValueSubscription = this.formValueEmit.subscribe(() =>
      this.extractDynamicFieldsFormData()
    );
    this.verificationExternalTriggercaller();
    this.dynamicGroupList = this.initialValueFormatting(this.dynamicGroupList);
    this.dropdownInputConfig();
    if (!this.options.mapSupplyData) {
      this.dynamicGroupList = this.copySearchArray(this.dynamicGroupList);
    }
    this.commonVariableService._journeyEvents.next();
  }

  private preFillDynamicGroupsDropDownSystem(data) {
    data.forEach((group) => {
      group.forEach((row) => {
        row.forEach((field) => {
          if (
            field.fieldDataType == "DROPDOWN" ||
            field.fieldDataType == "AUTO_COMPLETE"
          ) {
            this.preFillDynamicGroupsDropDownSystemCommonMapper(field);
          }
          if (field.fieldDataType == "ADDRESS") {
            field.addressFields = field.addressFields.map((addressField) => {
              if (
                addressField.fieldDataType == "DROPDOWN" ||
                addressField.fieldDataType == "AUTO_COMPLETE"
              ) {
                addressField =
                  this.preFillDynamicGroupsDropDownSystemCommonMapper(
                    addressField
                  );
              }
              return addressField;
            });
          }
        });
      });
    });
    return data;
  }

  private preFillDynamicGroupsDropDownSystemCommonMapper(_e) {
    if (_e.value != null && _e.value != undefined) {
      let selected = _e.options?.filter(
        (option) => option.optionName == _e.value
      );
      if (selected?.length > 0) {
        this.premapchildOption_v1(_e, selected[0]);
      }
    }
    return _e;
  }

  private premapchildOption_v1(data, option) {
    this.dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((e) => {
          if (
            e.fieldDataType == "DROPDOWN" ||
            e.fieldDataType == "AUTO_COMPLETE"
          ) {
            this.premapchildOption_v1CommonMapper(e, data, option);
          }
          if (e.fieldDataType == "ADDRESS") {
            e.addressFields = e.addressFields.map((addressField) => {
              if (
                addressField.fieldDataType == "DROPDOWN" ||
                addressField.fieldDataType == "AUTO_COMPLETE"
              ) {
                addressField = this.premapchildOption_v1CommonMapper(
                  addressField,
                  data,
                  option
                );
              }
              return addressField;
            });
          }
        });
      });
    });
  }

  private premapchildOption_v1CommonMapper(e, data, option) {
    if (e.dependentField == data.fieldName) {
      e["optionsnapShot"] = e.options.filter(
        (f) => f.optionParentCode == option.optionCode
      );
      e["searchoption"] = e["optionsnapShot"];
      if (e["searchoption"].length == 0) {
        e["noOptions"] = true;
      } else {
        e["noOptions"] = false;
      }
      if (e.value != null && e.value != undefined) {
        let selectedoption = e.options.filter((f) => f.optionName == e.value);
        this.premapchildOption_v1(e, selectedoption);
      }
    }
    return e;
  }

  private validitySubscriber() {
    this.validitySubscription = this.validityCheck?.subscribe(
      (isSubmitted: any) => {
        if (isSubmitted === true || isSubmitted == "PINGED") {
          this.checkFormState(undefined, isSubmitted);
        }
      }
    );
  }

  private verificationExternalTriggercaller() {
    this.externalTriggerSubscription =
      this.verificationExternalTrigger?.subscribe((data: any) => {
        this.dynamicGroupList.forEach((group) => {
          group.forEach((row) => {
            row.forEach((field) => {
              if (field.fieldName == data.fieldName) {
                this.dynamicGroupList.forEach((group1) => {
                  group1.forEach((row1) => {
                    row1.forEach((e1) => {
                      if (e1.fieldName == field.verificationFieldName) {
                        e1.options["value"] = field.value;
                        e1.options.loanProduct =
                          this.commonService.getJourney().product;
                        e1.showField = true;
                      }
                    });
                  });
                });
              }
            });
          });
        });
      });
  }
  dropdownInputConfig() {
    this.DropDownconfig = {
      search: true,
      height: '400px',
      noResultsFound: 'No results found!',
      displayKey: 'optionName',
    }
  }

  ngOnChanges(simpleChange) {

    if (simpleChange.options) {
      if (!simpleChange.options.firstChange) {
        if (this.options.mapSupplyData) {
          this.dynamicGroupList = this.mapFormForEdit(this.dynamicGroupList)
        }
        this.dynamicGroupList = this.applyformulaCalculations(this.dynamicGroupList)
      }
    }
  }

  private checkChildFilled(data) {
    data.forEach((group) => {
      group.forEach((row) => {
        row.forEach((field) => {
          field = this.mapParentFilledKey(field, data);

          if (field.fieldDataType == "ADDRESS") {
            field.addressFields = field.addressFields.map((addressField) => {
              addressField = this.mapParentFilledKey(addressField, data);
              return addressField;
            });
          }
        });
      });
    });
    return data;
  }

  private mapParentFilledKey(field, data) {
    if (
      field.fieldDataType == "DROPDOWN" ||
      field.fieldDataType == "AUTO_COMPLETE"
    ) {
      if (field.dependentField != null) {
        let status = this.getchildFieldStatus(data, field.dependentField);
        if (status != null && status != undefined) {
          field["isParentFilled"] = true;
        } else {
          field["isParentFilled"] = false;
        }
      } else {
        field["isParentFilled"] = null;
      }
    }
    return field;
  }

  private getchildFieldStatus(data, dependentField) {
    let returnval;
    data.forEach((group) => {
      group.forEach((row) => {
        row.forEach((field) => {
          returnval = this.getDependentFieldValue(
            field,
            returnval,
            dependentField
          );
          if (field.fieldDataType == "ADDRESS") {
            field.addressFields.forEach((addressField) => {
              returnval = this.getDependentFieldValue(
                addressField,
                returnval,
                dependentField
              );
              if (
                addressField.fieldDataType == "DROPDOWN" ||
                addressField.fieldDataType == "AUTO_COMPLETE"
              ) {
                if (addressField.fieldName == dependentField) {
                  returnval = addressField.value;
                }
              }
            });
          }
        });
      });
    });
    return returnval;
  }

  private getDependentFieldValue(field, returnval, dependentField) {
    if (
      field.fieldDataType == "DROPDOWN" ||
      field.fieldDataType == "AUTO_COMPLETE"
    ) {
      if (field.fieldName == dependentField) {
        returnval = field.value;
      }
    }
    return returnval;
  }

  groupFieldBasedongroup(dynamicGroupList) {
    let grouplist = []
    let unique = dynamicGroupList
        .map(item => item.groupIndex)
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort((a, b) => a - b);
    grouplist = unique.map(group => {
        let fields: any = []
        if (group !== undefined) {
            let filtered = dynamicGroupList.filter(field => field.groupIndex == group)
            fields.push(filtered)
            fields['groupName'] = filtered[0].groupName
            return fields
        }
    })
    return grouplist
  }

  initialValueFormatting(dynamicGroupList) {
    dynamicGroupList.forEach(group => {
      group.forEach(row => {
        row.forEach(field => {
          field = this.initialFormatFields(field)
          if (field.verificationType == 'EMAIL') {
            if (field.value != null) {
              field.verifyDisable = true
            } else {
              field.verifyDisable = false
            }
          }
          if (field.fieldDataType == 'ADDRESS') {
            field.addressFields = field.addressFields.map(addressField => {
              addressField = this.initialFormatFields(addressField)
              return addressField
            })
          }
        })
      })
    })
    return dynamicGroupList
  }

  private initialFormatFields(field) {
    switch (field.fieldDataType) {
      case "PAN_CARD":
        if (field.value != null) {
          field.panNumberFirst = field.value.substring(0, 5);
          field.panNumberSecond = field.value.substring(5, 9);
          field.panNumberThird = field.value.substring(9, 10);
        }
        break;
      case "AADHAR":
        if (field.value != null) {
          if (Number.isInteger(field.value)) {
            field.value = String(field.value);
          }
          field.aadhaarNumberFirst = field.value.substring(0, 4);
          field.aadhaarNumberSecond = field.value.substring(4, 8);
          field.aadhaarNumberThird = field.value.substring(8, 12);
        }
        break;
      case "ACCOUNT_NO":
        if (field.value != null) {
          field.panNumberFirst = field.value.substring(0, 3);
          field.panNumberSecond = field.value.substring(3, 7);
          field.panNumberThird = field.value.substring(7, 15);
        }
        break;
      case "DATE":
        field.maxDate = this.checkMaxMinDate(field.maxDate);
        field.minDate = this.checkMaxMinDate(field.minDate);
        break;
      case "BOOLEAN":
        field.value = field.value ?? false;
        break;
      case "AUTOCOMPLETE":
        field.valueWithoutFormatting = [];
        field.valueWithoutFormatting.push(field.value);
        break;
    }
    return field;
  }

  checkMaxMinDate(data) {
    if (data != null) {
      let len = data.length
      if (len == 3) {
        return this.checkMaxMinDateLength3(data);
      }
      if (len == 4) {
        return this.checkMaxMinDateLength4(data);
      }
      if (len > 4) {
        return this.checkMaxMinDateLengthMoreThen4(data)
      }
      return null
    }
  }

  checkMaxMinDateLengthMoreThen4(data) {
    let altDate = null;
    if (data[3]) {
      altDate = new Date;
    } else if (!data[3]) {
      if (data[0] != null && data[1] != null && data[2] != null) {
        altDate = this.dateFromIndex(data);
      }
    }
    if (data[4] != null) {
      return new Date(altDate.setFullYear(altDate.getFullYear() + data[4]))
    }
    if (data[5] != null) {
      return new Date(altDate.setMonth(altDate.getMonth() + data[5]))
    }
    if (data[6] != null) {
      return new Date(altDate.setDate(altDate.getDate() + data[6]))
    }
    return altDate;
  }

  checkMaxMinDateLength4(data) {
    if (data[3]) {
      return new Date()
    } else if (!data[3]) {
      if (data[0] != null && data[1] != null && data[2] != null) {
        return this.dateFromIndex(data);
      }
    }
  }

  checkMaxMinDateLength3(data) {
    if (data[0] != null && data[1] != null && data[2] != null) {
      return this.dateFromIndex(data);
    }
  }

  dateFromIndex(data) {
    return new Date(data[0], (data[1] - 1), data[2])
  }

  //otp,aadhar
  preview(field) {
    field.isPreview = !field.isPreview
    switch (field.fieldDataType) {
      case 'OTP':
        field.OtpMasking = !field.OtpMasking
        break;
      case 'AADHAR':
        field.Masking = !field.Masking
        break;
      case 'ACCOUNT_NO':
        field.Masking = !field.Masking
        break;
    }
  }

  //checkbox
  check(e) {
    e.preventDefault();
    e.stopPropagation();
  }


  //dropdown
  dropdownChange(field) {
    let option = field.options.find(e => e.optionKey == field.value);
    if (option == undefined) {
      this.resetoptions_v2(field)
    } else {
      this.mapchildOption_v1(field, option)
    }
    this.checkFormState(true)
    this.extractDynamicFieldsFormData();

    if (field.ClearTrigger === true)
      this.mapClearLogic(field);
  }

  //slider 
  formatLabel(value, item) {

    return value + item.suffix;
  }
  //focus system number
  MultiInputFocusSystem(event, val, id, parentId) {
    let element: any = document.getElementById(parentId).children[id];
    if (event.code !== 'Backspace') {
      if (element.getAttribute('maxlength') == val.length) {
        element = event.srcElement.nextElementSibling;
      } else {
        return;
      }
    }

    if (event.code === 'Backspace') {
      if (val.length == 0) {
        element = event.srcElement.previousElementSibling;
      } else {
        return;
      }
    }

    if (element == null)
      return;
    else
      element.focus();

  }
  panNumberMerge(field) {
    field.value = ((field.panNumberFirst ? field.panNumberFirst : "") + (field.panNumberSecond ? field.panNumberSecond : "") + (field.panNumberThird ? field.panNumberThird : ""))
  }
  accountNumberMerge(field) {
    field.value = (field.accountNumberFirst ? field.accountNumberFirst : "") + (field.accountNumberSecond ? field.accountNumberSecond : "") + (field.accountNumberThird ? field.accountNumberThird : "")

  }

  //aadharnumber
  aadharNumberMerge(field) {
    field.value = (field.aadhaarNumberFirst ? field.aadhaarNumberFirst : "") + (field.aadhaarNumberSecond ? field.aadhaarNumberSecond : "") + (field.aadhaarNumberThird ? field.aadhaarNumberThird : "")
  }


  beforeChange($event, field, previousValue) {
    if (field.valueChangeConfirm) {
      let logicvariables = this.fetchLogicVaraiables(field.changeConfirmLogic)
      let logicvariablesData = this.fetchlogicvariableData(this.dynamicGroupList, logicvariables)
      if (field.value === null) {
        previousValue = $event.target.value
      }
      logicvariablesData[field.fieldName] = $event.target.value

      let calVal = this.applyJsonLogic(field.changeConfirmLogic, logicvariablesData)

      if (calVal === true) {
        let dialogRef = this.dialog.open(PopupComponent, {
          width: '50%',
          height: 'auto',
          disableClose: true,
          role: "dialog",
          ariaLabel: "popup",
          data: {
            title: field.changeConfimContent.title,
            actionItems: field.changeConfimContent.actionItems,
            popupContent: field.changeConfimContent.sectionContent,
            field: field
          }
        })
        dialogRef.afterClosed().subscribe(res => {
          if (res.actionKey === true) {
            field.value = previousValue
            this.validationCheck(field);
            this.formulamapping(field)
          }
        })
      }
    }
  }
  //oninput
  validationCheck(field, verificationTrigger?) {
    if (field.isMandatory === true) {
      field = this.validationCheckForMandatory(field, verificationTrigger);
    } else {
      field = this.checkMinMax(field);

      if (field.error == null) {
        field = this.checkRegex(field);
      }
    }
    this.extractDynamicFieldsFormData();
    return field;
  }

  private validationCheckForMandatory(field, verificationTrigger) {
    field = this.checkFilling(field);
    if (field.error == null) {
      field = this.checkMinMax(field);
    }
    if (field.error == null) {
      field = this.checkRegex(field);
      if (field.fieldDataType == "MOBILE_NO") {
        field = this.validateMobileNumber(field);
      }
      if (field.fieldDataType == "NUMBER" && field.isAccountNumber) {
        if (field.value.length != 15 || field.value.length == null) {
          field.error = "Account Number should be 15 digits.";
        } else if (field.value.length == 15) {
          field.error = "";
        }
      }
    }
    if (
      verificationTrigger &&
      (field.error == null || field.prefixError == null)
    ) {
      field = this.checkfieldVerification(field);
    }
    return field;
  }

  private validateMobileNumber(field) {
    let pattern;
    if (field.maxLength === 10 || field.maxLength == null) {
      pattern = /^[6789]\d{0,9}$/;
    } else {
      pattern = new RegExp("^[6789]{1}[0-9]{0," + (field.maxLength - 1) + "}$");
    }
    if (pattern.test(field.value) === false) {
      if (
        field.regexMessage != null &&
        field.regexMessage != undefined &&
        field.regexMessage != ""
      ) {
        field.error = field.regexMessage;
      } else {
        field.error = "Mobile Number is not valid";
      }
    }

    return field;
  }

  checkfieldVerification(field) {
    if (field.verificationType && !field.isVerified) {
      if (field.prefix == null || field.prefix == "") {
        field.prefixError = `${field.prefixfieldName} Verification is Required`
      }
      field.error = `${field.fieldLabel} Verification is Required`
      this.sharedService.openSnackBar(`${field.fieldLabel} Verification is Required`)
    } else {
      //field.error = null
    }
    return field
  }
  //checkFilling
  checkFilling(field) {
    if (field.fieldDataType == "TEXT") {
      this.checkFillingText(field);
    } else {
      if (!field.value) {
        field.error = `${field.fieldLabel} is required`;
      } else {
        if (field.fieldDataType == "AUTO_COMPLETE") {
          if (field.value.length == 0) {
            field.error = `${field.fieldLabel} is required`;
          } else {
            field.error = null;
          }
        } else {
          field.error = null;
        }
      }
    }
    return field;
  }

  private checkFillingText(field) {
    if (field.showprefix === true) {
      if (!field.value || !field.prefix) {
        field.error = `${field.fieldLabel} is required`;
        field.prefixError = `${field.prefixfieldName} is required`;
      }
      if (field.prefix) {
        field.prefixError = null;
      }
      if (field.value) {
        field.error = null;
      }

    } else {
      if (!field.value) {
        field.error = `${field.fieldLabel} is required`;
      } else {
        field.error = null;
      }
    }
  }
  //min max check
  checkMinMax(field) {
    if (field.isMandatory === true) {
      if (["TEXT", "TEXT_AREA", "MOBILE_NO"].includes(field.fieldDataType)) {
        field = this.checkMinMaxOtherTypes(field);
      } else {
        field = this.checkMinMaxNumberTypes(field);
      }
    } else {
      field = this.checkMinMaxForNonMandatoryFields(field);
    }
    return field;
  }

  private checkMinMaxOtherTypes(field) {
    let length = field.value?.length;
    if (length || length == 0) {
      if (length < field.minLength && field.minLength != null) {
        field.error = `${field.fieldLabel} should be atleast ${field.minLength} characters`;
      } else {
        field.error = null;
      }
      if (field.error == null) {
        if (length > field.maxLength && field.maxLength != null) {
          field.error = `${field.fieldLabel} should not exceed ${field.maxLength} characters`;
        } else {
          field.error = null;
        }
      }
    }

    return field;
  }

  private checkMinMaxForNonMandatoryFields(field) {
    if (field.value != null && field.value != "") {
      field = this.checkMinMaxForNonMandatoryFieldsOtherTypes(field);
    } else {
      field = this.checkMinMaxForReturnedErrors(field);
    }
    return field;
  }

  private checkMinMaxNumberTypes(field) {
    if (field.fieldDataType == "NUMBER") {
      if (field.value < field.minLength && field.minLength != null) {
        field.error = `${field.fieldLabel} should be atleast ${field.minLength}`;
      } else {
        field.error = null;
      }
      if (field.error == null) {
        if (field.value > field.maxLength && field.maxLength != null) {
          field.error = `${field.fieldLabel} should not exceed ${field.maxLength}`;
        } else {
          field.error = null;
        }
      }
    }
    return field;
  }

  private checkMinMaxForNonMandatoryFieldsOtherTypes(field) {
    if (["TEXT", "TEXT_AREA", "MOBILE_NO"].includes(field.fieldDataType)) {
      field = this.checkMinMaxOtherTypes(field);
    } else {
      field = this.checkMinMaxNumberTypes(field);
    }
    return field;
  }

  private checkMinMaxForReturnedErrors(field) {
    if (["TEXT", "TEXT_AREA", "MOBILE_NO"].includes(field.fieldDataType)) {
      if (
        field.error ===
        `${field.fieldLabel} should be atleast ${field.minLength} characters` ||
        field.error ===
        `${field.fieldLabel} should not exceed ${field.maxLength} characters`
      ) {
        field.error = null;
      }
    } else {
      if (field.fieldDataType == "NUMBER") {
        if (
          field.error ===
          `${field.fieldLabel} should be atleast ${field.minLength}` ||
          field.error ===
          `${field.fieldLabel} should not exceed ${field.maxLength}`
        ) {
          field.error = null;
        }
      }
    }
    return field;
  }
  //check regex
  checkRegex(field) {
    if (field.regex != null) {
      let regex = new RegExp(field.regex);
      if (field.value != null && field.value != "") {
        if (!regex.test(field.value)) {
          field.error =
            field.regexErrorMessage || `Invalid ${field.fieldLabel}`;
        } else {
          field.error = null;
        }
      } else {
        if (field.error) {
          field.error = null;
        }
      }
    }
    return field;
  }

  // component config related
  checkColumnConfig() {
    if (this.options != undefined) {
      if (!("columnSize" in this.options)) {
        Object.assign(this.options, {
          columnSize:
            this.commonVariableService.dynamicComponentLayout.columnSize,
        });
      }
    }
  }

  //dependent field functions
  //functions related to dynamic fields
  copySearchArray(data) {
    data.forEach((group) => {
      group.forEach((row) => {
        row.forEach((field) => {
          field = this.copySearchArrayDropdownCommonMapper_l2(field);
          if (field.fieldDataType == "TABLE") {
            field.value = field.value.map((val) => {
              val = val.map((v) => {
                v = this.copySearchArrayDropdownCommonMapper_l2(v);
                return v;
              });
              return val;
            });
            field = this.copySearchArrayDropdownCommonMapper_l1(
              field,
              "tableFields"
            );
          }
          if (field.fieldDataType == "ADDRESS") {
            field = this.copySearchArrayDropdownCommonMapper_l1(
              field,
              "addressFields"
            );
            return field;
          }
        });
      });
    });
    data = this.checkChildFilled(data);
    return data;
  }

  private copySearchArrayDropdownCommonMapper_l2(e) {
    if (e.fieldDataType == "DROPDOWN" || e.fieldDataType == "AUTO_COMPLETE") {
      e = this.copySearchArrayDropdownCommonMapper(e);
    }
    return e;
  }

  private copySearchArrayDropdownCommonMapper_l1(e, keyName) {
    e[keyName] = e[keyName].map((field) => {
      if (
        field.fieldDataType == "DROPDOWN" ||
        field.fieldDataType == "AUTO_COMPLETE"
      ) {
        field = this.copySearchArrayDropdownCommonMapper(field);
      }
      return field;
    });
    return e;
  }

  copySearchArrayDropdownCommonMapper(field) {
    if (field.dependentField != null) {
      field["searchoption"] = [];
      field["optionsnapShot"] = field["searchoption"];
    } else {
      field["searchoption"] = field.options;
      field["optionsnapShot"] = field["searchoption"];
    }
    return field;
  }

  resetOptions_v2CommonMapper(e, data) {
    if (e.dependentField == data.fieldName) {
      e.isParentFilled = false
      if (e.value != null && e.value != undefined) {
        e.value = undefined
        if (e.fieldDataType == "AUTO_COMPLETE") {
          e.displayValue = e.value
        }
        e = this.validationCheck(e);
        e['searchoption'] = []
        e['noOptions'] = false
        this.resetoptions_v2(e)
      } else {
        e['searchoption'] = []
        e['noOptions'] = false
      }
    }
    return e;
  }

  resetoptions_v2(data) {
    this.dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((e) => {
          if (e.fieldDataType == 'DROPDOWN' || e.fieldDataType == 'AUTO_COMPLETE') {
            e = this.resetOptions_v2CommonMapper(e, data)
          }
          if (e.fieldDataType == 'ADDRESS') {
            e.addressFields = e.addressFields.map(addressField => {
              if (addressField.fieldDataType == 'DROPDOWN' || addressField.fieldDataType == 'AUTO_COMPLETE') {
                addressField = this.resetOptions_v2CommonMapper(addressField, data)
              }
              return addressField
            })
          }
        })
      })
    })
  }

  private mapchildOption_v1(data, option, valueresetted?) {
    this.dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((e) => {
          if (
            e.fieldDataType == "DROPDOWN" ||
            e.fieldDataType == "AUTO_COMPLETE"
          ) {
            e = this.mapchildOption_v1CommonMapper(
              e,
              data,
              option,
              valueresetted
            );
          }
          if (e.fieldDataType == "ADDRESS") {
            e.addressFields = e.addressFields.map((addressField) => {
              if (
                addressField.fieldDataType == "DROPDOWN" ||
                addressField.fieldDataType == "AUTO_COMPLETE"
              ) {
                addressField = this.mapchildOption_v1CommonMapper(
                  addressField,
                  data,
                  option,
                  valueresetted
                );
              }
              return addressField;
            });
          }
        });
      });
    });
  }

  mapchildOption_v1CommonMapper(e, data, option, valueresetted) {
    if (e.dependentField == data.fieldName) {
      if (option == undefined) {
        e['optionsnapShot'] = []
      } else {
        e['optionsnapShot'] = e.options?.filter(f => f.optionParentCode == option.optionCode)
      }
      e['searchoption'] = e['optionsnapShot']
      if (e['searchoption'].length == 0) {
        e['noOptions'] = true
      } else {
        e['noOptions'] = false
      }
      e.isParentFilled = true

      e = this.mapchildOption_v1CommonMapperForAutocomplete(e, data, valueresetted)

    }
    return e
  }

  mapchildOption_v1CommonMapperForAutocomplete(e, data, valueresetted) {
    if (e.value != null && e.value != undefined) {
      let selectedoption = e.options?.filter(f => f.optionName == e.value)
      e.value = undefined
      if (e.fieldDataType == "AUTO_COMPLETE") {
        e.displayValue = e.value
      }
      e = this.validationCheck(e)
      this.mapchildOption_v1(e, selectedoption[0], true)
    }
    if ((!(data.value != null && data.value != undefined)) || valueresetted === true) {
      e.isParentFilled = false
      e.searchoption = []
    }

    return e;
  }

  mapDependentParentLabels(data) {
    data.forEach((group) => {
      group.forEach((row) => {
        row.forEach((e) => {
          if (
            e.fieldDataType == "DROPDOWN" ||
            e.fieldDataType == "AUTO_COMPLETE"
          ) {
            e = this.mapDependentParentLabelsCommonMapper(e, data);
          }
          if (e.fieldDataType == "ADDRESS") {
            e.addressFields = e.addressFields.map((addressField) => {
              if (
                addressField.fieldDataType == "DROPDOWN" ||
                addressField.fieldDataType == "AUTO_COMPLETE"
              ) {
                addressField = this.mapDependentParentLabelsCommonMapper(
                  addressField,
                  data
                );
              }
              return addressField;
            });
          }
        });
      });
    });
    return data;
  }

  private mapDependentParentLabelsCommonMapper(e, data) {
    if (e.dependentField != null) {
      this.getchildLabel(data, e.dependentField, e);
    } else {
      e["dependentParentLabel"] = null;
    }
    return e;
  }

  getchildLabel(data, dependentField, parent): any {
    data.forEach((group) => {
      group.forEach((row) => {
        row.forEach((e) => {
          if (
            e.fieldDataType == "DROPDOWN" ||
            e.fieldDataType == "AUTO_COMPLETE"
          ) {
            e = this.getChildLabels(e, dependentField, parent);
          }
          if (e.fieldDataType == "ADDRESS") {
            e.addressFields = e.addressFields.map((addressField) => {
              if (
                addressField.fieldDataType == "DROPDOWN" ||
                addressField.fieldDataType == "AUTO_COMPLETE"
              ) {
                addressField = this.getChildLabels(
                  addressField,
                  dependentField,
                  parent
                );
              }
              return addressField;
            });
          }
        });
      });
    });
  }

  getChildLabels(e, dependentField, parent) {
    if (e.fieldName == dependentField) {
      parent["dependentParentLabel"] = e.fieldLabel;
    }
    return e;
  }

  //common functionality methods
  //method to get fieldname property values
  findFieldNamevalue(fieldName, property?, customDynamicList?) {
    const dataList = customDynamicList || this.dynamicGroupList.flat(Infinity);
    for (const field of dataList) {
      if (field.fieldName === fieldName) {
        return this.mapForNormalField(field, property);
      }
      if (field.fieldDataType == "ADDRESS") {
        let findAddr = field.addressFields.find(
          (addressField) => addressField.fieldName === fieldName
        );
        if (findAddr) {
          return property === undefined || property === "ALL"
            ? findAddr
            : findAddr?.[property];
        }
      }
    }

    return undefined;
  }

  private mapForNormalField(field, property) {
    return property === undefined || property === "ALL"
      ? field
      : field[property];
  }

  ///validation json functions
  runValidationJson(
    field,
    initialLoad?,
    skip_calculation?,
    customDynamicList?,
    initialLoadRulesForCall?
  ) {
    for (const specifiers in field.validationJson) {
      switch (specifiers) {
        case "default":
          field = this.runValidationDefault(
            field,
            initialLoad,
            customDynamicList
          );
          break;
        case "copy_Value":
          field = this.runValidationCopyValue(field, customDynamicList);
          break;
        case "calculation":
          field = this.runValidationCalculation(
            field,
            initialLoad,
            skip_calculation,
            customDynamicList
          );
          break;
        case "calculationOnInitialState":
          field = this.runValidationCalculationOnInitialState(
            field,
            initialLoad
          );
          break;
        case "dateCalculation":
          field = this.runValidationDateCalculation(field, initialLoad);
          break;
        case "mandatory":
          field = this.runValidationMandatory(field, customDynamicList);
          break;
        case "disable":
          field = this.runValidationDisable(field, customDynamicList);
          break;
        case "validation":
          if (initialLoad == undefined) {
            field = this.runValidationValidation(
              field,
              initialLoad,
              customDynamicList
            );
          }
          break;
        case "showField":
          field = this.runValidationShowField(field, customDynamicList);
          break;
        case "property":
          field = this.runValidationProperty(field, customDynamicList);
          break;
        case "apiEndpoint":
          field = this.runValidationApiEndpoint(
            field,
            initialLoad,
            customDynamicList,
            skip_calculation,
            initialLoadRulesForCall
          );
          break;
        case "currentDate":
          field = this.runValidationCurrentDate(field, customDynamicList);
          break;
      }
    }
    this.extractDynamicFieldsFormData();
    return field;
  }

  private runValidationDefault(field, initialLoad, customDynamicList) {
    if (initialLoad === true && (field.value === null || field.value === "")) {
      field.logicvariables = this.fetchLogicVaraiables(
        field.validationJson.default
      );
      field.jsonlogicData = this.fetchlogicvariableData(
        customDynamicList ? customDynamicList : this.dynamicGroupList,
        field.logicvariables
      );
      field.value = this.applyJsonLogic(
        field.validationJson.default,
        field.jsonlogicData
      );
      field.value = this.returnParsevalues(field, undefined, true);
      if (field.fieldDataType == "AUTO_COMPLETE") field.displayValue = field.value
      if (initialLoad === undefined) {
        field = this.validationCheck(field);
      }
    }
    return field;
  }

  private runValidationCopyValue(field, customDynamicList) {
    field.value = this.findFieldNamevalue(
      field.copy_Value.var,
      undefined,
      customDynamicList
    );
    field = this.validationCheck(field);
    return field;
  }

  private runValidationCalculation(
    field,
    initialLoad,
    skip_calculation,
    customDynamicList
  ) {
    if (initialLoad === undefined && skip_calculation === undefined) {
      field.logicvariables = this.fetchLogicVaraiables(
        field.validationJson.calculation
      );
      field.jsonlogicData = this.fetchlogicvariableData(
        customDynamicList ? customDynamicList : this.dynamicGroupList,
        field.logicvariables
      );
      const calculatedValue = this.applyJsonLogic(
        field.validationJson.calculation,
        field.jsonlogicData
      );
      field.value = this.returnParsevalues(field, calculatedValue);
      if (initialLoad === undefined) {
        field = this.validationCheck(field);
      }
    }
    return field;
  }

  private runValidationCalculationOnInitialState(field, initialLoad) {
    if (initialLoad === undefined) {
      field.logicvariables = this.fetchLogicVaraiables(
        field.validationJson.calculationOnInitialState
      );
      field.jsonlogicData = this.fetchlogicvariableData(
        field.logicvariables,
        true
      );
      const calculatedValue = this.applyJsonLogic(
        field.validationJson.calculationOnInitialState,
        field.jsonlogicData
      );
      field.value = this.returnParsevalues(field, calculatedValue);
      if (initialLoad === undefined) {
        field = this.validationCheck(field);
      }
    }
    return field;
  }

  private runValidationDateCalculation(field, initialLoad) {
    if (initialLoad === undefined) {
      field.logicvariables = this.fetchLogicVaraiables(
        field.validationJson.dateCalculation
      );
      field.jsonlogicData = this.fetchLogicVariableDataForDateCalculation(
        this.dynamicGroupList,
        field.logicvariables
      );
      const calculatedValue = this.applyJsonLogic(
        field.validationJson.dateCalculation,
        field.jsonlogicData
      );
      field.value = this.returnParsevalues(field, calculatedValue);
      if (initialLoad === undefined) {
        field = this.validationCheck(field);
      }
    }
    return field;
  }

  private runValidationMandatory(field, customDynamicList) {
    field.logicvariables = this.fetchLogicVaraiables(
      field.validationJson.mandatory
    );
    field.jsonlogicData = this.fetchlogicvariableData(
      customDynamicList ? customDynamicList : this.dynamicGroupList,
      field.logicvariables
    );
    field.isMandatory = this.applyJsonLogic(
      field.validationJson.mandatory,
      field.jsonlogicData
    );
    return field;
  }

  private runValidationValidation(field, _initialLoad, customDynamicList) {
    field.logicvariables = this.fetchLogicVaraiables(
      field.validationJson.validation
    );
    field.jsonlogicData = this.fetchlogicvariableData(
      customDynamicList ? customDynamicList : this.dynamicGroupList,
      field.logicvariables
    );
    const state = this.applyJsonLogic(
      field.validationJson.validation,
      field.jsonlogicData
    );
    if (state === false) {
      if (field.validationJson.validationError) {
        field.logicvariables_temp = this.fetchLogicVaraiables(
          field.validationJson.validationError
        );
        field.jsonlogicData_temp = this.fetchlogicvariableData(
          this.dynamicGroupList,
          field.logicvariables_temp
        );
        field.error = this.applyJsonLogic(
          field.validationJson.validationError,
          field.jsonlogicData_temp
        );
      }
      if (field.validationJson.validationWithSnackbar) {
        field.logicvariables_temp = this.fetchLogicVaraiables(
          field.validationJson.validationWithSnackbar
        );
        field.jsonlogicData_temp = this.fetchlogicvariableData(
          this.dynamicGroupList,
          field.logicvariables_temp
        );
        const message = this.applyJsonLogic(
          field.validationJson.validationWithSnackbar,
          field.jsonlogicData_temp
        );
        if (message != null) {
          this.sharedService.openSnackBar(message);
        }
      }
    } else {
      field.error = "";
      this.validationCheck(field);
    }

    return field;
  }

  private runValidationDisable(field, customDynamicList) {
    field.logicvariables = this.fetchLogicVaraiables(
      field.validationJson.disable
    );
    field.jsonlogicData = this.fetchlogicvariableData(
      customDynamicList ? customDynamicList : this.dynamicGroupList,
      field.logicvariables
    );
    field.state = this.applyJsonLogic(
      field.validationJson.disable,
      field.jsonlogicData
    );
    field = this.mapDisableLogic(field);
    return field;
  }

  private runValidationShowField(field, _customDynamicList) {
    field.logicvariables = this.fetchLogicVaraiables(
      field.validationJson.showField
    );
    field.jsonlogicData = this.fetchlogicvariableData(
      this.dynamicGroupList,
      field.logicvariables
    );
    const res = this.applyJsonLogic(
      field.validationJson.showField,
      field.jsonlogicData
    );
    field.showField = res;
    if (res === false) {
      if (field.fieldDataType === "TABLE") {
        field.value = [];
      } else {
        field.value = null;
      }
    }
    return field;
  }

  private runValidationProperty(field, customDynamicList) {
    for (const property in field.validationJson.property) {
      field.logicvariables = this.fetchLogicVaraiables(
        field.validationJson.property[property]
      );
      field.jsonlogicData = this.fetchlogicvariableData(
        customDynamicList ? customDynamicList : this.dynamicGroupList,
        field.logicvariables
      );
      field[property] = this.applyJsonLogic(
        field.validationJson.property[property],
        field.jsonlogicData
      );
    }

    return field;
  }

  private runValidationApiEndpoint(
    field,
    initialLoad,
    customDynamicList,
    skip_calculation,
    initialLoadRulesForCall
  ) {
    if (initialLoadRulesForCall == undefined) {
      field.logicvariables = this.fetchLogicVaraiables(
        field.validationJson.apiEndpoint
      );
      field.jsonlogicData = this.fetchlogicvariableData(
        customDynamicList ? customDynamicList : this.dynamicGroupList,
        field.logicvariables
      );
      const value = this.applyJsonLogic(
        field.validationJson.apiEndpoint,
        field.jsonlogicData
      );
      if (value) {
        if (value !== "REJECT_CALL") {
          this.callEndPointLogic(
            value,
            initialLoad,
            skip_calculation,
            field.validationJson.showLoaderOnEndpoints, field
          );
        }
      }
    }
    return field;
  }

  private runValidationCurrentDate(field, customDynamicList) {
    field.logicvariables = this.fetchLogicVaraiables(
      field.validationJson.currentDate
    );
    field.jsonlogicData = this.fetchlogicvariableData(
      customDynamicList ? customDynamicList : this.dynamicGroupList,
      field.logicvariables
    );
    field.value = this.applyJsonLogic(
      field.validationJson.currentDate,
      field.jsonlogicData
    );
    field.value = this.returnParsevalues(field, field.value);
  }

  applyJsonLogic(validationJson, supplyData) {
    return this.JsonLogic.Jsonlogic.apply(validationJson, supplyData)
  }

  fetchLogicVaraiables(logic) {
    let variableArray = []
    variableArray = this.recursiveSearch(logic, 'var')
    variableArray = variableArray.filter(e => !e.includes("current.") && !e.includes("accumulator"))

    return variableArray
  }
  recursiveSearch = (obj, searchKey, results = []) => {
    const r = results;
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      if (key === searchKey && typeof value !== 'object') {
        r.push(value);
      } else if (typeof value === 'object' && value != null) {
        this.recursiveSearch(value, searchKey, r);
      }
    });
    return r;
  };

  fetchlogicvariableData(dynamicGroupList, logicvariables, initialValue?) {
    let data = {};
    dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((field) => {
          if (field.fieldDataType != "ADDRESS") {
            data = this.logicvariableDataExtractor(
              field,
              logicvariables,
              data,
              initialValue
            );
            data = this.mapCustomKeyLogicVariable(
              field,
              data,
              logicvariables,
              "Verified"
            );
          } else {
            data = this.mapCustomKeyLogicVariable(
              field,
              data,
              logicvariables,
              "CopyAddress"
            );
            field.addressFields.map((addressField) => {
              data = this.logicvariableDataExtractor(
                addressField,
                logicvariables,
                data,
                initialValue
              );
            });
          }
        });
      });
    });

    if (this.options.externalFeedDataforValidationJson) {
      data = { ...data, ...this.options.externalFeedDataforValidationJson };
    }
    return data;
  }

  private mapCustomKeyLogicVariable(field, data, logicvariables, customKey) {
    if (field.verificationType != null) {
      if (logicvariables.some((e) => e == `${field.fieldName}${customKey}`)) {
        data[`${field.fieldName}${customKey}`] = field.isVerified;
      }
    }
    return data;
  }

  private logicvariableDataExtractor(
    field,
    logicvariables,
    data,
    initialValue
  ) {
    if (logicvariables.some((e) => e == field.fieldName)) {
      switch (field.fieldDataType) {
        case "NUMBER":
          data = this.logicvariableNumberDataExtractor(
            field,
            initialValue,
            data
          );
          break;
        case "AMOUNT":
          if (initialValue === undefined) {
            data[field.fieldName] = field.value || 0;
          } else {
            data[field.fieldName] = field.initialState || 0;
          }
          break;
        case "DATE":
          data = this.logicvariableDateDataExtractor(field, initialValue, data);
          break;
        case "TABLE":
          if (field.value?.length != 0) {
            data[field.fieldName] = field.value;
          }
          break;
        default:
          data[field.fieldName] = field.value;
          break;
      }
    }
    return data;
  }

  private logicvariableNumberDataExtractor(field, initialValue, data) {
    if (initialValue === undefined) {
      data[field.fieldName] =
        field.value == null || field.value === ""
          ? null
          : parseFloat(field.value);
    } else {
      data[field.fieldName] =
        field.initialState == null || field.initialState === ""
          ? 0
          : parseFloat(field.initialState);
    }
    return data;
  }

  private logicvariableDateDataExtractor(field, initialValue, data) {
    if (initialValue === undefined) {
      if (field.value !== null) {
        if (typeof field.value === "object") {
          data[field.fieldName] = field.value.valueOf();
        } else {
          data[field.fieldName] = this.formatters.dateToUnixParser(field.value);
        }
      } else {
        data[field.fieldName] = null;
      }
    } else {
      let fieldValue;
      if (field.initialState !== null) {
        fieldValue =
          typeof field.initialState === "object"
            ? field.initialState.valueOf()
            : this.formatters.dateToUnixParser(field.initialState);
      } else {
        fieldValue = null;
      }
      data[field.fieldName] = fieldValue;
    }
    return data;
  }

  mapClearLogic(item) {
    if (item.rulesFor != null && item.rulesFor.length != 0) {
      item.rulesFor.forEach(element => {

        let f = this.findFieldNamevalue(element, 'ALL')
        if (f != undefined) {

          if (f.clearValue === true) {
            if (f.fieldDataType == 'TABLE') {
              f.value = []
              f.tableFooterData.value = null
            } else {
              f.value = null
            }
          }
        }
      });
    }
  }

  mapDisableLogic(item) {
    if (item.state) {
      item.fieldAccessModifier = "READ_ONLY";
      if (item.validationJson?.clearIfDisabled) {
        const clearIfDisabled = this.applyJsonLogic(
          item.validationJson.clearIfDisabled,
          item.jsonlogicData
        );
        if (clearIfDisabled === true) {
          this.clearItemValue(item);
        }
      }
      item.error = "";
    } else {
      item.fieldAccessModifier = "EDITABLE";
    }
    return item;
  }

  private clearItemValue(item) {
    switch (item.fieldDataType) {
      case "DROPDOWN":
        item.value = null;
        break;
      case "NUMBER":
      case "DATE":
        item.value = null;
        break;
      case "TABLE":
        item.value = [];
        break;
      case "ADDRESS":
        this.clearAddressFields(item.addressFields);
        break;
      default:
        item.value = "";
        break;
    }
  }

  private clearAddressFields(addressFields) {
    addressFields.forEach((addressField) => {
      switch (addressField.fieldDataType) {
        case "DROPDOWN":
          addressField.value = null;
          break;
        case "NUMBER":
        case "DATE":
          addressField.value = null;
          break;
        default:
          addressField.value = "";
          break;
      }
      addressField.error = "";
    });
  }

  returnParsevalues(field, customValue?, isDefault?) {
    switch (field.fieldDataType) {
      case 'AMOUNT':
        field.value = customValue !== undefined ? customValue : field.value;
        break;
      case 'DATE':
        field.value = this.parseDateValue(customValue !== undefined ? customValue : field.value);
        break;
      case 'NUMBER':
        field.value = this.parseNumberValue(customValue !== undefined ? customValue : field.value);
        break;
      default:
        field.value = (customValue !== undefined || (customValue === null && isDefault === undefined)) ? customValue : field.value;
        break;
    }
    return field.value;
  }

  parseDateValue(value) {
    if (value !== undefined && value !== null) {
      return new Date(value);
    } else {
      return null;
    }
  }

  parseNumberValue(value) {
    if (isNaN(value)) {
      return null;
    }
    if (typeof value === 'number') {
      if (value === 0) {
        return 0;
      } else {
        if (Number.isInteger(value)) {
          return value;
        } else {
          return value.toFixed(2);
        }
      }
    } else {
      return Number(value).toFixed(2);
    }
  }

  fetchLogicVariableDataForDateCalculation(dynamicGroupList, logicvariables) {
    let data = {};
    logicvariables.forEach((l, i) => {
      dynamicGroupList.forEach((group) => {
        group.forEach((row) => {
          row.forEach((field) => {
            if (field.fieldDataType != "ADDRESS" && field.fieldName == l) {
              if (i == 0) {
                data =
                  this.logicVariableDateDataCommonMapperforInitialStateandActual(
                    field,
                    data,
                    "initialState"
                  );
              } else {
                data =
                  this.logicVariableDateDataCommonMapperforInitialStateandActual(
                    field,
                    data,
                    "value"
                  );
              }
            }
          });
        });
      });
    });
    return data;
  }

  private logicVariableDateDataCommonMapperforInitialStateandActual(
    field,
    data,
    keyName
  ) {
    switch (field.fieldDataType) {
      case "NUMBER":
        if (field[keyName] == null || field[keyName] == "") {
          data[field.fieldName] = 0;
        } else {
          data[field.fieldName] = parseInt(field[keyName]);
        }
        break;
      case "AMOUNT":
        if (field[keyName] == null) {
          data[field.fieldName] = 0;
        } else {
          data[field.fieldName] = field[keyName];
        }
        break;
      case "DATE":
        if (field[keyName] != null) {
          if (typeof field[keyName] == "object") {
            data[field.fieldName] = field[keyName].valueOf();
          } else {
            data[field.fieldName] = this.formatters.dateToUnixParser(
              field[keyName]
            );
          }
        } else {
          data[field.fieldName] = null;
        }
        break;
      default:
        data[field.fieldName] = field.value;
        break;
    }
    return data;
  }

  mapDependentValidationAdditionalKeys(fieldsListgroup) {
    fieldsListgroup.forEach(group => {
      group.forEach(row => {
        row.forEach(field => {
          if (field.fieldDataType != 'ADDRESS') {
            field.alwaysTriggerValidationJson = null
            field.dontTriggerSelfValidation = null
          } else {
            field.addressFields.map(addressField => {
              addressField.alwaysTriggerValidationJson = null
              addressField.dontTriggerSelfValidation = null
            })
          }
        })
      })
    })
    return fieldsListgroup
  }
  callEnpointLogicNormalVersion(apiEndpoint, loaderOnCall, initialLoad, skip_calculation) {
    let params = this.buildParams();
    this.apiService.callJsonValidationPost(params, apiEndpoint)
      .then((res: any) => {
        if (res.code === "200" || res.code == undefined) {
          this.dynamicGroupList = this.mapFormForEdit_vEndpointLogic(this.dynamicGroupList, res.mappingFields, res.errorMessages, initialLoad, skip_calculation, true);
          this.dynamicGroupList = this.mapErrorMessages_vEndpoint(res)
        }
        if (loaderOnCall) {
          this.showloader = false
        }
      }
      )
  }
  mapErrorMessages_vEndpoint(res) {
    for (let group of this.dynamicGroupList) {
      for (let row of group) {
        for (let e of row) {

          if (res.errorMessages) {
            let keys = Object.keys(res.errorMessages)
            if (keys.includes(e["fieldName"])) {
              e["error"] = res.errorMessages[e["fieldName"]]
            }
          }
        }
      }
    }
    return this.dynamicGroupList
  }
  callEndPointLogic(apiEndpoint, initialLoad?, skip_calculation?, loaderOnCall?, field?) {

    this.toggleLoader(loaderOnCall, true);
    if (typeof apiEndpoint == 'string') {
      this.callEnpointLogicNormalVersion(apiEndpoint, loaderOnCall, initialLoad, skip_calculation)
    } else {
      this.callEnpointLogicConfigurationVersion(apiEndpoint, field, initialLoad, skip_calculation, loaderOnCall)
    }
  }

  callEnpointLogicConfigurationVersion(apiEndpoint, field, initialLoad, skip_calculation, loaderOnCall) {
    apiEndpoint.params = this.buildEndPointParamsFromResultObj(apiEndpoint)
    this.apiService.callApiEndpointFromLogic(apiEndpoint).then((res: any) => {
      if (res.code === "200" || res.code === 200 || res.code == undefined) {
        res = this[apiEndpoint.parserMethodName](res, field)
        this.dynamicGroupList = this.mapFormForEdit_vEndpointLogic(this.dynamicGroupList, res.mappingFields, res.errorMessages, initialLoad, skip_calculation, true);
        this.dynamicGroupList = this.mapErrorMessages_vEndpoint(res)

      }
      if (loaderOnCall) {
        this.showloader = false
      }
    })
  }
  branchParser(res, field) {
    if (field.fieldName == 'branchAddress') {
      return {
        code: "200",
        mappingFields: {
          [field.fieldName]: res.object.address
        }
      }
    } else {
      let temp_res = {
        code: "200",
        mappingFields: {
          [field.fieldName]: { options: [] }
        }
      }

      res.object.forEach(data => {
        let option = {
          "optionCode": null,
          "optionKey": null,
          "optionName": null,
          "optionParentCode": null,
          "optionParentProperty": null,
          "optionValue": null,
          "sortIndex": 0
        }
        switch (field.fieldName) {
          case 'homeBranchState':
            option.optionKey = data.state
            option.optionName = data.state
            break;
          case 'homeBranchDistrict':
            option.optionKey = data.district
            option.optionName = data.district
            break;
          case 'homeBranchCity':
            option.optionKey = data.city
            option.optionName = data.city
            break;
          case 'branchCode':
            option.optionKey = data.branchCode
            option.optionName = data.branchName
            break;
        }
        temp_res.mappingFields[field.fieldName].options.push(option)
      })
      if (field.fieldName == 'branchCode') {
        field.value = res.object.find(d => d.branchCode == field.value)?.branchCode
        field.displayValue = res.object.find(d => d.branchCode == field.value)?.branchName
      }
      return temp_res
    }

  }
  buildEndPointParamsFromResultObj(result) {
    let params = {}
    let formValue = this.extractDynamicFieldsFormData(true)

    params = this.commonService.mapDataFromParameter(result.parameterConfig, { ...formValue, ...this.options.externalFeedDataforValidationJson, ...this.journey.product })
    return params
  }


  toggleLoader(loaderOnCall, showLoader) {
    if (loaderOnCall) {
      this.showloader = showLoader;
    }
  }

  private buildParams() {
    return {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      ...this.commonService.modifyParametertypes(
        this.extractDynamicFieldsFormData(true)
      ),
    };
  }

  updateDynamicGroupList(res, initialLoad?, skip_calculation?) {
    this.dynamicGroupList = this.mapFormForEdit_vEndpointLogic(
      this.dynamicGroupList,
      res.mappingFields,
      res.errorMessages,
      initialLoad,
      skip_calculation,
      true
    );
  }

  private updateErrorMessages(res) {
    for (const group in this.dynamicGroupList) {
      for (const element of this.dynamicGroupList[group]) {
        for (const j of element) {
          if (
            res.errorMessages &&
            Object.keys(res.errorMessages).includes(element[j].fieldName)
          ) {
            element[j].error = res.errorMessages[element[j].fieldName];
          }
        }
      }
    }
  }

  mapFormForEdit_vEndpointLogic(fieldsListgroup, source, errors, initialLoad?, skip_calculation?, endpoinOrigin?) {
    fieldsListgroup.forEach(group => {
      group.forEach(row => {
        row.forEach(field => {
          if (source.hasOwnProperty(field["fieldName"])) {
            if (field["fieldDataType"] != 'ADDRESS' && field["fieldDataType"] != 'DATE' && field["fieldDataType"] != 'DROPDOWN' && field["fieldDataType"] != 'AUTO_COMPLETE' && field.value != source[field["fieldName"]]) {

              if ((initialLoad === true && (field.value == null || field.value == "")) || initialLoad == undefined) {
                field["value"] = source[field["fieldName"]]
              }
              this.formulamapping(field, undefined, initialLoad, skip_calculation, undefined, endpoinOrigin)

            }

            field = this.mapDataForFormEndPointLogic(field, source, initialLoad, skip_calculation)

            field = this.mapDataForDropDownEndPoints(field, source, initialLoad, skip_calculation)
          }
          field = this.mapErrorsForEndpointLogic(errors, field, initialLoad, skip_calculation)
          return field;
        })

      })

    })
    return fieldsListgroup
  }

  mapErrorsForEndpointLogic(errors, field, initialLoad, skip_calculation) {
    if (errors?.hasOwnProperty(field["fieldName"])) {
      if (field["fieldDataType"] != 'ADDRESS' && field["fieldDataType"] != 'DATE' && field["fieldDataType"] != 'DROPDOWN' && field["fieldDataType"] != 'AUTO_COMPLETE' && field.error != errors[field["fieldName"]]) {

        if ((initialLoad === true && field.error == null) || (initialLoad == undefined)) {

          field["error"] = errors[field["fieldName"]]

        }
        this.formulamapping(field, undefined, initialLoad, skip_calculation)
      }

      if (field["fieldDataType"] == 'ADDRESS') {
        field = this.mapErrorsForEndpointLogic_address(errors, field, initialLoad, skip_calculation)
      }
      if (field["fieldDataType"] == 'DROPDOWN' || field['fieldDataType'] == 'AUTO_COMPLETE' || field["fieldDataType"] == 'DATE') {

        field['error'] = errors[field.fieldName]

        this.formulamapping(field, undefined, initialLoad, skip_calculation)

      }

    }
    return field
  }

  mapErrorsForEndpointLogic_address(errors, field, initialLoad, skip_calculation) {
    for (let sourcekey of errors) {
      if (sourcekey == field["fieldName"]) {
        for (let key of sourcekey) {
          for (let addressField of field['addressFields']) {
            if (key == addressField.fieldName) {
              addressField["error"] = errors[sourcekey][key]
              this.formulamapping(addressField, undefined, initialLoad, skip_calculation)
            }
          }
        }
      }
    }
    return field
  }
  mapDataForDropDownEndPoints(field, source, initialLoad, skip_calculation) {
    if (field["fieldDataType"] == 'DROPDOWN' || field["fieldDataType"] == 'AUTO_COMPLETE') {
      field = this.mapDataForDD(source, field, initialLoad, skip_calculation)
    }
    return field
  }
  mapDataForDD(source, field, initialLoad, skip_calculation) {
    if (typeof source[field["fieldName"]] == 'object') {
      field = this.mapDataForDDSubMethod(field, source, initialLoad, skip_calculation)
    } else {
      if (field['options'].some(e => e.optionName == source[field["fieldName"]])) {
        field["value"] = source[field["fieldName"]]
        this.mapchildOption_v1(field, field['options'].find(e => e.optionName == source[field["fieldName"]]))
        this.formulamapping(field, undefined, initialLoad, skip_calculation)

      } else {
        field["value"] = null
        this.formulamapping(field, undefined, initialLoad, skip_calculation)

      }
    }
    return field
  }

  mapDataForDDSubMethod(field, source, initialLoad, skip_calculation) {
    if (source[field["fieldName"]]['options'].length == 0) {
      field['noOptions'] = true
    } else {

      field['searchoption'] = source[field["fieldName"]]['options']
      field['options'] = source[field["fieldName"]]['options']
      field["optionsnapShot"] = field["searchoption"]
      if (field.searchoption.find(o => o.optionName == field.value)) {
        if (field.fieldDataType == 'AUTO_COMPLETE') {
          field.displayValue = field.searchoption.find(o => o.optionName == field.value).optionName
        }
        field.value = field.searchoption.find(o => o.optionName == field.value).optionKey
        if (initialLoad == undefined) {
          this.formulamapping(field, undefined, initialLoad, skip_calculation)
        }
      }
      field['noOptions'] = false
    }
    let isParentFilled = this.checkParentfilled(field)
    field['isParentFilled'] = isParentFilled
    if (isParentFilled === false && field.fieldDataType != 'AUTO_COMPLETE') {
      field["searchoption"] = []
      field["optionsnapShot"] = field["searchoption"]
    }

    return field
  }
  mapDataForFormEndPointLogic(field, source, initialLoad, skip_calculation) {
    if (field["fieldDataType"] == 'ADDRESS') {
      for (let sourcekey in source) {
        if (sourcekey == field["fieldName"]) {
          for (let key in source[sourcekey]) {
            this.mapDataForFormEndPointLogic_C(field, initialLoad, source, sourcekey, key, skip_calculation)
          }
        }
      }
    }
    return field
  }

  mapDataForFormEndPointLogic_C(field, initialLoad, source, sourcekey, key, skip_calculation) {
    for (let addressField of field['addressFields']) {
      if (key == addressField.fieldName) {
        this.mapValuesForAddressEndpointLogic(addressField, initialLoad, source, sourcekey, key, skip_calculation)
      }
    }
  }

  mapValuesForAddressEndpointLogic(addressField, initialLoad, source, sourcekey, key, skip_calculation) {
    if (addressField.fieldDataType != ('DATE' && 'DROPDOWN' && 'AUTO_COMPLETE')) {
      if ((initialLoad === true && addressField['value'] == null) || initialLoad == undefined) {
        addressField['value'] = source[sourcekey][key];

      }

      this.formulamapping(addressField, undefined, initialLoad, skip_calculation)
    } else {
      addressField = this.mapValuesForAddressEndpointLogic_c(addressField, source, sourcekey, key, initialLoad, skip_calculation)

    }
    return addressField
  }
  mapValuesForAddressEndpointLogic_c(addressField, source, sourcekey, key, initialLoad, skip_calculation) {
    if (addressField.fieldDataType == 'DROPDOWN' || addressField.fieldDataType == 'AUTO_COMPLETE') {
      if (typeof source[sourcekey][key] == 'object') {
        addressField["options"] = source[sourcekey][key]['options']
        addressField["searchoption"] = source[sourcekey][key]['options']

        addressField["optionsnapShot"] = addressField["searchoption"]
        if (source[sourcekey][key]['options'].length == 0) {
          addressField['noOptions'] = true

        } else {
          addressField['noOptions'] = false

        }
        let isParentFilled = this.checkParentfilled(addressField)

        addressField['isParentFilled'] = isParentFilled
        if (isParentFilled === false) {
          addressField["searchoption"] = []
          addressField["optionsnapShot"] = addressField["searchoption"]
          this.formulamapping(addressField, undefined, initialLoad, skip_calculation)

        }
      } else {
        addressField["value"] = source[sourcekey][key]
        this.formulamapping(addressField, undefined, initialLoad, skip_calculation)

      }
    } else {
      addressField["value"] = source[sourcekey][key]
      this.formulamapping(addressField, undefined, initialLoad, skip_calculation)
    }
    return addressField
  }

  private mapErrorsforMapFormForEditEndpointLogicVersion(
    field,
    errors,
    initialLoad,
    skip_calculation
  ) {
    if (errors != undefined) {
      if (errors.hasOwnProperty(field["fieldName"])) {
        field = this.mapErrorsForOtherField(
          field,
          errors,
          initialLoad,
          skip_calculation
        );
        field = this.mapErrorsForDate(
          field,
          errors,
          initialLoad,
          skip_calculation
        );
        field = this.mapErrorsForAddress(
          field,
          errors,
          initialLoad,
          skip_calculation
        );
        field = this.mapErrorsForDropdowns(
          field,
          errors,
          initialLoad,
          skip_calculation
        );
      }
    }
    return field;
  }

  private mapErrorsForDropdowns(field, errors, initialLoad, skip_calculation) {
    if (
      field["fieldDataType"] == "DROPDOWN" ||
      field["fieldDataType"] == "AUTO_COMPLETE"
    ) {
      field["error"] = errors[field.fieldName];
      this.formulamapping(field, undefined, initialLoad, skip_calculation);
    }
    return field;
  }

  mapErrorsForAddress(field, errors, initialLoad, skip_calculation) {
    if (field["fieldDataType"] == "ADDRESS") {
      for (let sourcekey in errors) {
        if (sourcekey == field["fieldName"]) {
          for (let key in errors[sourcekey]) {
            field = this.mapErrorForAddressDeepMapper(
              field,
              errors,
              key,
              sourcekey,
              initialLoad,
              skip_calculation
            );
          }
        }
      }
    }
    return field;
  }

  private mapErrorForAddressDeepMapper(field, errors, key, sourcekey, initialLoad, skip_calculation) {
    field["addressFields"].forEach(element => {
      if (key === element.fieldName) {
        element["error"] = errors[sourcekey][key];
        this.formulamapping(element, undefined, initialLoad, skip_calculation);
      }
    });
    return sourcekey;
  }

  private mapErrorsForOtherField(field, errors, initialLoad, skip_calculation) {
    if (
      field["fieldDataType"] != "ADDRESS" &&
      field["fieldDataType"] != "DATE" &&
      field["fieldDataType"] != "DROPDOWN" &&
      field["fieldDataType"] != "AUTO_COMPLETE" &&
      field.error != errors[field["fieldName"]]
    ) {
      if (initialLoad == undefined) {
        field["error"] = errors[field["fieldName"]];
      }
      if (initialLoad === true) {
        if (field.error == null) {
          field["error"] = errors[field["fieldName"]];
        }
      }
      this.formulamapping(field, undefined, initialLoad, skip_calculation);
    }
    return field;
  }

  private mapErrorsForDate(field, errors, initialLoad, skip_calculation) {
    if (field["fieldDataType"] == "DATE") {
      field["error"] = errors[field["fieldName"]];
      this.formulamapping(field, undefined, initialLoad, skip_calculation);
    }
    return field;
  }

  private mapFieldsForEndpointLogic(
    field,
    endpoinOrigin,
    source,
    initialLoad,
    skip_calculation
  ) {
    field = this.mapSomeDataTypevalueForEndpoint(
      field,
      initialLoad,
      source,
      skip_calculation,
      endpoinOrigin
    );
    if (field.fieldDataType === "ADDRESS") {
      const sourceField = source[field.fieldName];
      field.addressFields = field.addressField.map((element) => {
        const sourceValue = sourceField?.[element.fieldName];
        if (
          !["DATE", "DROPDOWN", "AUTO_COMPLETE"].includes(element.fieldDataType)
        ) {
          if (
            (initialLoad === true && element.value === null) ||
            initialLoad === undefined
          ) {
            element.value = sourceValue;
          }
          this.formulamapping(
            element,
            undefined,
            initialLoad,
            skip_calculation
          );
          return;
        }
        element = this.mapFormForEditEndpointMapDropDowns(
          element,
          sourceValue,
          initialLoad,
          skip_calculation
        );
        return element;
      });
    }

    if (["DROPDOWN", "AUTO_COMPLETE"].includes(field.fieldDataType)) {
      let sourceField;
      [sourceField, field] = this.mapEndpointDropdownForEdit(
        source,
        field,
        initialLoad,
        skip_calculation
      );
      const optionMatch = field.options.find(
        (e) => e.optionName === sourceField
      );
      if (optionMatch) {
        field.value = sourceField;
        this.mapchildOption_v1(field, optionMatch);
        return;
      }
      field.value = null;
      this.formulamapping(field, undefined, initialLoad, skip_calculation);
    }
    return field;
  }

  mapEndpointDropdownForEdit(source, field, initialLoad, skip_calculation) {
    const sourceField = source[field.fieldName];
    if (typeof sourceField === 'object') {
      if (sourceField.options.length === 0) {
        field.noOptions = true;
        return
      }
      if (field.searchoption.length === 0) {
        field.searchoption = field.options = sourceField.options;
        field.optionsnapShot = field.searchoption;
        if (field.searchoption.find(o => o.optionName === field.value)) {
          field.value = field.searchoption.find(o => o.optionName === field.value).optionKey;
          this.formulamapping(field, undefined, initialLoad, skip_calculation);
        }
      }
      field.noOptions = false;

      field.isParentFilled = this.checkParentfilled(field);
      if (!field.isParentFilled) {
        field.searchoption = field.optionsnapShot = [];
      }
      return [sourceField, field]
    }
  }

  private mapFormForEditEndpointMapDropDowns(
    element,
    sourceValue,
    initialLoad,
    skip_calculation
  ) {
    if (["DROPDOWN", "AUTO_COMPLETE"].includes(element.fieldDataType)) {
      if (typeof sourceValue === "object") {
        element.options = element.searchoption = sourceValue.options;
        element.optionsnapShot = element.searchoption;
        element.noOptions = sourceValue.options.length === 0;
        element.isParentFilled = this.checkParentfilled(element);
        if (!element.isParentFilled) {
          element.searchoption = element.optionsnapShot = [];
          this.formulamapping(
            element,
            undefined,
            initialLoad,
            skip_calculation
          );
        }
        return;
      }
      element.value = sourceValue;
      this.formulamapping(element, undefined, initialLoad, skip_calculation);
      return;
    }
    element.value = sourceValue;
    this.formulamapping(element, undefined, initialLoad, skip_calculation);

    return element;
  }

  private mapSomeDataTypevalueForEndpoint(
    field,
    initialLoad,
    source,
    skip_calculation,
    endpoinOrigin
  ) {
    if (
      !["ADDRESS", "DATE", "DROPDOWN", "AUTO_COMPLETE"].includes(
        field.fieldDataType
      ) &&
      field.value !== source[field.fieldName]
    ) {
      if (
        initialLoad === undefined ||
        (initialLoad === true && field.value === null)
      ) {
        field.value = source[field.fieldName];
      }
      this.formulamapping(
        field,
        undefined,
        initialLoad,
        skip_calculation,
        undefined,
        endpoinOrigin
      );
    }
    return field;
  }

  checkParentfilled(item) {
    let state = false;

    this.dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((field) => {
          if (field.fieldDataType !== 'ADDRESS' && field.fieldName === item.dependentField) {
            state = this.checkParentfilledForAutoCompleye(field, state)
          } else if (field.fieldDataType === 'ADDRESS') {
            field.addressFields.forEach((addressField) => {
              if (addressField.fieldName === item.dependentField) {
                state = addressField.value != null && addressField.value !== undefined;
              }
            });
          }
        });
      });
    });

    return state;
  }

  checkParentfilledForAutoCompleye(field, state) {
    if (field.fieldDataType == 'AUTO_COMPLETE') {
      state = field.displayValue != null && field.displayValue !== undefined;
    } else {
      state = field.value != null && field.value !== undefined;
    }

    return state;
  }

  triggerAlwaysValidations(_fieldsListgroup, initialLoad?, skip_calculation?) {
    this.dynamicGroupList.forEach(group => {
      group.forEach(row => {
        row.forEach(field => {
          if (field.fieldDataType != 'ADDRESS') {
            if (field.alwaysTriggerValidationJson != undefined && field.alwaysTriggerValidationJson === true) {
              this.runValidationJson(field, initialLoad, skip_calculation)
            }
          } else {
            field.addressFields.map(addressField => {
              if (addressField.alwaysTriggerValidationJson != undefined && addressField.alwaysTriggerValidationJson === true) {
                this.runValidationJson(addressField, initialLoad, skip_calculation)
              }
            })
          }
        })
      })
    })

    return this.dynamicGroupList
  }

  formulamapping(item, _emit?, initialLoad?, skip_calculation?, depenedentCall?, customDynamicList?, initialLoadRulesForCall?) {
    if (customDynamicList) {
      customDynamicList = this.triggerAlwaysValidations(customDynamicList, initialLoad, skip_calculation)
    } else {
      this.dynamicGroupList = this.triggerAlwaysValidations(this.dynamicGroupList, initialLoad, skip_calculation)
    }
    if (item.validationJson != null) {
      if (item.dontTriggerSelfValidation !== true) {
        this.runValidationJson(item, initialLoad, skip_calculation, customDynamicList, initialLoadRulesForCall)
      } else {
        if (depenedentCall === true) {
          this.runValidationJson(item, initialLoad, skip_calculation, customDynamicList, initialLoadRulesForCall)
        }
      }
    }
    if (item.rulesFor != null && item.rulesFor.length != 0) {
      item.rulesFor.map(rule => {
        let f = this.findFieldNamevalue(rule, 'ALL')
        if (f != undefined) {
          this.formulamapping(f, true, initialLoad, skip_calculation, true, customDynamicList, initialLoadRulesForCall)
        }
      })
    }

  }

  private applyformulaCalculations(dynamicGroupList) {
    dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((field) => {
          this.rulesForMapping(field);
          if (field.fieldDataType == "ADDRESS") {
            field.addressFields = field.addressFields.map((addressField) => {
              addressField = this.rulesForMapping(addressField);
              return addressField;
            });
          }
          return field;
        });
      });
    });
    return dynamicGroupList;
  }

  private rulesForMapping(field) {
    if (field.validationJson != null) {
      field = this.runValidationJson(field, true);
    }
    if (field.rulesFor != null && field.rulesFor.length != 0) {
      field.rulesFor.forEach((fieldName) => {
        let f = this.findFieldNamevalue(fieldName, "ALL");
        if (f != undefined) {
          this.formulamapping(f, false, true, undefined, undefined, undefined, true);
        }
      });
    }
    return field;
  }

  renderIcon(item, field) {
    let activeIcon = '';
    if (item.optionKey === field.value) {
      activeIcon = `${item.icon}-active`;
    } else {
      activeIcon = item.icon;
    }
    return `../../../assets/icons/${activeIcon}.png`;
  }
  renderCardOption(option) {
    return `assets/images/feedback/${option.icon}.webp`
  }
  renderRadioIcons(item?) {
    this.radioIconStr = `../../../assets/icons/${item.icon}.png`;
    return this.radioIconStr;
  }

  //extract formValue to the output
  extractDynamicFieldsFormData(returnVal?) {
    let data = {};

    this.dynamicGroupList.forEach((group) => {
      data = this.processGroup(group, data);
    });
    // Rest of the code...
    this.formValue.emit(data);
    return returnVal ? data : undefined;
  }

  processGroup(group, data) {
    group.forEach((row) => {
      data = this.processRow(row, data);
    });
    return data;
  }

  processRow(row, data) {
    row.forEach((field) => {
      data = this.processField(field, data);
    });
    return data;
  }

  processField(field, data) {
    if (field.excludeToFormValue) return data;
    if (field.fieldDataType === "ADDRESS") {
      data = this.processAddressField(field, data);
    } else {
      data = this.processRegularField(field, data);
    }
    if (field.verificationType) {
      data[`${field.fieldName}Verified`] = field.isVerified || false;
    }
    return data;
  }

  processAddressField(field, data) {
    field.addressFields = field.addressFields.map((addressField) => {
      [addressField, data] = this.processAddressSubField(addressField, data);
      return addressField;
    });
    return data;
  }

  processAddressSubField(addressField, data) {
    if (addressField.excludeToFormValue) return data;

    if (
      addressField.fieldDataType === "DROPDOWN" ||
      addressField.fieldDataType === "AUTO_COMPLETE"
    ) {
      const option = addressField.searchoption?.find(
        this.findOptionByKey(addressField.value)
      );
      data[addressField.fieldName] = option?.optionKey || null;
    } else if (addressField.fieldDataType === "DATE") {
      data[addressField.fieldName] = addressField.value
        ? this.formatDate(addressField.value)
        : null;
    } else {
      data[addressField.fieldName] = addressField.value;
    }

    if (this.fieldHasPrefix(addressField)) {
      data[addressField.prefixfieldName] = addressField.prefix;
    }
    return [addressField, data];
  }

  fieldHasPrefix(field) {
    return (
      ["TEXT", "NUMBER"].includes(field.fieldDataType) &&
      field.showprefix === true &&
      field.includePrefixtoFormValue === true
    );
  }

  formatDate(date) {
    return typeof date === 'string' ? date : date.toLocaleDateString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' })
  }

  findOptionByKey(value) {
    return function (option) {
      return option.optionKey === value;
    };
  }

  processRegularField(field, data) {
    if (this.fieldHasPrefix(field)) {
      data[field.prefixfieldName] = field.prefix;
    }
    let option;
    switch (field.fieldDataType) {
      case "DATE":
        data[field.fieldName] = field.value
          ? this.formatDate(field.value)
          : null;
        break;
      case "DROPDOWN":
      case "AUTO_COMPLETE":
        option = field.searchoption?.find((o) => o.optionKey == field.value);
        data[field.fieldName] =
          option?.optionKey || field.value;
        if (option && field.extraFieldName) {
          data[field.extraFieldName] = option.optionName;
        }
        break;
      case "TABLE":
        const fields = field.value?.map(this.processTableRow);
        data[field.fieldName] = fields;
        if (field.tableFooterData) {
          data[field.tableFooterData.fieldName] = field.tableFooterData.value;
        }
        break;
      case "PAN_CARD":
        data[field.fieldName] = field.value
          ? field.value.toLocaleUpperCase()
          : null;
        break;
      default:
        data[field.fieldName] = field.value;
        break;
    }
    return data;
  }

  processTableRow(el) {
    const temp = {};
    el.forEach(function (fi) {
      temp[fi.fieldName] = fi.value;
      if (fi.endPointData) {
        Object.assign(temp, fi.endPointData);
      }
    });
    return temp;
  }

  checkFormState(_onchange, isSubmitted?) {

    if (this.MainMandatorySystem(this.dynamicGroupList)) {
      this.formValidity.emit({ "ok": true })
    } else {


      if (isSubmitted === true) {
        this.markInvalidFields()
      }
      this.formValidity.emit({ "ok": false })
    }
  }

  markInvalidFields() {
    this.dynamicGroupList
      .flat(2)
      .filter((field) => field.showField)
      .forEach((field) => {
        if (field.fieldAccessModifier !== "READ_ONLY") {
          this.validationCheck(field);
          if (field.fieldDataType === "ADDRESS") {
            field.addressFields
              .filter(
                (addressField) =>
                  addressField.fieldAccessModifier !== "READ_ONLY"
              )
              .forEach((addressField) => this.validationCheck(addressField));
          }
        } else if (field.verificationType) {
          this.validationCheck(field);
          if (field.fieldDataType === "ADDRESS") {
            field.addressFields
              .filter(
                (addressField) =>
                  addressField.fieldAccessModifier !== "READ_ONLY"
              )
              .forEach((addressField) => this.validationCheck(addressField));
          }
          if (field.showprefix && field.isPrefixMandatory) {
            this.validationCheck(field);
          }
        }
      });
  }

  //mandartory checking functions
  MainMandatorySystem(data) {
    let form = this.checkMandatoryFeilds(data);
    let custom_address_sanity;
    custom_address_sanity = this.checkAddressSanity(data);
    if (form === true && custom_address_sanity === true) {
      form = true;
    } else {
      form = false;
    }
    let error = this.checkErrors(data);
    let verfied = this.checkVerified(data);
    let allNonMandatory = this.checkAllNonMandatory(data);

    if (form === true && error === true) {
      form = true;
    } else {
      form = false;
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

  checkMandatoryFeilds(data, _pattern?) {
    let mandatoryData: any[] = [];
    let nonMandatoyData = [];
    data.forEach((group) => {
      group.forEach((row) => {
        row.forEach((field) => {
          let temp: any = {
            field: field.fieldLabel,
            datatype: field.fieldDataType,
          };
          [mandatoryData, nonMandatoyData] =
            this.parseMandatoryCheckOnlyForShowFieldData(
              field,
              mandatoryData,
              nonMandatoyData,
              temp
            );
        });
      });
    });
    if (mandatoryData.length != 0) {
      let ok = JSON.parse(
        JSON.stringify(mandatoryData.filter((e) => e.ok === true))
      );
      if (ok.length == mandatoryData.length) {
        let addresstypes = JSON.parse(
          JSON.stringify(nonMandatoyData.filter((e) => e.datatype == "ADDRESS"))
        );
        if (addresstypes.length == 0) {
          return true;
        } else {
          let t = JSON.parse(
            JSON.stringify(addresstypes.filter((e) => e.ok === true))
          );
          return t.length != 0;
        }
      }
      return false;
    } else {
      let ok = JSON.parse(
        JSON.stringify(nonMandatoyData.filter((e) => e.ok === true))
      );
      if (ok.length != 0) {
        let adr = ok.filter((e) => e.datatype == "ADDRESS");
        if (adr.length == ok.length) {
          let pdr = adr.filter((e) => e.ok2 === true);
          return pdr.length != 0;
        } else {
          return true;
        }
      }
      return false;
    }
  }

  parseMandatoryCheckOnlyForShowFieldData(
    field,
    mandatoryData,
    nonMandatoyData,
    temp
  ) {
    if (field.showField === true) {
      if (field.fieldDataType != "ADDRESS") {
        if (field.fieldDataType != "CHECKBOX") {
          [mandatoryData, nonMandatoyData] =
            this.filterMandatoryAndNonMandatory(
              field,
              mandatoryData,
              nonMandatoyData,
              temp
            );
        }
      } else {
        temp["ok"] = true;
        mandatoryData.push(temp);
      }
    }
    return [mandatoryData, nonMandatoyData];
  }

  filterMandatoryAndNonMandatory(field, mandatoryData, nonMandatoyData, temp) {
    if (
      field.isMandatory === true &&
      field.fieldAccessModifier != "HIDDEN" &&
      field.fieldDataType != "HIDDEN"
    ) {
      if (field.fieldDataType == "TEXT") {
        temp = this.checkMandatoryTextFields(field, temp);
      } else {
        temp = this.checkMandatoryNonTextFields(field, temp);
      }
      temp = this.checkMandatoryNumberFields(field, temp);
      mandatoryData.push(temp);
    } else {
      temp["ok"] =
        field.value &&
        field.value != "null" &&
        field.value != null &&
        field.value != "";
      nonMandatoyData.push(temp);
    }
    return [mandatoryData, nonMandatoyData];
  }

  checkMandatoryTextFields(field, temp) {
    if (field.showprefix) {
      temp["ok"] =
        field.prefix &&
        field.prefix != "null" &&
        field.prefix != null &&
        field.prefix != "" &&
        field.value &&
        field.value != "null" &&
        field.value != null &&
        field.value != "";
    } else {
      temp["ok"] =
        field.value &&
        field.value != "null" &&
        field.value != null &&
        field.value != "";
    }
    return temp;
  }

  checkMandatoryNonTextFields(field, temp) {
    if (
      field.value &&
      field.value != "null" &&
      field.value != null &&
      field.value != ""
    ) {
      temp["ok"] = true;
    } else {
      temp["ok"] =
        (field.fieldDataType == "TABLE" &&
          field.value != undefined &&
          field.value != null &&
          field.value != "" &&
          field.value.length > 0) ||
        field.fieldDataType == "SECTION" ||
        (field.fieldDataType == "DOCUMENT" &&
          field.value != null &&
          field.uploaddone &&
          field.uploaddone === true) ||
        false;
    }
    return temp;
  }

  checkMandatoryNumberFields(field, temp) {
    if (field.fieldDataType == "NUMBER" && field.value == 0) {
      temp["ok"] = true;
    }
    return temp;
  }

  checkErrors(data): boolean {
    return data
      .flat(2)
      .filter((field) => field.showField)
      .every((field) => {
        if (field.fieldDataType !== "ADDRESS") {
          return !field.error || field.error === "null";
        } else {
          return field.addressFields.every(
            (addressField) =>
              !addressField.error || addressField.error === "null"
          );
        }
      });
  }

  checkVerified(data): boolean {
    const verificationData = [];

    data.flat(2).forEach((field) => {
      if (field.showField && field.fieldDataType !== "ADDRESS") {
        if (
          field.verificationType != null &&
          field.isMandatory === true &&
          field.skipVerification !== true
        ) {
          verificationData.push({
            fieldName: field.fieldName,
            ok: field.isVerified || field.skipVerification === true,
          });
        }
      } else if (field.fieldDataType === "ADDRESS") {
        field.addressFields.forEach((addressField) => {
          if (
            addressField.verificationType != null &&
            addressField.isMandatory === true
          ) {
            verificationData.push({
              fieldName: field.fieldName,
              ok:
                addressField.isVerified ||
                addressField.skipVerification === true,
            });
          }
        });
      }
    });

    const failedVerifications = verificationData.filter((e) => e.ok === false);

    return failedVerifications.length === 0;
  }

  checkAddressSanity(data) {
    //this method is exclusive for checking the non mandatory addresses check
    let formState = false;
    let nonMandatoryAddressCount = 0;
    let mandatoryAddressCount = 0;
    let fieldStates = [];
    data.forEach((group) => {
      group.forEach((row) => {
        row.forEach((e) => {
          if (
            e.showField === true &&
            e.fieldDataType == "ADDRESS" &&
            e.isMandatory === false
          ) {
            let addresssubFieldStates = [];
            nonMandatoryAddressCount += 1;
            let temp = {
              fieldLabel: e.fieldLabel,
            };
            addresssubFieldStates = this.getAddressSubFieldStates(e);

            //find out the sub form is touched or not
            temp = this.mandatorySubFormMandatory(addresssubFieldStates, temp);

            fieldStates.push(temp);
          }
          if (
            e.showField === true &&
            e.fieldDataType == "ADDRESS" &&
            e.isMandatory !== false
          ) {
            let addresssubFieldStates = [];
            mandatoryAddressCount += 1;
            let temp = {
              fieldLabel: e.fieldLabel,
            };
            addresssubFieldStates = this.getAddressSubFieldStates(e);
            //find out the
            let subformhasMandatory = addresssubFieldStates.some(
              (t) => t.isMandatory === true
            );
            if (subformhasMandatory === true) {
              let issomemandatoryisnotfilled = addresssubFieldStates.some(
                (t) => t.isMandatory === true && t.ok === false
              );
              temp["ok"] = !issomemandatoryisnotfilled;
            } else {
              let isanythingisfilled = addresssubFieldStates.some(
                (t) => t.ok === true
              );
              temp["ok"] = isanythingisfilled;
            }
            fieldStates.push(temp);
          }
        });
      });
    });

    formState = !fieldStates.some((t) => t.ok === false);

    return formState;
  }

  getAddressSubFieldStates(field): any[] {
    return field.addressFields.map((addressField) => {
      return {
        fieldLabel: addressField.fieldLabel,
        isMandatory: addressField.isMandatory,
        ok:
          addressField.value != "" &&
          addressField.value != null &&
          addressField.value != undefined,
      };
    });
  }

  mandatorySubFormMandatory(addresssubFieldStates, temp) {
    let subformhasMandatory = addresssubFieldStates.some(
      (t) => t.isMandatory === true
    );
    if (subformhasMandatory === true) {
      let somesubfieldisFilled = addresssubFieldStates.some(
        (t) => t.ok === true
      );
      if (somesubfieldisFilled === true) {
        let subfieldmandatoryandnotfilled = addresssubFieldStates.some(
          (t) => t.isMandatory === true && t.ok === false
        );
        temp["ok"] = !subfieldmandatoryandnotfilled;
      } else {
        temp["ok"] = true;
      }
    } else {
      temp["ok"] = true;
    }
    return temp;
  }

  checkAllNonMandatory(dynamicGroupList) {
    let nonMandatoyDatacount = 0,
      totallistcount = 0;
    dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((field) => {
          if (field.fieldDataType != "ADDRESS") {
            totallistcount += 1;
            if (field.isMandatory === false) {
              nonMandatoyDatacount += 1;
            }
          } else {
            totallistcount += 1;
            if (!field.addressFields.some((a) => a.isMandatory === true)) {
              nonMandatoyDatacount += 1;
            }
          }
        });
      });
    });
    return totallistcount == nonMandatoyDatacount;
  }

  mapDependentField(address) {
    let parentField = this.findFieldNamevalue(address.dependentField, 'ALL')
    address.optionsnapShot = address.options.filter(o => o.optionParentCode == parentField.value)
    address.searchoption = address.optionsnapShot
    if (address.searchoption.length == 0) {
      address.tempSerachoption = [{
        optionKey: null,
        optionName: "Please select a " + address.dependentParentLabel
      }]
    }

    return address;
  }

  mapAutoCompleteValue(e) {
    e.addressFields.forEach(addressField => {
      if ((addressField.fieldDataType == 'DROPDOWN' || addressField.fieldDataType == 'AUTO_COMPLETE')) {
        if (this.options.mapOptionsBasedOnOptionName) {
          let val = addressField.options.find(f => f.optionName == this.options.mappingFields[e.fieldName])
          if (val) {
            addressField.value = val.optionKey
            addressField.displayValue = val.optionName
          }
        } else {
          let option = addressField.options.find(f => f.optionKey == this.options.mappingFields[e.fieldName])
          addressField.value = this.options.mappingFields[addressField.fieldName]
          addressField.displayValue = option != null ? option.optionName : this.options.mappingFields[addressField.fieldName]
        }
        if (addressField.dependentField != null) {
          this.mapDependentField(addressField);
        }
      }
    })

    return e
  }

  simplifyaAddressFieldsSection(address, e) {
    if (this.options.mapAndDisable && address.value != null && address.value != "") {
      address.fieldAccessModifier = 'READ_ONLY'
    }
    if (this.options.mappingFieldStateConfig && this.options.mappingFieldStateConfig[address.fieldName]) {
      for (const prop in this.options.mappingFieldStateConfig[address.fieldName]) {
        address[prop] = this.options.mappingFieldStateConfig[address.fieldName][prop]
      }
    }
    if (this.journey.product.isCbsFields_ShowAndHide) {
      e.fieldsShowAndHide.forEach(showFields => {
        if (showFields == e.fieldName) {
          e.showField = false
        }
      })

    }

    return e
  }

  mapFormForEditAddressForChecking(e) {
    e.addressFields.forEach(addressField => {
      if (this.options.mappingFields?.hasOwnProperty(addressField["fieldName"])) {
        addressField.value = this.options.mappingFields[addressField.fieldName]
        if (addressField.fieldDataType == 'DATE') {
          if (addressField.value != "" && addressField.value != null) {
            addressField.value = new Date(new Date(addressField.value).toLocaleDateString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' }))
          }
        }

        e = this.mapAutoCompleteValue(e);
        e = this.simplifyaAddressFieldsSection(addressField, e);

      }
    })

    return e
  }

  mapFormForEditAddress(e) {
    e.addressFields = e.addressFields.map(addressField => {
      if (this.options.mappingFields[e.fieldName].hasOwnProperty(addressField["fieldName"])) {
        addressField.value = this.options.mappingFields[e.fieldName][addressField.fieldName] || this.options.mappingFields[addressField.fieldName]

        if (addressField.fieldDataType == 'DATE' && addressField.value != "" && addressField.value != null) {
          addressField.value = new Date(new Date(addressField.value).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }))
        }

        e = this.mapAutoCompleteValue(e);

        if (this.options.mapAndDisable && addressField.value != null && addressField.value != "") {
          addressField.fieldAccessModifier = 'READ_ONLY'
        }
        if (this.options.mappingFieldStateConfig?.[e.fieldName][addressField.fieldName]) {
          addressField = { ...addressField, ...this.options.mappingFieldStateConfig[e.fieldName][addressField.fieldName] }
        }
        if (this.options.mappingFieldStateConfig?.[addressField.fieldName]) {
          for (const prop in this.options.mappingFieldStateConfig[addressField.fieldName]) {
            addressField[prop] = this.options.mappingFieldStateConfig[addressField.fieldName][prop]
          }
        }
        e = this.mapcbsShowHidefield(e)

      }
      return addressField
    })
    return e
  }

  mapcbsShowHidefield(e) {
    if (this.journey.product.isCbsFields_ShowAndHide) {
      e.fieldsShowAndHide.forEach(sF => {
        if (sF == e.fieldName) {
          e.showField = false
        }
      })
    }
    return e
  }

  mapFormForEditDate(e) {
    e.value = this.options.mappingFields[e.fieldName];
    if (e.value != "" && e.value != null) {
      if (typeof e.value == 'string') {
        let formattedDate = this.formatters.formatDate(e.value, "DD/MM/YYYY", "MM/DD/YYYY")
        e.value = formattedDate
        e.value = new Date(e.value)
      } else {
        if (e.verificationType && this.options.autoVerifyMappedFields) {
          e.isVerified = true
        }
      }
    }
    return e
  }

  mapFormForEditDropDowns(e) {
    let option
    if (this.options.mapOptionsBasedOnOptionName) {
      option = e.options.find(f => f.optionName == this.options.mappingFields[e.fieldName])
      if (option) {
        e.value = option.optionKey
        e.displayValue = option.optionName
      }
    } else {
      option = e.options.find(f => f.optionName == this.options.mappingFields[e.fieldName])
      e.value = this.options.mappingFields[e.fieldName]
      e.displayValue = option != null ? option.optionName : this.options.mappingFields[e.fieldName]
    }
    if (e.dependentField != null) {
      let parentField = this.findFieldNamevalue(e.dependentField, 'ALL')
      e.optionsnapShot = e.options.filter(o => o.optionParentCode == parentField.value)
      e.searchoption = e.optionsnapShot
    }
    if (e.dependentField != null) {
      let parentField = this.findFieldNamevalue(e.dependentField, 'ALL')
      e.optionsnapShot = e.options.filter(o => o.optionParentCode == parentField.value)
      e.searchoption = e.optionsnapShot
      if (e.searchoption.length == 0) {
        e.tempSerachoption = [{
          optionKey: null,
          optionName: "Please select a " + e.dependentParentLabel
        }]
      }
    }
    return e
  }

  mapValueDataForMapformForEdit(element, tabfield) {
    let valueData = [];
    for (let ta of JSON.parse(JSON.stringify(tabfield))) {
      for (let o in element) {
        if (ta.fieldName == o) {
          ta.value = element[o];
        }
      }
      valueData.push(ta)
    }
    return valueData
  }

  mapFormForEditTable(e) {
    let obj = this.options.mappingFields[e.fieldName];
    let valueData: any = [];
    let valTab = [];
    e['rowActionData'] = []
    let tabfield = JSON.parse(JSON.stringify(e.tableFields));
    if (obj != null && obj.length > 0) {
      for (const element of obj) {
        valueData = this.mapValueDataForMapformForEdit(element, tabfield)
        e['rowActionData'].push({
          actions: JSON.parse(JSON.stringify(e.tableRowActions)),
          isCompleted: true,
          rowBinded: true
        })
        valTab.push(valueData);
      }
    }
    e.value = valTab;
    e.rowBinded = true
    e.rowActionData.forEach(da => {
      da.actions.forEach(dt => {
        if (dt.actionCode == "EDIT")
          dt.isDisplay = true
        if (dt.actionCode == "ACCEPT")
          dt.isDisplay = false
      })
    })
    for (const [i, element] of e.value.entries()) {
      element.forEach(data => {
        if (data.fieldAccessModifier == "EDITABLE") data.fieldAccessModifier = "READ_ONLY"
        data.readOnly = true
        data.isCompleted = true
        this.runValidationJsonForTable(data, element, e, i);
      })
      element.isCompleted = true
    }
    e = this.calculateTableFooterdata(e, {})
    return e
  }

  mapFormForEditPrefixTypes(e) {
    if (this.options.mappingFields?.hasOwnProperty(e["prefixfieldName"])) {
      e.prefix = this.options.mappingFields[e.prefixfieldName]
      if (this.options.mapAndDisable === true && e.prefix != null && e.prefix != "") {
        e.prefixfieldAccessModifier = 'READ_ONLY'
      }
      e = this.mapcbsShowHidefield(e)
    }
    return e
  }

  mapOtherMapForFormKeys(e) {
    if (e.verificationType && this.options.autoVerifyMappedFields && e.value != null) {
      e.isVerified = true
    }
    if (this.options.mapAndDisable === true && e.value != null && e.value != "") {
      e.fieldAccessModifier = 'READ_ONLY'
    }
    if (this.options.mappingFieldStateConfig?.[e.fieldName]) {
      for (const prop in this.options.mappingFieldStateConfig[e.fieldName]) {
        e[prop] = this.options.mappingFieldStateConfig[e.fieldName][prop]
      }
    }
    return e
  }
  mapFormForEditBoolean(e) {
    if (typeof this.options.mappingFields[e.fieldName] == 'string') {
      e.value = this.options.mappingFields[e.fieldName] == 'true' ? true : false
    } else {
      e.value = this.options.mappingFields[e.fieldName]
    }
    return e
  }

  mapFormForEdit(_dynamicGroupList) {
    this.dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((e) => {
          if (this.options.mappingFields?.hasOwnProperty(e["fieldName"])) {
            switch (e.fieldDataType) {
              case 'ADDRESS':
                e = this.mapFormForEditAddress(e)
                break;
              case 'DATE':
                e = this.mapFormForEditDate(e)
                break;
              case 'DROPDOWN':
              case 'AUTO_COMPLETE':
                e = this.mapFormForEditDropDowns(e)
                break;
              case 'TABLE':
                e = this.mapFormForEditTable(e)
                break;
              case 'BOOLEAN':
                e = this.mapFormForEditBoolean(e)
                break;
              default:
                e.value = this.options.mappingFields[e.fieldName]
                break;
            }
            e = this.mapOtherMapForFormKeys(e)
            e = this.mapcbsShowHidefield(e)
          }
          if (e.fieldDataType == 'ADDRESS') {
            e = this.mapFormForEditAddressForChecking(e)
          }
          e = this.mapFormForEditPrefixTypes(e)
          return e
        })
      })
    })
    return this.dynamicGroupList
  }


  mapCommonProperty(_dynamicGroupList) {
    this.dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((e) => {
          this.mapCommonPropertyForTextfieldprefix(e);
          if (e.fieldDataType == "TEXT" && e.autoSuggest) {
            e = this.mapGstSearch(e);
          }
          this.mapCustomCommonPropertymappingForDropDowns(e);
          if (e.fieldDataType == "TABLE") {
            e.tableFields = e.tableFields.map((tblFields) => {
              tblFields = this.mapTableCommonProperty(tblFields);
              return tblFields;
            });
          }
          if (e.fieldDataType == "ADDRESS") {
            e.addressFields.forEach((addressField) => {
              this.mapCommonPropertyForTextfieldprefix(addressField);
              this.mapCustomCommonPropertymappingForDropDowns(addressField);
              return addressField;
            });
          }
        });
      });
    });
  }

  mapTableCommonProperty(tblFields) {
    if (
      tblFields.fieldDataType == "DROPDOWN" &&
      tblFields.commonpropertyType != undefined &&
      tblFields.commonpropertyType != null
    ) {
      if (
        this.commonVariableService.static_commonProperty_KeyCodes.includes(
          tblFields.commonpropertyType
        )
      ) {
        let opti = this.localStorage.SessionGetItem(tblFields.commonpropertyType);
        tblFields.options = opti;
        this.dynamicGroupList = this.copySearchArray(this.dynamicGroupList);
      } else {
        tblFields = this.fetchCommonPropertyApi(tblFields);
      }
    }
    return tblFields;
  }

  async fetchCommonPropertyApi(field, isPrefix?) {
    let params = {
      propertyType: isPrefix ? field.prefixCommonProperty : field.commonpropertyType,
      loanPurposeUuid: this.commonService.getJourney().product.loanPurposeUuid
    }
    await this.apiService.fetchCommonProperty(params).then((res: any) => {
      if (res.code !== '400' || res.code == undefined) {
        field.options = this.parseCommonPropertyToOptions(res)
        this.dynamicGroupList = this.copySearchArray(this.dynamicGroupList)
      }

    })
  }

  mapCommonPropertyForTextfieldprefix(e) {
    if (
      e.fieldDataType == "TEXT" &&
      e.showprefix === true &&
      e.prefixCommonProperty != undefined &&
      e.prefixCommonProperty != null
    ) {
      this.fetchCommonPropertyApi(e, true);
    }
  }

  mapCustomCommonPropertymappingForDropDowns(e) {
    if ((e.fieldDataType == 'DROPDOWN' || e.fieldDataType == 'AUTO_COMPLETE') && e.commonpropertyType != undefined && e.commonpropertyType != null) {
      if (this.commonVariableService.static_commonProperty_KeyCodes.includes(e.commonpropertyType)) {
        switch (e.commonpropertyType) {
          case 'STAR_GOLD':
            this.mapStarGoldCommonProperty(e)
            break;
          case 'DOCUMENT_TYPE':
            this.mapDocumentType(e)

            break;
          case 'GST_SEARCH':
            e = this.gstSearchDropdownType(e)
            break;
          case 'HOME_BRANCH_STATE':
            let params = {
              microservicetoken: this.journey.product.oauthAccessToken
            }
            this.apiService.fetchBranchStateList(params).then((res: any) => {
              if (res.code == 200) {
                let result = this.branchParser(res, e)
                e.options = result.mappingFields[e.fieldName].options
                this.dynamicGroupList = this.copySearchArray(this.dynamicGroupList)
              }
            })

            break;
          case 'PINCODE':
          case 'PINCODE_STATE':
          case 'PINCODE_CITY':
            e = this.mapPincodeMasterdropdown(e)
            break;
          default:
            this.dynamicGroupList = this.copySearchArray(this.dynamicGroupList)
            break;
        }
      } else {
        e = this.fetchCommonPropertyApi(e)
      }
    }
    return e
  }

  async mapgoldPursposeofAdvance(e) {
    let params = {
      loanUuid: this.journey.product.loanUuid,
      access_token: this.journey.product.access_token,
    };
    await this.apiService.getPurposeOfLoan(params).then((res: any) => {
      if (res.code == 200) {
        e.options = this.commonService.parsePurposeofAdvancetoOptions(
          res.dropDownElements
        );
        this.dynamicGroupList = this.copySearchArray(this.dynamicGroupList);
      }
    });
  }

  async mapDocumentType(e) {
    let params = {
      loanPurposeUuid: this.journey.product.loanPurposeUuid,
      access_token: this.journey.product.access_token,
      microservicetoken: this.journey.product.oauthAccessToken,
    };
    await this.apiService.getSupportingDoc(params).then((res: any) => {
      let document = res.requiredDocuments.find(
        (d) => d.loanPurposeDocumentCategoryCode == e.documentCategorycode
      );
      let field = this.findFieldNamevalue(e.uploadTypeInputfieldName, "ALL");
      field.documentData = document;
      e.options = this.parseDocumentTypes(document.alias);
      this.dynamicGroupList = this.copySearchArray(this.dynamicGroupList);
    });
  }

  async gstSearchDropdownType(e) {
    let params = {
      access_token: this.journey.product.access_token,
      applicationSource: "WEB_JOURNEY",
      requestFor: "BORROWER",
      loanUuid: this.journey.product.loanUuid,
    };
    await this.apiService.gstSearchByPan(params).then((res: any) => {
      if (res.code == "200") {
        e.options = res.mappingFields[e.fieldName].options;
        this.dynamicGroupList = this.copySearchArray(this.dynamicGroupList);
      }
    });
  }

  async mapStarGoldCommonProperty(e) {
    let params = {
      productGroup: e.commonpropertyType,
      constitution: this.journey.productUserType.toUpperCase(),
    };
    await this.apiService
      .getProductListForProductGroup(params)
      .then((res: any) => {
        if (res.code == 200) {
          e.options = this.commonService.dataparsertoOptions(
            res.loanProductList
          );
          this.dynamicGroupList = this.copySearchArray(this.dynamicGroupList);
        }
      });
  }

  mapGstSearch(e) {
    if (e.commonpropertyType == "GST_SEARCH") {
      let params = {
        access_token: this.journey.product.access_token,
        applicationSource: "WEB_JOURNEY",
        requestFor: "BORROWER",
        loanUuid: this.journey.product.loanUuid,
      };
      this.apiService
        .gstSearchByPan(params)
        .then((res: any) => {
          if (res.code == "200") {
            e.suggestion = res.mappingFields[e.fieldName].options.map(
              (o) => o.optionKey
            );
          }
        })
        .catch(console.error);
    }
  }

  mapPincodeMasterdropdown(e) {
    let master = JSON.parse(sessionStorage.getItem("PINMASTER"));
    let opti = this.commonService.mapCommonPinCode(
      master.PINBRANCH,
      e.commonpropertyType
    );
    e.options = opti;
    this.dynamicGroupList = this.copySearchArray(this.dynamicGroupList);
    return e;
  }


  parseCommonPropertyToOptions(data: object[]) {
    return data.map((op) => {
      let option = {
        "optionCode": null,
        "optionKey": null,
        "optionName": null,
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": null,
        "sortIndex": 0
      }
      option.optionCode = op['code'];
      option.optionKey = op['value'];
      option.optionName = op['name'];
      option.optionParentCode = op['parentCode'];
      option.optionParentProperty = op['parentPropertyType'];
      option.optionValue = op['value'];
      return option;
    });
  }

  otpCompleteEmit($event) {
    let otpField = this.findFieldNamevalue($event.otpConfig.fieldName, 'ALL')
    this.dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((e) => {
          if (otpField.fieldName == e.fieldName) {
            e.showField = false
          }
          if (e.verificationFieldName && e.verificationFieldName == otpField.fieldName) {
            if (e.verificationSuccessMessage) {
              this.sharedService.openSnackBar(e.verificationSuccessMessage)
            } else {
              this.sharedService.openSnackBar(`${e.fieldLabel} verification successfull!!`)
            }
            e.isVerified = true
            e.fieldAccessModifier = 'READ_ONLY'
            this.validationCheck(e)
            this.executeOtpEventCode(e)
          }
        })
      })
    })
  }

  executeOtpEventCode(e) {
    if (e.journeyEventCode) {
      this.commonService.journeyEventsExecutor(e.journeyEventCode);
    }
  }

  otpErrorEmit($event) {
    let otpField = this.findFieldNamevalue($event.otpConfig.fieldName, 'ALL')
    this.dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((e) => {
          if (otpField.fieldName == e.fieldName) {
            e.showField = false
          }
          if (e.verificationFieldName) {
            if (e.verificationFieldName == otpField.fieldName) {

              e.isVerified = false
              e.fieldAccessModifier = 'EDITABLE'
              this.validationCheck(e)

            }
          }
          this.otherEvents.emit({ "eventType": "verificationValidate", "field": e, "eventName": "OTP_ERROR" })

        })
      })
    })
  }
  otpGenerateSuccess(_$event) {
    this.otherEvents.emit({ "eventType": "verificationValidate", "field": _$event, "eventName": "OTP_GENERATE_SUCCESS" })
  }

  otpAttemptsDone($event) {
    let otpField = this.findFieldNamevalue($event.otpConfig.fieldName, 'ALL')
    this.dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((e) => {
          if (otpField.fieldName == e.fieldName) {
            e.showField = false
          }
          if (e.verificationFieldName) {
            if (e.verificationFieldName == otpField.fieldName) {
              e.isVerified = false
              e.fieldAccessModifier = 'EDITABLE'
              this.validationCheck(e)
              e.verifyDisable = false

            }
          }
        })
      })
    })
  }


  verifyField(field) {
    let params;
    switch (field.verificationType) {
      case "EMAIL":
        this.verifyEmailField(field);
        break;
      case "ACCOUNT_NO":
        this.verifyAccountNoField(field).catch(console.error);
        break;
      case "AADHAR":
        this.verifyAadharField(field);
        break;
      case "PAN":
        this.verifyPanField(field).catch(console.error);
        break;
      case "PAN_V2":
        this.verifyPanv2Field(field);
        break;
      case 'PAN_V3':
          this.verifyPanv3Field(field)
      break;
      case "UDYAM":
        this.verifyUdyamField(field);
        break;

    }
  }

  verifyPanv3Field(field) {
    let name = this.findFieldNamevalue('panholdername', 'value')
    let dateOfBirth = this.findFieldNamevalue('panholderdob', 'value').toLocaleDateString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' })

    if (name == undefined || dateOfBirth == undefined) {
      this.sharedService.openSnackBar("Please fill the Name as per PAN and Date of birth/ incorporation as per PAN")
    } else {
      let params = {
        applicationSource: "WEB_JOURNEY",
        name: this.findFieldNamevalue('panholdername', 'value'),
        dateOfBirth: this.findFieldNamevalue('panholderdob', 'value').toLocaleDateString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' }),
        access_token: this.journey.product.access_token,
        loanUuid: this.journey.product.loanUuid,
        microservicetoken: this.journey.product.oauthAccessToken,
        identityNumberTwo: field.value,
        requestFor: "BORROWER",
        objectUuid: this.journey.product.borrowerUuid
      }

      if (field.options && field.options.extraParams) {
        params = { ...params, ...field.options.extraParams }
      }
      this.showloader = true
      this.apiService.verifyPanNumber_v3(params).then((res: any) => {
        field = this.handleResponseVerificationFields(field, res)
        return field
      }, _err => {
        field.isVerified = false
        field.verifyDisable = false
        this.showloader = false
        field = this.validationCheck(field)
        this.sharedService.openSnackBar(_err.message)
        return field
      })
    }
  }

handleResponseVerificationFields(field,res){
    if (res.code == '200') {
        field.isVerified = true
        field.verifyDisable = true
        this.showloader = false
        field.fieldAccessModifier = 'READ_ONLY'
        this.journey = this.commonService.getJourney()
        this.journey.metaData.capturedData.panData = res
        this.showloader = false
        this.commonService.setJourney(this.journey)
        field = this.validationCheck(field)
        this.otherEvents.emit({"eventType": "verificationSuccess", "field": field, "eventName": "VERIFICATION_SUCCESS"})
        if (field.journeyEventCode) {
            this.commonService.journeyEventsExecutor(field.journeyEventCode)
        }
    } else {
        if (res.code == undefined) {
            field.isVerified = true
            field.verifyDisable = true
            this.showloader = false
            field.fieldAccessModifier = 'READ_ONLY'
            this.journey = this.commonService.getJourney()
            this.journey.metaData.capturedData.panData = res
            this.showloader = false
            this.commonService.setJourney(this.journey)
            field = this.validationCheck(field)
            if (field.journeyEventCode) {
                this.commonService.journeyEventsExecutor(field.journeyEventCode)
            }
            this.sharedService.openSnackBar(res.message)
        } else {
            field.isVerified = false
            field.verifyDisable = false
            this.showloader = false
            field = this.validationCheck(field)
            this.sharedService.openSnackBar(res.message)

        }
    }
    return field
}

  verifyPanv2Field(field) {
    let params = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      applicationSource: "WEB_JOURNEY",
      requestFor: "BORROWER",
      identityNumberTwo: field.value,
      objectUuid: this.journey.product.borrowerUuid,
    };
    this.showloader = true;
    this.apiService.panVerification_v2(params).then(
      (res: any) => {
        if (res.code == "200") {
          field.isVerified = true;
          field.verifyDisable = true;
          this.showloader = false;
          field.fieldAccessModifier = "READ_ONLY";
          this.journey = this.commonService.getJourney();
          this.journey.metaData.capturedData.panData = res;
          this.showloader = false;
          this.commonService.setJourney(this.journey);
          field = this.validationCheck(field);
          if (field.journeyEventCode) {
            this.commonService.journeyEventsExecutor(
              field.journeyEventCode
            );
          }
        } else {
          if (res.code == undefined) {
            field.isVerified = true;
            field.verifyDisable = true;
            this.showloader = false;
            field.fieldAccessModifier = "READ_ONLY";
            this.journey = this.commonService.getJourney();
            this.journey.metaData.capturedData.panData = res;
            this.showloader = false;
            this.commonService.setJourney(this.journey);
            field = this.validationCheck(field);
            if (field.journeyEventCode) {
              this.commonService.journeyEventsExecutor(
                field.journeyEventCode
              );
            }
          } else {
            field.isVerified = false;
            field.verifyDisable = false;
            this.showloader = false;
            field = this.validationCheck(field);
          }
        }
        return field;
      },
      (_err) => {
        field.isVerified = false;
        field.verifyDisable = false;
        this.showloader = false;
        field = this.validationCheck(field);
        return field;
      }
    );
  }

  async verifyPanField(field) {
    let params = {};
    params["access_token"] = this.journey.product.access_token;
    params["requestFor"] = "BORROWER";
    params["objectUuid"] = this.journey.product.borrowerUuid;
    params["identityNumberTwo"] = field.value;
    params["microservicetoken"] = this.journey.product.oauthAccessToken;
    this.showloader = true;
    await this.apiService.verifyPanNumber(params).then((res: any) => {
      this.journey = this.commonService.getJourney();
      this.journey.metaData.capturedData.panData = res;
      this.showloader = false;
      this.commonService.setJourney(this.journey);
      field.isVerified = true;
      field.verifyDisable = true;
      field.fieldAccessModifier = "READ_ONLY";
      field = this.validationCheck(field);
      if (field.journeyEventCode) {
        this.commonService.journeyEventsExecutor(field.journeyEventCode);
      }
      return field;
    });
  }

  verifyEmailField(field) {
    this.dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((e) => {
          if (e.fieldName == field.verificationFieldName) {
            e.options.value = field.value;
            e.options.loanProduct = this.commonService.getJourney().product;
            e.showField = true;
          }
        });
      });
    });
    field.verifyDisable = true;
    field.fieldAccessModifier = "READ_ONLY";
    return field;
  }

  async verifyAccountNoField(field) {
    this.commonVariableService.globalLoaderState = true;
    let params = {
      access_token: this.journey.product.access_token,
      accountNumber: field.value,
      microservicetoken: this.journey.product.oauthAccessToken,
      applicationSource: "WEB_JOURNEY",
      requestFor: "BORROWER",
    };
    await this.apiService.fetchAccountData(params).then(
      (res: any) => {
        if (res.code == "200") {
          this.options.mappingFields = res.object;
          this.options.mapAndDisable = true;
          this.options.autoVerifyMappedFields = true;
          if (field.verificationPopulationremaps) {
            this.bindDataOnverificationPopulationremaps(field, res)
          }
          this.mapFormForEdit(this.dynamicGroupList);
          field.isVerified = true;
          let journey = this.commonService.getJourney();
          journey.metaData.capturedData["AccountData"] = res.object;
          this.commonService.setJourney(journey);
          this.commonVariableService.globalLoaderState = false;
        } else {
          this.commonVariableService.globalLoaderState = false;
        }
        field = this.validationCheck(field);
        return field;
      },
      (_err) => {
        this.commonVariableService.globalLoaderState = false;
        return field;
      }
    );
  }

  private bindDataOnverificationPopulationremaps(field, res) {
    let mapping_Data = {};
    let fieldStateConfig = {};

    for (const prop in field.verificationPopulationremaps) {
      if (Array.isArray(field.verificationPopulationremaps[prop])) {
        mapping_Data[prop] = this.ArrayMethods.getPathVal(
          res,
          this.applyJsonLogic(
            field.verificationPopulationremaps[prop][0],
            res
          )
        );
        fieldStateConfig[prop] =
          field.verificationPopulationremaps[prop][1];
      } else {
        mapping_Data[prop] = this.ArrayMethods.getPathVal(
          res,
          this.applyJsonLogic(
            field.verificationPopulationremaps[prop],
            res
          )
        );
        fieldStateConfig[prop] =
          field.verificationPopulationremaps[prop];
        field.fieldAccessModifier = "EDITABLE";

        if (prop === 'homeBranchCity' || prop === 'branchCode') {
          const timer = setTimeout(() => {
            if ((document.getElementById(prop) as HTMLButtonElement)) {
              (document.getElementById(prop) as HTMLButtonElement).disabled = false;
            }
            clearTimeout(timer)
          }, 100)

        }
      }
    }
    this.options.mappingFields = mapping_Data;
    //this.options.mapAndDisable = true
    this.options.autoVerifyMappedFields = true;
  }

  verifyAadharField(field) {
    this.dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((e) => {
          if (e.fieldName == field.verificationFieldName) {
            if (field.consentPopUp === true) {
              e = this.openAadharConsentPopup(e, field);
              return e;
            }
            if (field.externalValidate) {
              this.otherEvents.emit({
                eventType: "verificationValidate",
                field: field,
              });
            } else {
              e.options.value = field.value;
              e.options.loanProduct = this.commonService.getJourney().product;
              e.showField = true;
            }
          }
        });
      });
    });
  }

  openAadharConsentPopup(e, field) {
    let dialogRef = this.dialog.open(PopupComponent, {
      panelClass: ["w-50", "mob-w-100"],
      height: "50%",
      role: "dialog",
      ariaLabel: "popup",
      disableClose: true,
      data: {
        title: "Aadhaar Consent",
        popupContent: field.consentPopUpConfig,
        showBtns: true,
      },
    });
    dialogRef.afterClosed().subscribe((consentData) => {
      if (consentData == "submit") {
        e.options.value = field.value;
        e.options.loanProduct = this.commonService.getJourney().product;
        e.showField = true;
        field.verifyDisable = true
      }
      return e;
    });
  }

  verifyUdyamField(field) {
    let params = {
      udhyamNumber: field.value,
      infoType: "udhyam",
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      requestFor: "COMPANY_DETAIL",
    };
    this.showloader = true;
    this.apiService.verifyUdyam(params).then(
      (res: any) => {
        this.showloader = false;
        if (res.code == "200") {
          field.fieldAccessModifier = "READ_ONLY";
          field.isVerified = true;
          this.udyamNumberMappingDataRemapping(res.mappingFields);
          field = this.validationCheck(field);
        } else {
          this.sharedService.openSnackBar(res.message);
        }
        return field;
      },
      (err) => {
        field = this.sharedService.openSnackBar(err, field);
      }
    );
  }

  udyamNumberMappingDataRemapping(mappingFields) {
    let Remap = {
      companyName: "textVariable6",
      dateOfArticle: "dateVariable2",
    };
    for (const prop in mappingFields) {
      if (Remap.hasOwnProperty(prop)) {
        mappingFields[Remap[prop]] = mappingFields[prop];
      }
    }
    let journey = this.commonService.getJourney();
    journey.metaData.capturedData.udyamData = mappingFields;
    this.commonService.setJourney(journey);
    this.options.mapSupplyData = true;
    this.options.mappingFields = mappingFields;
    this.options.mapAndDisable = true;
    this.mapFormForEdit(this.dynamicGroupList);
  }

  selectCardoptions(field, option) {
    field.value = option.optionKey
  }
  addNewRow(field, tablefields) {
    if (field.value.length == field.maxLength) {
      this.sharedService.openSnackBar(` Only maximum ${field.maxLength} Ornaments can be added per loan application`);
    } else {
      if (field.value.length > 0 && field.validateRowBeforeAdd) {
        if (field.rowActionData[field.value.length - 1].isCompleted === true) {
          tablefields = JSON.parse(JSON.stringify(tablefields))
          field.value.push(tablefields)
          field.rowActionData.push({
            actions: JSON.parse(JSON.stringify(field.tableRowActions)),
            isCompleted: false,
            rowBinded: true
          })
          this.extractDynamicFieldsFormData()
          this.emitOtherEvent(field, 'TABLE_ADD')
        } else {
          this.sharedService.openSnackBar('Please update the above row', 'error', 200);
        }
      } else {
        tablefields = JSON.parse(JSON.stringify(tablefields))
        if (field.value.length == 0) {
          field['rowActionData'] = []
        }
        field.value.push(tablefields)
        let sampleActionObject = {
          actions: JSON.parse(JSON.stringify(field.tableRowActions)),
          isCompleted: false,
          rowBinded: true
        }
        field.rowActionData.push(sampleActionObject)
        //field['rowActionData']= []
        this.extractDynamicFieldsFormData()
        this.emitOtherEvent(field, 'TABLE_ADD')
      }
    }
  }

  rowCompeted(field, data, index) {

    this.calculateTableFooterdata(field, data.value)
    this.extractDynamicFieldsFormData()
    field.value[index].forEach(ele => {
      ele.fieldAccessModifier = ele.fieldAccessModifier == "EDITABLE" ? "READ_ONLY" : ele.fieldAccessModifier
      ele.readOnly = true
      ele.isCompleted = true
    })
    data.isCompleted = true
    // }
    // else {
    //   this.sharedService.openSnackBar('Please fill all the fields inside Table', 'error', 200);
    // }
  }

  Delete(field, data) {
    let val = 0
    let index = data.value.indexOf(field);
    if (index !== -1) {
      data.value.splice(index, 1);
      this.calculateTableFooterdata(data, data)
    }
    this.emitOtherEvent(field, 'TABLE_DELETE')
  }

  edit(data) {
    data.readOnly = false
    data.isCompleted = false
  }

  calculateTableFooterdata(field, _tablefields) {
    let val = 0
    field.value.forEach(data => {
      data.forEach(ele => {
        if (field.tableFooterData.mappingKey == ele.fieldName) {
          if (ele.value != null && ele.value != undefined && ele.value != "") {
            val = val + parseInt(ele.value)
          }
        }
      })
    })
    field.tableFooterData.value = val

  }

  checkTableFilled(dataField, index?) {
    let result
    if (index != null) {
      let res = dataField.value[index].filter((ele) => (ele.value == undefined || ele.value == "") && ele.fieldDataType != "slNo" && ele.fieldDataType != "ACTION" && ele.isMandatory === true)
      if (res.length !== 0) {
        result = false
      }
      else {
        result = true
      }
    }
    // else {
    //   dataField.value.forEach(data => {
    //     let res = data.filter((ele) => (ele.value == undefined || ele.value == "") && ele.fieldDataType != "slNo" && ele.fieldDataType != "ACTION" && ele.isMandatory=== true)
    //     if (res.length !== 0) {
    //       result = false
    //     }
    //     else {
    //       result = true
    //     }
    //   })
    // }

    return result
  }

  ChangeFieldAccessModifier(field) {
    field.fieldAccessModifier = 'EDITABLE';
    field.isVerified = false;
    this.Status.emit({ "code": 'FORM_EDIT', fieldName: field.fieldName })
  }

  verificationCheck(field) {
    if (field.verificationType != undefined) {
      if (!field.error && field.value != null && field.value != "") {
        if (field.verificationType == 'GST') {
          this.commonVariableService.globalLoaderState = true
          let params = {
            gstin: field.value,
            access_token: this.journey.product.access_token,
            loanUuid: this.journey.product.loanUuid,
            microservicetoken: this.journey.product.oauthAccessToken,
            selectedModule: "",
            applicationSource: "WEB_JOURNEY",
            requestFor: "COMPANY_DETAIL"
          }
          this.apiService.verifyGst(params).then((res: any) => {

            if (res.code == '200') {
              // let param2={
              //   access_token: this.journey.product.access_token,
              //   clientTransactionId:res.clientTransactionId
              // }
              // this.apiService.gstStatusCheck(param2).then((res1:any)=>{
              //   if(res1.code=='200'){
              this.commonVariableService.globalLoaderState = false
              field.fieldAccessModifier = 'READ_ONLY'
              field.isVerified = true
              //   }else{
              //     this.commonVariableService.globalLoaderState = false
              //     this.sharedService.openSnackBar(res1.message)

              //   }
              // }, err => {
              //   this.commonVariableService.globalLoaderState = false
              //   this.sharedService.openSnackBar(err.message)

              // })

            } else {
              this.sharedService.openSnackBar(res.message)
              this.commonVariableService.globalLoaderState = false
            }
          }, err => {
            this.commonVariableService.globalLoaderState = false
            this.sharedService.openSnackBar(err.message)

          })
        }
      }
    }
  }
  autoCompletePlaceholder(placeholder) {
    return {
      displayFn: (item: any) => { return item.optionName; },
      search: true,
      height: '400px',
      noResultsFound: 'No results found!',
      displayKey: 'optionName',
      searchOnKey: 'optionName',
      limitTo: 30,
      enableSelectAll: true,
      placeholder: placeholder ? placeholder : "Select"
    }

  }
  formatAutoCompleteValue($event, field) {
    field.value = $event.value.optionKey
    field.displayValue = $event.value.optionName
    this.dropdownChange(field);
    field = this.validationCheck(field)
    return field
  }
  showSnakBar(field) {
    if (field.value !== false) {
      this.sharedService.openSnackBar(field.value)
    }
  }

  tableAction(action, tableRow, field, index) {
    switch (action.actionCode) {
      case "DELETE":
        field = this.tableActionDelete(action, tableRow, field, index);
        break;
      case "ACCEPT":
        [field] = this.tableActionAccept(action, tableRow, field, index);
        break;
      case "EDIT":
        [field] = this.tableActionEdit(action, tableRow, field, index);
        break;
    }
    this.formulamapping(field);
  }

  tableActionEdit(action, tableRow, field, index) {
    field.rowActionData[index].isCompleted =
      field.rowActionData[index].rowBinded =
      action.isDisplay =
      tableRow.isCompleted =
      false;
    field.rowActionData[index].actions.forEach((act1) => {
      if (act1.actionCode == "ACCEPT") {
        act1.isDisplay = true;
      }
      if (act1.actionCode == "EDIT") {
        act1.isDisplay = false;
      }
    });
    this.emitOtherEvent({ field, index }, "TABLE_EDIT");
    field.value[index].forEach((act) => {
      if (act.fieldDataType == "ACTION") {
        act.actions.forEach((act1) => {
          if (act1.actionCode === "ACCEPT") {
            act1.isDisplay = true;
          }
        });
      }
      if (act.fieldAccessModifier == "READ_ONLY") {
        act.fieldAccessModifier = "EDITABLE";
      }
      act.isCompleted = false;
    });
    return [field, action];
  }

  tableActionAccept(action, tableRow, field, index) {
    if (this.checkTableFilled(field, index)) {
      field.rowActionData[index].isCompleted = true;
      field.rowActionData[index].actions.forEach((act) => {
        if (act.actionCode == "ACCEPT") {
          act.isDisplay = false;
        }
        if (act.actionCode == "EDIT") {
          act.isDisplay = true;
        }
      });
      field.value[index].forEach((act) => {
        if (act.fieldDataType == "ACTION") {
          act.actions.forEach((act1) => {
            if (act1.actionCode === "EDIT") {
              act1.isDisplay = true;
            }
          });
        }
      });
      this.rowCompeted(field, tableRow, index);
      action.isDisplay = false;
      this.emitOtherEvent(field, "TABLE_ACCEPT");
      this.emitOtherEvent({ field, index }, "TABLE_ACCEPT");
      return [field];
    }
    this.sharedService.openSnackBar(
      "Please fill all the fields inside Table",
      "error",
      200
    );
    return [field];
  }

  tableActionDelete(_action, _tableRow, field, index) {
    field.value.splice(index, 1);
    field.rowActionData.splice(index, 1);
    field = this.calculateTableFooterdata(field, {});
    this.emitOtherEvent({ field, index }, "TABLE_DELETE");
    return field;
  }

  submitSecurityDetails(tableData) {
    let facilityUuid;
    this.journey.metaData.capturedData.multiFacilityList.multiFacilities.forEach(mulf => {
      if (mulf.description === 'Cash Credit') {
        facilityUuid = mulf.uuid
      }
    });

    let params = {
      loanFacilityUuid: facilityUuid,
      loanUuid: this.journey.product.loanUuid,
      access_token: this.journey.product.access_token,
      type: "PRIMARY",
      securityType: tableData[1].value,
      description: tableData[2].value,
      basisValuation: tableData[3].value,
      valuationAmount: tableData[4].value,
    }
    this.apiService.submitSecurityDetails(params).then((res: any) => {
      if (res.code == '200') {
        this.journey.metaData.capturedData.securityDetailList = res.securityDetailList;
        // this.sharedService.openSnackBar(res.message)
      } else {
        this.sharedService.openSnackBar(res.message)
      }
    }, (err) => {
      this.sharedService.openSnackBar(err.message)
    })
  }

  tableValueChange(tableField, index, record, field) {
    //this.formulamapping(tableField,undefined,undefined,undefined,undefined,record)
    if (tableField.validationJson) {
      tableField = this.runValidationJsonForTable(tableField, record, field, index)

    }

    if (tableField.rulesFor && tableField.rulesFor.length) {
      tableField.rulesFor.map(fi => {
        let f = this.findFieldNamevalue(fi, 'ALL', record)
        if (f != undefined) {
          this.tableValueChange(f, index, record, field)
        }
      })
    }
    this.calculateTableFooterdata(field, {})
  }

  runValidationJsonForTable(tableField, record?, field?, index?) {
    for (const rule in tableField.validationJson) {
      switch (rule) {
        case "validation":
          tableField.logicvariables = this.fetchLogicVaraiables(
            tableField.validationJson[rule]
          );
          tableField.jsonlogicData = this.fetchlogicvariableDataforTable(
            record,
            tableField.logicvariables
          );
          let state;
          state = this.applyJsonLogic(
            tableField.validationJson[rule],
            tableField.jsonlogicData
          );
          if (state === false) {
            tableField = this.runvalidationJsonForTableValidationError(
              tableField,
              record
            );
            tableField = this.runvalidationJsonForTableValidationSnackBar(
              tableField,
              record
            );
          }
          break;
        case "apiEndPoint":
          tableField.logicvariables = this.fetchLogicVaraiables(
            tableField.validationJson[rule]
          );
          tableField.jsonlogicData_temp = this.fetchlogicvariableDataforTable(
            record,
            tableField.logicvariables_temp
          );
          let res = this.applyJsonLogic(
            tableField.validationJson[rule],
            tableField.jsonlogicData
          );
          if (res != "REJECT_CALL") {
            this.callEndpointLogicForTable(
              tableField,
              record,
              res,
              field,
              index
            );
          }
          break;
        case "calculation":
          tableField.logicvariables = this.fetchLogicVaraiables(
            tableField.validationJson[rule]
          );
          tableField.logicvariables_temp = this.fetchLogicVaraiables(
            tableField.validationJson["calculation"]
          );

          tableField.jsonlogicData = this.fetchlogicvariableDataforTable(
            record,
            tableField.logicvariables_temp
          );
          let calculatedValue;
          calculatedValue = this.applyJsonLogic(
            tableField.validationJson[rule],
            tableField.jsonlogicData
          );
          tableField.value = this.returnParsevalues(
            tableField,
            calculatedValue
          );
          this.extractDynamicFieldsFormData();

          break;
        case "property":
          for (const property in tableField.validationJson[rule]) {
            tableField.logicvariables = this.fetchLogicVaraiables(
              tableField.validationJson[rule][property]
            );

            tableField.jsonlogicData = this.fetchlogicvariableDataforTable(
              record,
              tableField.logicvariables
            );

            tableField[property] = this.applyJsonLogic(
              tableField.validationJson[rule][property],
              tableField.jsonlogicData
            );
          }
          break;
      }
    }
    return tableField;
  }

  runvalidationJsonForTableValidationError(tableField, record) {
    if (tableField.validationJson["validationError"]) {
      tableField.logicvariables_temp = this.fetchLogicVaraiables(
        tableField.validationJson["validationError"]
      );
      tableField.jsonlogicData_temp = this.fetchlogicvariableDataforTable(
        record,
        tableField.logicvariables_temp
      );
      tableField.error = this.applyJsonLogic(
        tableField.validationJson["validationError"],
        tableField.jsonlogicData_temp
      );
    }
    return tableField;
  }

  runvalidationJsonForTableValidationSnackBar(tableField, record) {
    if (tableField.validationJson["validationWithSnackbar"]) {
      let message;
      tableField.logicvariables_temp = this.fetchLogicVaraiables(
        tableField.validationJson["validationWithSnackbar"]
      );
      tableField.jsonlogicData_temp = this.fetchlogicvariableDataforTable(
        record,
        tableField.logicvariables_temp
      );
      message = this.applyJsonLogic(
        tableField.validationJson["validationWithSnackbar"],
        tableField.jsonlogicData_temp
      );
      if (message != null) {
        this.sharedService.openSnackBar(message);
      }
    }
    return tableField;
  }

  fetchlogicvariableDataforTable(
    list,
    logicvariables,
    initialValue = undefined
  ) {
    let data = {};
    this.dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((field) => {
          data = this.fetchlogicvariableDataformTableCommonMapper_l1(
            field,
            data,
            logicvariables,
            initialValue
          );
        });
      });
    });
    if (this.options.externalFeedDataforValidationJson) {
      data = { ...data, ...this.options.externalFeedDataforValidationJson };
    }
    list.forEach((_field) => {
      data = this.fetchlogicvariableDataformTableCommonMapper_l1(
        _field,
        data,
        logicvariables,
        initialValue
      );
    });
    return data;
  }

  fetchlogicvariableDataformTableCommonMapper_l1(
    field,
    data,
    logicvariables,
    initialValue
  ) {
    if (field.fieldDataType != "ADDRESS") {
      data = this.fetchlogicvariableDataforTableCommonMapper(
        field,
        initialValue,
        data,
        logicvariables
      );
    } else {
      if (logicvariables.some((e) => e == `${field.fieldName}CopyAddress`)) {
        data[`${field.fieldName}CopyAddress`] = field.copyAddressValue;
      }
      field.addressFields = field.addressFields.map((addressField) => {
        data = this.fetchlogicvariableDataforTableCommonMapper(
          addressField,
          initialValue,
          data,
          logicvariables
        );
        return data;
      });
    }
    return data;
  }

  fetchlogicvariableDataforTableCommonMapper(
    field,
    initialValue,
    data,
    logicvariables
  ) {
    if (logicvariables.some((e) => e == field.fieldName)) {
      switch (field.fieldDataType) {
        case "NUMBER":
          data = this.handleNumberField(field, initialValue, data);
          break;
        case "AMOUNT":
          data = this.handleAmountField(field, initialValue, data);
          break;
        case "DATE":
          data = this.handleDateField(field, initialValue, data);
          break;
        case "TABLE":
          data = this.handleTableField(field, data);
          break;
        default:
          data[field.fieldName] = field.value;
          break;
      }
    } else {
      this.handleVerificationField(field, logicvariables, data);
    }
    return data;
  }

  handleNumberField(field, initialValue, data) {
    if (initialValue == undefined) {
      if (field.value == null || field.value === "") {
        data[field.fieldName] = 0;
      } else {
        data[field.fieldName] = parseFloat(field.value);
      }
    } else {
      if (field.initialState == null || field.initialState == "") {
        data[field.fieldName] = 0;
      } else {
        data[field.fieldName] = parseFloat(field.initialState);
      }
    }

    return data;
  }

  handleAmountField(field, initialValue, data) {
    if (initialValue === undefined) {
      data[field.fieldName] = this.getAmountValueOrDefault(field.value);
    } else {
      data[field.fieldName] = this.getAmountValueOrDefault(field.initialState);
    }

    return data;
  }

  handleDateField(field, initialValue, data) {
    if (initialValue === undefined) {
      data[field.fieldName] = this.getdateValueOrDefault(field.value);
    } else {
      data[field.fieldName] = this.getdateValueOrDefault(field.initialState);
    }
    return data;
  }

  handleTableField(field, data) {
    if (field.value != null && field.value?.length != 0) {
      data[field.fieldName] = field.value;
    }

    return data;
  }

  handleVerificationField(field, logicvariables, data) {
    data = this.handleOnboardingVerification(field, logicvariables, data);
    return data;
  }

  getAmountValueOrDefault = (value) => {
    if (value == null || value === "") {
      return 0;
    }
    return value;
  };

  getdateValueOrDefault = (value) => {
    if (value != null) {
      if (typeof value === "object") {
        return value.valueOf();
      } else {
        return this.formatters.dateToUnixParser(value);
      }
    }
    return null;
  };

  handleOnboardingVerification(field, logicvariables, data) {
    if (field.onboardingVerificationType != null) {
      if (logicvariables.some((e) => e == `${field.fieldName}Verified`)) {
        data[`${field.fieldName}Verified`] = field.isVerified;
      }
    }
    return data;
  }
  //this event emitter is to event other uncomplementary actions from the dynamic fields to cater custom requirements
  emitOtherEvent(field, eventType) {
    let event = {
      eventType,
      field
    }
    this.otherEvents.emit(event)
  }

  callEndpointLogicForTable(tableField, list, apiData, field, _index) {
    let params = {
      url: apiData["endPoint"],
    };
    let appiceParams = {};
    this.commonVariableService.globalLoaderState = true;
    let data = {};
    list.forEach((e) => {
      data[e.fieldName] = e.value;
    });
    data = { ...data, ...this.options.externalFeedDataforValidationJson };
    apiData?.appiceParams?.forEach((p) => {
      appiceParams[p.name] =
        this.journey?.metaData?.capturedData?.[apiData?.pageSection]?.[p.key];
    });
    this.commonService.triggerAppiceEvent(
      apiData?.appiceEvent,
      appiceParams
    );

    apiData.params.forEach((p) => {
      if (p == "access_token") {
        params[p] = this.journey.product.access_token;
      } else {
        params[p] = data[p];
      }
    });
    this.apiService
      .apiEndpointCall(params)
      .then((res: any) => {
        this.commonVariableService.globalLoaderState = false;
        tableField.endPointData = res;

        list = this.mapFormForEditApiEndpointForTable(list, res);
        field = this.calculateTableFooterdata(field, list);
        this.extractDynamicFieldsFormData();
      })
      .catch(console.error);
  }

  mapFormForEditApiEndpointForTable(list, obj) {
    list.forEach((field) => {
      if (obj.hasOwnProperty(field.fieldName)) {
        if (field.fieldDataType == "ADDRESS") {
          this.mapAddressFields(field, obj);
        } else {
          this.mapRegularField(field, obj);
        }
        field.fieldAccessModifier = "READ_ONLY";
      }
      if (field.fieldDataType == "ADDRESS") {
        field.addressFields.forEach((addressField) => {
          if (obj.hasOwnProperty(addressField.fieldName)) {
            this.mapAddressField(addressField, obj);
          }
        });
      }
      if (obj.hasOwnProperty(field.prefixfieldName)) {
        field.prefix = obj[field.prefixfieldName];
        if (this.options.mapAndDisable === true) {
          field.prefixfieldAccessModifier = "READ_ONLY";
        }
      }
    });

    return list;
  }

  mapRegularField(field, obj) {
    if (field.fieldDataType == "DATE") {
      const str = obj[field.fieldName];
      const [day, month, year] = str.split("/");
      const date = new Date(+year, month - 1, +day);
      field.value = date;
    } else {
      field.value = obj[field.fieldName];
    }
    if (field.verificationType && this.options.autoVerifyMappedFields) {
      field.isVerified = true;
    }
  }

  mapAddressFields(field, obj) {
    field.addressFields.forEach((addressField) => {
      if (obj[field.fieldName].hasOwnProperty(addressField.fieldName)) {
        addressField.value = obj[field.fieldName][addressField.fieldName];
        if (this.options.mapAndDisable === true) {
          addressField.fieldAccessModifier = "READ_ONLY";
        }
      }
    });
  }

  mapAddressField(addressField, obj) {
    addressField.value = obj[addressField.fieldName];
    addressField.fieldAccessModifier = "READ_ONLY";
  }

  ShowGroupName(group) {
    if (group[0].every(t => t.showField === false)) {
      return false
    }
    return true
  }
  ParseInputRestrictionForNumberDataType(data) {
    if (data == null) {
      return null
    } else {
      return String(data).length
    }
  }

  verifyDisableToggle(field) {
    field.verifyDisable = false
    field.isVerified = false
    field.fieldAccessModifier = 'EDITABLE'
    this.dynamicGroupList.forEach((group) => {
      group.forEach((row) => {
        row.forEach((f) => {
          if (f.fieldName == field.verificationFieldName) {
            f.options.value = field.value
            f.options.loanProduct = this.commonService.getJourney().product
            f.showField = false
          }
        })
      })
    })
  }

  fileChange(field, event) {
    field.value = event.target.files[0]
    field.uploaddone = false
    this.uploadFieldDocument(field)
    this.validationCheck(field)
  }

  uploadFieldDocument(field) {
    let params = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      documentCategoryUuid: field.documentData.documentTypeUuid,
      aliasUuid: this.findFieldNamevalue(field.fileDependentField, 'ALL').value,
      //aliasUuid:"26399682-bb25-4fc6-bc2d-51203d1b66af"
      document: field.value,
      microservicetoken:this.journey.product.oauthAccessToken,
    }
    this.apiService.uploadDocument(params).then((res: any) => {
      if (res.code == '200') {
        field.uploaddone = true
        field.uploadUuid = res.supportingDocumentUuid
      } else {
        field.uploaddone = null
        this.sharedService.openSnackBar('Document Upload Failed')
      }
    }, () => {
      field.uploaddone = null
      this.sharedService.openSnackBar('Document Upload Failed')
    })

  }
  fileInputTrigger(field) {
    if (field.fileDependentField) {
      let dep = this.findFieldNamevalue(field.fileDependentField, 'ALL')
      dep = this.checkFilling(dep)
      if (!dep.error) {
        document.getElementById(field.fieldName).click()
        //field.fieldAccessModifier='READ'
      } else {
        this.sharedService.openSnackBar(`please Select ${dep.fieldLabel} to upload a Document`)
      }

    }
  }

  //autonsuggest
  autoSuggestCheck(field, $event) {
    if ($event.inputType == 'insertText') {
      if (field.value.length > 3 && field.autoSuggest) {
        if (field.debouncerTimeOut) {
          clearTimeout(field.debouncerTimeOut)
        }
        field.debouncerTimeOut = setTimeout(() => {
          this.callAutoSuggestionApi(field)
        }, 1000);
        // this.debouncer()
        // _.debounce(, 1000);
      }
    }

  }

  callAutoSuggestionApi(field) {
    let params
    switch (field.autosuggestCode) {
      case 'employerSearch':
        params = {
          access_token: this.journey.product.access_token,
          loanUuid: this.journey.product.loanUuid,
          companyName: field.value,
          applicationSource: 'WEB_JOURNEY',
          requestFor: "BORROWER",
          microservicetoken: this.journey.product.oauthAccessToken
        }
        this.apiService.employerSearch(params).then((res: any) => {
          if (res.code == '200') {
            field.suggestion = res.mappingFields.suggestedNamesList
          }
        });
        break;
      case 'GST_SEARCH':
        params = {
          "access_token": this.journey.product.access_token,
          "applicationSource": "WEB_JOURNEY",
          "requestFor": "BORROWER",
          "loanUuid": this.journey.product.loanUuid
        }
        this.apiService.gstSearchByPan(params).then((res: any) => {
          if (res.code == '200') {
            field.suggestion = res.mappingFields[field.fieldName].options.map((option) => option.optionKey)
          }
        })
        break
    }
    // field.suggestion=this.autoComplete
  }

  blurSuggestion(field) {
    field.suggestion = null
  }

  selectSuggestion(field, suggestion) {
    field.value = suggestion
    if (field.autoSuggestSelectDisable) {
      field.fieldAccessModifier = 'READ_ONLY'
    }
    if (field.autosuggestCode == "employerSearch") {
      this.commonService.journeyEventsExecutor('EMPLOYMENT_DETAILS_CHECK');
    }
    this.blurSuggestion(field)
  }

  parseDocumentTypes(alias) {
    let options = []
    alias.map(op => {
      let option = {
        "optionCode": null,
        "optionKey": null,
        "optionName": null,
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": null,
        "sortIndex": 0
      }
      option.optionCode = op['uuid']
      option.optionKey = op['uuid']
      option.optionName = op['name']
      option.optionParentCode = op['uuid']
      option.optionParentProperty = op['uuid']
      option.optionValue = op['uuid']
      options.push(option)

    })


    return options
  }

  visiblityChange(field){
    field.dataMasking = !field.dataMasking
  }

  formatSlider(field){
    return (_value)=>{
        return `${field.prefix?field.prefix:""} ${field.value} ${field.suffix?field.suffix:""} `
    }
}
}

