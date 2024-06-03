import { Component, OnInit, Injector } from '@angular/core';
import {Router} from '@angular/router';
import { CommonVariableService } from '@el-app/services/common-variable-service';
import { CommonCommonService } from '@el-app/services/common-common.service';
import {MatDialog } from '@angular/material/dialog';
import { EnvironmentService } from '@el-environments/environment.service';
import { ApiService } from '@el-app/services/api.service';
import { PopupComponent } from '@el-app/shared/components/popup/popup.component';
import { LocalStorage } from '@el-app/shared/helpers/LocalStorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] ,
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

  constructor(
    private router: Router,
    public commonVariableService: CommonVariableService,
    public commonCommonService: CommonCommonService,
    public dialog: MatDialog,
    public environmentService: EnvironmentService,
    public theme1ApiService: ApiService,
    private localStorage: LocalStorage) {}

  ngOnInit(): void {
    this.isSowHeader = this.commonVariableService.appLayoutConfig.isShowJourneyHeader
    this.url = this.router.routerState.snapshot.url;
    this.menu = this.commonVariableService.homeMenu
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
    this.dialog.open(PopupComponent, {
        width: '50%',
        height: '40%',
        disableClose: true,
        data: {
            title: 'Get Help',
            popupContent: this.commonVariableService.getHelpInfo
        }
    })
}

  resume() {
    this.router.navigateByUrl('1/resume-journey/resume-application?category=resume-application');
  }

  routeToHome() {
    this.commonCommonService.flushJourney()
}

initiateProduct(product) {
    if (product.productCode != null) {
        this.showProductTiles = false
        this.showProductContentMenu = false
        let findedproduct = this.commonVariableService.loanProductInfo.find(e => e.productCode == product.productCode)
        if (findedproduct != null) {
            sessionStorage.setItem('SELECTED_PRODUCT', JSON.stringify(findedproduct.id))
            sessionStorage.setItem('SELECTED_LOAN_PRODUCT', JSON.stringify(findedproduct))
            this.commonCommonService.initializeJourney(findedproduct)
            this.commonCommonService.proceedJourney()
        }
    }
}
 
}
