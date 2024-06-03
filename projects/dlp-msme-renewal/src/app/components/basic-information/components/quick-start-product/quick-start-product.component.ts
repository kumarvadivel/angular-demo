import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonCommonService } from '@msme-app/services/common-common.service';
import { CommonVariableService } from '@msme-app/services/common-variable-service';
import { EnvironmentService } from '@msme-environments/environment.service';
import { SharedService } from '../../../../shared/services/utils/shared.service';
declare let Appice:any;

@Component({
  selector: 'app-quick-start-product',
  templateUrl: './quick-start-product.component.html',
  styleUrls: ['./quick-start-product.component.scss']
})
export class QuickStartProductComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private router:Router,
    private commonVariableService:CommonVariableService,
    public environmentService:EnvironmentService,
    public commonService:CommonCommonService,
    public sharedService:SharedService) { }

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
        this.commonService.initializeJourney(product)
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
