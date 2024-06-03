import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { ApiService } from '@kcc-ah-app/services/api.service';
import { CommonCommonService } from '@kcc-ah-app/services/common-common.service';
import { CommonVariableService } from '@kcc-ah-app/services/common-variable-service';
import { PopupComponent } from '@kcc-ah-app/shared/components/popup/popup.component';
import { LocalStorage } from '@kcc-ah-app/shared/helpers/localStorage';
import { EnvironmentService } from '@kcc-ah-environments/environment.service';

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
  headerproducts
  constructor(private router: Router,public theme1ApiService:ApiService,public commonVaribleService: CommonVariableService,public commonCommonService: CommonCommonService,public dialog:MatDialog,public environmentService:EnvironmentService,public localStorage: LocalStorage) { }

  ngOnInit() {
    this.isSowHeader = this.commonVaribleService.appLayoutConfig.isShowJourneyHeader
    this.url = this.router.routerState.snapshot.url;
    this.menu = this.commonVaribleService.homeMenu;
    this.navigateSubMenu(0);
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
    role:"dialog",
    ariaLabel:"popup",
    disableClose: true,
    data:{
      title:'Get Help',
      popupContent:this.commonVaribleService.getHelpInfo
    }
  })
 }
 
 resume() {
  this.router.navigateByUrl('1/resume-journey/resume-application?category=resume-application');
 }

 routeToHome(){
  this.commonCommonService.flushJourney()
 }

 initiateProduct(product){
  if(product.productCode!=null){
    this.showProductTiles=false
    this.showProductContentMenu=false
   let findedproduct =  this.commonVaribleService.loanProductInfo.find(e=>e.productCode==product.productCode)
   if(findedproduct!=null){
    this.localStorage.SessionSetItem('SELECTED_PRODUCT',findedproduct.id)
    this.localStorage.SessionSetItem('SELECTED_LOAN_PRODUCT',findedproduct)
    this.commonCommonService.initializeJourney(findedproduct)
    this.commonCommonService.proceedJourney()
   }
  }
 }
}
