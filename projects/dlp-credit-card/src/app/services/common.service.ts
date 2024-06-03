import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonVariableService } from './common-variable-service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public commonVariableService : CommonVariableService, public router : Router) { }

  updateProductPage(path:string){
    let product = this.commonVariableService.selectedProductInfo;
    this.router.navigateByUrl(product.id + path)

  }
}
