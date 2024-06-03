import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SharedService } from '../../../../shared/services/utils/shared.service';
import { ResumeTheme1VariableService } from '../../services/resume-application-theme1-variable.service';
import { LocalStorage } from '../../../../shared/helpers/LocalStorage';
import { CommonCommonService } from '@ppf-app/services/common-common.service';

@Component({
  selector: 'app-track-status',
  templateUrl: './track-status.component.html'
})
export class TrackStatusComponent implements OnInit {
  journey: any;
  showContinue: boolean = true;
  categoryType:any = '';
  selectedProduct:any = '';
  breadCrumbList:any = [];
  constructor(public commonService:CommonCommonService,private activeRoute: ActivatedRoute,private router:Router,
    public sharedService:SharedService,public resumeVariableService:ResumeTheme1VariableService,private localStorage:LocalStorage) { 
    this.categoryType = this.activeRoute.snapshot.queryParams.category;
    if(this.categoryType == 'resume-application') {
      this.commonService.bindHeaderFooterTypes('RESUME_APPLICATION')
    } else {
      this.commonService.bindHeaderFooterTypes('TRACK_STATUS')
    }
  }

  ngOnInit(): void {
    this.journey = this.commonService.getJourney()
    this.titleChange()
    this.selectedProduct = this.localStorage.SessionGetItem('SELECTED_PRODUCT');
  }

  titleChange() {
    this.breadCrumbList = [...this.resumeVariableService.breadCrumbList]
    if(this.categoryType == 'resume-application') {
      this.config[0].sectionContent.titleData = "Resume Application"
      this.breadCrumbList = this.breadCrumbList.filter(obj => obj.id != 'track-status');
    }
    if(this.categoryType == 'track-status') {
      this.breadCrumbList = this.breadCrumbList.filter(obj => obj.id != 'resume-application');
    }
  }

 

  config:any = [
    {
      "componentType":"TITLE",
      "validateSection":false,
        "sectionContent":{
          "titleData":"Track Status",
          "isShow":true
        }
    },
    {
      "componentType":"PARAGRAPH",
      "className":"text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
      "sectionContent":{
        "isShow":true,
        "paragraphData":"Please, * fill the mandatory details",
          
      },    
    },
    {
      "componentType":"PARAGRAPH",
      "className":"form-label form-label-lg mb-3 ng-star-inserted",
      "sectionContent":{
        "isShow":true,
        "paragraphData":"Enter Details",        
      },    
    },
    {
      "componentType":"FORM",
      "validateSection":true,
      "mandatory":true,
      "sectionContent":{
        "options":{'columnSize':1},
        "isShow":true,
        "fields": [          
          {
            "fieldDataType":"MOBILE_NO",
            "isMandatory":true,
            "fieldLabel": "Enter Mobile number",
            "fieldAccessModifier":"EDITABLE", //editable,readonly  //top,right,bottom,left
            "minLength":null,
            "maxLength":10,
            "error":null,
            "value":null,
            "validationJson":null,
            "rulesFor":null,
            "regex":"^[1-9][0-9]{9}$",
            "countryCode":"+91",
            "regexErrorMessage":null,
            "rowNo":null,
            "columnNo":null,
            "placeholderText":"Enter 10 digit Mobile Number",
            "fieldName":"mobileNumber",
            "labelInfo":null,
            "showLabel":true,
            "groupName":null,
            "groupIndex":null,
            "showField":true
          },       
        ]
        ,
        validityEmitter:new Subject<void>(),
        formValueEmitter:new Subject<void>()
      }
    },
    {
      'componentType':'OTP',
      "validateSection":true,
      "mandatory":true,
      "sectionContent":{
        "fields":{
          "fieldDataType":"OTP",
          "otpType":'MOBILE', // PHONE,EMAIL,AADHAR,UDYAM,PAN,GST
          "isMandatory":true,
          "fieldLabel": "Enter Mobile OTP",
          "fieldAccessModifier":"EDITABLE", //editable,readonly  //top,right,bottom,left
          "minLength":6,
          "maxLength":15,
          "length":6,
          "error":null,
          "value":null,
          "validationJson":null,
          "rulesFor":null,
          "regex":null,
          "regexErrorMessage":null,
          "rowNo":null,
          "columnNo":null,
          "groupName":null,
          "groupIndex":null,
          "placeholderText":"xx x  xxxxx",
          "fieldName":"accountNo",
          "labelInfo":"loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
          "showLabel":true,
          "showField":true,
          "OtpMasking": true,
          "otpDataType": 'NUMBER',
          "otpAttempts":3,
          "waitTimeInSeconds":60
        },
        "options":{
          'value':null,
          'notificationType':'COMMON_OTP_TWO',
          'loanProduct':null,
          'createBorrower':false,
          'generateOtp':true,
          'isResume':true
        },
        "isShow":false,

      }
    },
  ]


  continue() {
    this.showOtpView()
  }

  otpCompleteTrigger($event){
    if($event.TriggerSection=='OTP'){
    this.journey = this.commonService.getJourney()
    this.localStorage.SessionSetItem('RESUME_LOAN_APPLICATIONS',this.journey.product.loanDetailsWithAccessToken)
    if(this.journey.product.loanDetailsWithAccessToken?.length == 0) {
      this.sharedService.openSnackBar('No application to resume', 'success');
    } else if(this.journey.product.loanDetailsWithAccessToken?.length != 0 && this.categoryType == 'resume-application') {
      this.router.navigateByUrl('resume-journey/application-status?category=resume-application');
    } else if(this.journey.product.loanDetailsWithAccessToken?.length != 0 && this.categoryType == 'track-status') {
      this.router.navigateByUrl('resume-journey/application-status?category=track-status');
    }
  }
  }

  showOtpView() {
    this.showContinue = false;

    if(this.commonService.sectionValidationSystem(this.config)){
      // disable mobile number edit
      this.config[3].sectionContent.fields[0].fieldAccessModifier = 'READ_ONLY'
      // send otp on mentioned number
      this.config[3].sectionContent.formValueEmitter.next()
      this.config[4].sectionContent.options.value = this.config[3].sectionContent?.formValue['mobileNumber'];    
      
      // show otp section
      this.config[4].sectionContent.isShow=true;
    }
  }
}
