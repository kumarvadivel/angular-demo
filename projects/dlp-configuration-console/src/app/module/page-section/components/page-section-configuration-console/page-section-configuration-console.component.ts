import { Component, OnInit } from '@angular/core';
import { CommonCommonService } from '@config-app/services/common-common.service';
import { componentTypes, configurationFields, sampleconfig, section_base_configs,importPopupPageSection } from '../../shared/pageSectionConfig';
import { SharedService } from '@config-app/shared/services/utils/shared.service';
import { Subject } from 'rxjs';
import { DropResult } from 'ynt-smooth-dnd';
import {MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '@config-app/shared/components/popup/popup.component';

@Component({
  selector: 'app-page-section-configuration-console',
  templateUrl: './page-section-configuration-console.component.html',
  styleUrls: ['./page-section-configuration-console.component.scss']
})
export class PageSectionConfigurationConsoleComponent implements OnInit {

  config = sampleconfig
  componentTypes = componentTypes
  previewconfig:any = []
  previewRefresh = new Subject<void>()
  currentSection:any = null
  sectionConfigurationfields = null
  currentSectionConfiguredConfig:any ={}
  isCurrentSectionisOnPreview = false
  mainConfig = []
  formSectionMeta:any = {
    refresh:new Subject()
  }
  constructor(private commonService:CommonCommonService,
    private sharedService:SharedService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    // this.currentSection = JSON.parse(JSON.stringify(section_base_configs['FORM']))
    // this.sectionConfigurationfields = this.commonService.ParseConfig(JSON.parse(JSON.stringify(configurationFields["FORM"])))
    // this.mainConfig.push(this.currentSection)
  }

  SelectSection(component){
    this.isCurrentSectionisOnPreview = false
    this.currentSection = JSON.parse(JSON.stringify(section_base_configs[component]))
    this.sectionConfigurationfields = this.commonService.ParseConfig(JSON.parse(JSON.stringify(configurationFields[component])))
  }

  submitSection(){
      if(this.commonService.sectionValidationSystem(this.sectionConfigurationfields)){
        if(this.currentSection){
          this.isCurrentSectionisOnPreview = true
          switch(this.currentSection.componentType){
            case 'TITLE':
              this.currentSection.sectionContent.titleData = this.sectionConfigurationfields[0].sectionContent.formValue.titleData
              this.currentSection.sectionContent.isShow = this.sectionConfigurationfields[0].sectionContent.formValue.isShow
              this.currentSection.className = this.sectionConfigurationfields[0].sectionContent.formValue.className
            break;
            case 'PARAGRAPH':
              this.currentSection.sectionContent.paragraphData = this.sectionConfigurationfields[0].sectionContent.formValue.paragraphData
              this.currentSection.sectionContent.isShow = this.sectionConfigurationfields[0].sectionContent.formValue.isShow
              this.currentSection.className = this.sectionConfigurationfields[0].sectionContent.formValue.className
            break;
            case 'CONSENT':
              this.currentSection.sectionContent.config.options[0].consentType = this.sectionConfigurationfields[0].sectionContent.formValue.consentType
              this.currentSection.sectionContent.config.options[0].consentCode = this.sectionConfigurationfields[0].sectionContent.formValue.consentCode
              this.currentSection.sectionContent.config.options[0].label = this.sectionConfigurationfields[0].sectionContent.formValue.label
              this.currentSection.sectionContent.config.options[0].submitConsentCodes = this.sectionConfigurationfields[0].sectionContent.formValue.submitConsentCode?.split(",") 
              this.currentSection.sectionContent.isShow = this.sectionConfigurationfields[0].sectionContent.formValue.isShow
              this.currentSection.mandatory = this.sectionConfigurationfields[0].sectionContent.formValue.mandatory
              this.currentSection.className = this.sectionConfigurationfields[0].sectionContent.formValue.className
            break;
            case 'CAPCHA':
              this.currentSection.sectionContent.isShow = this.sectionConfigurationfields[0].sectionContent.formValue.isShow
              this.currentSection.className = this.sectionConfigurationfields[0].sectionContent.formValue.className
            break;
            case 'OTP':
              this.currentSection.sectionContent.isShow = this.sectionConfigurationfields[0].sectionContent.formValue.isShow
              this.currentSection.sectionContent.fields.otpType = this.sectionConfigurationfields[0].sectionContent.formValue.OtpType
              this.currentSection.sectionContent.fields.fieldLabel = this.sectionConfigurationfields[0].sectionContent.formValue.fieldLabel
              this.currentSection.sectionContent.fields.length = this.sectionConfigurationfields[0].sectionContent.formValue.Length
              this.currentSection.sectionContent.fields.otpAttempts = this.sectionConfigurationfields[0].sectionContent.formValue.otpAttempts
              this.currentSection.sectionContent.fields.info = this.sectionConfigurationfields[0].sectionContent.formValue.info
            break;
            case 'HTML_CONTENT':
              this.currentSection.sectionContent.htmlData = this.sectionConfigurationfields[0].sectionContent.formValue.htmlData
              this.currentSection.sectionContent.isShow = this.sectionConfigurationfields[0].sectionContent.formValue.isShow
              this.currentSection.className = this.sectionConfigurationfields[0].sectionContent.formValue.className
            break;
            case 'ORDERED_LIST':
              this.currentSection.sectionContent.listItem = this.sectionConfigurationfields[0].sectionContent.formValue.listItems.filter(item => item.hasOwnProperty('listItem')).map(item => item.listItem);
              this.currentSection.sectionContent.isShow = this.sectionConfigurationfields[0].sectionContent.formValue.isShow
              this.currentSection.className = this.sectionConfigurationfields[0].sectionContent.formValue.className
            break;
            case 'BUTTON':
              this.currentSection.sectionContent.label = this.sectionConfigurationfields[0].sectionContent.formValue.label
              this.currentSection.sectionContent.actionId = this.sectionConfigurationfields[0].sectionContent.formValue.actionId
              this.currentSection.sectionContent.isShow = this.sectionConfigurationfields[0].sectionContent.formValue.isShow
              this.currentSection.sectionContent.className = this.sectionConfigurationfields[0].sectionContent.formValue.className
            break;
            case 'TABLE':
              this.currentSection.sectionContent.config.title = this.sectionConfigurationfields[0].sectionContent.formValue.title
              this.currentSection.sectionContent.config.showRecordActions = this.sectionConfigurationfields[0].sectionContent.formValue.showRecordActions
              this.currentSection.sectionContent.config.showSerialNo = this.sectionConfigurationfields[0].sectionContent.formValue.showSerialNo
              this.currentSection.sectionContent.config.showFooterAction = this.sectionConfigurationfields[0].sectionContent.formValue.showFooterAction
              this.currentSection.sectionContent.config.showFooterCalculations = this.sectionConfigurationfields[0].sectionContent.formValue.showFooterCalculations
              this.currentSection.sectionContent.config.showHeaders = this.sectionConfigurationfields[0].sectionContent.formValue.showHeaders
              this.currentSection.sectionContent.config.footerActionLabel = this.sectionConfigurationfields[0].sectionContent.formValue.footerActionLabel
              this.currentSection.sectionContent.config.headers = this.sectionConfigurationfields[0].sectionContent.formValue.headers              
              this.currentSection.sectionContent.config.recordActions = this.sectionConfigurationfields[0].sectionContent.formValue.actions.map(action=>{
                let temp:any = {}
                switch(action.action){
                  case 'ACCEPT':
                    temp.name = "Accept"
                    temp.icon = '/assets/icons/green-tick.png'
                  break;
                  case 'EDIT':
                    temp.name = "Edit"
                    temp.icon = '/assets/icons/edit.png'
                  break;
                  case 'DELETE':
                    temp.name = "Delete"
                    temp.icon = '/assets/icons/delete.png'
                  break;
                }
                temp.actionCode = action.action
                return temp
              })
              this.currentSection.sectionContent.config.data = []
              this.currentSection.sectionContent.isShow = this.sectionConfigurationfields[0].sectionContent.formValue.isShow
              this.currentSection.sectionContent.className = this.sectionConfigurationfields[0].sectionContent.formValue.className
            break;
            case 'CHART':
              this.currentSection.sectionContent.isShow = this.sectionConfigurationfields[0].sectionContent.formValue.isShow
              this.currentSection.sectionContent.className = this.sectionConfigurationfields[0].sectionContent.formValue.className
              if(this.sectionConfigurationfields[0].sectionContent.formValue?.isShowDataCenter==true){
                this.currentSection.sectionContent.config['centerData']= this.sectionConfigurationfields[0].sectionContent.formValue.centerData
              }
              this.currentSection.sectionContent.config.data = this.sectionConfigurationfields[0].sectionContent.formValue.data
            break;
          }
          this.mainConfig.push(this.currentSection)
          this.previewRefresh.next()
          this.currentSection=null
        }
      }
   
    
  }

  configurationFieldEmitter($event){
    if($event.TriggerSection=='BUTTON'){
      if($event.data =='ADD_GROUP'){
        if(this.sectionConfigurationfields[3].sectionContent.formValue){
          let pushobj = this.sectionConfigurationfields[3].sectionContent.formValue
          pushobj['optionKey']=pushobj['groupName']
          pushobj['optionName']=pushobj['groupName']
           if(this.formSectionMeta.groups){
            this.formSectionMeta.groups.push(pushobj)
           }else{
            this.formSectionMeta['groups'] = []
            this.formSectionMeta.groups.push(pushobj)
          }
          this.sectionConfigurationfields[6].sectionContent.fields[12].options=this.formSectionMeta.groups
          this.sectionConfigurationfields[6].sectionContent.fields[12].searchoption=this.formSectionMeta.groups
          this.commonService.resetFormSectionValues(this.sectionConfigurationfields[3])
          this.sharedService.openSnackBar("group Added Successfully!!")
        }
      }
      if($event.data=='ADD_FIELD'){
        this.bindFieldData()
      }
    }

    // if($event.TriggerSection=='FORM' && this.currentSection.componentType=='FORM'){
    //   this.currentSection.sectionContent.isShow = this.sectionConfigurationfields[0].sectionContent.formValue.isShow
    //   this.currentSection.sectionContent.options = {...this.sectionConfigurationfields[0].sectionContent.formValue}
    // }
  }

  bindFieldData(){
    this.sectionConfigurationfields[6].sectionContent.validityEmitter.next()
    this.sectionConfigurationfields[6].sectionContent.formValueEmitter.next()
    if(this.commonService.sectionValidationSystem([this.sectionConfigurationfields[6]])){
      this.currentSection.sectionContent.options = {...this.sectionConfigurationfields[0].sectionContent.formValue}
      let fieldData = this.sectionConfigurationfields[6].sectionContent.formValue
      fieldData['groupIndex'] = this.formSectionMeta.groups.find(f=>f.groupName==fieldData.groupName).groupIndex
      fieldData['showField'] = true
      fieldData['validationJson'] = JSON.parse(fieldData.validationJson)
      if(fieldData['placeholderText']==null)  fieldData['placeholderText']=""
      switch(fieldData.fieldDataType){

        case 'TABLE':
          //parse the table data
          fieldData.tableFields = JSON.parse(fieldData.tableFields)
          if(fieldData.validateRowBeforeAdd==false) delete fieldData.validateRowBeforeAdd
          //add extra keys for row actions
          fieldData.tableRowActions.forEach(tf=>{
            switch(tf.actionCode){
              case 'ACCEPT':
                tf["icon"]= "check",
                tf["className"]= "clr-green",
                tf["isDisplay"]= true
              break;
              case 'EDIT':
                tf["icon"]= "edit",
                tf["className"]= "clr-blue",
                tf["isDisplay"]= false
              break;
              case 'DELETE':
                tf["icon"]= "delete",
                tf["className"]= "clr-red",
                tf["isDisplay"]= true
              break;
            }
          })
          fieldData.value = []
        break;
      }





      this.currentSection.sectionContent.fields.push(fieldData)
      this.mainConfig[0]={...this.currentSection}
      this.mainConfig = [...this.mainConfig]
      this.previewRefresh.next()
    }
  }

  addSection(){
    if(this.currentSection.componentType!='FORM'){
     // this.mainConfig.push(this.currentSection)
      this.isCurrentSectionisOnPreview=false
    }
    this.currentSection = null
  }

  clearConfig(){
    this.previewconfig = []
    this.mainConfig = []
  }

  exportConfig(){
    navigator.clipboard.writeText(JSON.stringify(this.mainConfig))
  }

  onsectionDrop(dropResult:DropResult){
    this.mainConfig = this.applyDrag(this.mainConfig, dropResult);

  }
  deleteSection(index){
    this.mainConfig.splice(index,1)
    this.previewRefresh.next()
  }

  importConfig(){
    let dialogRef = this.dialog.open(PopupComponent, {
      panelClass: ['w-50', 'mob-w-100'],
      height: '60%',
      disableClose: true,
      data: {
          title: 'Import Config',
          popupContent: JSON.parse(JSON.stringify(importPopupPageSection)),
          showBtns: true,
        
      }
  })
  dialogRef.afterClosed().subscribe(result => {
      if (result.action == "submit") {
        this.parseImportData(result.config)
      }
  })
  }

  parseImportData(config){
    try{
     this.mainConfig = JSON.parse(config[0].sectionContent.formValue.pageSectionConfig)
    }catch(e){
      this.showError()
    }
    }

    showError(){
      this.sharedService.openSnackBar("invalid page section data")
  
    }
  applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;
  
    const result = [...arr];
    let itemToAdd = payload;
  
    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }
  
    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd);
    }
  
    return result;
  };
}
