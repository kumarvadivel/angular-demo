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
  "FILE_UPLOAD",
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
  "OTP":{
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
          "fieldDataType": "BOOLEAN",
          "isMandatory": true,
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
      }]
    }
  }]
  
  
  
  
  
}