import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonCommonService } from '../../../../services/common-common.service';
import { ApiService } from '../../../../services/api.service';
import { MetaConfigService } from '../../../../services/meta-config.service';
import { LocalStorage } from '../../../../shared/helpers/localStorage';

@Component({
  selector: 'app-product-error',
  templateUrl: './product-error.component.html',
  styleUrls: ['./product-error.component.scss']
})
export class ProductErrorComponent {

  config
  journey
  fetchedData: any;
  showloader: boolean;
  constructor(public commonService:CommonCommonService,
    public metaConfigService:MetaConfigService,
    public localStorage: LocalStorage,
    public router:Router,
    public apiService:ApiService) {
    this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    this.config = this.metaConfigService.fetchProductPageConfig(this.journey,'PRODUCT_ERROR')
   }
  goBack(){
    this.router.navigateByUrl('').catch(console.error)
  }

}
