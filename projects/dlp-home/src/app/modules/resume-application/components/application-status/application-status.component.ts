import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import {ResumeTheme1CommonService} from '../../services/resume-application-theme1-common.service';
import { ResumeTheme1VariableService } from '../../services/resume-application-theme1-variable.service';
import { CommonCommonService } from '@home-app/services/common-common.service';
import { stepperData } from '@home-app/services/utlis/data';
import { isEqual } from '@home-app/shared/utils/utils';
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
    public resumeVariableService:ResumeTheme1VariableService,public router:Router,public activeRoute:ActivatedRoute) {
    this.commonCommonService.bindHeaderFooterTypes('APPLICATION_STATUS')
    
   }

  ngOnInit(): void {
    this.journey = this.commonCommonService.getJourney()
    this.breadcrumblist()
    this.resumeVariableService.resumeLoanApplications = JSON.parse(sessionStorage.getItem('RESUME_LOAN_APPLICATIONS'))
    this.parseStepperDataForApplicationList()
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
    
    this.breadCrumbList.forEach(obj => obj.isActive == true)
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
  }

  resumeJourney(loan) {
    this.resumeCommonService.resumeJoruney(loan)
  }


  parseStepperDataForApplicationList(){
    this.resumeVariableService.resumeLoanApplications.forEach(application=>{
      if(stepperData[application.loanPurposeCode]){
         let stepper = stepperData[application.loanPurposeCode]['indivdual']
         let resumeSequence = [application.status,application.subStatus]
         let finded_pageCode =null
        stepper.forEach(step=>{
          if(step.subStep){
            step.subStep.forEach(sstep=>{
              sstep.resumeJourneySequences.forEach(seq=>{
                if(isEqual(seq[0],resumeSequence[0]) && isEqual(seq[1],resumeSequence[1])){
                  finded_pageCode = sstep.pageCode
                } 
              })
            })
          }else{
            step.resumeJourneySequences.forEach(seq=>{
              if(isEqual(seq[0],resumeSequence[0]) && isEqual(seq[1],resumeSequence[1])){
                finded_pageCode = step.pageCode
              } 
            })
          }
        })

        if(finded_pageCode!=null){
          let isPageFound = false
          stepper.forEach(step=>{
            if(step.subStep){
              if(isPageFound===false){
                step.isActive = true
                step.isCompleted=true
                step.subStep.forEach(sstep=>{
                  if(finded_pageCode==sstep.pageCode){
                    sstep.isActive=true
                    sstep.isCompleted = true
                    isPageFound = true
                  }
                })
              }
            }else{
              if(finded_pageCode==step.pageCode && isPageFound===false){
                step.isActive=true
                step.isCompleted = true
                isPageFound = true
              }
            }
          })
        }
        application.stepper=stepper
      }else{
        application.stepper=[]
      }
    })
  }
  
}
