import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonCommonService } from '../../../../services/common-common.service';
import { CommonVariableService } from '../../../../services/common-variable-service';
import { ApiService } from '../../../../services/api.service';
import { InitializeJourneyService } from '../../../../services/initialize-journey.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public bannerList = [];
  public loanProducts = [];
  public hoverIndex = null;
  public menu = [];
  public subMenu = [];
  public selectedMenu = 0;
  public loanAmount = 12000;
  public tensure = 10;
  public emi: any = 0;
  public Interest = 12;
  public productList = [];
  public offerList = [];
  public selectedCategoryTab = 0;
  public sessionNavigate: string ='';
  public loanProductPageIndex=0
  contentView='PRODUCTS'
  emiCalculatorData =[]
  @HostListener('window:beforeunload')
  canDeactivate() {
    return false;
  }


  constructor(private router: Router, 
    public apiService:ApiService,
    public commonVariableService:CommonVariableService,
    public commonService:CommonCommonService,
    public initializeJourneyService:InitializeJourneyService) {
     
  }



  ngOnInit(): void {
    sessionStorage.removeItem('PRODUCT_CONFIGURATION')
    this.menu = this.commonVariableService.homeMenu;
    this.bannerList = this.commonVariableService.landingPageBanner;
    this.loanProducts = this.commonVariableService.loanProductInfo;
    this.loanProducts= this.paginateLoanProducts(this.loanProducts)
    this.navigateSubMenu(0);
    this.productList = [
      {
        label: 'Agriculture',
        img: '../../../assets/icons/home-icon-10.png',
        info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
      },
      {
        label: 'Corporate Credit',
        img: '../../../assets/icons/home-icon-19.png',
        info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
      },
      {
        label: 'Insurance',
        img: '../../../assets/icons/home-icon-24.png',
        info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
      },
      {
        label: 'Government Business Products',
        img: '../../../assets/icons/home-icon-18.png',
        info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
      },
      {
        label: 'MSME',
        img: '../../../assets/icons/home-icon-20.png',
        info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
      },
      {
        label: 'Account Creation',
        img: '../../../assets/icons/home-icon-23.png',
        info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
      },
      {
        label: 'Retail',
        img: '../../../assets/icons/home-icon-21.png',
        info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
      },
      {
        label: 'Third Party Products - Fund',
        img: '../../../assets/icons/home-icon-22.png',
        info: 'Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper. Aliquam maximus dolor turpis, nec commodo libero mattis ut.'
      }
    ];
    this.offerList = [
      {
        label: "Credit Card",
        details: 'Get instant credit offers on your card',
        color: '#45526C'
      },
      {
        label: "Credit Card",
        details: 'Get instant credit offers on your card',
        color: '#5AA897'
      },
      {
        label: "Credit Card",
        details: 'Get instant credit offers on your card',
        color: '#F8A488'
      }
    ]
  }

  statusObserver($event,item){
    if($event.TriggerSection=='FORM'){
       item.tabData[1].sectionContent.isShow= true
      item.tabData[1].sectionContent.config.data[0].value = typeof item.tabData[0].sectionContent.formValue.loanAmount == 'string'? 0 : item.tabData[0].sectionContent.formValue.loanAmount
      item.tabData[1].sectionContent.config.data[1].value = typeof item.tabData[0].sectionContent.formValue.interestPaid == 'string'? 0 : item.tabData[0].sectionContent.formValue.interestPaid
      item.tabData[1].sectionContent.updateChart.next()
    }
  }
  paginateLoanProducts(loanProductsList){
    return loanProductsList.reduce((acc, val, i) => {
      let idx = Math.floor(i / 6)
      let page = acc[idx] || (acc[idx] = [])
      page.push(val)
  
      return acc
    }, [])
    
  }
  navigateSubMenu(i) {
    this.menu.forEach((item, index) => {
      if (index == i) {
        this.selectedMenu = i;
        this.subMenu = item.subMenu
      }
    })
  }

  getImgBg(color) {
    return 'rgb(' + color + ',10%)';
  }

  getBorder(color) { 
    return 'rgb(' + color + ',0.4)';
  }

  getShadow(color) {
    return `0 0 6px ${color}`;
  }


  navigatePage(item) {
    this.initializeJourneyService.initializeJourney(item)
  }
   

  selectedCatgory(event){
    this.selectedCategoryTab = event;
  } 
  columnConfig = {'columnSize':2,'layout':''}
   

goToNewLink(){
  let url = "https://www.bankofindia.co.in/Home/Locateus?parmtype=Branch";
  window.open(url,"_blank", "noopener");
}

}


