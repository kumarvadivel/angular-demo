import { Injectable } from '@angular/core';
import { INavigationItem } from '../../../interfaces/common.interface';

@Injectable({
  providedIn: 'root'
})
export class ResumeVariableService {
  public resumeLoanApplications:any =[];
  public showToast:boolean = false;
  pageObjList:any = []
  breadCrumbList:INavigationItem[] = [
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
      url: 'core/resume-journey/resume-application?category=track-status', 
      isActive: false,
      id:'track-status',
      productUrl:true
    },
    {
      name: 'resume-application',
      label:'Resume Application',
      url: 'core/resume-journey/resume-application?category=resume-application',
      isActive: false,
      id:'resume-application',
      productUrl:false
    }
  ];
}
