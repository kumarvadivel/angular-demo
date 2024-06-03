import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {CommonCommonService} from '@pl-app/services/common-common.service';
import {CommonVariableService} from '@pl-app/services/common-variable-service';
import {ApiService} from '@pl-app/services/api.service';
import {LocalStorage} from '@pl-app/shared/helpers/localStorage';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    public bannerList = [];
    public loanProducts = [];
    public hoverIndex = null;
    public menu = [];
    public subMenu = [];
    public selectedMenu = 0;
    public loanAmount = 12000;
    public tensure = 10;
    public emi: any = 0;
    public Interest = 12;
    public productList = [];
    public offerList = [];
    public selectedCategoryTab = 0;
    public sessionNavigate: string = '';
    public loanProductPageIndex = 0
    contentView = 'PRODUCTS'
    emiCalculatorData = [
        {
            label: "Personal Loan",
            tabData: [
                {
                    "componentType": "FORM",
                    className: "x-large",
                    sectionContent: {
                        "isShow": true,
                        "options": {'columnSize': 2, 'layout': 'sideLayout'},
                        "fields": [{
                            "fieldDataType": "NUMBER",
                            "isMandatory": false,
                            "fieldLabel": "Loan Amount",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "default": {
                                    "if": [true, {"var": "loanAmountCopy"}]
                                },
                                "calculation": {
                                    "if": [true, {"var": "loanAmountCopy"}]
                                }
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "loanAmount",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true,
                            'prefixfieldAccessModifier': 'READ_ONLY',
                            'prefixCommonProperty': null,
                            "includePrefixtoFormValue": false,
                            "prefixfieldName": "title",
                            "prefixType": 'TEXT',
                            "prefix": "INR",
                            "showprefix": true,
                            "prefixplaceholderText": 'Rupee'
                        }, {
                            "fieldDataType": "NUMBER",
                            "isMandatory": false,
                            "fieldLabel": "Tenure",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "default": {
                                    "if": [true, {"var": "tenureCopy"}]
                                },
                                "calculation": {
                                    "if": [true, {"var": "tenureCopy"}]
                                }
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "tenure",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true,
                        }, {
                            "fieldDataType": "RANGE",
                            "isMandatory": false,
                            "fieldLabel": "Enter your account number",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 0,
                            "maxLength": 250000,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "default": {
                                    "if": [true, {"var": "loanAmount"}]
                                },
                                "calculation": {
                                    "if": [true, {"var": "loanAmount"}]
                                }
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "xx x  xxxxx",
                            "fieldName": "loanAmountCopy",
                            "labelInfo": "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
                            "showLabel": false,
                            "showField": true,
                            "prefix": '₹',
                            "suffix": null,
                            excludeToFormValue: true,
                        }, {
                            "fieldDataType": "RANGE",
                            "isMandatory": false,
                            "fieldLabel": "Enter your account number",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 1,
                            "maxLength": 84,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "default": {
                                    "if": [true, {"var": "tenure"}]
                                },
                                "calculation": {
                                    "if": [true, {"var": "tenure"}]
                                }
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "xx x  xxxxx",
                            "fieldName": "tenureCopy",
                            "labelInfo": null,
                            "showLabel": false,
                            "showField": true,
                            "prefix": null,
                            "suffix": 'months',
                            "excludeToFormValue": true
                        }, {
                            "fieldDataType": "NUMBER",
                            "isMandatory": false,
                            "fieldLabel": "Interest Rate",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": 10.5,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "interestRate",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                        }, {
                            "fieldDataType": "TEXT",
                            "isMandatory": false,
                            "fieldLabel": "EMI to be paid",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "calculation":
                                    {"+": [{"/": [{"var": "loanAmount"}, {"var": "tenure"}]}, {"/": [{"*": [{"var": "loanAmount"}, {"*": [{"var": "interestRate"}, 0.01]}]}, {"var": "tenure"}]}]}
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "emiToBePaid",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                        }, {
                            "fieldDataType": "TEXT",
                            "isMandatory": false,
                            "fieldLabel": "EMI to be paid",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "calculation": {
                                    "-": [{"*": [{"var": "emiToBePaid"}, {"var": "tenure"}]}, {"var": "loanAmount"}]
                                }
                            },
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "interestPaid",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": false
                        }],
                        validityEmitter: new Subject<void>(),
                        formValueEmitter: new Subject<void>(),
                    }
                },
                {
                    "componentType": "CHART",
                    "className": "chart-landing",
                    "sectionContent": {
                        "isShow": false,
                        "config": {
                            data: [{
                                fieldLabel: "Principle Amount",
                                value: 10000,
                                bgColor: '#0090E5'
                            }, {
                                fieldLabel: "Interest Amount",
                                value: 0,
                                bgColor: '#00C5AB'
                            }],
                            chartType: "PIE_CHART"
                        },
                        updateChart: new Subject<void>()
                    }
                }
            ]
        },
        {
            label: "Gold Loan",
            tabData: [
                {
                    "componentType": "FORM",
                    className: "x-large",
                    sectionContent: {
                        "isShow": true,
                        "options": {'columnSize': 2, 'layout': 'sideLayout'},
                        "fields": [{
                            "fieldDataType": "NUMBER",
                            "isMandatory": false,
                            "fieldLabel": "Loan Amount",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "default": {
                                    "if": [true, {"var": "loanAmountCopy"}]
                                },
                                "calculation": {
                                    "if": [true, {"var": "loanAmountCopy"}]
                                }
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "loanAmount",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true,
                            'prefixfieldAccessModifier': 'READ_ONLY',
                            'prefixCommonProperty': null,
                            "includePrefixtoFormValue": false,
                            "prefixfieldName": "title",
                            "prefixType": 'TEXT',
                            "prefix": "INR",
                            "showprefix": true,
                            "prefixplaceholderText": 'Rupee'
                        }, {
                            "fieldDataType": "NUMBER",
                            "isMandatory": false,
                            "fieldLabel": "Tenure",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "default": {
                                    "if": [true, {"var": "tenureCopy"}]
                                },
                                "calculation": {
                                    "if": [true, {"var": "tenureCopy"}]
                                }
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "tenure",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true,
                        }, {
                            "fieldDataType": "RANGE",
                            "isMandatory": false,
                            "fieldLabel": "Enter your account number",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 1000,
                            "maxLength": 5000000,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "default": 1000,
                                "calculation": {
                                    "if": [true, {"var": "loanAmount"}]
                                }
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "xx x  xxxxx",
                            "fieldName": "loanAmountCopy",
                            "labelInfo": "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
                            "showLabel": false,
                            "showField": true,
                            "prefix": '₹',
                            "suffix": null,
                            excludeToFormValue: true,
                        }, {
                            "fieldDataType": "RANGE",
                            "isMandatory": false,
                            "fieldLabel": "Enter your account number",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 1,
                            "maxLength": 84,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "default": {
                                    "if": [true, {"var": "tenure"}]
                                },
                                "calculation": {
                                    "if": [true, {"var": "tenure"}]
                                }
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "xx x  xxxxx",
                            "fieldName": "tenureCopy",
                            "labelInfo": null,
                            "showLabel": false,
                            "showField": true,
                            "prefix": null,
                            "suffix": 'months',
                            "excludeToFormValue": true
                        }, {
                            "fieldDataType": "NUMBER",
                            "isMandatory": false,
                            "fieldLabel": "Interest Rate",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": 10.5,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "interestRate",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                        }, {
                            "fieldDataType": "TEXT",
                            "isMandatory": false,
                            "fieldLabel": "EMI to be paid",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "calculation":
                                    {"+": [{"/": [{"var": "loanAmount"}, {"var": "tenure"}]}, {"/": [{"*": [{"var": "loanAmount"}, {"*": [{"var": "interestRate"}, 0.01]}]}, {"var": "tenure"}]}]}
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "emiToBePaid",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                        }, {
                            "fieldDataType": "TEXT",
                            "isMandatory": false,
                            "fieldLabel": "EMI to be paid",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "calculation": {
                                    "-": [{"*": [{"var": "emiToBePaid"}, {"var": "tenure"}]}, {"var": "loanAmount"}]
                                }
                            },
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "interestPaid",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": false
                        }],
                        validityEmitter: new Subject<void>(),
                        formValueEmitter: new Subject<void>(),
                    }
                },
                {
                    "componentType": "CHART",
                    "className": "chart-landing",
                    "sectionContent": {
                        "isShow": false,
                        "config": {
                            data: [{
                                fieldLabel: "Principle Amount",
                                value: 10000,
                                bgColor: '#0090E5'
                            }, {
                                fieldLabel: "Interest Amount",
                                value: 0,
                                bgColor: '#00C5AB'
                            }],
                            chartType: "PIE_CHART"
                        },
                        updateChart: new Subject<void>()
                    }
                }
            ]
        },
        {
            label: "Vehicle Loan",
            tabData: [
                {
                    "componentType": "FORM",
                    className: "x-large",
                    sectionContent: {
                        "isShow": true,
                        "options": {'columnSize': 2, 'layout': 'sideLayout'},
                        "fields": [{
                            "fieldDataType": "NUMBER",
                            "isMandatory": false,
                            "fieldLabel": "Loan Amount",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "default": {
                                    "if": [true, {"var": "loanAmountCopy"}]
                                },
                                "calculation": {
                                    "if": [true, {"var": "loanAmountCopy"}]
                                }
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "loanAmount",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true,
                            'prefixfieldAccessModifier': 'READ_ONLY',
                            'prefixCommonProperty': null,
                            "includePrefixtoFormValue": false,
                            "prefixfieldName": "title",
                            "prefixType": 'TEXT',
                            "prefix": "INR",
                            "showprefix": true,
                            "prefixplaceholderText": 'Rupee'
                        }, {
                            "fieldDataType": "NUMBER",
                            "isMandatory": false,
                            "fieldLabel": "Tenure",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "default": {
                                    "if": [true, {"var": "tenureCopy"}]
                                },
                                "calculation": {
                                    "if": [true, {"var": "tenureCopy"}]
                                }
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "tenure",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true,
                        }, {
                            "fieldDataType": "RANGE",
                            "isMandatory": false,
                            "fieldLabel": "Enter your account number",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 0,
                            "maxLength": 20000000,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "default": {
                                    "if": [true, {"var": "loanAmount"}]
                                },
                                "calculation": {
                                    "if": [true, {"var": "loanAmount"}]
                                }
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "xx x  xxxxx",
                            "fieldName": "loanAmountCopy",
                            "labelInfo": "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
                            "showLabel": false,
                            "showField": true,
                            "prefix": '₹',
                            "suffix": null,
                            excludeToFormValue: true,
                        }, {
                            "fieldDataType": "RANGE",
                            "isMandatory": false,
                            "fieldLabel": "Enter your account number",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 1,
                            "maxLength": 84,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "default": {
                                    "if": [true, {"var": "tenure"}]
                                },
                                "calculation": {
                                    "if": [true, {"var": "tenure"}]
                                }
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "xx x  xxxxx",
                            "fieldName": "tenureCopy",
                            "labelInfo": null,
                            "showLabel": false,
                            "showField": true,
                            "prefix": null,
                            "suffix": 'months',
                            "excludeToFormValue": true
                        }, {
                            "fieldDataType": "NUMBER",
                            "isMandatory": false,
                            "fieldLabel": "Interest Rate",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": 10.5,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "interestRate",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                        }, {
                            "fieldDataType": "TEXT",
                            "isMandatory": false,
                            "fieldLabel": "EMI to be paid",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "runAlways": true,
                                "calculation":
                                    {"+": [{"/": [{"var": "loanAmount"}, {"var": "tenure"}]}, {"/": [{"*": [{"var": "loanAmount"}, {"*": [{"var": "interestRate"}, 0.01]}]}, {"var": "tenure"}]}]}
                            },
                            "rulesFor": ['interestPaid'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "emiToBePaid",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                        }, {
                            "fieldDataType": "TEXT",
                            "isMandatory": false,
                            "fieldLabel": "EMI to be paid",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "calculation": {
                                    "-": [{"*": [{"var": "emiToBePaid"}, {"var": "tenure"}]}, {"var": "loanAmount"}]
                                }
                            },
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "interestPaid",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": false
                        }],
                        validityEmitter: new Subject<void>(),
                        formValueEmitter: new Subject<void>(),
                    }
                },
                {
                    "componentType": "CHART",
                    "className": "chart-landing",
                    "sectionContent": {
                        "isShow": false,
                        "config": {
                            data: [{
                                fieldLabel: "Principle Amount",
                                value: 10000,
                                bgColor: '#0090E5'
                            }, {
                                fieldLabel: "Interest Amount",
                                value: 0,
                                bgColor: '#00C5AB'
                            }],
                            chartType: "PIE_CHART"
                        },
                        updateChart: new Subject<void>()
                    }
                }
            ]
        },
    ]
    columnConfig = {'columnSize': 2, 'layout': ''}
    data = [
        {
            "fieldDataType": "BUTTON_TOGGLE",
            "otpType": 'PHONE',
            "isMandatory": false,
            "fieldLabel": "Choose Customer Type",
            "fieldAccessModifier": "EDITABLE",
            "minLength": 6,
            "maxLength": 15,
            "length": 6,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "groupName": null,
            "groupIndex": null,
            "placeholderText": "xx x  xxxxx",
            "fieldName": "chooseCustomerType",
            "labelInfo": null,
            "showLabel": true,
            "showField": true,
            "isVertical": true,
            "options": [
                {
                    "optionCode": "NC",
                    "optionKey": "NewCustomer.",
                    "optionName": "newCustomer.",
                    "optionParentCode": "-",
                    "optionParentPropertyType": null,
                    "optionValue": "",
                    "icon": "newCustomer",
                    "sortIndex": 0
                },
                {
                    "optionCode": "EC",
                    "optionKey": "ExistingCustomer.",
                    "optionName": "existingCustomer.",
                    "optionParentCode": "-",
                    "optionParentPropertyType": null,
                    "optionValue": "",
                    "icon": "existingCustomer",
                    "sortIndex": 1
                }
            ]
        },
        {
            "fieldDataType": "RADIO",
            "isMandatory": true,
            "fieldLabel": "Are you Senior Citizen",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": null,
            "error": null,
            "value": null,
            "radioGroupOrientation": "HORIZONTAL",
            "options": [{
                "optionKey": "YES",
                "optionName": "Yes",
                "optionValue": "YES",
                "icon": "newCustomer",
            },
                {
                    "optionKey": "NO",
                    "optionName": "No",
                    "optionValue": "NO",
                    "icon": "existingCustomer"
                }],
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "fieldName": "citizenship",
            "placeholderText": "xx x  xxxxx",
            "labelInfo": "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
            "showLabel": true,
            "groupName": null,
            "groupIndex": null,
            "showField": true
        },
    ]

    constructor(private router: Router,
                public theme1ApiService: ApiService,
                private localStorage: LocalStorage,
                public commonVariableService: CommonVariableService,
                public commonService: CommonCommonService) {
        this.commonService.bindHeaderFooterTypes('LANDING')
    }

    @HostListener('window:beforeunload')
    canDeactivate() {
        return false;
    }

    ngOnInit(): void {
        this.localStorage.SessionremoveItem('PRODUCT_CONFIGURATION')
        this.menu = this.commonVariableService.homeMenu;
        this.bannerList = this.commonVariableService.landingPageBanner;
        this.loanProducts = this.commonVariableService.loanProductInfo;
        this.loanProducts = this.paginateLoanProducts(this.loanProducts)
        this.navigateSubMenu(0);
        this.productList = [
            {
                label: 'Agriculture',
                img: '../../../assets/icons/home-icon-10.png',
                info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
            },
            {
                label: 'Corporate Credit',
                img: '../../../assets/icons/home-icon-19.png',
                info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
            },
            {
                label: 'Insurance',
                img: '../../../assets/icons/home-icon-24.png',
                info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
            },
            {
                label: 'Government Business Products',
                img: '../../../assets/icons/home-icon-18.png',
                info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
            },
            {
                label: 'MSME',
                img: '../../../assets/icons/home-icon-20.png',
                info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
            },
            {
                label: 'Account Creation',
                img: '../../../assets/icons/home-icon-23.png',
                info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
            },
            {
                label: 'Retail',
                img: '../../../assets/icons/home-icon-21.png',
                info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
            },
            {
                label: 'Third Party Products - Fund',
                img: '../../../assets/icons/home-icon-22.png',
                info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
            }
        ];
        this.offerList = [
            {
                label: "Credit Card",
                details: 'Get instant credit offers on your card',
                color: '#45526C'
            },
            {
                label: "Credit Card",
                details: 'Get instant credit offers on your card',
                color: '#5AA897'
            },
            {
                label: "Credit Card",
                details: 'Get instant credit offers on your card',
                color: '#F8A488'
            }
        ]
    }

    statusObserver($event, item) {
        if ($event.TriggerSection == 'FORM') {
            item.tabData[1].sectionContent.isShow = true
            item.tabData[1].sectionContent.config.data[0].value = typeof item.tabData[0].sectionContent.formValue.loanAmount == 'string' ? 0 : item.tabData[0].sectionContent.formValue.loanAmount
            item.tabData[1].sectionContent.config.data[1].value = typeof item.tabData[0].sectionContent.formValue.interestPaid == 'string' ? 0 : item.tabData[0].sectionContent.formValue.interestPaid
            item.tabData[1].sectionContent.updateChart.next()
        }
    }

    paginateLoanProducts(loanProductsList) {
        return loanProductsList.reduce((acc, val, i) => {
            let idx = Math.floor(i / 6)
            let page = acc[idx] || (acc[idx] = [])
            page.push(val)
            return acc
        }, [])
    }

    navigateSubMenu(i) {
        this.menu.forEach((item, index) => {
            if (index == i) {
                this.selectedMenu = i;
                this.subMenu = item.subMenu
            }
        })
    }

    getImgBg(color) {
        return 'rgb(' + color + ',10%)';
    }

    getBorder(color) {
        return 'rgb(' + color + ',0.4)';
    }

    getShadow(color) {
        return `0 0 6px ${color}`;
    }

    navigatePage(item) {
        this.commonService.initializeJourney(item)
    }

    selectedCatgory(event) {
        this.selectedCategoryTab = event;
    }

    goToNewLink() {
        let url = "https://www.bankofindia.co.in/Home/Locateus?parmtype=Branch";
        window.open(url);
    }
}
