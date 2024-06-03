import { Component, Inject, Injector, OnInit } from '@angular/core';
import { MatDialogRef,  MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CommonCommonService } from '@msme-app/services/common-common.service';
import { ApiService } from '../../../services/api.service';
import { SharedService } from "../../../shared/services/utils/shared.service";
import { AddNewItemPopupComponent } from '../add-new-item-popup/add-new-item-popup.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit{

  closeAble = true;
  value;
  journey
  securityDetailList: any;
  private dialog: MatDialog

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
    public commonService:CommonCommonService,
    public theme1ApiService:ApiService,
    public sharedService:SharedService,
    private injector: Injector,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
    this.data.popupContent = this.commonService.ParseConfig(this.data.popupContent);
    this.journey = this.commonService.getJourney()
    this.dialog = this.injector.get<MatDialog>(MatDialog)
    }

  ngOnInit(): void {
    this.data.popupContent = this.commonService.ParseConfig(this.data.popupContent);
    this.securityDetailList = this.data.popupContent[0].sectionContent.options?.mappingFields?.loanApplicationTableVariable2;
  }
  

  actionClick(action){
    let data:any;
    if(this.data?.validate){
      if(action == 'submit'){
        this.actionClickOfSubmit(action)
      } else {
        data = {
          action: action,
          value: this.value
        }
        this.dialogRef.close(data)
      }
    } else {
      data = {
        action: action,
        value: this.value
      }
      this.dialogRef.close(data)
    }
  }

  actionClickOfSubmit(action){
    if (this.commonService.SectionValidationSystem(this.data.popupContent)) {
      if(this.data.code == "CC"){
        if(this.data.popupContent[0].sectionContent.formValue.requestedLimit > this.data.popupContent[0].sectionContent.options?.externalFeedDataforValidationJson?.fetchEligibilityDetails.output.assessmentEligibility.ccEligibilityRound){
          this.openNewCcSectionPopup(action)
        } else {
          this.actionActivity(action)
        }
      } else {
        this.actionActivity(action)
      }
    }
  }

  selectedValue($event){
    this.value = $event.formValue
    if ($event.TriggerSection == "FORM") {
      this.tableTigger($event);
    }
  }

  actionActivity(action){
    let data:any;
    if(this.data.flowAction == "create") {
      this.createFacility(action)
    } else if (this.data.flowAction == "update") {
      this.updateFacility(action)
    } else {
      data = { 
        action: action,
        value: this.value
      }
      this.dialogRef.close(data)
    }
  }

  createFacility(action){

    let cloudData = this.commonService.fetchDataCloud(this.data.submitFlow, this.data.popupContent);
    let params = this.commonService.mapDataFromCloudParameter(this.data.submitFlow, cloudData)

  
    this.theme1ApiService.submitFacilityDetails(params).then((res:any)=>{
      this.functionCall(res,action)
    },(err)=>{
      this.sharedService.openSnackBar(err.message)
    })



  }

  updateFacility(action){
    let cloudData = this.commonService.fetchDataCloud(this.data.submitFlow, this.data.popupContent);
    let params = this.commonService.mapDataFromCloudParameter(this.data.submitFlow, cloudData)

    params["loanFacilityUuid"] = this.data.popupContent[0].sectionContent.options.mappingFields.loanFacilityUuid;
    params["uuid"] = this.data.popupContent[0].sectionContent.options.mappingFields.uuid;
  
    this.theme1ApiService.updateFacilityDetails(params).then((res:any)=>{
      this.functionCall(res,action)
    },(err)=>{
      this.sharedService.openSnackBar(err.message)
    })
  }

  functionCall(res,action){
     if(res.code=='200'){
        let data = { 
          action: action,
          value: this.value
        }
        this.dialogRef.close(data)
      } else {
        this.sharedService.openSnackBar(res.message)
      }
  }

  tableTigger(event){
    if(event.data?.eventType=='TABLE_ACCEPT'){
      if(event.data?.field?.field?.fieldName=='loanApplicationTableVariable2'){
        if(event.data?.field.field.rowActionData[event.data?.field.index].rowBinded){
          //submit
          this.submitSecurityDetails(event.data?.field.field.value[event.data?.field.index])
        }else{
          //edit
          this.editSecurityDetails(event.data?.field.field.value[event.data?.field.index],event.data?.field.index)
        }
      }
    }
  
    if(event.data?.eventType=='TABLE_DELETE'){
      this.deleteSecurityDetails(event.data?.field.index)
    }
  }
  
   //------------------------------custom/other methods and varaible should be writtern down below this line------------------
  
  
   updateSecurityDetailsMethod(resp){
    if(resp.code=='200'){
      this.securityDetailList = resp.securityDetailList;
    }else{
      this.sharedService.openSnackBar(resp.message)
    }
  }
  
   submitSecurityDetails(tableData){
    let facilityUuid;
    if(this.data.flowAction == "create"){
      this.journey.metaData.capturedData.fetchMultiFacilityList.responseAttr.multiFacilities.forEach(mulf=>{
        if(mulf.description === 'Cash Credit'){
          facilityUuid = mulf.uuid
        }
      });
    }

    if(this.data.flowAction == "update"){
      facilityUuid = this.data.popupContent[0].sectionContent.options.mappingFields.loanFacilityUuid;
    }

    let params = {
      loanFacilityUuid : facilityUuid,
      loanUuid:this.journey.product.loanUuid,
      access_token:this.journey.product.access_token,
      type:"PRIMARY",
      securityType:tableData[0].value,
      description:tableData[1].value,
      basisValuation:"STOCK / BOOK DEBT STATEMENT",
      valuationAmount:tableData[2].value,
    }
    this.theme1ApiService.submitSecurityDetails(params).then((res:any)=>{
      this.updateSecurityDetailsMethod(res);
    },(err)=>{
      this.sharedService.openSnackBar(err.message)
    })
  }
  
  editSecurityDetails(tableData,indexVal){
    let params = this.securityDetailList[indexVal];
    params["access_token"] = this.journey.product.access_token;
    params["securityType"] = tableData[0].value;
    params["description"] = tableData[1].value;
    params["basisValuation"] = "STOCK / BOOK DEBT STATEMENT";
    params["valuationAmount"] = tableData[2].value;
  
    this.theme1ApiService.updateSecurityDetails(params).then((res:any)=>{
      this.updateSecurityDetailsMethod(res);
    },(err)=>{
      this.sharedService.openSnackBar(err.message)
    })
  
  }
  
  deleteSecurityDetails(indexVal){
    if(this.securityDetailList[indexVal]){
      let params = {
        loanUuid:this.journey.product.loanUuid,
        access_token:this.journey.product.access_token,
        type:"PRIMARY",
        uuid: this.securityDetailList[indexVal].uuid
      }
      this.theme1ApiService.deleteSecurityDetails(params).then((res:any)=>{
        this.updateSecurityDetailsMethod(res);
      },(err)=>{
        this.sharedService.openSnackBar(err.message)
      })
    }
  }


  openNewCcSectionPopup(action) {
    let dialogRef = this.dialog.open(AddNewItemPopupComponent, {
      panelClass: ['w-30', 'mob-w-100'],
      height: '20%',
      disableClose: true,
      role: "dialog",
      ariaLabel: "Sanction Section",
      data: {
        popupContent: this.data.newCcPopupConfig,
        hideTitle: true,
        showBtns: false,
        journey: this.journey,
        actionItems: [{ actionKey: true, actionLabel: 'No' }, { actionKey: true, actionLabel: 'Yes' }],
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result.actionLabel == "Yes"){
        this.actionActivity(action)
      }
      if(result.actionLabel == "No"){
        let data = { 
          action: "cancel",
          value: this.value
        }
        this.dialogRef.close(data)
      }
    })
  }


}
