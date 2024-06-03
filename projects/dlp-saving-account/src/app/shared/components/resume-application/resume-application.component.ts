import { Component, OnInit } from '@angular/core';  
import { CommonCommonService } from '@sba-app/services/common-common.service';

@Component({
  selector: 'app-resume-application',
  templateUrl: './resume-application.component.html'
})
export class ResumeApplicationComponent implements OnInit {

  constructor(private commonService:CommonCommonService) { }

  ngOnInit(): void {
    this.resumeApplication()
  }

  resumeApplication(){
    this.commonService.resumeApplication()
  }

}
