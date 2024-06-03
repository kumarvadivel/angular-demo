export let constitutions = ["individual","company","group"]
export let pageCodes = [
    "MOBILE_VERIFY",
    "MORE_INFO",
    "ADDRESS_DETAILS",
    "EMPLOYMENT_DETAILS",
    "BASIC_DETAILS",
    "KEY_FACT_DETAILS",
    "SANCTION_DETAILS",
    "DECLARATION"
]
export let baseConfig = {
    "pageCode": null,
    "pageName": null,
    "lastPage": false,
    "url": null,
    "resumeJourneySequences": [
     
    ]
  }
export let pageSectionConfig = [
    {
        "componentType": "TITLE",
        "className": null,
        "validateSection":false,
        "mandatory":false,
        "sectionContent": {
          "isShow": true,
          "titleData": "PageSequence Builder"
        }
      },
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
                "fieldDataType": "TEXT",
                "isMandatory": true,
                "commonpropertyType": null,
                "fieldLabel": "Enter Page Code Enum",
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
                "groupIndex": 1,
                "placeholderText": "",
                "fieldName": "pageCode",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
            },
            {
                "fieldDataType": "TEXT",
                "isMandatory": true,
                "commonpropertyType": null,
                "fieldLabel": "Enter url path",
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
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
                "groupIndex": 1,
                "placeholderText": "",
                "fieldName": "url",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
            },
            {
                "fieldDataType": "TABLE",
                "dependentField": null,
                "isMandatory": false,
                "fieldLabel": "Add Resume Journey Sequences",
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
                        "upperCase":true,
                        "fieldLabel": "Status",
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
                        "fieldName": "status",
                        "showLabel": true,
                        "labelInfo": null,
                        "groupName": "",
                        "groupIndex": 4,
                        "showField": true
                    },
                    {
                        "fieldDataType": "DROPDOWN",
                        "dependentField": null,
                        "isMandatory": true,
                        "fieldLabel": "sub Status",
                        "fieldAccessModifier": "EDITABLE",
                        "minLength": null,
                        "maxLength": null,
                        "error": null,
                        "value": "",
                        "validationJson": null,
                        "rulesFor": null,
                        "regex": null,
                        "options": [{
                            "optionKey":"SUB_STATUS_1",
                            "optionName":"sub status 1",
                            "optionValue":"SUB_STATUS_1"
                        },{
                            "optionKey":"SUB_STATUS_2",
                            "optionName":"sub status 2",
                            "optionValue":"SUB_STATUS_2"
                        },{
                            "optionKey":"SUB_STATUS_3",
                            "optionName":"sub status 3",
                            "optionValue":"SUB_STATUS_3"
                        },{
                            "optionKey":"SUB_STATUS_4",
                            "optionName":"sub status 4",
                            "optionValue":"SUB_STATUS_4"
                        },{
                            "optionKey":"SUB_STATUS_5",
                            "optionName":"sub status 5",
                            "optionValue":"SUB_STATUS_5"
                        },{
                            "optionKey":"SUB_STATUS_6",
                            "optionName":"sub status 6",
                            "optionValue":"SUB_STATUS_6"
                        },{
                            "optionKey":"SUB_STATUS_7",
                            "optionName":"sub status 7",
                            "optionValue":"SUB_STATUS_7"
                        },{
                            "optionKey":"SUB_STATUS_8",
                            "optionName":"sub status 8",
                            "optionValue":"SUB_STATUS_8"
                        },{
                            "optionKey":"SUB_STATUS_9",
                            "optionName":"sub status 9",
                            "optionValue":"SUB_STATUS_9"
                        },{
                            "optionKey":"SUB_STATUS_10",
                            "optionName":"sub status 10",
                            "optionValue":"SUB_STATUS_10"
                        },{
                            "optionKey":"SUB_STATUS_11",
                            "optionName":"sub status 11",
                            "optionValue":"SUB_STATUS_11"
                        },{
                            "optionKey":"SUB_STATUS_12",
                            "optionName":"sub status 12",
                            "optionValue":"SUB_STATUS_12"
                        },{
                            "optionKey":"SUB_STATUS_13",
                            "optionName":"sub status 13",
                            "optionValue":"SUB_STATUS_13"
                        },{
                            "optionKey":"SUB_STATUS_14",
                            "optionName":"sub status 14",
                            "optionValue":"SUB_STATUS_14"
                        },{
                            "optionKey":"SUB_STATUS_15",
                            "optionName":"sub status 15",
                            "optionValue":"SUB_STATUS_15"
                        },{
                            "optionKey":"SUB_STATUS_16",
                            "optionName":"sub status 16",
                            "optionValue":"SUB_STATUS_16"
                        },{
                            "optionKey":"SUB_STATUS_17",
                            "optionName":"sub status 17",
                            "optionValue":"SUB_STATUS_17"
                        },{
                            "optionKey":"SUB_STATUS_18",
                            "optionName":"sub status 18",
                            "optionValue":"SUB_STATUS_18"
                        },{
                            "optionKey":"SUB_STATUS_19",
                            "optionName":"sub status 19",
                            "optionValue":"SUB_STATUS_19"
                        },{
                            "optionKey":"SUB_STATUS_20",
                            "optionName":"sub status 20",
                            "optionValue":"SUB_STATUS_20"
                        }],
                        "regexErrorMessage": null,
                        "errorIconPath": null,
                        "rowNo": null,
                        "columnNo": null,
                        "placeholderText": "",
                        "fieldName": "substatus",
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
                "fieldName": "resumeJourneySequences",
                "showLabel": true,
                "labelInfo": "Resume journey sequences are a sequence made up of status and substatus to determine from which page to resume while resuming a application",
                "groupName": "",
                "groupIndex": 1,
                "showField": true
            },
            {
                "fieldDataType": "BOOLEAN",
                "isMandatory": false,
                "fieldLabel": "Add as PageSequence page",
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
                "fieldName": "isjourneyPage",
                "labelInfo": "pages which are in pagesequence page are moved in a sequence in a journey for Example: mobile verification -> Pan verification -> Aadhar verification",
                "showLabel": true,
                "groupName": "",
                "groupIndex": 2,
                "showField": true
              },
            {
                "fieldDataType": "TEXT",
                "isMandatory": false,
                "commonpropertyType": null,
                "fieldLabel": "Enter Page Entry journeyEventCode Enum",
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
                "groupIndex": 3,
                "placeholderText": "",
                "fieldName": "entryjourneyEventCode",
                "labelInfo": "this code triggers a event when a page is Entered in a journey",
                "showLabel": true,
                "showField": true
            },
            {
                "fieldDataType": "TEXT",
                "isMandatory": false,
                "commonpropertyType": null,
                "fieldLabel": "Enter Page Exit journeyEventCode Enum",
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
                "groupIndex": 3,
                "placeholderText": "",
                "fieldName": "exitjourneyEventCode",
                "labelInfo": "this code triggers a event when a page is exited in a journey",
                "showLabel": true,
                "showField": true
            }
          ]
        }
      },
      
      {
        "componentType": "BUTTON",
        "validateSection": false,
        "mandatory":false,
        "className": null,
        "sectionContent": {
          "label": "Add Page",
          "actionId": "ADD_PAGE",
          "className": 'primary-btn',
          "isShow": true
        }
      },
      
]

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
            "fieldLabel": "Paste your pagesequence config",
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
            "fieldName": "pageSequence",
            "labelInfo": null,
            "showLabel": true,
            "showField": true
        },
        
      ]
    }
  }]
