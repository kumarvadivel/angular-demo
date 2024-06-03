import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonCommonService } from '@kcc-app/services/common-common.service';
import { ApiService } from '@kcc-app/services/api.service';
import { LocalStorage } from '@kcc-app/shared/helpers/localStorage';

@Component({
  selector: 'app-product-error',
  templateUrl: './product-error.component.html',
  styleUrls: ['./product-error.component.scss']
})
export class ProductErrorComponent implements OnInit {

  config
  journey
  fetchedData: any;
  showloader: boolean;
  constructor(public commonService:CommonCommonService,public localStorage: LocalStorage,
    public router:Router,
    public theme1ApiService:ApiService) {
    this.commonService.bindHeaderFooterTypes('PRODUCT_ERROR')
    this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY');
    this.config = this.commonService.fetchProductPageConfig(this.journey,'PRODUCT_ERROR')
   }

  ngOnInit(): void {
   // this.fetchLoanDetails()
  }

  // fetchLoanDetails(){
  //   let params ={
  //     access_token:this.journey.product.access_token,
  //     loanUuid:this.journey.product.loanUuid,
   //     microservicetoken:this.journey.product.oauthAccessToken
  //   }
  //   this.theme1ApiService.fetchLoanDetails(params).then((res:any)=>{
  //     if(res.code=='200'){
  //        this.fetchedData = res.loanDetails
  //       // this.journey.metaData.capturedData = {...this.journey.metaData.capturedData ,...res.loanDetails}
  //       // this.branchConfig.branchDetails.name = `Bank Of India ${res.userHierarchyUnit.addressAssigned.cityValue} Branch`
  //       // this.branchConfig.branchDetails.address = `${res.userHierarchyUnit.addressAssigned.line1Value}${res.userHierarchyUnit.addressAssigned.cityValue},${res.userHierarchyUnit.addressAssigned.stateValue},${res.userHierarchyUnit.addressAssigned.zipCodeValue}`
  //       this.showloader=false
  //       this.parseConfig()
  //     }
  //   },err=>{

  //   })
  // }
  // parseConfig(){
  //   //this.config[this.metaConfig.titleIndex].sectionContent.titleData = `${this.config[this.metaConfig.titleIndex].sectionContent.titleData} ${this.fetchedData.borrower}`
  //   this.config[0].sectionContent.titleData=`${this.config[0].sectionContent.titleData}${this.fetchedData.borrower},`
  //   // this.config[this.metaConfig.loanAmountIndex].sectionContent.htmlData = `${this.config[this.metaConfig.loanAmountIndex].sectionContent.htmlData} ${this.fetchedData.loanAmount}</div>  ${this.metaConfig?.loanAmountSuffix || ''}`;
  //   // this.config[this.metaConfig.refNoInx].sectionContent.paragraphData = `${this.config[this.metaConfig.refNoInx].sectionContent.paragraphData} ${this.fetchedData.crmLeadId}`
  //  // this.rejectionView[2].sectionContent.paragraphData = `${this.rejectionView[2].sectionContent.paragraphData} ${this.fetchedData.crmLeadId}`
  // }
  goBack(){
    this.router.navigateByUrl('')
  }

}
