import { Component, OnInit, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonCommonService } from '@el-app/services/common-common.service';
import { ApiService } from '@el-app/services/api.service';
import { SharedService } from '@el-app/shared/services/shared.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  closeAble = true;
  value;
  journey
  securityDetailList: any;

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
    public commonService: CommonCommonService,
    public theme1ApiService: ApiService,
    public sharedService: SharedService,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.data.popupContent = this.commonService.ParseConfig(this.data.popupContent);
    this.journey = this.commonService.getJourney()
  }

  ngOnInit(): void {
    this.data.popupContent = this.commonService.ParseConfig(this.data.popupContent);
    this.securityDetailList = this.data.popupContent[0].sectionContent.options?.mappingFields?.loanApplicationTableVariable2;
  }


  actionClick(action) {
    if (this.data?.validate) {
      if (action == 'submit') {
        if (this.commonService.SectionValidationSystem(this.data.popupContent)) {
          if (this.data.flowAction == "create") {
            this.createFacility(action)
          } else if (this.data.flowAction == "update") {
            this.updateFacility(action)
          } else {
            var data = {
              action: action,
              value: this.value
            }
            this.dialogRef.close(data)
          }
        }
      } else {
        var data = {
          action: action,
          value: this.value
        }
        this.dialogRef.close(data)
      }
    } else {
      var data = {
        action: action,
        value: this.value
      }
      this.dialogRef.close(data)
    }
  }

  selectedValue($event) {
    this.value = $event.formValue
    if ($event.TriggerSection == "FORM") {
      this.tableTigger($event);
    }
  }

  createFacility(action) {

    let cloudData = this.commonService.fetchDataCloud(this.data.submitFlow, this.data.popupContent);
    let params = this.commonService.mapDataFromCloudParameter(this.data.submitFlow, cloudData)

    this.theme1ApiService.submitFacilityDetails(params).then((res: any) => {
      if (res.code == '200') {
        var data = {
          action: action,
          value: this.value
        }
        this.dialogRef.close(data)
      } else {
        this.sharedService.openSnackBar(res.message)
      }
    }, (err) => {
      this.sharedService.openSnackBar(err.message)
    })



  }

  updateFacility(action) {
    let cloudData = this.commonService.fetchDataCloud(this.data.submitFlow, this.data.popupContent);
    let params = this.commonService.mapDataFromCloudParameter(this.data.submitFlow, cloudData)

    params["loanFacilityUuid"] = this.data.popupContent[0].sectionContent.options.mappingFields.loanFacilityUuid;
    params["uuid"] = this.data.popupContent[0].sectionContent.options.mappingFields.uuid;

    this.theme1ApiService.updateFacilityDetails(params).then((res: any) => {
      if (res.code == '200') {
        var data = {
          action: action,
          value: this.value
        }
        this.dialogRef.close(data)
      } else {
        this.sharedService.openSnackBar(res.message)
      }
    }, (err) => {
      this.sharedService.openSnackBar(err.message)
    })
  }

  tableTigger(event) {
    if (event.data?.eventType == 'TABLE_ACCEPT') {
      if (event.data?.field?.field?.fieldName == 'loanApplicationTableVariable2') {
        if (event.data?.field.field.rowActionData[event.data?.field.index].rowBinded) {
          //submit
          this.submitSecurityDetails(event.data?.field.field.value[event.data?.field.index])
        } else {
          //edit
          this.editSecurityDetails(event.data?.field.field.value[event.data?.field.index], event.data?.field.index)
        }
      }
    }

    if (event.data?.eventType == 'TABLE_DELETE') {
      this.deleteSecurityDetails(event.data?.field.index)
    }
  }

  //------------------------------custom/other methods and varaible should be writtern down below this line------------------


  updateSecurityDetailsMethod(resp) {
    if (resp.code == '200') {
      this.securityDetailList = resp.securityDetailList;
    } else {
      this.sharedService.openSnackBar(resp.message)
    }
  }

  submitSecurityDetails(tableData) {
    let facilityUuid;
    if (this.data.flowAction == "create") {
      this.journey.metaData.capturedData.fetchMultiFacilityList.responseAttr.multiFacilities.forEach(mulf => {
        if (mulf.description === 'Cash Credit') {
          facilityUuid = mulf.uuid
        }
      });
    }

    if (this.data.flowAction == "update") {
      facilityUuid = this.data.popupContent[0].sectionContent.options.mappingFields.loanFacilityUuid;
    }

    let params = {
      loanFacilityUuid: facilityUuid,
      loanUuid: this.journey.product.loanUuid,
      access_token: this.journey.product.access_token,
      type: "PRIMARY",
      securityType: tableData[0].value,
      description: tableData[1].value,
      basisValuation: "STOCK / BOOK DEBT STATEMENT",
      valuationAmount: tableData[3].value,
    }
    this.theme1ApiService.submitSecurityDetails(params).then((res: any) => {
      this.updateSecurityDetailsMethod(res);
    }, (err) => {
      this.sharedService.openSnackBar(err.message)
    })
  }

  editSecurityDetails(tableData, indexVal) {
    let params = this.securityDetailList[indexVal];
    params["access_token"] = this.journey.product.access_token;
    params["securityType"] = tableData[0].value;
    params["description"] = tableData[1].value;
    params["basisValuation"] = "STOCK / BOOK DEBT STATEMENT";
    params["valuationAmount"] = tableData[2].value;

    this.theme1ApiService.updateSecurityDetails(params).then((res: any) => {
      this.updateSecurityDetailsMethod(res);
    }, (err) => {
      this.sharedService.openSnackBar(err.message)
    })

  }

  deleteSecurityDetails(indexVal) {
    if (this.securityDetailList[indexVal]) {
      let params = {
        loanUuid: this.journey.product.loanUuid,
        access_token: this.journey.product.access_token,
        type: "PRIMARY",
        uuid: this.securityDetailList[indexVal].uuid
      }
      this.theme1ApiService.deleteSecurityDetails(params).then((res: any) => {
        this.updateSecurityDetailsMethod(res);
      }, (err) => {
        this.sharedService.openSnackBar(err.message)
      })
    }
  }
}
