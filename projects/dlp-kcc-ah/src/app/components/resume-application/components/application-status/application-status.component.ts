import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ResumeTheme1CommonService} from '../../services/resume-application-theme1-common.service';
import { ResumeTheme1VariableService } from '../../services/resume-application-theme1-variable.service';
import { CommonCommonService } from '@kcc-ah-app/services/common-common.service';
import { LocalStorage } from '@kcc-ah-app/shared/helpers/localStorage';
@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.scss']
})
export class ApplicationStatusComponent implements OnInit {
  journey: any;
  categoryType:any;
  previousUrl:any;
  breadCrumbList:any = []
  constructor(public commonCommonService: CommonCommonService,public resumeCommonService:ResumeTheme1CommonService,
    public resumeVariableService:ResumeTheme1VariableService,public router:Router,public activeRoute:ActivatedRoute,public localStorage: LocalStorage) {
    this.commonCommonService.bindHeaderFooterTypes('APPLICATION_STATUS')
    this.categoryType = this.activeRoute.snapshot.queryParams.category;
   }

  ngOnInit(): void {
    this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY');
    this.breadcrumblist()
    this.resumeVariableService.resumeLoanApplications = this.localStorage.SessionGetItem('RESUME_LOAN_APPLICATIONS')
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
        url: '1/resume-journey/application-status', 
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
    this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY');
    this.journey.product = loan;
    this.journey.product = {...this.journey.product,...loan}
    this.localStorage.SessionSetItem('CURRENT_JOURNEY', this.journey)
    this.resumeCommonService.resumeJoruney(loan)
  }

  
}
