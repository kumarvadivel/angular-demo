import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonVariableService } from '@home-app/services/common-variable.service';
import { EnvironmentService } from '@home-environments/environment.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menu = [];
  public subMenu = [];
  public selectedMenu = 0;
  public showMobileSideNav: boolean = false;
  public showmenu: boolean = false;
  public url = "";
  public isSowHeader: boolean;
  public showProductContentMenu = false
  productListData: any;
  showProductTiles = false
  headerproducts

  constructor(private router: Router,
             public commonVariableService:CommonVariableService,
              public environmentService:EnvironmentService
              ) {
  }

  ngOnInit() {
      this.isSowHeader = this.commonVariableService.appLayoutConfig.isShowJourneyHeader
      this.url = this.router.routerState.snapshot.url;
      this.menu = this.commonVariableService.homeMenu;
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

  showSideNav() {
      this.showMobileSideNav = !this.showMobileSideNav
  }

  showSubMenu(_item) {
      this.showmenu = !this.showmenu
  }

  goToActiveMenu(menu, item) {
      menu.forEach(s => {
          if (s.name == item.name) {
              s.isActive = true
          } else {
              s.isActive = false
          }
      })
  }

  hoverAlignData(then) {
      if (then.isActive) {
          then.isHover = true
          this.showProductContentMenu = true
          this.productListData = then.subSection
      } else {
          then.isHover = false
          this.showProductContentMenu = false
      }
  }

  getHelp() {
    //   this.dialog.open(PopupComponent, {
    //       width: '50%',
    //       height: '40%',
    //       disableClose: true,
    //       data: {
    //           title: 'Get Help',
    //           popupContent: this.commonVaribleService.getHelpInfo
    //       }
    //   })
  }

  resume() {
      this.router.navigateByUrl('/resume-journey/resume-application').catch(e => console.log(e));
  }

  routeToHome() {
    //   this.commonCommonService.flushJourney()
  }

  initiateProduct(product) {
    //   if (product.productCode != null) {
    //       this.showProductTiles = false
    //       this.showProductContentMenu = false
    //       let findedproduct = this.commonVaribleService.loanProductInfo.find(e => e.productCode == product.productCode)
    //       if (findedproduct != null) {
    //           localStorage.setItem('SELECTED_PRODUCT', JSON.stringify(findedproduct.id))
    //           localStorage.setItem('SELECTED_LOAN_PRODUCT', JSON.stringify(findedproduct))
    //           this.commonCommonService.initializeJourney(findedproduct)
    //           this.commonCommonService.proceedJourney()
    //       }
    //   }
  }
}
