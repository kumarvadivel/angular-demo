import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ApiService} from '@pl-app/services/api.service';
import {CommonVariableService} from '@pl-app/services/common-variable-service';

import {PopupComponent} from '../popup/popup.component';
import {CommonCommonService} from '@pl-app/services/common-common.service';
import { termsAndConditionsInfo } from '@pl-app/services/utils/data';

@Component({
    selector: 'app-dynamic-tabs',
    templateUrl: './dynamic-tabs.component.html',
    styleUrls: ['./dynamic-tabs.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DynamicTabsComponent implements OnInit {
    @Input() tabsData: any
    journey: any;
    termsAndConditionsInfo = termsAndConditionsInfo

    constructor(private dialog: MatDialog,
                private commonService: CommonCommonService,
                public commonVariableService: CommonVariableService, public theme1ApiService: ApiService) {
    }

    ngOnInit(): void {
        this.commonVariableService.journey = this.commonService.getJourney()
        this.journey = this.commonService.getJourney()
        let isEmi = this.tabsData.find(e => e.displayType == 'emiCalculator')
        if (this.journey.product.access_token && isEmi) {
            this.getApprovedLoanDetails()
        }
    }

    termsAndConditions() {
        this.dialog.open(PopupComponent, {
            width: '71%',
            height: '90%',
            disableClose: true,
            data: {
                title: 'Terms & Conditions',
                popupContent: this.termsAndConditionsInfo
            }
        })
    }

    getApprovedLoanDetails() {
        let params = {
            access_token: this.journey.product.access_token,
            loanUuid: this.journey.product.loanUuid,
            microservicetoken: this.journey.product.oauthAccessToken
        }
        this.theme1ApiService.fetchPrincipalApprovedDetails(params).then((res: any) => {
            this.tabsData.forEach(data => {
                data.LoanData.forEach(loanData => {
                    loanData.emiToBePaid = res.object.emiToBePaid
                    loanData.maxLoanAmount = res.object.loanAmount
                    loanData.maxTenure = res.object.tenure
                })
            })
        })
    }
}
