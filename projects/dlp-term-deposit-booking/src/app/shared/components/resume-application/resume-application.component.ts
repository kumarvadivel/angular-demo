import {Component, OnInit} from '@angular/core';
import {CommonCommonService} from '@tlad-app/services/common-common.service';

@Component({
    selector: 'app-resume-application',
    templateUrl: './resume-application.component.html',
    styleUrls: []
})
export class ResumeApplicationComponent implements OnInit {
    constructor(private commonService: CommonCommonService) {
    }

    ngOnInit(): void {
        this.resumeApplication()
    }

    resumeApplication() {
        this.commonService.resumeApplication()
    }
}
