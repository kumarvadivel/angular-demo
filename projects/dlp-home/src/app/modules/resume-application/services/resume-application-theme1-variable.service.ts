import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeTheme1VariableService {

  constructor() { }
  public resumeLoanApplications:any =[];
  public showToast:boolean = false;
  pageObjList:any = []
  breadCrumbList = [
    {
      name: 'home',
      label:'Home',
      url: '/1/landing',
      isActive: true,
      id:'landing',
      productUrl:false,
      isShow:true
    },
    {
      name: 'resume-application',
      label:'Resume Application',
      url: '/resume-journey/resume-application',
      isActive: false,
      id:'resume-application',
      productUrl:false
    }
  ];
}
