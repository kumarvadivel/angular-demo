import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { ApiService } from '@kcc-ah-app/services/api.service';
import { CommonCommonService } from '@kcc-ah-app/services/common-common.service';
import { LocalStorage } from '@kcc-ah-app/shared/helpers/localStorage';
import { SharedService } from '@kcc-ah-app/shared/services/utils/shared.service';
import { find } from '@kcc-ah-app/shared/utils/utils';
import { EnvironmentService } from '@kcc-ah-environments/environment.service';

declare let Appice: any;
@Component({
  selector: 'app-add-new-item-popup',
  templateUrl: './add-new-item-popup.component.html',
  styleUrls: ['./add-new-item-popup.component.scss']
})
export class AddNewItemPopupComponent implements OnInit {
  showloader = false
  totalAcres: number;
  cropList: any;
  journey;
  constructor(public dialogRef: MatDialogRef<AddNewItemPopupComponent>,
    public sharedService: SharedService,
    public commonService: CommonCommonService,
    public theme1ApiService: ApiService,
    public localStorage: LocalStorage,
    public envService: EnvironmentService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.journey = this.commonService.getJourney()
  }

  ngOnInit(): void {
    this.cropList = [...this.data.cropData]
  }

  actionClick(action) {
    this.dialogRef.close(action)
  }

  addRecord() {
    if (this.commonService.SectionValidationSystem(this.data.popupContent)) {
      switch (this.data.pageCode) {
        case 'KCC_LAND_STP':
          if (this.data.popupContent[1].sectionContent && this.data.popupContent[1].sectionContent.formValueEmitter) {
            this.data.popupContent[1].sectionContent.formValueEmitter.next();
          }
          this.checkLandRecord(this.data.popupContent[1].sectionContent)
          break;
        case 'KCC_LAND_NSTP':
          if (this.data.popupContent[1].sectionContent && this.data.popupContent[1].sectionContent.formValueEmitter) {
            this.data.popupContent[1].sectionContent.formValueEmitter.next();
          }
          this.createOrupdateLand(this.data.popupContent[1].sectionContent)
          break;
        case 'KCC_CROP':
          this.addRecordKccCrop();

          break;
      }
    }
  }

  addRecordKccCrop() {
    if (this.data.popupContent[1].sectionContent && this.data.popupContent[1].sectionContent.formValueEmitter) {
      this.data.popupContent[1].sectionContent.formValueEmitter.next();
    }
    this.totalAcres = 0;
    let landDetailsData = this.localStorage.SessionGetItem('landDetails');

    if (this.journey.metaData.capturedData.stpFlag == "NSTP") {
      landDetailsData.forEach(item => {
        this.totalAcres = this.totalAcres + (item.areaInAcre + item.unirrigatedAreaInAcre)
      })
      this.cropList.push(this.data.popupContent[1].sectionContent.formValue)
      this.validateCrop(this.data.popupContent[1].sectionContent.formValue)
    } else {
      landDetailsData.forEach(item => {
        this.totalAcres = this.totalAcres + item.areaInAcre
      })
      this.cropList.push(this.data.popupContent[1].sectionContent.formValue)
      this.validateCrop(this.data.popupContent[1].sectionContent.formValue)
    }
  }

  validateCropRate(crop) {
    let totalCrop = 0;
    crop.forEach((item) => {
      totalCrop = totalCrop + Number(item.irrigatedAreaInAcre) + Number(item.unIrrigatedAreaInAcre)
    });
    if (totalCrop > this.totalAcres) {
      this.sharedService.openSnackBar(
        'Total crop area should not exceed ' + this.totalAcres
      );
      this.cropList.pop(this.data.popupContent[1].sectionContent.formValue)
    } else {
      this.createOrupdatecrop(this.data.popupContent[1].sectionContent)
    }
  }

  validateCrop(item) {
    switch (item.season) {
      case 'Rabi':
        let Rabicrop = this.cropList.filter(item_temp => item_temp.season == 'Rabi')
        this.validateCropRate(Rabicrop);
        break;
      case 'Kharif':
        let Kharifcrop = this.cropList.filter(item_Kharif => item_Kharif.season == 'Kharif')
        this.validateCropRate(Kharifcrop);
        break;

      case 'Summer':
        let SummerCrop = this.cropList.filter(item_Summer => item_Summer.season == 'Summer')
        this.validateCropRate(SummerCrop);
        break;

      case 'Perennial':
        let PerennialCrop = this.cropList.filter(item_Per => item_Per.season == 'Perennial')
        this.validateCropRate(PerennialCrop);
        break;
    }
  }

