import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Formatters } from '../../helpers/Formatters';
import { PopupComponent } from '../popup/popup.component';
import { CommonCommonService } from '@config-app/services/common-common.service';
import { ApiService } from '@config-app/services/api.service';
import { Observable } from 'rxjs';
import { DropResult } from 'ynt-smooth-dnd';

@Component({
  selector: 'app-section-builder',
  templateUrl: './section-builder.component.html',
  styleUrls: []
})
export class SectionBuilderComponent implements OnInit {

  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
  @Input() config;
  @Input() options;
  @Input() contentInsertIndex
  @Input() sendModalData;
  @Output() status = new EventEmitter<any>();
  @Output() sendFormData = new EventEmitter<any>();
  @Input() fileUploadComplete;
  @Output() otpstatus = new EventEmitter<any>();
  @Input() refresh: Observable<void>;
  @Input() editMode = false
  journey: any;
  formVal:any;
  sectionMeta={
    sectionValidity:null
  }
  externalTriggerSubscription: any;
  
  constructor( private dialog: MatDialog,
    private router : Router,
    private theme1ApiService:ApiService,
    private commonService:CommonCommonService,
    public formatters:Formatters,
    public changedetectorRef:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.config= this.commonService.ParseConfig(this.config)
    this.verificationExternalTriggercaller()
  }
  ngOnChanges(){
        
  }

  verificationExternalTriggercaller() {
    this.externalTriggerSubscription = this.refresh?.subscribe((data: any) => {
      
      this.config= this.commonService.ParseConfig(this.config)
       this.changedetectorRef.markForCheck()
       //this.changedetectorRef.reattach()
    })
}

  moderateTemplateContents(config: any,feedData) {
    this.config.forEach(section=>{
      switch(section.componentType){
        case 'TITLE':
          section.sectionContent.titleData = section.sectionContent.titleData(feedData)
        break;
        case 'PARAGRAPH':
          section.sectionContent.paragraphData = section.sectionContent.paragraphData(feedData)
        break;
      }
    })
    return config
  }

  ngAfterViewChecked(){
    this.sectionMeta.sectionValidity = this.commonService.SectionMandatoryValidationSystem(this.config)
  }
  
