import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CommonCommonService} from '@config-app/services/common-common.service';
import {ApiService} from '../../../services/api.service';

@Component({
    selector: 'app-add-new-item-popup',
    templateUrl: './add-new-item-popup.component.html',
    styleUrls: ['./add-new-item-popup.component.scss']
})
export class AddNewItemPopupComponent {
    showloader = false

    constructor(public dialogRef: MatDialogRef<AddNewItemPopupComponent>,
                public commonService: CommonCommonService,
                public theme1ApiService: ApiService,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    actionClick(action) {
        this.dialogRef.close(action)
    }

    addRecord() {
        if (this.commonService.SectionValidationSystem(this.data.popupContent)) {
            switch (this.data.pageCode) {
                case 'KCC_LAND':
                    if (this.data.popupContent[1].sectionContent?.formValueEmitter) {
                        this.data.popupContent[1].sectionContent.formValueEmitter.next();
                    }
                    this.createOrupdateLand(this.data.popupContent[1].sectionContent)
                    break;
                case 'KCC_CROP':
                    if (this.data.popupContent[1].sectionContent?.formValueEmitter) {
                        this.data.popupContent[1].sectionContent.formValueEmitter.next();
                    }
                    this.createOrupdatecrop(this.data.popupContent[1].sectionContent)
                    break;
                case 'BRANCH_UPDATE':
                    this.branchUpdate()
                    break;
            }
        }
    }

    branchUpdate() {
        if (this.commonService.SectionValidationSystem(this.data.popupContent)) {
            this.data.popupContent[2].sectionContent.formValueEmitter.next();
            let params = {
                access_token: this.data.journey.product.access_token,
                loanUuid: this.data.journey.product.loanUuid,
                userHierarchyUnitCode: this.data.popupContent[2].sectionContent.formValue.branchCode,
                microservicetoken: this.data.journey.product.oauthAccessToken
            }
            this.theme1ApiService.assignUserHierarchy(params).then(_res => {
                this.theme1ApiService.assignParkingBranch(params).then(_res1 => {
                    this.dialogRef.close(
                        'DONE'
                    )
                })
            })
        }
    }

    createOrupdateLand(sectionContent) {
        this.showloader = true
        let params = {
            ...sectionContent.formValue,
            access_token: this.data.journey.product.access_token,
            loanUuid: this.data.journey.product.loanUuid,
            applicationSource: 'WEB_JOURNEY',
        }
        params = this.mapUUid(params, sectionContent)

        this.theme1ApiService.createLandDetails(params).then((res: any) => {
            this.closePopup(res)
        })
    }

    mapUUid(params, sectionContent) {
        if (sectionContent?.options?.mappingFields?.uuid) {
            params["uuid"] = sectionContent.options.mappingFields.uuid
        }
        return params
    }

    createOrupdatecrop(sectionContent) {
        this.showloader = true
        let params = {
            ...sectionContent.formValue,
            access_token: this.data.journey.product.access_token,
            loanUuid: this.data.journey.product.loanUuid,
            applicationSource: 'WEB_JOURNEY',
            category: 'crop'
        }
        params = this.mapUUid(params, sectionContent)
        this.theme1ApiService.createCropDetails(params).then((res: any) => {
            this.closePopup(res)
        })
    }

    closePopup(res) {
        if (res.code == '200') {
            this.dialogRef.close(
                this.data.popupContent[1].sectionContent.formValue
            )
        }
    }

    cancelRecord() {
        this.dialogRef.close()
    }
}
