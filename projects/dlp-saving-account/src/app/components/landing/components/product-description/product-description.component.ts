import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router'; 
import { CommonCommonService } from '@sba-app/services/common-common.service';
import { CommonVariableService } from '@sba-app/services/common-variable-service'; 
import { SubmitFlowApiService } from '@sba-app/services/submit-flow-api.service';
import { ApiService } from '../../../../services/api.service'; 

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  selected = new UntypedFormControl(0);
  public productDescription:any = [];
  public productDescInfoTabs=[];

  journey: any;
  constructor(public commonVariableService:CommonVariableService,
    public commonCommonService: CommonCommonService,
    public router:Router,
    public apiService:ApiService,private submitFlowApiService:SubmitFlowApiService) {
    this.commonCommonService.quickInitiateProduct('SBA');
  }
   


  ngOnInit() {
    setTimeout(()=>{
      this.commonCommonService.bindHeaderFooterTypes('PRODUCT_DESCRIPTION')
      this.journey = this.commonCommonService.getJourney()
      this.productDescription = this.commonVariableService.productDesc['SBA'];
      this.productDescInfoTabs = this.commonVariableService.productDescInfoTabs['SBA'];
    })
    this.fetchProductData()
  }

  navigateToCustType(){
    this.submitFlowApiService.proceedJourney('PRODUCT_DESCRIPTION')
  }

  navigateToTrackStatus() { 
    this.router.navigateByUrl('basic-info/mobile-number-verification?resumeJourney=true');
    
  }
 
  fetchProductData(){
    this.apiService.fetchLoanProducts().then((res:any)=>{
        let selected = res.loanProductList.find(e=>e.loanPurposeCode==this.journey.product.productCode)
        this.journey.product={...this.journey.product,...selected}
        this.commonCommonService.setJourney(this.journey)
    })
  }
}
