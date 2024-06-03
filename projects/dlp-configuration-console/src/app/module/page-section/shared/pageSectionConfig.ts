export let sampleconfig = [
    {
      "componentType": "TITLE",
      "className": "mb-1",
      "sectionContent": {
        "isShow": true,
        "titleData": "Mobile Number Verification"
      }
    },
    {
      "componentType": "PARAGRAPH",
      "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
      "sectionContent": {
        "isShow": true,
        "paragraphData": "Please provide your mobile number to get started. We recommend providing mobile no registered with Aadhaar for quicker processing of your application"
      }
    },
    {
      "componentType": "FORM",
      "className": "medium",
      "validateSection": true,
      "sectionContent": {
        "options": {
          "columnSize": 1
        },
        "isShow": true,
        "fields": [
          {
            "fieldDataType": "MOBILE_NO",
            "isMandatory": true,
            "fieldLabel": "Enter Mobile number",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 10,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": "^[1-9][0-9]{9}$",
            "countryCode": "+91",
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "Enter 10 digit Mobile Number",
            "fieldName": "mobileNumber",
            "labelInfo": null,
            "showLabel": true,
            "groupName": null,
            "groupIndex": null,
            "showField": true
          },
          {
            "fieldDataType": "MOBILE_NO",
            "isMandatory": true,
            "fieldLabel": "Enter Mobile number",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 10,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": "^[1-9][0-9]{9}$",
            "countryCode": "+91",
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "Enter 10 digit Mobile Number",
            "fieldName": "mobileNumber",
            "labelInfo": null,
            "showLabel": true,
            "groupName": null,
            "groupIndex": null,
            "showField": true
          }
        ]
      }
    },
    {
      "componentType": "CONSENT",
      "validateSection": true,
      "className": "consent-text",
      "sectionContent": {
        "config": {
          "options": [
            {
              "consentType": "APIFETCH",
              "consentCode": "DND_CONSENT_PL",
              "submitConsentCodes": [
                "DND_CONSENT_PL",
                "PRIVACY_POLICY_PL"
              ],
              "label": null,
              "className": "check-container",
              "completed": null
            }
          ]
        },
        "isShow": true,
        "showField": true
      }
    },
    {
      "componentType": "OTP",
      "sectionContent": {
        "fields": {
          "fieldDataType": "OTP",
          "otpType": "MOBILE",
          "isMandatory": true,
          "fieldLabel": "Enter Mobile OTP",
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
          "fieldName": "accountNo",
          "labelInfo": "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
          "showLabel": true,
          "showField": true,
          "OtpMasking": true,
          "otpDataType": "NUMBER",
          "otpAttempts": 3,
          "waitTimeInSeconds": 120,
          "infoText": "A 6 digit OTP has been sent to the above number"
        },
        "options": {
          "value": null,
          "notificationType": "COMMON_OTP_TWO",
          "loanProduct": null,
          "createBorrower": true,
          "generateOtp": true
        },
        "isShow": false
      }
    }
  ]

export let componentTypes = [
  "TITLE", // done
  "PARAGRAPH", //done
  "CONSENT",  //done
  "CAPCHA",
  "OTP",
  "ORDERED_LIST", //done
  "HTML_CONTENT", //done
  "TABLE",
  "CHART",
  "BUTTON", //done
  "FORM"
]

export let section_base_configs={
  "TITLE":{
    "componentType": "TITLE",
    "className": null,
    "validateSection":false,
    "mandatory":false,
    "sectionContent": {
      "isShow": true,
      "titleData": null
    }
  },
  "PARAGRAPH":{
    "componentType": "PARAGRAPH",
    "className": null,
    "validateSection":false,
    "mandatory":false,
    "sectionContent": {
      "isShow": true,
      "paragraphData": null
    }
  },
  "CONSENT":{
    "componentType": "CONSENT",
    "validateSection": true,
    "mandatory":false,
    "className": null,
    "sectionContent": {
      "config": {
        "options": [
          {
            "consentType": null,
            "consentCode": null,
            "submitConsentCodes": [
            ],
            "label": null,
            "className": null,
            "completed": null
          }
        ]
      },
      "isShow": true,
    }
  },
  "CAPCHA": {
    "componentType": "CAPCHA",
    "className": null,
    "mandatory": false,
    "validateSection": true,
    "sectionContent": {
      "isShow": true,
      "isValid": false
    }
  },
  "OTP":
  {
    'componentType': 'OTP',
    "sectionContent": {
      "fields": {
        "fieldDataType": "OTP",
        "otpType": null, // PHONE,EMAIL,AADHAR,UDYAM,PAN,GST
        "isMandatory": true,
        "fieldLabel": null,
        "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
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
        "fieldName": "accountNo",
        "labelInfo": "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
        "showLabel": true,
        "showField": true,
        "OtpMasking": true,
        "otpDataType": 'NUMBER',
        "otpAttempts": null,
        "waitTimeInSeconds": null,
        "infoText": "A 6 digit OTP has been sent to the above number",
      },
      "options": {
        'value': null,
        'notificationType': 'COMMON_OTP_TWO',
        'loanProduct': null,
        'createBorrower': true,
        'generateOtp': false,
        'journeyEventCode': 'MOBILE_VERIFY'
      },
      "isShow": true,
    }
  },
  "HTML_CONTENT":{
    "componentType": "HTML_CONTENT",
    "validateSection": false,
    "mandatory":false,
    "className": null,
    "sectionContent": {
      "isShow": true,
      "htmlData": null
    }
  },
  "ORDERED_LIST":{
    "componentType":"ORDERED_LIST",
    "validateSection": false,
    "mandatory":false,
    "className": null,
    "sectionContent":{
      "isShow":true,
      "listItem":null
    }
  },
  "BUTTON": {
    "componentType": "BUTTON",
    "validateSection": false,
    "mandatory":false,
    "className": null,
    "sectionContent": {
      "label": null,
      "actionId": null,
      "className": null,
      "isShow": true
    }
  },
  "TABLE":{
    "componentType": "TABLE",
    "validateSection": false,
    "mandatory":false,
    "className": null,
    "sectionContent": {
      "isShow": true,
      "config": {
        "showRecordActions": false,
        "showSerialNo": false,
        "showFooterAction": false,
        "showFooterCalculations": false,
        "showHeaders": false,
        "title": null,
        "footerActionLabel": null,
        "recordActions": [
          {
            "actionCode": "EDIT",
            "icon": "../../../../assets/icons/edit.png",
            "name": "Edit"
          }
        ],
        "headers": [
          // {
          //   "fieldLabel": "S.No",
          //   "fieldName": "sno"
          // },
          // {
          //   "fieldLabel": "Parameter",
          //   "fieldName": "title"
          // },
          // {
          //   "fieldLabel": "Details",
          //   "fieldName": "data"
          // }
        ],
        "data": []
      }
    }
  },
  "FORM":{
    "componentType": "FORM",
    "validateSection": true,
    "mandatory": true,
    "className": null,
    "sectionContent": {
      "options": {
        "columnSize": null,
        "sendOptionKeyForDropDowns": false,
        "mapSupplyData":false,
        "mapAndDisable":false,

      },
      "isShow": true,
      "fields": []
    }
  },
  "CHART":{
    "componentType": "CHART",
    "className": null,
    "validateSection":false,
    "mandatory":false,
    "sectionContent": {
      "isShow": true,
      "config": {}
    }
  }
}

