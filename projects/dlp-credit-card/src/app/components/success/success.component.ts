import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { LocalStorage } from '@cc-app/shared/helpers/localStorage';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
})
export class SuccessComponent implements OnInit {
  showloader = false;

  constructor(private router: Router, public commonVariableService: CommonVariableService,
    private route: ActivatedRoute, public commonService: CommonCommonService,private localStorage:LocalStorage) { }

  ngOnInit(): void {
    this.showloader = true;
    this.route.queryParams.subscribe(params => {

    
      let paramLength = Object.keys(params).length;
      if (paramLength > 1) {

        this.showloader = false;

        let internalUrl = params.path;
        if (params.subpath) {
          internalUrl = internalUrl + '/' + params.subpath;
        }
        if(params.subpath1) {
          internalUrl = internalUrl + '/' + params.subpath1;
        }

        this.router.navigateByUrl(internalUrl);

      } else {
        this.showloader = false;
        
        let product = (sessionStorage.getItem('selectedProduct'))?.replace(/["]+/g, '');
        if (product) {
           this.commonService.initializeJourney(this.commonVariableService.loanProductInfo.find(o => o.id === product)) 
        }
      }

    });
  }

}
