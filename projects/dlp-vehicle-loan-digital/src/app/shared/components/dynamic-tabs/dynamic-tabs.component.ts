import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ApiService} from '@vldigi-app/services/api.service';
import {CommonVariableService} from '@vldigi-app/services/common-variable-service';

import {PopupComponent} from '../popup/popup.component';
import {CommonCommonService} from '@vldigi-app/services/common-common.service';
import { termsAndConditionsInfo } from '@vldigi-app/services/utils/data';

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
       
    }

    termsAndConditions() {
        this.dialog.open(PopupComponent, {
            width: '71%',
            height: '90%',
            disableClose: true,
            ariaLabel:"popup",
            role:"dialog",
            data: {
                title: 'Terms & Conditions',
                popupContent: this.termsAndConditionsInfo
            }
        })
    }

}
