import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {MatDialog } from '@angular/material/dialog'; 
import { ApiService } from '@ssa-app/services/api.service';
import { CommonVariableService } from '@ssa-app/services/common-variable-service';
import { CommonCommonService } from '@ssa-app/services/common-common.service';
import { EnvironmentService } from '@ssa-environments/environment.service';
import { LocalStorage } from '@ssa-app/shared/helpers/LocalStorage';
import { PopupComponent } from '@ssa-app/shared/components/popup/popup.component';
import { SubmitFlowApiService } from '@ssa-app/services/submit-flow-api.service';
import { InitializeJourneyService } from '@ssa-app/services/initialize-journey.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menu = [];
  public subMenu = [];
  public selectedMenu = 0;
  public showMobileSideNav:boolean=false;
  public showmenu:boolean = false;
  public url="";
  public isSowHeader:boolean;
  public showProductContentMenu=false
  productListData: any;
  showProductTiles=false
  headerproducts;
  isHome = false;
  isResumeApplication=false;
  dialog:MatDialog;
  submitFlowApiService:SubmitFlowApiService;
  commonCommonService:CommonCommonService;
  commonVariableService:CommonVariableService;
  initializeJourneyService:InitializeJourneyService;
  constructor(
    private router: Router,
    public apiService: ApiService, 
    public environmentService: EnvironmentService,
    public localStorage: LocalStorage,
    private injector: Injector
  ) {
    this.initializeJourneyService = this.injector.get<InitializeJourneyService>(InitializeJourneyService);
    this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService);
    this.dialog = this.injector.get<MatDialog>(MatDialog);
    this.commonCommonService = this.injector.get<CommonCommonService>(CommonCommonService);
    this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService); 
  }

  ngOnInit() {
    this.isSowHeader = this.commonVariableService.appLayoutConfig.isShowJourneyHeader
    this.url = this.router.routerState.snapshot.url; 
    this.menu = this.commonVariableService.homeMenu;
    this.navigateSubMenu(0);
    this.checkRoute(); 
  }
  checkRoute() {
    this.isHome = (this.router.url === '/core/home');
    this.isResumeApplication = this.router.url.includes('resume-application')?true:false;
  }
  public getRouterURL() {
    this.url = this.router.routerState.snapshot.url;
    return this.url.includes("landing");
  }

  navigateSubMenu(i) {
    this.menu.forEach((item, index) => {
      if (index == i) {
        item.showMenu = false
        this.selectedMenu = i;
        this.subMenu = item.subMenu
      }
})
  }
  logoClick(){
    this.router.navigateByUrl(
      "core/home"
    ).catch(err => {
      console.error(err);
      // Handle the error as needed
  })
  }
  showSideNav(){
    this.showMobileSideNav=!this.showMobileSideNav
 }
 showSubMenu() {
 this.showmenu = !this.showmenu

 }
 goToActiveMenu(menu,item) {
 menu.forEach(s =>{
  if(s.name == item.name) {
    s.isActive = true
  }
  else{
    s.isActive = false
  }
 })
 }

 hoverAlignData(then){
  if(then.isActive){
    then.isHover=true
    this.showProductContentMenu=true
    this.productListData = then.subSection
  }else{
    then.isHover=false
    this.showProductContentMenu=false
  }
 }

 getHelp(){
  this.dialog.open(PopupComponent,{
    width: '50%',
    height: '40%',
    disableClose: true,
    role:"dialog",
    ariaLabel:"popup",
    data:{
      title:'Get Help',
      popupContent:this.commonVariableService.getHelpInfo
    }
  })
 }
 
 resume() {
  this.router.navigateByUrl('/resume-journey/resume-application?category=resume-application');
 }

 routeToHome(){
  this.commonCommonService.flushJourney()
 }

 initiateProduct(product) {
  if (product.productCode != null) {
    this.showProductTiles = false;
    this.showProductContentMenu = false;
    let findedproduct = this.commonVariableService.loanProductInfo.find(
      (e) => e.productCode == product.productCode
    );
    if (findedproduct != null) {
      this.localStorage.SessionSetItem(
        "SELECTED_PRODUCT",
        findedproduct.id
      );
      this.localStorage.SessionSetItem(
        "SELECTED_LOAN_PRODUCT",
        findedproduct
      );
      this.initializeJourneyService.initializeJourney(findedproduct);
      this.submitFlowApiService.proceedJourney();
    }
  }
}
}
