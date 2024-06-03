import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Formatters } from '../../helpers/Formatters';
import { PopupComponent } from '../popup/popup.component'; 

@Component({
  selector: 'app-section-builder',
  templateUrl: './section-builder.component.html'
})
export class SectionBuilderComponent {

  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
  @Input() config;
  @Input() options;
  @Input() contentInsertIndex
  @Input() sendModalData;
  @Output() status = new EventEmitter<any>();
  @Output() sendFormData = new EventEmitter<any>();
  @Input() fileUploadComplete;
  @Output() otpstatus = new EventEmitter<any>();
  @Output() editform = new EventEmitter<any>()
  journey: any;
  formVal:any;
  constructor( private dialog: MatDialog,
    private router : Router,
    public formatters:Formatters) { }
 
  moderateTemplateContents(config: any,feedData) {
    this.config.map(section=>{
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
 
  //for captcha
  statusBind($event,section){
    section.sectionContent.isValid=$event.ok 
    this.status.emit({"ok":true,TriggerSection:section.componentType})
  }
  formStatus(){
    this.status.emit({"ok":true,TriggerSection:'FORM',status:'FORM_EDIT'})
  }
  editForm(_$event, section) {
    this.editform.emit({ "ok": true, TriggerSection: section.sectionContent.pageCode })
  }
  popupOpen(data){
    switch(data.linkType){
      case 'POPUP':
        this.dialog.open(PopupComponent,{
          width: '70%',
          height: '70%',
          disableClose: true,
          ariaLabel:"popup",
          role:"dialog",
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
    }
  }

  //for dynamic form fields
  formValueBind($event,section){
    section.sectionContent.formValue = $event
    this.status.emit({"ok":true,formValue:$event,TriggerSection:'FORM'})
    this.formVal = section.sectionContent;
    this.sendFormData.emit(section.sectionContent)
  }


  formValidityBind($event,section){
    section.sectionContent.formValidity = $event
  }

  otpCompleteEmit(){
    this.status.emit({"ok":true,TriggerSection:'OTP',status:"OTP_SUCCESS"})
  }
  otpAttemptsDone(){
    this.status.emit({"ok":true,TriggerSection:'OTP',status:"OTP_ATTEMPT_DONE"})
  }

  otpErrorEmit(){
    this.status.emit({"ok":true,TriggerSection:'OTP',status:"OTP_ERROR"})
  }

  tableStatus($event,index){
    this.status.emit({"ok":true,TriggerSection:'TABLE',sectionIndex:index,data:$event})
  }

  otherEventsBind($event,section){
    this.status.emit({"ok":true,TriggerSection:section.componentType,data:$event})
  }
}
