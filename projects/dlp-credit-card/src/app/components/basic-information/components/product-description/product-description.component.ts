import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { ApiService } from '@cc-app/services/api.service';
import { InitializeJourneyService } from '@cc-app/services/initialize-journey.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  selected = new UntypedFormControl(0);
  public productDescription = {};
  public productDescInfoTabs = {};

  journey: any;
  constructor(public commonVariableService: CommonVariableService,
    public commonCommonService: CommonCommonService,
    public initializeJourneyService: InitializeJourneyService,
    public router: Router,
    public apiService: ApiService) {}

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
    this.commonCommonService.bindHeaderFooterTypes('PRODUCT_DESCRIPTION')
    this.journey = this.commonCommonService.getJourney();
    this.productDescription = this.commonVariableService.productDesc[this.journey.product.productCode];
    this.productDescInfoTabs = this.commonVariableService.productDescInfoTabs[this.journey.product.productCode];
  }

  navigateToCustType() {
    this.commonCommonService.proceedJourney('PRODUCT_DESCRIPTION');
  }

  navigateToTrackStatus() {
    this.router.navigateByUrl('/basicinfo/mobile-verify?resumeJourney=true');
  }

  fetchProductData() {
    this.apiService.fetchLoanProducts().then((res: any) => {
      let selected = res.loanProductList.find(e => e.loanPurposeCode == this.journey.product.productCode);
      this.journey.product = { ...this.journey.product, ...selected }
      this.commonCommonService.setJourney(this.journey);
    })
  }
}
