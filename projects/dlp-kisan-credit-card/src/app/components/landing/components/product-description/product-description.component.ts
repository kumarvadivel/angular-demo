import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonCommonService } from '@kcc-app/services/common-common.service';
import { CommonVariableService } from '@kcc-app/services/common-variable-service';
import { ApiService } from '@kcc-app/services/api.service';
import { LocalStorage } from '@kcc-app/shared/helpers/localStorage';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  selected = new UntypedFormControl(0);
  public productDescription = {};
  public productDescInfoTabs={};

  journey: any;
  constructor(public commonVariableService:CommonVariableService,
    public commonCommonService: CommonCommonService,public localStorage: LocalStorage,
    public router:Router,
    public theme1ApiService:ApiService) {
    this.commonCommonService.bindHeaderFooterTypes('PRODUCT_DESCRIPTION')
  }
  
  offerList = [
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


  ngOnInit() {
    
    this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY');
    this.productDescription = this.commonVariableService.productDesc[this.journey.product.loanPurposeCode];
    this.productDescInfoTabs = this.commonVariableService.productDescInfoTabs[this.journey.product.loanPurposeCode];
    this.fetchProductData()
  }

  navigateToCustType(){
    this.commonCommonService.proceedJourney('PRODUCT_DESCRIPTION')
  }

  navigateToTrackStatus() {
    this.router.navigateByUrl('1/resume-journey/resume-application?category=track-status');
    
  }
 
  fetchProductData(){
    this.theme1ApiService.fetchLoanProducts().then((res:any)=>{
        let selected = res.loanProductList.find(e=>e.loanPurposeCode==this.journey.product.productCode)
        this.journey.product={...this.journey.product,...selected}
        this.localStorage.SessionSetItem('CURRENT_JOURNEY', this.journey)
    })
  }
}