  statusBind($event,section){
    section.sectionContent.isValid=$event.ok
    
    if($event.eventName){
      this.status.emit({"ok":true,TriggerSection:section.componentType,eventName:$event.eventName})
    }else{
      this.status.emit({"ok":true,TriggerSection:section.componentType})
    }

  }
  formStatus(_$event,_section){
    this.status.emit({"ok":true,TriggerSection:'FORM',status:'FORM_EDIT'})
  }
  popupOpen(data,section){
    switch(data.linkType){
      case 'POPUP':
        this.dialog.open(PopupComponent,{
          width: '70%',
          height: '70%',
          disableClose: true,
          data:{
            title:`Popup Facility`,
            message:data.popupContent.content
      
          },
        });
      break
      case 'REDIRECT':
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>{
         this.router.navigateByUrl(`${data.url}`)

        }
        )
        
      break
      case 'EXTERNAL_REDIRECT':
         window.open(data.url, '_blank');
      break;
      case 'ACTION_ID':
        this.status.emit({"ok": true, TriggerSection: section.componentType, data: data.actionId})
      break;
    }
  }

  formValueBind($event,section){
    section.sectionContent.formValue = $event
    this.status.emit({"ok":true,formValue:$event,TriggerSection:'FORM'})
    this.formVal = section.sectionContent;
    this.sendFormData.emit(section.sectionContent)
  }


  formValidityBind($event,section){
    section.sectionContent.formValidity = $event
  }

  otpCompleteEmit(_$event){
    this.status.emit({"ok":true,TriggerSection:'OTP',status:"OTP_SUCCESS"})
  }
  otpComplete(_$event){
    this.status.emit({"ok":true,TriggerSection:'OTP',status:"OTP_SUCCESS"})
  }
  otpAttemptsDone(_$event){
    this.status.emit({"ok":true,TriggerSection:'OTP',status:"OTP_ATTEMPT_DONE"})
  }

  otpErrorEmit(_$event){
    this.status.emit({"ok":true,TriggerSection:'OTP',status:"OTP_ERROR"})
  }

  tableStatus($event,index){
    this.status.emit({"ok":true,TriggerSection:'TABLE',sectionIndex:index,data:$event})
  }

  otherEventsBind($event,section){
    if(section.componentType=='FORM'){
    this.status.emit({"ok":true,formValue:section.sectionContent.formValue,TriggerSection:'FORM',data:$event,})

    }else{
      this.status.emit({"ok":true,TriggerSection:section.componentType,data:$event})
    }
  }

  editForm(section,revertTrigger?){
    if(revertTrigger){
      section.sectionContent.showUpdateButton =false;
      section.sectionContent.options.disableMode = true;
      section.sectionContent.fields.forEach(f => {
        if (f.fieldDataType == "TABLE") {
          f.showAction = false;
          f.addMore = false;
        }
      });
    }else{
      section.sectionContent.showUpdateButton =true;
      section.sectionContent.options.disableMode = false;
      section.sectionContent.fields.forEach(f => {
        if (f.fieldDataType == "TABLE") {
          f.showAction = true;
          f.addMore = true;
        }
      });
    }
  }


  formSectionSubmitAction(section){
    section.sectionContent.validityEmitter.next('PINGED')
    section.sectionContent.formValueEmitter.next()
    if(section.sectionContent.formValidity?.ok===true){
      if(section.sectionContent?.submitAction?.submitFlow?.length){
          this.submitFlowCall(section.sectionContent.submitAction.submitFlow,section)
      }else{
        this.editForm(section,true)
      }
    }
  }

  submitFlowCall(submitflowlist,section){
    this.submitflowapiCall(submitflowlist[0],submitflowlist.length,0,section,submitflowlist)
  }

  submitflowapiCall(submitflow,totalLength,currentIndex,section,submitflowList){
      submitflow.dataCloud = this.commonService.fetchDataCloud(submitflow,this.config)
      submitflow.mappedParameters = this.commonService.mapDataFromCloudParameter(submitflow,submitflow.dataCloud)
      if(submitflow.validationJson){
        let res = this.commonService.applyJsonLogic(submitflow.validationJson,submitflow.dataCloud)
        switch(res){
          case 'EXECUTE':
            this.callApiLayer(submitflow,currentIndex,totalLength,section,submitflowList)
          break;
          case 'NEXT':
            if(currentIndex!=totalLength-1){
              this.submitflowapiCall(submitflowList[currentIndex+1],totalLength,currentIndex+1,section,submitflowList)
            } else {
              this.editForm(section,true)
            }
          break;
        }
      }else{  
        this.callApiLayer(submitflow,currentIndex,totalLength,section,submitflowList)
      }
      
  }

  callApiLayer(submitflow,currentIndex,totalLength,section,submitflowList){
    switch(submitflow.submitflow){
      case 'personalProfileUpdate':
        this.theme1ApiService.personalProfileUpdate(submitflow.mappedParameters).then((res:any)=>{
          this.apiResponseDirectionFormSubmit(submitflow,res,currentIndex,totalLength,section,submitflowList)
        })
      break;
      case 'assignUserHierarchyUnit':
      this.theme1ApiService.assignUserHierarchy(submitflow.mappedParameters).then((res:any)=>{            
        this.apiResponseDirectionFormSubmit(submitflow,res,currentIndex,totalLength,section,submitflowList)
      })
      break;
      case 'selfemploymentUpdate':
        this.theme1ApiService.updateborrowerEmploymentDetails(submitflow.mappedParameters).then((res:any)=>{            
          this.apiResponseDirectionFormSubmit(submitflow,res,currentIndex,totalLength,section,submitflowList)
        })
      break;
      default:
       
      break;
    }
  }

    apiResponseDirectionFormSubmit(submitflow, res, currentIndex, totalLength, section, submitflowList) {
        if (currentIndex != totalLength - 1) {
            if (submitflow.validateResponse) {
                let data_cloud = {...res, ...submitflow.dataCloud, formSubmitResponse: res}
                let result = this.commonService.applyJsonLogic(submitflow.validateResponse, data_cloud)
                if (result == 'PROCEED') {
                    this.submitflowapiCall(submitflowList[currentIndex + 1], totalLength, currentIndex + 1, section, submitflowList)
                }
            } else {
                this.submitflowapiCall(submitflowList[currentIndex + 1], totalLength, currentIndex + 1, section, submitflowList)
            }
        } else {
            if (submitflow.validateResponse) {
                let data_cloud = {...res, ...submitflow.dataCloud, formSubmitResponse: res}
                let result = this.commonService.applyJsonLogic(submitflow.validateResponse, data_cloud)
                if (result == 'PROCEED') {
                    this.editForm(section, true)
                }

            } else {
                this.editForm(section, true)
            }
        }
    }

    buttonAction(section) {
        this.status.emit({"ok": true, TriggerSection: section.componentType, data: section.sectionContent.actionId})
    }

    buttonDisabledBinder(section) {
        if (section.sectionContent.disabled) {
            return this.commonService.applyJsonLogic(section.sectionContent.disabled, this.sectionMeta)
        }
        return false
    }

    onDrop(result:DropResult){
      this.config = this.applyDrag(this.config,result)
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