  KCCAddLandSubmit() {
    if (this.envService.config?.appConfig?.appice) {
      let prop = { Submit: 'True' }
      let obj = { key: 'KCCAddLand&CropInfo', properties: prop }
      try {
        if(typeof Appice != 'undefined'){
          Appice.recordEvent({ key: obj.key, segment: obj.properties });
        }
      } catch (e) {

      }
    }
  }

  KCCAddLandError(msg) {
    if (this.envService.config?.appConfig?.appice) {
      let prop = { Submit: 'False', FailureMessage: msg.code }
      let obj = { key: 'KCCAddLand&CropInfo', properties: prop }
      try {
        if(typeof Appice != 'undefined'){
          Appice.recordEvent({ key: obj.key, segment: obj.properties });
        }
      } catch (e) {

      }
    }
  }

  KCCAddLandApiError(err) {
    if (this.envService.config?.appConfig?.appice) {
      let prop = { Submit: 'False', FailureMessage: err.statusCode }
      let obj = { key: 'KCCAddLand&CropInfo', properties: prop }
      try {
        if(typeof Appice != 'undefined'){
          Appice.recordEvent({ key: obj.key, segment: obj.properties });
        }
      } catch (e) {

      }
    }
  }

  ApiSuccess(res){
    if (res.code == '200') {
      this.dialogRef.close(
        this.data.popupContent[1].sectionContent.formValue
      )
      this.KCCAddLandSubmit();
    } else {
      this.KCCAddLandError(res);
    }
  }

  createOrupdateLand(sectionContent) {
    this.showloader = true
    let params = {
      ...sectionContent.formValue,
      access_token: this.data.journey.product.access_token,
      loanUuid: this.data.journey.product.loanUuid,
      applicationSource: 'WEB_JOURNEY',
      category: 'crop'
    }
    if (sectionContent && sectionContent.options && sectionContent.options.mappingFields && sectionContent.options.mappingFields.uuid) {
      params["uuid"] = sectionContent.options.mappingFields.uuid
    }
    this.theme1ApiService.createLandDetails(params).then((res: any) => {
      this.ApiSuccess(res);
    }, error => {
      this.KCCAddLandApiError(error);
    })
  }
  checkLandRecord(sectionContent) {
    this.showloader = true;
    let params = {
      ...sectionContent.formValue,
      access_token: this.data.journey.product.access_token,
      loanUuid: this.data.journey.product.loanUuid,
      microservicetoken:this.journey.product.oauthAccessToken
    }
    let arr = ["stateid", "districtid", "tehsilid", "villageid", "surveyid", "subSurveyNo"]
    sectionContent.fields.forEach((obj, index) => {
      let optionObj = find(obj.options, { optionName: obj.value });
      params[arr[index]] = optionObj ? optionObj.optionCode : '';
      if (obj.fieldName == 'state' || obj.fieldName == 'district') {
        params[obj.fieldName] = params[obj.fieldName].toUpperCase();
      }
    });
    if (sectionContent && sectionContent.options && sectionContent.options.mappingFields && sectionContent.options.mappingFields.uuid) {
      params["uuid"] = sectionContent.options.mappingFields.uuid
    }
    this.theme1ApiService.checkLandRecord(params).then((res: any) => {
      if (res.status_code == '200') {
        this.dialogRef.close(
          this.data.popupContent[1].sectionContent.formValue
        )
        this.KCCAddLandSubmit();
      } else {
        this.sharedService.openSnackBar(
          res.status_message,
          'error',
          res.status_code
        );
        this.KCCAddLandError(res)
      }
    }, (error) => {
      this.KCCAddLandApiError(error);
      this.sharedService.openSnackBar(
        error.message,
        'error',
        error.statusCode
      );
    })
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
    if (sectionContent && sectionContent.options && sectionContent.options.mappingFields && sectionContent.options.mappingFields.uuid) {
      params["uuid"] = sectionContent.options.mappingFields.uuid
    }
    this.theme1ApiService.createCropDetails(params).then((res: any) => {
      this.ApiSuccess(res);
    }, error => {
      this.KCCAddLandApiError(error);
    })
  }
  cancelRecord() {
    this.dialogRef.close()
  }

}
