import { Component, Injector, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AddNewItemPopupComponent } from '../../../../shared/components/add-new-item-popup/add-new-item-popup.component';
import { PopupComponent } from '../../../../shared/components/popup/popup.component';
import { cloneDeep } from '@kcc-ah-app/shared/utils/utils';
import { ApiService } from '@kcc-ah-app/services/api.service';
import { CommonCommonService } from '@kcc-ah-app/services/common-common.service';
import { CommonVariableService } from '@kcc-ah-app/services/common-variable-service';
import { LocalStorage } from '@kcc-ah-app/shared/helpers/localStorage';
import { SharedService } from '@kcc-ah-app/shared/services/utils/shared.service';
@Component({
  selector: 'app-add-more-page-details',
  templateUrl: './add-more-page-details.component.html',
  styleUrls: ['./add-more-page-details.component.scss']
})
export class AddMorePageDetailsComponent implements OnInit {
  journey
  config;
  metaConfig;
  selectedKcc;
  pageCode;
  showloader = false;
  isFacilityDetail;
  showBackButton=false;
  fetchDetailsCall: NodeJS.Timeout;
  fetchLand: NodeJS.Timeout;
  loaderMessage: string;
  localStorage: LocalStorage;
  dialog: MatDialog;
  route: ActivatedRoute;
  constructor(private router: Router, 
    public sharedService: SharedService, 
    public apiService: ApiService, 
    public commonService: CommonCommonService, 
    private injector: Injector,
    public commonVariableService: CommonVariableService) {
      this.dialog = this.injector.get<MatDialog>(MatDialog)
      this.route = this.injector.get<ActivatedRoute>(ActivatedRoute)
      this.localStorage = this.injector.get<LocalStorage>(LocalStorage)
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedKcc = params.get('show')
    })
    if(this.router.url.includes("kcc_crop")){
    this.showBackButton=true;
    }
    this.journey = this.commonService.getJourney()
    if (this.selectedKcc === 'kcc_land') {
      this.pageCode = (this.journey.metaData.capturedData.stpFlag=="STP") ? 'KCC_LAND_STP':'KCC_LAND_NSTP';
      this.commonService.bindHeaderFooterTypes("KCC_LAND")
      this.getLandList()
    } else if (this.selectedKcc === 'add-more-page') {
      this.pageCode = 'ADD_MORE_PAGE'
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.isFacilityDetail = true
    } else {
      this.pageCode = 'KCC_CROP'
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.getCropList();
    }

    this.CallBorrowerDetails();
   
    this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
  }

  SectionBuilderStatus($event) {
    if ($event.TriggerSection == 'TABLE') {
      if ($event.data.action.actionCode == 'FOOTER') {
        this.addRecord()
      }
      if ($event.data.action.actionCode == 'EDIT') {
        this.editRecord($event)
      }
      if ($event.data.action.actionCode == 'FACILITY') {
        this.faciltyClick()
      }
      if ($event.data.action.actionCode == 'CLOSE') {
        switch (this.pageCode) {
          case 'KCC_LAND_STP':
          case 'KCC_LAND_NSTP':
            this.deleteLandRecord($event)
            break;
          case 'KCC_CROP':
            this.deleteCropRecord($event)
            break;
        }
      }
    }

  }


  populateValues(value, kccInfo) {
    kccInfo.forEach(crop => {
      if (crop.componentType == 'FORM') {
        crop.sectionContent.options.mapSupplyData = true
        crop.sectionContent.options.mapAndDisable = false
        crop.sectionContent.options.mappingFields = value.data.record
      }
    })
  }
  addRecord() {
    let kccInfo;
    kccInfo = cloneDeep(this.metaConfig.addConfig)
    let dialogRef = this.dialog.open(AddNewItemPopupComponent, {
      panelClass: ['w-70', 'mob-w-100'],
      height: '70%',
      disableClose: true,
      role:"dialog",
      ariaLabel:"popup",
      data: {
        title: 'Add New Record',
        popupContent: this.commonService.ParseConfig(kccInfo),
        pageCode: this.pageCode,
        action: 'ADD',
        journey: this.journey,
        cropData: this.config[this.metaConfig.tableIndex].sectionContent.config.data
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result && result != '') {
        switch (this.pageCode) {
          case 'KCC_LAND_STP':
          case 'KCC_LAND_NSTP':
            this.getLandList(true)
            break;
          case 'KCC_CROP':
            this.getCropList()
            break;
        }

      }
    })
  }
  editRecord($event) {
    let kccInfo;
    kccInfo = cloneDeep(this.metaConfig.addConfig)
    if(this.pageCode == "KCC_LAND_NSTP"){
      $event.data.record.totalArea =  $event.data.record.areaInAcre + $event.data.record.unirrigatedAreaInAcre;
      $event.data.record.marketValue = $event.data.record.totalArea * $event.data.record.costPerAcre;
    }
    this.populateValues($event, kccInfo);
    let dialogRef = this.dialog.open(AddNewItemPopupComponent, {
      panelClass: ['w-70', 'mob-w-100'],
      height: '70%',
      disableClose: true,
      role:"dialog",
      ariaLabel:"popup",
      data: {
        title: 'Edit New Record',
        popupContent: kccInfo,
        pageCode: this.pageCode,
        action: 'EDIT',
        journey: this.journey,
        cropData: this.config[this.metaConfig.tableIndex].sectionContent.config.data
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result && result != '') {
        switch (this.pageCode) {
          case 'KCC_LAND_STP':
          case 'KCC_LAND_NSTP':
            this.getLandList()
            break;
          case 'KCC_CROP':
            this.getCropList()
            break;
        }

      }
    })
  }
  deleteCropRecord(formValue) {
    let params = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      uuid: formValue.data.record.uuid
    }
    this.apiService.deleteCropHolding(params).then((res: any) => {
      if (res.code == '200') {
        this.getCropList()
      }
    })
  }
  deleteLandRecord(formValue,deleteRecord?) {
    let params = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      uuid: deleteRecord == undefined ? formValue.data.record.uuid : formValue.uuid
    }
    this.apiService.deleteLandHolding(params).then((res: any) => {
      if (res.code == '200') {
        this.getLandList()
      }
    })
  }

  CallBorrowerDetails(){
    this.showloader = true
    let params = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      microservicetoken: this.journey.product.oauthAccessToken,

    }
    this.apiService.fetchBorrowerDetails(params).then((res: any) => {
      if(res.code == "200"){
        this.showloader = false
        this.metaConfig.addConfig[1].sectionContent.options.externalFeedDataforValidationJson = res.borrowerDetail.basicAddressOne
      } else {
        this.showloader = false
        this.sharedService.openSnackBar(res.message,'error',res.statusCode);
      }
    }, error => {
      this.sharedService.openSnackBar(error.message,'error',error.statusCode);
    })
  }


  getCropList() {
    let data = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      microservicetoken: this.journey.product.oauthAccessToken
    }
    this.apiService.fetchCropDetails(data).then((res: any) => {
      this.config[this.metaConfig.tableIndex].sectionContent.config.data = res.cropDetailList;
    })
  }
  getLandList(clickSave?) {
    this.showloader = true;
    let data = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
    }
    this.apiService.fetchLandHoldingDetails(data).then((res: any) => {
      if(this.journey.metaData.capturedData.stpFlag=="STP"){
        if(res.landholdingDetailsList.length != 0){
          if(res.landholdingDetailsList[res.landholdingDetailsList.length-1].status == "IN PROCESS"){
            if(clickSave){
              this.loaderMessage = "Fetching the land details. Please wait."
              this.fetchDetailsCall = setInterval(()=>{
                this.fetchLandDetailsWithAdvarick()
              },30000)
              this.fetchLand = setTimeout(()=> {
                clearInterval(this.fetchDetailsCall); 
                this.sharedService.openSnackBar('Unable to fetch Land Detail. Please try again')
                this.deleteLandRecord(res.landholdingDetailsList[res.landholdingDetailsList.length-1],false)
              },120000);
            }else{
              this.showloader = false;
              this.config[this.metaConfig.tableIndex].sectionContent.config.data = res.landholdingDetailsList;
            }
          }else{
            this.showloader = false;
            this.config[this.metaConfig.tableIndex].sectionContent.config.data = res.landholdingDetailsList;
          }
        }else{
          this.showloader = false;
          this.config[this.metaConfig.tableIndex].sectionContent.config.data = res.landholdingDetailsList;
        }
      }else{
        this.showloader = false;
        this.config[this.metaConfig.tableIndex].sectionContent.config.data = res.landholdingDetailsList;
      }
    })
  }
  fetchLandDetailsWithAdvarick(){
    let data = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
    }
    this.apiService.fetchLandHoldingDetails(data).then((resp: any) => {
      if (resp) {
        if(resp.landholdingDetailsList[resp.landholdingDetailsList.length-1].status == "COMPLETED"){
          this.showloader = false;
          clearInterval(this.fetchDetailsCall)
          clearTimeout(this.fetchLand)
          this.config[this.metaConfig.tableIndex].sectionContent.config.data = resp.landholdingDetailsList;
          this.localStorage.SessionSetItem('landDetails',resp.landholdingDetailsList)
        }
       }
    })
  } 
  getFacilityDetails() {
    let data = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      loanPurposeUuid: this.journey.product.loanPurposeUuid,
      microservicetoken: this.journey.product.oauthAccessToken
    }
    this.apiService.getFacilityDetails(data);
  }
  continue() {
    if (this.config[this.metaConfig.tableIndex].sectionContent.config.data.length > 0) { 
      if ((this.pageCode === 'KCC_LAND_NSTP')|| (this.pageCode === 'KCC_LAND_STP')) {
        this.commonService.proceedJourney('KCC_LAND', undefined, this.config)
        this.localStorage.SessionSetItem('landDetails',this.config[this.metaConfig.tableIndex].sectionContent.config.data)
        this.commonService.journeyEventsExecutor('KCC_LAND');
      } else if (this.pageCode === 'KCC_CROP') {
        this.commonService.proceedJourney(this.pageCode, undefined, this.config)
        this.commonService.journeyEventsExecutor('KCC_CROP');
      }
    } else {
      if ((this.pageCode === 'KCC_LAND_NSTP')|| (this.pageCode === 'KCC_LAND_STP')) {
        this.sharedService.openSnackBar('Please, Fill in the Land Details.');
      } else if (this.pageCode === 'KCC_CROP') {
        this.sharedService.openSnackBar('Please, Fill in the Crop Details.');
      }
    }



  }

  faciltyClick() {
    this.getFacilityList()
    let facilityInfo;
    facilityInfo = cloneDeep(this.metaConfig.facilityType.popupContent)
    let dialogRef = this.dialog.open(PopupComponent, {
      panelClass: ['w-50', 'mob-w-100'],
      height: '50%',
      disableClose: true,
      role:"dialog",
      ariaLabel:"popup",
      data: {
        title: 'Facility Type',
        popupContent: facilityInfo,
        pageCode: this.pageCode,
        //showBtns:true,
        actionItems: this.metaConfig.actionItems,
        journey: this.journey
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      this.selectedFacilityTypeList(result)
    })
  }

  getFacilityList() {
    let data = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      loanPurposeUuid: this.journey.product.loanPurposeUuid,
      applicationSource: 'WEB_JOURNEY',
      microservicetoken: this.journey.product.oauthAccessToken
    }
    this.apiService.facilityDetailsList(data);
  }
  selectedFacilityTypeList(result) {
    if (result && result.value) {
      let selectedFacilityVal = result.value.fetchFacilities.replaceAll(' ', '_')
      let facilityList;
      facilityList = cloneDeep(this.metaConfig[selectedFacilityVal].popupContent)
      let dialogRef = this.dialog.open(PopupComponent, {
        panelClass: ['w-80', 'mob-w-100'],
        height: '70%',
        disableClose: true,
        role:"dialog",
        ariaLabel:"popup",
        data: {
          title: this.metaConfig[selectedFacilityVal].title,
          popupContent: facilityList,
          pageCode: this.pageCode,
          //showBtns:true,
          actionItems: this.metaConfig.actionItems,
          journey: this.journey
        }
      })
      dialogRef.afterClosed().subscribe(() => {
        this.getFacilityDetails()
      })
    }
  }
  back(){
    this.router.navigateByUrl('/product-declaration/details/kcc_land');
  }
}

