import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeTheme1VariableService {
 
  public resumeLoanApplications:any =[];
  public showToast:boolean = false;
  pageObjList:any = []
  breadCrumbList = [
    {
      name: 'home',
      label:'Home',
      url: '/core/home',
      isActive: true,
      id:'landing',
      productUrl:false,
      isShow:true
    },
    {
      name: 'track-status',
      label:'Track Status',
      url: '/resume-journey/resume-application?category=track-status', 
      isActive: false,
      id:'track-status',
      productUrl:true
    },
    {
      name: 'resume-application',
      label:'Resume Application',
      url: '/resume-journey/resume-application?category=resume-application',
      isActive: false,
      id:'resume-application',
      productUrl:false
    }
  ];
}
