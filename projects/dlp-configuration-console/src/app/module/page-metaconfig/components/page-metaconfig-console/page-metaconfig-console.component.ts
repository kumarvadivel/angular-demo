import { Component, OnInit } from '@angular/core';
import { importPopupPageSection, pageSectionConfig, pageSectionConfig_datascopefetchflow, pageSectionConfig_formSubmitflow, pageSectionConfig_prepopulationremap } from '../../shared/pageMetaConfig';
import { CommonCommonService } from '@config-app/services/common-common.service';
import { SharedService } from '@config-app/shared/services/utils/shared.service';
import {MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '@config-app/shared/components/popup/popup.component';
import { DropResult } from 'ynt-smooth-dnd';

@Component({
  selector: 'app-page-metaconfig-console',
  templateUrl: './page-metaconfig-console.component.html',
  styleUrls: ['./page-metaconfig-console.component.scss']
})
export class PageMetaconfigConsoleComponent implements OnInit {

  pageSectionConfig;
  pageSectionConfig_prepopulation
  pageSectionConfig_formsubmitflow
  pageSectionConfig_datascopefetchflow
  otherkeys = {}
  prepopulationRemaps={}
  formSubmitflow =[]
  datascopefetchflow = []
  mainConfig:any = {}
  constructor(private commonService:CommonCommonService,
    private sharedService:SharedService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.pageSectionConfig = JSON.parse(JSON.stringify(pageSectionConfig))
    this.pageSectionConfig_prepopulation = JSON.parse(JSON.stringify(pageSectionConfig_prepopulationremap))
    this.pageSectionConfig_formsubmitflow = JSON.parse(JSON.stringify(pageSectionConfig_formSubmitflow)) 
    this.pageSectionConfig_datascopefetchflow = JSON.parse(JSON.stringify(pageSectionConfig_datascopefetchflow))
  }


  emitter($event){
    if($event.TriggerSection=='FORM'){
      if($event.data?.eventType=='TABLE_ACCEPT' || $event.data?.eventType=='TABLE_DELETE' ){
      
        this.otherkeys = $event.formValue.metaKeys.reduce((acc, { key, value }) => {
          try {
              const parsedValue = JSON.parse(value);
              acc[key] = parsedValue;
          } catch (e) {
              acc[key] = value;
          }
          return acc;
      }, {})

      this.mapkeysForMainConfig()
        
      }
    }
  }

  emitter_prepop($event){
    if($event.TriggerSection=='BUTTON' && $event.data=='ADD_PREPOPULATION'){
      if(this.commonService.sectionValidationSystem(this.pageSectionConfig_prepopulation)){
        let temp = {}
        let variablePath
        if(this.pageSectionConfig_prepopulation[1].sectionContent.formValue.ismultiplevariablepath){
          let path='[APPEND]'
          this.pageSectionConfig_prepopulation[1].sectionContent.formValue.multiplevariablepath.forEach((row,index)=>{
            if(row.variableType=='STATIC'){
              path = path+'[STATIC]'+row.variablevalue+((index!=this.pageSectionConfig_prepopulation[1].sectionContent.formValue.multiplevariablepath.length-1)?"+":"")
            }else{
              path = path+row.variablevalue+((index!=this.pageSectionConfig_prepopulation[1].sectionContent.formValue.multiplevariablepath.length-1)?"+":"")
            }
          })
          variablePath = path
          
        }else{
          variablePath = this.pageSectionConfig_prepopulation[1].sectionContent.formValue.variablepath
        }
        let addtionalKeys = this.pageSectionConfig_prepopulation[1].sectionContent.formValue.addtionalKeys.reduce((acc, { key, value }) => {
          try {
              const parsedValue = JSON.parse(value);
              acc[key] = parsedValue;
          } catch (e) {
              acc[key] = value;
          }
          return acc;
        }, {})
        if(this.pageSectionConfig_prepopulation[1].sectionContent.formValue.isextrakeys){
          try{
            temp[this.pageSectionConfig_prepopulation[1].sectionContent.formValue.fieldName] = [JSON.parse(variablePath),addtionalKeys]
          }catch(e){
            temp[this.pageSectionConfig_prepopulation[1].sectionContent.formValue.fieldName] = [variablePath,addtionalKeys]
          }
        }else{
          try{
            temp[this.pageSectionConfig_prepopulation[1].sectionContent.formValue.fieldName] = JSON.parse(this.pageSectionConfig_prepopulation[1].sectionContent.formValue.variablepath)
    
            }catch(e){
            temp[this.pageSectionConfig_prepopulation[1].sectionContent.formValue.fieldName] = this.pageSectionConfig_prepopulation[1].sectionContent.formValue.variablepath
    
            }
        }
        this.prepopulationRemaps = {...this.prepopulationRemaps,...temp}
        this.mapkeysForMainConfig()
        this.pageSectionConfig_prepopulation = JSON.parse(JSON.stringify(pageSectionConfig_prepopulationremap))
        this.pageSectionConfig_prepopulation = this.commonService.ParseConfig(this.pageSectionConfig_prepopulation)
      }
    }
  }
  emitter_submitflow($event){
    if($event.TriggerSection=='BUTTON' && $event.data=='ADD_FORMSUBMIT' && this.commonService.sectionValidationSystem(this.pageSectionConfig_formsubmitflow)){
      let submitflow = {}
      submitflow['submitflow'] = this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.submitflow
      submitflow['dataCloud'] = ["product","formValue","capturedData","resumeJourney","metaData"]
      if(this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.saveResponseToProduct===true){
        submitflow['saveResponseToProduct'] = this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.saveResponseToProduct
      }
      if(this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.validationJson!=null){
        submitflow['validationJson'] = this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.validationJson
      }
      submitflow['params'] = this.mapAndReturnParamsforFlows(this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.params)
      if(this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.validationErrorMessage){
        submitflow['validationErrorMessage'] = this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.validationErrorMessage
      }
      if(this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.validateResponse){
        try{
          submitflow['validateResponse'] = JSON.parse(this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.validateResponse)
        }catch(e){
          submitflow['validateResponse'] = this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.validateResponse
        }
      }
      if(this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.apiError){
        try{
          submitflow['apiError'] = JSON.parse(this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.apiError)
        }catch(e){
          submitflow['apiError'] = this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.apiError
        }
      }

      if(this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.isjourneyEventCodeBeforeResponse){
        submitflow['journeyEventCodeBeforeResponse'] = this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.multijourneyEventCodeBeforeResponse.map(ec=>{return ec.eventCode})
      }else{
        if(submitflow['journeyEventCodeBeforeResponse']!=null)
        submitflow['journeyEventCodeBeforeResponse'] = this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.journeyEventCodeBeforeResponse
      }
      if(this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.isjourneyEventCodeAfterResponseSucess){
        submitflow['journeyEventCodeAfterResponseSucess'] = this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.multijourneyEventCodeAfterResponseSucess.map(ec=>{return ec.eventCode})
      }else{
        if(submitflow['journeyEventCodeAfterResponseSucess']!=null)
        submitflow['journeyEventCodeAfterResponseSucess'] = this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.journeyEventCodeAfterResponseSucess
      }
      if(this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.isjourneyEventCodeAfterResponseFailure){
        submitflow['journeyEventCodeAfterResponseFailure'] = this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.multijourneyEventCodeAfterResponseFailure.map(ec=>{return ec.eventCode})
      }else{
        if(submitflow['journeyEventCodeAfterResponseFailure']!=null)
        submitflow['journeyEventCodeAfterResponseFailure'] = this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.journeyEventCodeAfterResponseFailure
      }

      this.formSubmitflow.push(submitflow)
      this.mapkeysForMainConfig()
      this.pageSectionConfig_formsubmitflow = this.commonService.ParseConfig(JSON.parse(JSON.stringify(pageSectionConfig_formSubmitflow)))
    }
  }

  emitter_fetchflow($event){
    if($event.TriggerSection=='BUTTON' && $event.data=='ADD_FETCHFLOW' && this.commonService.sectionValidationSystem(this.pageSectionConfig_datascopefetchflow)){
      let fetchflow = {}
      fetchflow['fetchflow'] = this.pageSectionConfig_datascopefetchflow[1].sectionContent.formValue.fetchflow
      fetchflow['dataCloud'] = ["product","formValue","capturedData","resumeJourney","metaData"]
      if(this.pageSectionConfig_datascopefetchflow[1].sectionContent.formValue.validate!=null){
        fetchflow['validate'] = this.pageSectionConfig_datascopefetchflow[1].sectionContent.formValue.validate
      }
      fetchflow['params'] = this.mapAndReturnParamsforFlows(this.pageSectionConfig_datascopefetchflow[1].sectionContent.formValue.params)
      if(this.pageSectionConfig_datascopefetchflow[1].sectionContent.formValue.validationErrorMessage){
        fetchflow['validationErrorMessage'] = this.pageSectionConfig_datascopefetchflow[1].sectionContent.formValue.validationErrorMessage
      }
      if(this.pageSectionConfig_datascopefetchflow[1].sectionContent.formValue.validateResponse){
        try{
          fetchflow['validateResponse'] = JSON.parse(this.pageSectionConfig_datascopefetchflow[1].sectionContent.formValue.validateResponse)
        }catch(e){
          fetchflow['validateResponse'] = this.pageSectionConfig_datascopefetchflow[1].sectionContent.formValue.validateResponse
        }
      }
      if(this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.apiError){
        try{
          fetchflow['apiError'] = JSON.parse(this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.apiError)
        }catch(e){
          fetchflow['apiError'] = this.pageSectionConfig_formsubmitflow[1].sectionContent.formValue.apiError
        }
      }
      this.datascopefetchflow.push(fetchflow)
      this.mapkeysForMainConfig()
      this.pageSectionConfig_datascopefetchflow = this.commonService.ParseConfig(JSON.parse(JSON.stringify(pageSectionConfig_datascopefetchflow)))
    }

  }


  mapkeysForMainConfig(){
    
   
    if(Object.keys(this.otherkeys).length!=0){
      if(this.mainConfig.formSubmitFlow){
        delete this.mainConfig.formSubmitFlow
      }
      if(this.mainConfig.dataScopeFetchFlow){
        delete this.mainConfig.dataScopeFetchFlow
      }
      if(this.mainConfig.prepopulationRemaps){
        delete this.mainConfig.prepopulationRemaps
      }
      this.mainConfig = {...this.mainConfig,...this.otherkeys}
    }
    if(Object.keys(this.prepopulationRemaps).length !=0){
      this.mainConfig["prepopulationRemaps"] = this.prepopulationRemaps
      
    }
    if(this.formSubmitflow.length!=0){
      this.mainConfig["formSubmitFlow"] = this.formSubmitflow
    }
    if(this.datascopefetchflow.length!=0){
      this.mainConfig["dataScopeFetchFlow"] = this.datascopefetchflow
    }
    this.mainConfig = {...this.mainConfig}
    
  }

  mapAndReturnParamsforFlows(paramsObj){
    let params =[]
    paramsObj.forEach(p=>{
      let temp 
      if(p.variableType=='PATH'){
        if(p.variablevalue!=null){
          temp = [p.variablekey,p.variablevalue]
        }else{
          temp = p.variablekey
        }
      }else{
        let t 
        try { 
          t = JSON.parse(p.variablevalue)
        }catch(e){
          t = p.variablevalue
        }
        temp = [p.variablekey,p.variableType,t]
      }
      params.push(temp)
    })

    return params
  }

  deleteprepopulation(key){
    delete this.prepopulationRemaps[key]
    this.mapkeysForMainConfig()
  }
  deletefetchflow(index){
    this.datascopefetchflow.splice(index,1)
    this.mapkeysForMainConfig()
  }
  deletesubmitflow(index){
    this.formSubmitflow.splice(index,1)
    this.mapkeysForMainConfig()
  }
  onsubmitflowDrop(dropResult: DropResult){
    this.formSubmitflow = this.applyDrag(this.formSubmitflow, dropResult);
    this.mapkeysForMainConfig()
  }

  onfetchflowDrop(dropResult: DropResult){
    this.datascopefetchflow = this.applyDrag(this.datascopefetchflow, dropResult);
    this.mapkeysForMainConfig()
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
    let pageMetaConfig = JSON.parse(config[0].sectionContent.formValue.pageMetaConfig)
    if(pageMetaConfig.formSubmitFlow){
      this.formSubmitflow = pageMetaConfig.formSubmitFlow
    }
    if(pageMetaConfig.dataScopeFetchFlow){
      this.datascopefetchflow = pageMetaConfig.dataScopeFetchFlow
    }
    if(pageMetaConfig.prepopulationRemaps){
      this.prepopulationRemaps = pageMetaConfig.prepopulationRemaps
    }
    
    this.otherkeys = {...pageMetaConfig}
     delete pageMetaConfig.formSubmitflow
     delete pageMetaConfig.dataScopeFetchFlow
     delete pageMetaConfig.prepopulationRemaps
    this.mapkeysForMainConfig()
  }catch(e){
    this.showError()
  }
  }

  showError(){
    this.sharedService.openSnackBar("invalid page metaConfig data")

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

  clearConfig(){
    this.mainConfig = {}
    this.datascopefetchflow = []
    this.prepopulationRemaps = {}
    this.formSubmitflow = []
    this.pageSectionConfig = this.commonService.ParseConfig(JSON.parse(JSON.stringify(pageSectionConfig)))
    this.pageSectionConfig_prepopulation = this.commonService.ParseConfig(JSON.parse(JSON.stringify(pageSectionConfig_prepopulationremap)))
    this.pageSectionConfig_formsubmitflow= this.commonService.ParseConfig(JSON.parse(JSON.stringify(pageSectionConfig_formSubmitflow)))
    this.pageSectionConfig_datascopefetchflow = this.commonService.ParseConfig(JSON.parse(JSON.stringify(pageSectionConfig_datascopefetchflow)))

  }

  exportConfig(){
    window.navigator.clipboard.writeText(JSON.stringify(this.mainConfig))
    this.sharedService.openSnackBar("configuration copied to clipboard successfully")

  }

}
