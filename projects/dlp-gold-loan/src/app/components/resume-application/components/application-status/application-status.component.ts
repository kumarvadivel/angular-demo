import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonCommonService } from '../../../../services/common-common.service';
import {ResumeCommonService} from '../../services/resume-application-common.service';
import { ResumeVariableService } from '../../services/resume-application-variable.service';
import { IConfigType, INavigationItem } from '../../../../interfaces/common.interface';
import { IJourney } from '../../../../interfaces/journey.interface';
import { LocalStorage } from '../../../../shared/helpers/localStorage';
@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.scss']
})
export class ApplicationStatusComponent implements OnInit {
  journey: IJourney;
  categoryType:string;
  previousUrl:string;
  breadCrumbList:INavigationItem[] = []
  config:IConfigType[] = [
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
  constructor(public commonCommonService: CommonCommonService,public resumeCommonService:ResumeCommonService,
    public resumeVariableService:ResumeVariableService,public router:Router,public activeRoute:ActivatedRoute,
    public localStorage: LocalStorage) {
    this.categoryType = this.activeRoute.snapshot.queryParams.category;
   }

  ngOnInit(): void {
    this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    this.breadcrumblist()
    this.resumeVariableService.resumeLoanApplications = this.localStorage.SessionGetItem('RESUME_LOAN_APPLICATIONS')
  }


  breadcrumblist() {
    this.breadCrumbList = [...this.resumeVariableService.breadCrumbList];
    
    this.breadCrumbList.forEach(obj => obj.isActive)
    this.breadCrumbList.push(
      {
        name: 'application-status',
        label:'Application Status',
        url: 'core/resume-journey/application-status', 
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
    this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    this.journey.product = loan;
    this.journey.product = {...this.journey.product,...loan}
    this.localStorage.SessionSetItem('CURRENT_JOURNEY',this.journey)
    this.resumeCommonService.resumeJoruney(loan)
  }

  
}
