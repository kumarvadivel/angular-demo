import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonCommonService } from '../../../../services/common-common.service';
import { CommonVariableService } from '../../../../services/common-variable-service';
import { EnvironmentService } from '../../../../../environments/environment.service'
import { SharedService } from '../../../../shared/services/utils/shared.service';
import { InitializeJourneyService } from '../../../../services/initialize-journey.service';
declare var Appice:any;

@Component({
  selector: 'app-quick-start-product',
  templateUrl: './quick-start-product.component.html',
  styleUrls: ['./quick-start-product.component.scss']
})
export class QuickStartProductComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private commonVariableService:CommonVariableService,
    public environmentService:EnvironmentService,
    public commonService:CommonCommonService,
    public sharedService:SharedService,
    public initializeJourneyService:InitializeJourneyService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.captureCampagainParameters()
      let param = params['product']
      let product
      if(param=="personal-loan"){
         product = this.commonVariableService.loanProductInfo.find(e=>e.id=='personal-loan-express')
      }else{
        product = this.commonVariableService.loanProductInfo.find(e=>e.id==param)
      }
      if(product){
        this.initializeJourneyService.initializeJourney(product)
      }else{
        this.sharedService.openSnackBar('Invalid Product')
        window.open(`${window.origin}`, '_self');
      }
    });

  }

  captureCampagainParameters(){
    this.route.queryParams.subscribe(params=>{
      if(Object.keys(params).length != 0){
        if(typeof Appice != 'undefined'){
          let obj = { key: 'utm', properties: params }
          try{
            Appice?.recordEvent({ key: obj.key, segment: obj.properties });
          }catch(e){
            
          }
        }
      }
      Object.keys(params).forEach(key=>{
        if(this.commonVariableService.tenentConfiguration.campaign_parameters.includes(key)){
          sessionStorage.setItem("isApplicationExternallySourced",JSON.stringify(true))
          sessionStorage.setItem(key,JSON.stringify(params[key]))
        }
      })
    })
  }

}
