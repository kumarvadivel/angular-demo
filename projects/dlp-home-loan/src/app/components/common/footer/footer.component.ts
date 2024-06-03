import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CommonCommonService} from '@hl-app/services/common-common.service';
import {CommonVariableService} from '@hl-app/services/common-variable-service';
import { footerContent } from '@hl-app/services/utils/data';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    public isSowFooter: boolean;
    public url = ""
    footerdata = footerContent
    popularProducts = footerContent.popularProducts
    CalculatorsList = footerContent.CalculatorsList
    locateList = footerContent.locateList
    constructor(private router: Router, public commonVariableService: CommonVariableService, private commonCommonService: CommonCommonService) {
    }

    navigateTo(url) {
        window.open(url)
    }
}