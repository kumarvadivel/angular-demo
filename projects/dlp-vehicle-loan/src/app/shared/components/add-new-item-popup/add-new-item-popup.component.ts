import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CommonCommonService} from '@vl-app/services/common-common.service';
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
            if(this.data.pageCode == 'BRANCH_UPDATE') {
                    this.branchUpdate()
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

    mapUUid(params, sectionContent) {
        if (sectionContent?.options?.mappingFields?.uuid) {
            params["uuid"] = sectionContent.options.mappingFields.uuid
        }
        return params
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