export let configurationFields={
  "TITLE":[{
    "componentType": "FORM",
    "validateSection": true,
    "mandatory": false,
    "className": "mb-10 x-large coapplicant-padding",
    "sectionContent": {
      "options": {
        "columnSize": 2
      },
      "isShow": true,
      "fields": [
        {
          "fieldDataType": "TEXT",
          "isMandatory": true,
          "fieldLabel": "Enter Title for the section",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "titleData",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": true,
          "fieldLabel": "show Section",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "isShow",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "TEXT",
          "isMandatory": false,
          "fieldLabel": "Enter ClassNames for the section (add multiple classNames with space seperated)",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter ClassName",
          "fieldName": "className",
          "labelInfo": "This defines the styling of the section",
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
      ]
    }
  }],
  "PARAGRAPH":[{
    "componentType": "FORM",
    "validateSection": true,
    "mandatory": false,
    "className": "mb-10 x-large coapplicant-padding",
    "sectionContent": {
      "options": {
        "columnSize": 2
      },
      "isShow": true,
      "fields": [
        {
          "fieldDataType": "TEXT",
          "isMandatory": true,
          "fieldLabel": "Enter paragraph for the section",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "paragraphData",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": true,
          "fieldLabel": "show Section",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "isShow",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "TEXT",
          "isMandatory": false,
          "fieldLabel": "Enter ClassNames for the section (add multiple classNames with space seperated)",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter ClassName",
          "fieldName": "className",
          "labelInfo": "This defines the styling of the section",
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
      ]
    }
  }],
  "CONSENT":[{
    "componentType": "FORM",
    "validateSection": true,
    "mandatory": false,
    "className": "mb-10 x-large coapplicant-padding",
    "sectionContent": {
      "options": {
        "columnSize": 2
      },
      "isShow": true,
      "fields": [ 
        {
        "fieldDataType": "DROPDOWN",
        "isMandatory": true,
        "commonpropertyType": null,
        "fieldLabel": "Consent Type",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": ["consentCode","label"],
        "regex": null,
        "options": [{
          "optionKey":"APIFETCH",
          "optionName":"Api fetch"
        },{
          "optionKey":"STATIC",
          "optionName":"Static"
        }],
        "regexErrorMessage": null,
        "rowNo": 1,
        "columnNo": 1,
        "groupName": "",
        "groupIndex": 1,
        "placeholderText": "Consent Type",
        "fieldName": "consentType",
        "labelInfo": null,
        "showLabel": true,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": true,
        "fieldLabel": " consent label",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": 100,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "==":[{"var":"consentType"},"STATIC"]
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter static consent label",
        "fieldName": "label",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": true,
        "fieldLabel": "Consent Code Enum",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": 100,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "==":[{"var":"consentType"},"APIFETCH"]
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter consent code Enum",
        "fieldName": "consentCode",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Submit Consent Codes (to enter multiple codes seperate the codes with ',')",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter submit consent code Enum",
        "fieldName": "submitConsentCode",
        "labelInfo": "This code is the code which will be submitted to backend api in '/consent/create'",
        "showLabel": true,
        "groupName": "",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": true,
        "fieldLabel": "show Section",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": 100,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Content",
        "fieldName": "isShow",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "CHECKBOX",
        "isMandatory": true,
        "fieldLabel": "validate the section mandatorily in page?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": 100,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Content",
        "fieldName": "mandatory",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "",
        "groupIndex": 1,
        "showField": true
      }
      , {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Enter ClassNames for the section (add multiple classNames with space seperated)",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": 100,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter ClassName",
        "fieldName": "className",
        "labelInfo": "This defines the styling of the section",
        "showLabel": true,
        "groupName": "",
        "groupIndex": 1,
        "showField": true
      },]
    }
  }], 
  "CAPCHA": [{
    "componentType": "FORM",
    "validateSection": true,
    "mandatory": false,
    "className": "mb-10 x-large coapplicant-padding",
    "sectionContent": {
      "options": {
        "columnSize": 1
      },
      "isShow": true,
      "fields": [
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": true,
          "fieldLabel": "show Section",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "isShow",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "TEXT",
          "isMandatory": false,
          "fieldLabel": "Enter ClassNames for the section (add multiple classNames with space seperated)",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter ClassName",
          "fieldName": "className",
          "labelInfo": "This defines the styling of the section",
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
      ]
    }
  }],
  "OTP": [
    {
      "componentType": "FORM",
      "validateSection": true,
      "mandatory": false,
      "className": "mb-10 x-large coapplicant-padding",
      "sectionContent": {
        "options": {
          "columnSize": 2
        },
        "isShow": true,
        "fields": [
          {
            "fieldDataType": "BOOLEAN",
            "isMandatory": true,
            "fieldLabel": "show Section",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 100,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "Enter Content",
            "fieldName": "isShow",
            "labelInfo": null,
            "showLabel": true,
            "groupName": "",
            "groupIndex": 1,
            "showField": true
          },

          {
            "fieldDataType": "TEXT",
            "isMandatory": true,
            "fieldLabel": "FieldLabel",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": null,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "Enter fieldLabel",
            "fieldName": "fieldLabel",
            "labelInfo": null,
            "showLabel": true,
            "groupName": "",
            "groupIndex": 1,
            "showField": true
          }, {
            "fieldDataType": "NUMBER",
            "isMandatory": false,
            "fieldLabel": "Length",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": null,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "Enter a length",
            "fieldName": "Length",
            "labelInfo": null,
            "showLabel": true,
            "groupName": "",
            "groupIndex": 1,
            "showField": true
          },
          {
            "fieldDataType": "DROPDOWN",
            "dependentField": null,
            "isMandatory": true,
            "upperCase": true,
            "fieldLabel": "Otp Type",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": null,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": [],
            "regex": null,
            "options": [{
              "optionName": "MOBILE",
              "optionKey": "MOBILE",

            }, {
              "optionName": "EMAIL",
              "optionKey": "EMAIL",

            }, {
              "optionName": "AADHAR",
              "optionKey": "AADHAR",

            }, {
              "optionName": "UDYAM",
              "optionKey": "UDYAM",

            }
              , {
              "optionName": "PAN",
              "optionKey": "PAN",

            }, {
              "optionName": "GST",
              "optionKey": "GST",

            },
            ],
            "regexErrorMessage": null,
            "errorIconPath": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "select Otp Type",
            "fieldName": "OtpType",
            "showLabel": true,
            "labelInfo": null,
            "groupName": "",
            "groupIndex": 1,
            "showField": true
          },
          {
            "fieldDataType": "BOOLEAN",
            "isMandatory": false,
            "fieldLabel": "Do you want to mask Otp",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 100,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "",
            "fieldName": "isShow",
            "labelInfo": null,
            "showLabel": true,
            "groupName": "",
            "groupIndex": 1,
            "showField": true
          },

          {
            "fieldDataType": "DROPDOWN",
            "isMandatory": true,
            "fieldLabel": "otpAttempts",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 100,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "options": [{
              "optionKey": 1,
              "optionName": 1
            },
            {
              "optionKey": 2,
              "optionName": 2
            }, {
              "optionKey": 3,
              "optionName": 3
            }],
            "placeholderText": "select otpAttempts",
            "fieldName": "otpAttempts",
            "labelInfo": null,
            "showLabel": true,
            "groupName": "",
            "groupIndex": 1,
            "showField": true
          },
          {
            "fieldDataType": "DROPDOWN",
            "isMandatory": true,
            "fieldLabel": "waitTimeInSeconds",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 100,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "options": [{
              "optionKey": 30,
              "optionName": 30
            },
            {
              "optionKey": 60,
              "optionName": 60
            }, {
              "optionKey": 120,
              "optionName": 120
            }],
            "placeholderText": "select waitTimeInSeconds",
            "fieldName": "waitTimeInSeconds",
            "labelInfo": null,
            "showLabel": true,
            "groupName": "",
            "groupIndex": 1,
            "showField": true
          },

          {
            "fieldDataType": "TEXT",
            "isMandatory": true,
            "fieldLabel": "infoText",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 100,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "Enter Content",
            "fieldName": "infoText",
            "labelInfo": null,
            "showLabel": true,
            "groupName": "",
            "groupIndex": 1,
            "showField": true
          }
        ]
      }
    }

  ],
  "HTML_CONTENT":[
    {
    "componentType": "FORM",
    "validateSection": true,
    "mandatory": false,
    "className": "mb-10 x-large coapplicant-padding",
    "sectionContent": {
      "options": {
        "columnSize": 2
      },
      "isShow": true,
      "fields": [
        {
          "fieldDataType": "TEXT_AREA",
          "isMandatory": true,
          "fieldLabel": "Enter HTML content for the section",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": null,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "htmlData",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": true,
          "fieldLabel": "show Section",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "isShow",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "TEXT",
          "isMandatory": false,
          "fieldLabel": "Enter ClassNames for the section (add multiple classNames with space seperated)",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter ClassName",
          "fieldName": "className",
          "labelInfo": "This defines the styling of the section",
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
      ]
    }
  }],
  "ORDERED_LIST":[
    {
      "componentType": "FORM",
      "validateSection": true,
      "mandatory": false,
      "className": "mb-10 x-large coapplicant-padding",
      "sectionContent": {
        "options": {
          "columnSize": 2
        },
        "isShow": true,
        "fields": [
          {
          "fieldDataType": "TABLE",
          "dependentField": null,
          "isMandatory": true,
          "fieldLabel": "Add List Items",
          "fieldAccessModifier": "EDITABLE",
          "addTableFields": true,
          "minLength": null,
          "maxLength": null,
          "error": null,
          "value": [],
          "validationJson": "",
          "rulesFor": null,
          "regex": null,
          "addStatus": false,
          "isTableFooter": false,
          "emitedValue": [],
          "showAction": true,
          "addMore": true,
          "tableRowActions": [{
              "actionCode": "ACCEPT",
              "icon": "check",
              "className": "clr-green",
              "isDisplay": true
          },
          {
              "actionCode": "EDIT",
              "icon": "edit",
              "className": "clr-blue",
              "isDisplay": false
          },
          {
              "actionCode": "DELETE",
              "icon": "delete",
              "className": "clr-red",
              "isDisplay": true
          }],
          "validateRowBeforeAdd": true,
          "showSerialNo": true,
          "tableFields": [
              {
                  "fieldDataType": "TEXT",
                  "dependentField": null,
                  "isMandatory": true,
                  "fieldLabel": "List Item",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": "",
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "",
                  "fieldName": "listItem",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "",
                  "groupIndex": 4,
                  "showField": true
              }
          ],
          "regexErrorMessage": null,
          "errorIconPath": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "",
          "fieldName": "listItems",
          "showLabel": true,
          "labelInfo": null,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": true,
          "fieldLabel": "show Section",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "isShow",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "TEXT",
          "isMandatory": false,
          "fieldLabel": "Enter ClassNames for the section (add multiple classNames with space seperated)",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter ClassName",
          "fieldName": "className",
          "labelInfo": "This defines the styling of the section",
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
      ]
      }
      }
  ],
  "BUTTON":[{
    "componentType": "FORM",
    "validateSection": true,
    "mandatory": false,
    "className": "mb-10 x-large coapplicant-padding",
    "sectionContent": {
      "options": {
        "columnSize": 2
      },
      "isShow": true,
      "fields": [
        {
          "fieldDataType": "TEXT",
          "isMandatory": true,
          "fieldLabel": "Enter Button label for the section",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": null,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter label",
          "fieldName": "label",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "TEXT",
          "isMandatory": true,
          "fieldLabel": "Enter ActionId for your button",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": null,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter label",
          "fieldName": "actionId",
          "labelInfo": "ActionId is the value which is used to identify the button in the page to design user Experiance",
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": true,
          "fieldLabel": "show Section",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "isShow",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "TEXT",
          "isMandatory": false,
          "fieldLabel": "Enter ClassNames for the section (add multiple classNames with space seperated)",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter ClassName",
          "fieldName": "className",
          "labelInfo": "This defines the styling of the section",
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
      ]
    }
  }],
  "TABLE":[{
    "componentType": "FORM",
    "validateSection": true,
    "mandatory": false,
    "className": "mb-10 x-large coapplicant-padding",
    "sectionContent": {
      "options": {
        "columnSize": 2
      },
      "isShow": true,
      "fields": [
        {
          "fieldDataType": "TEXT",
          "isMandatory": true,
          "fieldLabel": "Enter Title for the Table",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": null,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Title for the Table",
          "fieldName": "title",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": true,
          "fieldLabel": "show Section",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "isShow",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "TEXT",
          "isMandatory": false,
          "fieldLabel": "Enter ClassNames for the section (add multiple classNames with space seperated)",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter ClassName",
          "fieldName": "className",
          "labelInfo": "This defines the styling of the section",
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": false,
          "fieldLabel": "show Table Headers",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "showHeaders",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "TABLE",
          "dependentField": null,
          "isMandatory": true,
          "fieldLabel": "Headers",
          "fieldAccessModifier": "EDITABLE",
          "addTableFields": true,
          "minLength": null,
          "maxLength": null,
          "error": null,
          "value": [],
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "addStatus": false,
          "isTableFooter": false,
          "emitedValue": [],
          "showAction": true,
          "addMore": true,
          "tableRowActions": [{
              "actionCode": "ACCEPT",
              "icon": "check",
              "className": "clr-green",
              "isDisplay": true
          },
          {
              "actionCode": "EDIT",
              "icon": "edit",
              "className": "clr-blue",
              "isDisplay": false
          },
          {
              "actionCode": "DELETE",
              "icon": "delete",
              "className": "clr-red",
              "isDisplay": true
          }],
          "validateRowBeforeAdd": true,
          "showSerialNo": true,
          "tableFields": [
              {
                  "fieldDataType": "TEXT",
                  "dependentField": null,
                  "isMandatory": true,
                  "upperCase":true,
                  "fieldLabel": "Field Label",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": "",
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "options": [{
                    "optionName":"ACCEPT",
                    "optionKey":"ACCEPT",
  
                  },{
                    "optionName":"EDIT",
                    "optionKey":"EDIT",
  
                  },{
                    "optionName":"DELETE",
                    "optionKey":"DELETE",
  
                  }],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "",
                  "fieldName": "fieldLabel",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "",
                  "groupIndex": 4,
                  "showField": true
              },{
                "fieldDataType": "TEXT",
                "dependentField": null,
                "isMandatory": true,
                "upperCase":true,
                "fieldLabel": "Field Label",
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": "",
                "validationJson": null,
                "rulesFor": null,
                "regex": null,
                "options": [{
                  "optionName":"ACCEPT",
                  "optionKey":"ACCEPT",

                },{
                  "optionName":"EDIT",
                  "optionKey":"EDIT",

                },{
                  "optionName":"DELETE",
                  "optionKey":"DELETE",
                }],
                "regexErrorMessage": null,
                "errorIconPath": null,
                "rowNo": null,
                "columnNo": null,
                "placeholderText": "",
                "fieldName": "fieldName",
                "showLabel": true,
                "labelInfo": null,
                "groupName": "",
                "groupIndex": 4,
                "showField": true
            }
          ],
          "regexErrorMessage": null,
          "errorIconPath": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "",
          "fieldName": "headers",
          "showLabel": true,
          "labelInfo": "Select a action only once",
          "groupName": "",
          "groupIndex": 1,
          "showField": true
      },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": false,
          "fieldLabel": "show serial numbers for the rows?",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "showSerialNo",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": false,
          "fieldLabel": "show Actions for Each rows?",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": ["actions"],
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "showRecordActions",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "TABLE",
          "dependentField": null,
          "isMandatory": true,
          "fieldLabel": "Actions",
          "fieldAccessModifier": "EDITABLE",
          "addTableFields": true,
          "minLength": null,
          "maxLength": null,
          "error": null,
          "value": [],
          "validationJson": {
            "showField":{"==":[{"var":"showRecordActions"},true]}
          },
          "rulesFor": null,
          "regex": null,
          "addStatus": false,
          "isTableFooter": false,
          "emitedValue": [],
          "showAction": true,
          "addMore": true,
          "tableRowActions": [{
              "actionCode": "ACCEPT",
              "icon": "check",
              "className": "clr-green",
              "isDisplay": true
          },
          {
              "actionCode": "EDIT",
              "icon": "edit",
              "className": "clr-blue",
              "isDisplay": false
          },
          {
              "actionCode": "DELETE",
              "icon": "delete",
              "className": "clr-red",
              "isDisplay": true
          }],
          "validateRowBeforeAdd": true,
          "showSerialNo": true,
          "tableFields": [
              {
                  "fieldDataType": "DROPDOWN",
                  "dependentField": null,
                  "isMandatory": true,
                  "upperCase":true,
                  "fieldLabel": "Record Action",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": "",
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "options": [{
                    "optionName":"ACCEPT",
                    "optionKey":"ACCEPT",
  
                  },{
                    "optionName":"EDIT",
                    "optionKey":"EDIT",
  
                  },{
                    "optionName":"DELETE",
                    "optionKey":"DELETE",
  
                  }],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "",
                  "fieldName": "action",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "",
                  "groupIndex": 4,
                  "showField": true
              }
          ],
          "regexErrorMessage": null,
          "errorIconPath": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "",
          "fieldName": "actions",
          "showLabel": true,
          "labelInfo": "Select a action only once",
          "groupName": "",
          "groupIndex": 1,
          "showField": true
      },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": false,
          "fieldLabel": "show Footer Action?",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": ["footerActionLabel","showFooterCalculations"],
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "showFooterAction",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "TEXT",
          "isMandatory": true,
          "fieldLabel": "Footer Action Label",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": null,
          "error": null,
          "value": null,
          "validationJson": {
            "showField":{"==":[{"var":"showFooterAction"},true]}
          },
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Title for the Table",
          "fieldName": "footerActionLabel",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": false,
          "fieldLabel": "show Footer calculations?",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": {
            "showField":{"==":[{"var":"showFooterAction"},true]}
          },
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "showFooterCalculations",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        }
        ]
    }
  }

],
"FORM":[
 
  {
    "componentType":"FORM",
    "validateSection": true,
    "mandatory": false,
    "className": "mb-10 x-large coapplicant-padding",
    "sectionContent":{
      "isShow":true,
      "options":{
        "columnSize":2
      },
      "fields":[
        
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": false,
          "fieldLabel": "show Section",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "isShow",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "TEXT",
          "isMandatory": false,
          "fieldLabel": "Enter ClassNames for the section (add multiple classNames with space seperated)",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter ClassName",
          "fieldName": "className",
          "labelInfo": "This defines the styling of the section",
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "DROPDOWN",
          "isMandatory": true,
          "fieldLabel": "Layout Column Size",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "options":[{
            "optionKey":1,
            "optionName":1
          },
          {
            "optionKey":2,
            "optionName":2
          },{
            "optionKey":3,
            "optionName":3
          }],
          "placeholderText": "select column Size",
          "fieldName": "columnSize",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": false,
          "fieldLabel": "Do you want to Prepopulate Data",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "mapSupplyData",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": false,
          "fieldLabel": "Do you want to Disable the form Completely",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "disableMode",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": false,
          "fieldLabel": "Disable all the mapped Fields while prepopulating?",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "mapAndDisable",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": false,
          "fieldLabel": "Auto Verify as Success to all the mapped Fields while prepopulating?",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "autoVerifyMappedFields",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": false,
          "fieldLabel": "Auto Verify as Success to all the mapped Fields while prepopulating?",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "sendOptionKeyForDropDowns",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "",
          "groupIndex": 1,
          "showField": true
        }
      ]
    }
  },
  {
    "componentType":"TITLE",
    "className":"",
    "sectionContent":{
      "isShow":true,
      "titleData":"Add Field Groups"
    }
  },
  {
    "componentType":"PARAGRAPH",
    "className":"common-info",
    "sectionContent":{
      "isShow":true,
      "paragraphData":"Field groups is feature to group multiple fields under single form"
    }
  },
  {
    "componentType":"FORM",
    "validateSection": true,
    "mandatory": false,
    "className": "mb-10 x-large coapplicant-padding",
    "sectionContent":{
      "isShow":true,
      "options":{
        "columnSize":2
      },
      "fields":[
        {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Enter group Name",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter group Name",
        "fieldName": "groupName",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "NUMBER",
        "isMandatory": false,
        "fieldLabel": "Enter group Index",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter group Index",
        "fieldName": "groupIndex",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "",
        "groupIndex": 1,
        "showField": true
      }]
    }
  },
  {
    "componentType":"BUTTON",
    "sectionContent":{
      "className":"primary-btn",
      "isShow":true,
      "label":"Add Group",
      "actionId":"ADD_GROUP"
    }
  },
  {
    "componentType":"TITLE",
    "className":"",
    "sectionContent":{
      "isShow":true,
      "titleData":"Add Fields"
    }
  },
  {
    "componentType":"FORM",
    "validateSection": true,
    "mandatory": false,
    "className": "mb-10 x-large coapplicant-padding",
    "sectionContent":{
      "isShow":true,
      "options":{
        "columnSize":2
      },
      "fields":[
        {
          "fieldDataType": "DROPDOWN",
          "dependentField": null,
          "isMandatory": true,
          "upperCase":true,
          "fieldLabel": "Field Data Type",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": null,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": ["showSerialNo", "showAction", "addMore", "validateRowBeforeAdd", "showTableFooter", "tableFooterData", "tableRowActions", "tableFields",
          "countryCode", "commonpropertyType", "dependentField", "Masking", "aadhaarNumberFirstMask", "aadhaarNumberSecondMask", "aadhaarNumberThirdMask", "Masking", "isVertical", "prefix", "suffix",
          "autoSuggest", "autosuggestCode", "autoSuggestSelectDisable", "upperCase", "showprefix", "prefixType", "prefixfieldAccessModifier", "prefixfieldName", "prefixplaceholderText", "verificationType", "verifyDisable", "verificationFieldName", "consentPopUp", "externalValidate", "journeyEventCode", "rows"
        
        ],
          "regex": null,
          "options": [{
            "optionName":"TEXT",
            "optionKey":"TEXT",

          },{
            "optionName":"NUMBER",
            "optionKey":"NUMBER",

          },{
            "optionName":"DROPDOWN",
            "optionKey":"DROPDOWN",

          },{
            "optionName":"AUTO_COMPLETE",
            "optionKey":"AUTO_COMPLETE",

          }
          ,{
            "optionName":"BOOLEAN",
            "optionKey":"BOOLEAN",

          },{
            "optionName":"CHECKBOX",
            "optionKey":"CHECKBOX",

          },{
            "optionName":"TEXT_AREA",
            "optionKey":"TEXT_AREA",

          },{
            "optionName":"MOBILE_NO",
            "optionKey":"MOBILE_NO",

          },{
            "optionName":"PAN_CARD",
            "optionKey":"PAN_CARD",

          }
          ,{
            "optionName":"RADIO",
            "optionKey":"RADIO",

          },{
            "optionName":"AADHAR",
            "optionKey":"AADHAR",

          },{
            "optionName":"ACCOUNT_NO",
            "optionKey":"ACCOUNT_NO",

          },{
            "optionName":"DATE",
            "optionKey":"DATE",

          },{
            "optionName":"BUTTON_TOGGLE",
            "optionKey":"BUTTON_TOGGLE",

          },{
            "optionName":"RANGE",
            "optionKey":"RANGE",

          },{
            "optionName":"TABLE",
            "optionKey":"TABLE",

          },{
            "optionName":"ADDRESS",
            "optionKey":"ADDRESS",

          },{
            "optionName":"CARD_OPTIONS",
            "optionKey":"CARD_OPTIONS",

          },{
            "optionName":"SECTION",
            "optionKey":"SECTION",

          },{
            "optionName":"DOCUMENT",
            "optionKey":"DOCUMENT",

          },
          {
            "optionName":"OTP",
            "optionKey":"OTP",

          }
        ],
          "regexErrorMessage": null,
          "errorIconPath": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "select FieldData Type",
          "fieldName": "fieldDataType",
          "showLabel": true,
          "labelInfo": null,
          "groupName": "Common Properties",
          "groupIndex": 1,
          "showField": true
      },
        {
          "fieldDataType": "TEXT",
          "isMandatory": true,
          "fieldLabel": "FieldLabel",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": null,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter fieldLabel",
          "fieldName": "fieldLabel",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "Common Properties",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": false,
          "fieldLabel": "Do you want to show Label",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson":null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "showLabel",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "Common Properties",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "BOOLEAN",
          "isMandatory": false,
          "fieldLabel": "is Field is a Mandatory Field?",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": 100,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "Enter Content",
          "fieldName": "isMandatory",
          "labelInfo": null,
          "showLabel": true,
          "groupName": "Common Properties",
          "groupIndex": 1,
          "showField": true
        },
        {
          "fieldDataType": "DROPDOWN",
          "dependentField": null,
          "isMandatory": true,
          "upperCase":true,
          "fieldLabel": "Field Access Modifier",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "maxLength": null,
          "error": null,
          "value": "",
          "validationJson": {'default':'EDITABLE'},
          "rulesFor": null,
          "regex": null,
          "options": [
            {
              "optionKey":"READ_ONLY",
              "optionName":"READ_ONLY",
            },
            {
              "optionKey":"EDITABLE",
              "optionName":"EDITABLE",
            }
          ],
          "regexErrorMessage": null,
          "errorIconPath": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "select Field Access Modifier Type",
          "fieldName": "fieldAccessModifier",
          "showLabel": true,
          "labelInfo": "this determines wheather the field is editiable or Read Only",
          "groupName": "Common Properties",
          "groupIndex": 1,
          "showField": true
      },
      {
        "fieldDataType": "NUMBER",
        "isMandatory": false,
        "fieldLabel": "Min length",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Min length",
        "fieldName": "minLength",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Common Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "NUMBER",
        "isMandatory": false,
        "fieldLabel": "Max length",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Max length",
        "fieldName": "maxLength",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Common Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": true,
        "fieldLabel": "Field Name",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Field Name",
        "fieldName": "fieldName",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Common Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Field Placeholder value",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Field Name",
        "fieldName": "placeholderText",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Common Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Regex",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Regex",
        "fieldName": "regex",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Common Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Custom Regex Message",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Custom Regex Message",
        "fieldName": "regexErrorMessage",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Common Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Label information",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "labelinfo",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Common Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "DROPDOWN",
        "dependentField": null,
        "isMandatory": true,
        "upperCase":true,
        "fieldLabel": "Group Name",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": "",
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "options": [],
        "regexErrorMessage": null,
        "errorIconPath": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "select Group Name",
        "fieldName": "groupName",
        "showLabel": true,
        "labelInfo": null,
        "groupName": "Common Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "MULTI_INPUT",
        "isMandatory": false,
        "fieldLabel": "Enter rulesFor",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "rulesFor",
        "labelInfo": "Press enter to add multiple fieldNames for the rules For",
        "showLabel": true,
        "groupName": "Common Properties",
        "groupIndex": 1,
        "showField": true,
        "className":"w-100"
      },
      {
        "fieldDataType": "TEXT_AREA",
        "isMandatory": false,
        "fieldLabel": "validation Json",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "validationJson",
        "rows":4,
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Common Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "Display Edit option When the field is Disabled?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": 100,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Content",
        "fieldName": "isEditableOnDisable",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Common Properties",
        "groupIndex": 1,
        "showField": true
      },
      //auto suggestion properties
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "Enable Auto Suggestion",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "or":[{"==":[{"var":"fieldDataType"},"TEXT"]},{"==":[{"var":"fieldDataType"},"NUMBER"]}]
          
          }
          }
          ,
        "rulesFor": ["autosuggestCode"],
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "autoSuggest",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Auto Suggestion Properties",
        "groupIndex": 2,
        "showField": true
      },
      {
        "fieldDataType": "DROPDOWN",
        "dependentField": null,
        "isMandatory": false,
        "upperCase":true,
        "fieldLabel": "Auto Suggest Code",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": "",
        "validationJson": {
          "showField":{
            
              "and":[{
              
                "or":[{"==":[{"var":"fieldDataType"},"TEXT"]},{"==":[{"var":"fieldDataType"},"NUMBER"]}]
              
              },{"==":[{"var":"autoSuggest"},true]}]
            
          }
        },
        "rulesFor": null,
        "regex": null,
        "options": [
          {
            "optionKey":"employerSearch",
            "optionName":"employerSearch"
          },{
            "optionKey":"GST_SEARCH",
            "optionName":"GST_SEARCH"
          }
        ],
        "regexErrorMessage": null,
        "errorIconPath": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "select Auto suggest Code",
        "fieldName": "autosuggestCode",
        "showLabel": true,
        "labelInfo": null,
        "groupName": "Auto Suggestion Properties",
        "groupIndex": 2,
        "showField": true
      },
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "Disable after selecting Suggestion",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "or":[{"==":[{"var":"fieldDataType"},"TEXT"]},{"==":[{"var":"fieldDataType"},"NUMBER"]}]
          
          }
          }
          ,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "autoSuggestSelectDisable",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Auto Suggestion Properties",
        "groupIndex": 2,
        "showField": true
      },
      //text field related properties
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "allow Only UpperCase?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
          "==":[{"var":"fieldDataType"},"TEXT"]
          }
          }
          ,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "upperCase",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Text Field Properties",
        "groupIndex": 3,
        "showField": true
      },

      //prefix field related properties
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "show Prefix Field",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": ['prefixType','prefixfieldName','prefixfieldAccessModifier','prefixfieldName','prefixplaceholderText'],
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "showprefix",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Text Field Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "DROPDOWN",
        "dependentField": null,
        "isMandatory": false,
        "upperCase":true,
        "fieldLabel": "Prefix Data Type",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": "",
        "validationJson": {
          "showField":{
            "==":[{"var":"showprefix"},true]
          }
        },
        "rulesFor": ['prefix'],
        "regex": null,
        "options": [
          {
            "optionKey":"TEXT",
            "optionName":"TEXT"
          },{
            "optionKey":"DROPDOWN",
            "optionName":"DROPDOWN"
          }
        ],
        "regexErrorMessage": null,
        "errorIconPath": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "select Prefix data type",
        "fieldName": "prefixType",
        "showLabel": true,
        "labelInfo": null,
        "groupName": "Text Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Prefix value For Text Prefix",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "==":[{"var":"prefixType"},"TEXT"]
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter prefix value",
        "fieldName": "prefix",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Text Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "DROPDOWN",
        "dependentField": null,
        "isMandatory": false,
        "upperCase":true,
        "fieldLabel": "Prefix Field Access Modifier",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": "",
        "validationJson": {
          "showField":{
            "==":[{"var":"showprefix"},true]
          }
        },
        "rulesFor": null,
        "regex": null,
        "options": [
          {
            "optionKey":"EDITABLE",
            "optionName":"EDITABLE"
          },{
            "optionKey":"READ_ONLY",
            "optionName":"READ_ONLY"
          }
        ],
        "regexErrorMessage": null,
        "errorIconPath": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "select Prefix Field Access modifier",
        "fieldName": "prefixfieldAccessModifier",
        "showLabel": true,
        "labelInfo": null,
        "groupName": "Text Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Prefix Field Name",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "==":[{"var":"showprefix"},true]
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter prefix Field Name",
        "fieldName": "prefixfieldName",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Text Properties",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Prefix Place holder",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "==":[{"var":"showprefix"},true]
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter prefix Placeholder",
        "fieldName": "prefixplaceholderText",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Text Properties",
        "groupIndex": 1,
        "showField": true
      },
      
      //verification related properties
      {
        "fieldDataType": "DROPDOWN",
        "dependentField": null,
        "isMandatory": false,
        "upperCase":true,
        "fieldLabel": "Verification Type",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson":{
          "showField":{
            "or":[{"==":[{"var":"fieldDataType"},"TEXT"]},{"==":[{"var":"fieldDataType"},"NUMBER"]},{"==":[{"var":"fieldDataType"},"DROPDOWN"]}]
          
          }
          }
          ,
        "rulesFor": ["verificationFieldName","consentPopUp","externalValidate"],
        "regex": null,
        "options": [
          {
            "optionKey":"EMAIL",
            "optionName":"EMAIL"
          },{
            "optionKey":"AADHAR",
            "optionName":"AADHAR"
          },{
            "optionKey":"PAN",
            "optionName":"PAN"
          },{
            "optionKey":"PAN_V2",
            "optionName":"PAN_V2"
          },{
            "optionKey":"UDYAM",
            "optionName":"UDYAM"
          },{
            "optionKey":"GST",
            "optionName":"GST"
          }
        ],
        "regexErrorMessage": null,
        "errorIconPath": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "select Verification type",
        "fieldName": "verificationType",
        "showLabel": true,
        "labelInfo": null,
        "groupName": "Verification Properties",
        "groupIndex": 4,
        "showField": true
      },
      //below key marked internal
      // {
      //   "fieldDataType": "BOOLEAN",
      //   "isMandatory": false,
      //   "fieldLabel": "Disable Field After verification is Success?",
      //   "fieldAccessModifier": "EDITABLE",
      //   "minLength": null,
      //   "maxLength": null,
      //   "error": null,
      //   "value": null,
      //   "validationJson": {
      //     "showField":{
      //       "or":[{"==":[{"var":"fieldDataType"},"TEXT"]},{"==":[{"var":"fieldDataType"},"NUMBER"]},{"==":[{"var":"fieldDataType"},"DROPDOWN"]}]
          
      //     }
      //     },
      //   "rulesFor": null,
      //   "regex": null,
      //   "regexErrorMessage": null,
      //   "rowNo": null,
      //   "columnNo": null,
      //   "placeholderText": "Enter Label information",
      //   "fieldName": "verifyDisable",
      //   "labelInfo": null,
      //   "showLabel": true,
      //   "groupName": "Verification Properties",
      //   "groupIndex": 4,
      //   "showField": true
      // },
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Otp field Field Name",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "or":[{"==":[{"var":"verificationType"},"EMAIL"]},{"==":[{"var":"verificationType"},"MOBILE"]},{"==":[{"var":"verificationType"},"AADHAR"]}]
            
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter otp field Field Name",
        "fieldName": "verificationFieldName",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Verification Properties",
        "groupIndex": 4,
        "showField": true
      },
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "Show consent before validating aadhar?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
            "showField":{
              "==":[{"var":"verificationType"},"AADHAR"]
            }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "consentPopUp",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Verification Properties",
        "groupIndex": 4,
        "showField": true
      },
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "Verify aadhar Externally?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
            "showField":{
              "==":[{"var":"verificationType"},"AADHAR"]
            }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "externalValidate",
        "labelInfo": "this will emit a event back to the parent with meta data of user input you can use it to trigger verification process externally",
        "showLabel": true,
        "groupName": "Verification Properties",
        "groupIndex": 4,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "upperCase":true,
        "fieldLabel": "Journey Event Code to Execute after verification Sucess",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "or":[{"==":[{"var":"fieldDataType"},"TEXT"]},{"==":[{"var":"fieldDataType"},"NUMBER"]},{"==":[{"var":"fieldDataType"},"DROPDOWN"]}]
          
          }
          },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter JourneyEventCode",
        "fieldName": "journeyEventCode",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Verification Properties",
        "groupIndex": 4,
        "showField": true
      },

      //text area related properties
      {
        "fieldDataType": "NUMBER",
        "isMandatory": false,
        "fieldLabel": "Text Area Row Size",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson":{
          "showField":{
          "==":[{"var":"fieldDataType"},"TEXT_AREA"]
          }
          }
          ,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Text Area Row Size",
        "fieldName": "rows",
        "labelInfo": "This defines the height of a Text Area",
        "showLabel": true,
        "groupName": "Text Area Properties",
        "groupIndex": 5,
        "showField": true
      },

      //mobile number related properties
      {
        "fieldDataType": "NUMBER",
        "isMandatory": false,
        "fieldLabel": "Mobile Number Country Code",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson":{
          "showField":{
          "==":[{"var":"fieldDataType"},"MOBILE_NO"]
          }
          }
          ,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter country code for Mobile Number",
        "fieldName": "countryCode",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Mobile Number Properties",
        "groupIndex": 6,
        "showField": true
      },

      //dropdown/autocomplete related properties
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "CommonProperty Code",
        "fieldAccessModifier": "EDITABLE",
        "upperCase":true,
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson":{
          "showField":{
            "or":[{"==":[{"var":"fieldDataType"},"DROPDOWN"]},{"==":[{"var":"fieldDataType"},"AUTO_COMPLETE"]}]
          
          }
          },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter CommonProperty Code",
        "fieldName": "commonpropertyType",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Dropdown/Autocomplete Properties",
        "groupIndex": 7,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Dependent Field fieldName",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson":{
          "showField":{
            "or":[{"==":[{"var":"fieldDataType"},"DROPDOWN"]},{"==":[{"var":"fieldDataType"},"AUTO_COMPLETE"]}]
          
          }
          },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Dependent Field FieldName",
        "fieldName": "dependentField",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Dropdown/Autocomplete Properties",
        "groupIndex": 7,
        "showField": true
      },

      //aadhar related properties
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "Mask Aadhar Completely?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
          "==":[{"var":"fieldDataType"},"AADHAR"]
          }
          },
        "rulesFor": ["aadhaarNumberFirstMask","aadhaarNumberSecondMask","aadhaarNumberThirdMask"],
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "Masking",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Aadhar Properties",
        "groupIndex": 8,
        "showField": true
      },
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": " Mask first 4 Aadhar Characters?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "and":[{
              
              "==":[{"var":"fieldDataType"},"AADHAR"]
              
              },{"or":[{"==":[{"var":"Masking"},null]},{"==":[{"var":"Masking"},false]}]}]
            
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "aadhaarNumberFirstMask",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Aadhar Properties",
        "groupIndex": 8,
        "showField": true
      },
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": " Mask Middle 4 Aadhar Characters?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "and":[{
              
              "==":[{"var":"fieldDataType"},"AADHAR"]
              
              },{"or":[{"==":[{"var":"Masking"},null]},{"==":[{"var":"Masking"},false]}]}]
            
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "aadhaarNumberSecondMask",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Aadhar Properties",
        "groupIndex": 8,
        "showField": true
      },
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": " Mask last 4 Aadhar Characters?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "and":[{
              
              "==":[{"var":"fieldDataType"},"AADHAR"]
              
              },{"or":[{"==":[{"var":"Masking"},null]},{"==":[{"var":"Masking"},false]}]}]
            
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "aadhaarNumberThirdMask",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Aadhar Properties",
        "groupIndex": 8,
        "showField": true
      },

      //account number related properties
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "Mask Account Number Completely?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
          "==":[{"var":"fieldDataType"},"ACCOUNT_NO"]
          }
          },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "Masking",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Account Number Properties",
        "groupIndex": 9,
        "showField": true
      },

      //button toggle
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "show Button Toggle vertically?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
          "==":[{"var":"fieldDataType"},"BUTTON_TOGGLE"]
          }
          },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "isVertical",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Button Toggle Properties",
        "groupIndex": 10,
        "showField": true
      },

      // range related Properties
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Prefix for the Range value",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson":{
          "showField":{
            "==":[{"var":"fieldDataType"},"RANGE"]
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Prefix for the Range value",
        "fieldName": "prefix",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Range Properties",
        "groupIndex": 11,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Suffix for the Range value",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson":{
          "showField":{
          "==":[{"var":"fieldDataType"},"RANGE"]
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Suffix for the Range value",
        "fieldName": "suffix",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Range Properties",
        "groupIndex": 11,
        "showField": true
      },

      //table related properties
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "show Serial Numbers for Each Row?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
          "==":[{"var":"fieldDataType"},"TABLE"]
          }
          }
          ,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "showSerialNo",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Table Properties",
        "groupIndex": 12,
        "showField": true
      },
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "show Actions for Each Row?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
          "==":[{"var":"fieldDataType"},"TABLE"]
          }
          },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "showAction",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Table Properties",
        "groupIndex": 12,
        "showField": true
      },
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "Allow Multiple Rows?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
          "==":[{"var":"fieldDataType"},"TABLE"]
          }
          },
        "rulesFor": ["validateRowBeforeAdd"],
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "addMore",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Table Properties",
        "groupIndex": 12,
        "showField": true
      },
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "Validate Current row before adding Next Row?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{"==":[{"var":"addMore"},true]}
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "validateRowBeforeAdd",
        "labelInfo": "This enables you to restrict the user to complete the previous row Data before adding new Rows",
        "showLabel": true,
        "groupName": "Table Properties",
        "groupIndex": 12,
        "showField": true
      },
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "Show Table Footer?",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
          "==":[{"var":"fieldDataType"},"TABLE"]
          }
          },
        "rulesFor": ["tableFooterData"],
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Label information",
        "fieldName": "showTableFooter",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "Table Properties",
        "groupIndex": 12,
        "showField": true
      },
      {
        "fieldDataType": "ADDRESS",
        "fieldLabel": "Table Footer Properties",
        "fieldAccessModifier": "EDITABLE",
        "minLength": 6,
        "maxLength": 15,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "==":[{"var":"showTableFooter"},true]
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": null,
        "fieldName": "tableFooterData",
        "showLabel": false,
        "showField": true,
        "groupName": "Table Properties",
        "groupIndex": 12,
        "addressFields": [
          {
            "fieldDataType": "TEXT",
            "isMandatory": false,
            "fieldLabel": "Table Footer Field Label",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 256,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "Enter Table Footer Field Label",
            "fieldName": "fieldLabel",
            "labelInfo": null,
            "showLabel": true,
            "rows": 3
          },
          {
            "fieldDataType": "TEXT",
            "isMandatory": false,
            "fieldLabel": "Table Footer Field Name",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 256,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "Enter Table Footer Field Name",
            "fieldName": "fieldName",
            "labelInfo": null,
            "showLabel": true,
            "rows": 3
          },
          {
            "fieldDataType": "TEXT",
            "isMandatory": false,
            "fieldLabel": "Table Footer Value",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 256,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "Enter Table Footer Value",
            "fieldName": "value",
            "labelInfo": null,
            "showLabel": true,
            "rows": 3
          },
          {
            "fieldDataType": "TEXT",
            "isMandatory": false,
            "fieldLabel": "Table Footer Prefix",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 256,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "Enter Table Footer Prefix",
            "fieldName": "valuePrefix",
            "labelInfo": null,
            "showLabel": true,
            "rows": 3
          },
          {
            "fieldDataType": "TEXT",
            "isMandatory": false,
            "fieldLabel": "Table Footer Suffix",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 256,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "Enter Table Footer suffix",
            "fieldName": "valueSuffix",
            "labelInfo": null,
            "showLabel": true,
            "rows": 3
          },
          
        ]
      },
      {
        "fieldDataType": "TABLE",
        "dependentField": null,
        "isMandatory": false,
        "fieldLabel": "Actions For Each Row",
        "fieldAccessModifier": "READ_ONLY",
        "addTableFields": true,
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": [],
        "validationJson":{
          "showField":{
          "==":[{"var":"fieldDataType"},"TABLE"]
          }
          },
        "rulesFor":null,
        "regex": null,
        "addStatus": false,
        "isTableFooter": true,
        "emitedValue": [],
        "showAction": true,
        "addMore": true,
        "tableRowActions": [{
            "actionCode": "ACCEPT",
            "icon": "check",
            "className": "clr-green",
            "isDisplay": true
        },
        {
            "actionCode": "EDIT",
            "icon": "edit",
            "className": "clr-blue",
            "isDisplay": false
        },
        {
            "actionCode": "DELETE",
            "icon": "delete",
            "className": "clr-red",
            "isDisplay": true
        }],
        "validateRowBeforeAdd": true,
        "showSerialNo": true,
        "tableFields": [
            {
                "fieldDataType": "DROPDOWN",
                "dependentField": null,
                "isMandatory": true,
                "fieldLabel": "Action",
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": "",
                "validationJson": null,
                "rulesFor": null,
                "regex": null,
                "options": [
                  {
                    "optionKey": "ACCEPT",
                    "optionName": "ACCEPT",
                    "optionValue": "ACCEPT"
                  },
                  {
                    "optionKey": "EDIT",
                    "optionName": "EDIT",
                    "optionValue": "EDIT"
                  },
                  {
                    "optionKey": "DELETE",
                    "optionName": "DELETE",
                    "optionValue": "DELETE"
                  }
                ],
                "regexErrorMessage": null,
                "errorIconPath": null,
                "rowNo": null,
                "columnNo": null,
                "placeholderText": "",
                "fieldName": "actionCode",
                "showLabel": true,
                "labelInfo": null,
                "groupName": "",
                "groupIndex": 4,
                "showField": true
            },
           
        ],
        "regexErrorMessage": null,
        "errorIconPath": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "",
        "fieldName": "tableRowActions",
        "showLabel": true,
        "labelInfo": null,
        "groupName": "Table Properties",
        "groupIndex": 12,
        "showField": true
      },
      {
        "fieldDataType": "TEXT_AREA",
        "isMandatory": false,
        "fieldLabel": "Table Fields Data Obj",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": null,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
          "==":[{"var":"fieldDataType"},"TABLE"]
          }
          },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Table Fields Data",
        "fieldName": "tableFields",
        "labelInfo": null,
        "showLabel": true,
        "rows": 10,
        "groupName": "Table Properties",
        "groupIndex": 12,
      },
      // {
      //   "fieldDataType": "TABLE",
      //   "dependentField": null,
      //   "isMandatory": false,
      //   "fieldLabel": "Table Fields",
      //   "fieldAccessModifier": "READ_ONLY",
      //   "addTableFields": true,
      //   "minLength": null,
      //   "maxLength": null,
      //   "error": null,
      //   "value": [],
      //   "validationJson":null,
      //   "rulesFor":null,
      //   "regex": null,
      //   "addStatus": false,
      //   "isTableFooter": true,
      //   "emitedValue": [],
      //   "showAction": true,
      //   "addMore": true,
      //   "tableRowActions": [{
      //       "actionCode": "ACCEPT",
      //       "icon": "check",
      //       "className": "clr-green",
      //       "isDisplay": true
      //   },
      //   {
      //       "actionCode": "EDIT",
      //       "icon": "edit",
      //       "className": "clr-blue",
      //       "isDisplay": false
      //   },
      //   {
      //       "actionCode": "DELETE",
      //       "icon": "delete",
      //       "className": "clr-red",
      //       "isDisplay": true
      //   }],
      //   "validateRowBeforeAdd": true,
      //   "showSerialNo": true,
      //   "tableFields": [
      //       {
      //           "fieldDataType": "DROPDOWN",
      //           "dependentField": null,
      //           "isMandatory": true,
      //           "fieldLabel": "Field Data Type",
      //           "fieldAccessModifier": "EDITABLE",
      //           "minLength": null,
      //           "maxLength": null,
      //           "error": null,
      //           "value": "",
      //           "validationJson": null,
      //           "rulesFor": null,
      //           "regex": null,
      //           "options": [
      //             {
      //               "optionKey": "TEXT",
      //               "optionName": "TEXT",
      //               "optionValue": "TEXT"
      //             },
      //             {
      //               "optionKey": "DROPDOWN",
      //               "optionName": "DROPDOWN",
      //               "optionValue": "DROPDOWN"
      //             },
      //             {
      //               "optionKey": "NUMBER",
      //               "optionName": "NUMBER",
      //               "optionValue": "NUMBER"
      //             },
      //             {
      //               "optionKey": "TEXT_AREA",
      //               "optionName": "TEXT_AREA",
      //               "optionValue": "TEXT_AREA"
      //             }
      //           ],
      //           "regexErrorMessage": null,
      //           "errorIconPath": null,
      //           "rowNo": null,
      //           "columnNo": null,
      //           "placeholderText": "",
      //           "fieldName": "fieldDataType",
      //           "showLabel": true,
      //           "labelInfo": null,
      //           "groupName": "",
      //           "groupIndex": 4,
      //           "showField": true
      //       },
           
      //   ],
      //   "regexErrorMessage": null,
      //   "errorIconPath": null,
      //   "rowNo": null,
      //   "columnNo": null,
      //   "placeholderText": "",
      //   "fieldName": "tableFields",
      //   "showLabel": true,
      //   "labelInfo": null,
      //   "groupName": "Table Properties",
      //   "groupIndex": 12,
      //   "showField": true
      // },
      ]
    }
  },
  {
    "componentType":"BUTTON",
    "sectionContent":{
      "className":"primary-btn",
      "isShow":true,
      "label":"Add Field",
      "actionId":"ADD_FIELD"
    }
  },
 ],
