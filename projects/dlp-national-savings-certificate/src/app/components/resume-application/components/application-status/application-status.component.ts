import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ResumeTheme1CommonService} from '../../services/resume-application-theme1-common.service';
import { ResumeTheme1VariableService } from '../../services/resume-application-theme1-variable.service';
import { LocalStorage } from '../../../../shared/helpers/LocalStorage';
import { CommonCommonService } from '@nsc-app/services/common-common.service';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.scss']
})
export class ApplicationStatusComponent implements OnInit {
  journey: any;
  categoryType:any;
  previousUrl:any;
  breadCrumbList:any = [];
 sbaStatusData= [
    {
      "initialized": [
      "INITIALIZED SUB_STATUS_1",
      "INITIALIZED SUB_STATUS_2",
      "INITIALIZED SUB_STATUS_3",
      "INITIALIZED SUB_STATUS_4"
      ],
      "personalDetails": [
        "INITIALIZED SUB_STATUS_5",
        "INITIALIZED SUB_STATUS_6"
      ],
      "consentDocument": [
        "INITIALIZED SUB_STATUS_7",
        "AWAITING_APPROVAL_L5 SUB_STATUS_2",
        "AWAITING_APPROVAL_L5 SUB_STATUS_3",
        "AWAITING_APPROVAL_L5 SUB_STATUS_4",
        "AWAITING_APPROVAL_L2 ''",
        "AWAITING_APPROVAL_L30 SUB_STATUS_1",
        "AWAITING_APPROVAL_L30 SUB_STATUS_2",
        "AWAITING_APPROVAL_L30 SUB_STATUS_3",
        "AWAITING_APPROVAL_L30 SUB_STATUS_4",
        "APPROVED SUB_STATUS_1",
        "APPROVED SUB_STATUS_2",
        "APPROVED SUB_STATUS_3",
        "APPROVED SUB_STATUS_4",
        "AWAITING_DISBURSEMENT SUB_STATUS_1",
        "AWAITING_DISBURSEMENT SUB_STATUS_2",
        "AWAITING_DISBURSEMENT SUB_STATUS_3",
        "AWAITING_DISBURSEMENT SUB_STATUS_4",
        "AWAITING_DISBURSEMENT SUB_STATUS_5",
        "AWAITING_DISBURSEMENT SUB_STATUS_6",
        "AWAITING_DISBURSEMENT SUB_STATUS_7",
        "AWAITING_DISBURSEMENT SUB_STATUS_8"
      ]
    }
  ]
  constructor(public commonCommonService: CommonCommonService,public resumeCommonService:ResumeTheme1CommonService,
    public resumeVariableService:ResumeTheme1VariableService,public router:Router,public activeRoute:ActivatedRoute,private localStorage:LocalStorage) {
    this.commonCommonService.bindHeaderFooterTypes('APPLICATION_STATUS')
    this.categoryType = this.activeRoute.snapshot.queryParams.category; 
   }

  ngOnInit(): void {
    this.journey = this.commonCommonService.getJourney()
    this.breadcrumblist()
    this.resumeVariableService.resumeLoanApplications = this.localStorage.SessionGetItem('RESUME_LOAN_APPLICATIONS');
    this.setStepper();
  }

  config:any = [
    {
    "componentType":"TITLE",
    "validateSection":false,
    "mandatory":false,
    "className":"mb-1",
      "sectionContent":{
        "isShow":true,
        "titleData":"Your Application Status"
      }
    },
  ]

  breadcrumblist() {
    this.breadCrumbList = [...this.resumeVariableService.breadCrumbList];
    
    this.breadCrumbList.forEach(obj => obj.isActive)
    this.breadCrumbList.push(
      {
        name: 'application-status',
        label:'Application Status',
        url: '/resume-journey/application-status', 
        isActive: false,
        id:'application-status',
        productUrl:true
      }
    )
    if(this.categoryType == 'resume-application') {
      this.breadCrumbList = this.breadCrumbList.filter(obj => obj.id != 'track-status');
    }
    if(this.categoryType == 'track-status') {
      this.breadCrumbList = this.breadCrumbList.filter(obj => obj.id != 'resume-application');
    }
    
  }

  resumeJourney(loan) {
    this.journey = this.commonCommonService.getJourney()
    this.journey.product = loan;
    this.journey.product = {...this.journey.product,...loan}
    this.commonCommonService.setJourney(this.journey)
    this.resumeCommonService.resumeJoruney(loan)
  }

  setStepper(){
    this.resumeVariableService.resumeLoanApplications.forEach((element) => {
      let status = element.status + ' ' + element.subStatus;
      if (element.productType == 'SAVINGS_ACCOUNT') {
        let checkList = [];
        this.sbaStatusData.forEach((key) => {
          let count = 0; 
          for (let res in key) {
            checkList[count++] = key[res].includes(status);
          }
        });
        let flag = true;
        this.journey.metaData.stepperData.forEach((_ele, i) => {
          if (flag) {
            if (checkList[i]) { 
              let newStepper = this.journey.metaData.stepperData.slice(0, i);
              newStepper.map((then, is) => {
                then.isCompleted = true;
                this.journey.metaData.stepperData[is] = then;
              });
              flag = false;
            }
          }
        });
      }
    })
  }
  
}