"CHART":[{
  "componentType":"FORM",
  "validateSection": true,
  "mandatory": false,
  "className": "mb-10 x-large coapplicant-padding",
  "sectionContent":{
    "isShow":true,
    "options":{
      "columnSize":2
    },
    "fields":[
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": true,
        "fieldLabel": "show Section",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": 100,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Content",
        "fieldName": "isShow",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": false,
        "fieldLabel": "Enter ClassNames for the section (add multiple classNames with space seperated)",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": 100,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter ClassName",
        "fieldName": "className",
        "labelInfo": "This defines the styling of the section",
        "showLabel": true,
        "groupName": "",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "DROPDOWN",
        "isMandatory": true,
        "fieldLabel": "Chart Type",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": 256,
        "error": null,
        "value": null,
        "validationJson": null,
        "rulesFor": ['isShowDataCenter',"data"],
        "regex": null,
        "options":[
          {
          "optionName":"GAUGE",
          "optionKey":"GAUGE",
          "optionValue":"GAUGE",
      },
      {
        "optionName":"DOUGHNUT",
        "optionKey":"DOUGHNUT",
        "optionValue":"DOUGHNUT",
    },
    ],
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Select Chart Type",
        "fieldName": "chartType",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "",
        "groupIndex": 1,
        "rows": 3
      },
      {
        "fieldDataType": "BOOLEAN",
        "isMandatory": false,
        "fieldLabel": "show Data In center",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": 100,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "or":[{"==":[{"var":"chartType"},'GAUGE']},{"==":[{"var":"chartType"},'DOUGHNUT']}]
          }
        },
        "rulesFor": ['centerData'],
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Content",
        "fieldName": "isShowDataCenter",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "",
        "groupIndex": 1,
        "showField": true
      },
      {
        "fieldDataType": "ADDRESS",
        "fieldLabel": "Chart Properties",
        "fieldAccessModifier": "EDITABLE",
        "isMandatory":true,
        "minLength": 6,
        "maxLength": 15,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "==":[{"var":"isShowDataCenter"},true]
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": null,
        "fieldName": "centerData",
        "showLabel": false,
        "showField": true,
        "groupName": "",
        "groupIndex": 1,
        "addressFields": [
          {
            "fieldDataType": "TEXT",
            "isMandatory": false,
            "fieldLabel": "center Data label",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 100,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "Enter center Data label",
            "fieldName": "label",
            "labelInfo": null,
            "showLabel": true,
            "groupName": "",
            "groupIndex": 1,
            "showField": true
          }, {
            "fieldDataType": "TEXT",
            "isMandatory": false,
            "fieldLabel": "center Data value",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": 100,
            "error": null,
            "value": null,
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "regexErrorMessage": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "Enter center Data value",
            "fieldName": "value",
            "labelInfo":null,
            "showLabel": true,
            "groupName": "",
            "groupIndex": 1,
            "showField": true
          }
        ]
      },
      {
        "addTableFields": true,
        "addStatus": false,
        "isTableFooter": false,
        "emitedValue": [],
        "showAction": true,
        "addMore": true,
        "tableRowActions": [{
            "actionCode": "ACCEPT",
            "icon": "check",
            "className": "clr-green",
            "isDisplay": true
        },
        {
            "actionCode": "EDIT",
            "icon": "edit",
            "className": "clr-blue",
            "isDisplay": false
        },
        {
            "actionCode": "DELETE",
            "icon": "delete",
            "className": "clr-red",
            "isDisplay": true
        }],
        "validateRowBeforeAdd": true,
        "showSerialNo": true,
        "tableFields": [
            {
                "fieldDataType": "TEXT",
                "dependentField": null,
                "isMandatory": true,
                "fieldLabel": "Label",
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": "",
                "validationJson": null,
                "rulesFor": null,
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "errorIconPath": null,
                "rowNo": null,
                "columnNo": null,
                "placeholderText": "",
                "fieldName": "fieldLabel",
                "showLabel": true,
                "labelInfo": null,
                "groupName": "",
                "groupIndex": 4,
                "showField": true
            },
            {
              "fieldDataType": "NUMBER",
              "dependentField": null,
              "isMandatory": true,
              "fieldLabel": "value",
              "fieldAccessModifier": "EDITABLE",
              "minLength": null,
              "maxLength": null,
              "error": null,
              "value": "",
              "validationJson": null,
              "rulesFor": null,
              "regex": null,
              "options": [],
              "regexErrorMessage": null,
              "errorIconPath": null,
              "rowNo": null,
              "columnNo": null,
              "placeholderText": "",
              "fieldName": "value",
              "showLabel": true,
              "labelInfo": null,
              "groupName": "",
              "groupIndex": 4,
              "showField": true
          },
          {
            "fieldDataType": "COLOR_PICKER",
            "dependentField": null,
            "isMandatory": true,
            "fieldLabel": "select Color for the data in the chart",
            "fieldAccessModifier": "EDITABLE",
            "minLength": null,
            "maxLength": null,
            "error": null,
            "value": "",
            "validationJson": null,
            "rulesFor": null,
            "regex": null,
            "options": [],
            "regexErrorMessage": null,
            "errorIconPath": null,
            "rowNo": null,
            "columnNo": null,
            "placeholderText": "",
            "fieldName": "bgColor",
            "showLabel": true,
            "labelInfo": null,
            "groupName": "",
            "groupIndex": 4,
            "showField": true
        }
        ],
        "errorIconPath": null,
        "fieldDataType": "TABLE",
        "isMandatory": true,
        "fieldLabel": "Data For Gauge or doughnut Chart",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": 100,
        "error": null,
        "value": null,
        "validationJson": {
          "showField":{
            "or":[{"==":[{"var":"chartType"},'GAUGE']},{"==":[{"var":"chartType"},'DOUGHNUT']}]
          }
        },
        "rulesFor": null,
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "placeholderText": "Enter Content",
        "fieldName": "data",
        "labelInfo": null,
        "showLabel": true,
        "groupName": "",
        "groupIndex": 1,
        "showField": true
      }
     
    ]
  }
}
],
  
  
  
  
}
export let importPopupPageSection =  [{
  "componentType": "FORM",
  "validateSection": true,
  "mandatory": false,
  "className": "mb-10 x-large coapplicant-padding",
  "sectionContent": {
    "options": {
      "columnSize": 1
    },
    "isShow": true,
    "fields": [
      {
          "fieldDataType": "TEXT_AREA",
          "isMandatory": true,
          "commonpropertyType": null,
          "fieldLabel": "Paste your Section config",
          "fieldAccessModifier": "EDITABLE",
          "minLength": null,
          "upperCase":true,
          "maxLength": null,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "options": [],
          "regexErrorMessage": null,
          "rowNo": 1,
          "columnNo": 1,
          "groupName": "",
          rows:12,
          "groupIndex": 1,
          "placeholderText": "",
          "fieldName": "pageSectionConfig",
          "labelInfo": null,
          "showLabel": true,
          "showField": true
      },
      
    ]
  }
}]