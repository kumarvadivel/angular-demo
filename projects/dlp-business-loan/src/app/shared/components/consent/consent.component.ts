import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { CommonCommonService } from '@bl-app/services/common-common.service';
import { ApiService } from '@bl-app/services/api.service';
import { PopupComponent } from '../popup/popup.component';
import { CommonVariableService } from '@bl-app/services/common-variable-service';
import { LocalStorage } from '@bl-app/shared/helpers/localStorage';

@Component({
  selector: 'consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class ConsentComponent implements OnInit {

  @Input() field:any;
  @Input() options:any; 
  isInvalid:any = false;
  isExpandIndex = [];
  popupConsentEnums=['DISCLAIMER_MSME','PRIVACY_POLICY_MSME','TERMS_AND_CONDITIONS_CONSENT_MSME']
  idConsentRemaps = {
    'DISCLAIMER_MSME':{
      'type':'POPUP',
      'consentCode':'DISCLAIMER_MSME'
    },
    'PRIVACY_POLICY_MSME':{
      'type':'POPUP',
      'consentCode':'PRIVACY_POLICY_MSME'
    },
    'TERMS_AND_CONDITIONS_CONSENT_MSME':{
      'type':'POPUP',
      'consentCode':'TERMS_AND_CONDITIONS_CONSENT_MSME'
    }
  }
   @Output() Status = new EventEmitter<any>();
  constructor(public dialog:MatDialog,public commonService:CommonCommonService,public commonVariableService:CommonVariableService,
    public theme1ApiService:ApiService,public localStorage:LocalStorage) { 
    this.commonService.mySub.subscribe(val=>{
      this.isInvalid=val;
      this.checkValidity(true)
    });
  }
 

  ngOnInit(): void {
    this.bindconsentEventListeners()
  }

  bindconsentEventListeners(){
    window.addEventListener('click',(ev:any)=>{
      if(this.popupConsentEnums.includes(ev.target.className) ){
        this.fetchConsentCode(ev.target.className)
      }

      if(this.popupConsentEnums.includes(ev.target.id) ){
        this.fetchConsentCode(ev.target.id)
      }

      if(ev.target.id=='readButton'){
        let target:any = ev.target;
        let parent = target.parentElement;
        let ele = parent.firstChild
        if(ele.id=='readMore'){
          ele.style.display = 'block'
          target.style.display = 'none'
          let viewMore = document.createElement('span')
          viewMore.style.display = 'block'
          viewMore.classList.add('link_consent_dynamic')
          viewMore.setAttribute('id','viewLess')
          viewMore.innerText = 'View Less'
          parent.appendChild(viewMore)
          return
        }
        return
      }
      if(ev.target.id=='viewLess'){
        let target:any = ev.target;
        let parent = target.parentElement;
        let ele = parent.firstChild
        if(ele.id=='readMore'){
          ele.style.display = 'none'
          target.style.display = 'none'
          let ReadMore = parent.firstChild.nextSibling
          ReadMore.nextSibling.style.display = 'block'
           parent.removeChild(target)
        }
      }
    })
  }

  fetchConsentCode(consentCode){
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    let consent_remapped = this.idConsentRemaps[consentCode]
    let params ={
      consentCode:consent_remapped.consentCode,
      loanPurposeUuid:journey.product.loanPurposeUuid
    }
    this.theme1ApiService.fetchConsentList(params).then((res:any)=>{
      if(res.code=='200'){
        let consent = res.loanPurposeTemplateList[0]
        let endlink = {
          linkType:consent_remapped.type,
          width:'70%',
          height:'70%',
          label:consent.name,
          popupContent:[{
            componentType:'HTML_CONTENT',
            sectionContent:{
              htmlData:consent.description,
              isShow:true
            }
          }]
        }
        this.openEndLink(endlink)
      }
    })
  }
  viewMore(index){
    this.isExpandIndex.push(index);
  }
  less(index){
    const removeIndex = this.isExpandIndex.indexOf(index);
    this.isExpandIndex.splice(removeIndex, 1);
  }
  notClick(event) {
    event.preventDefault();
  }
  checkValidity(isFromDefault){
    if(this.field.options.every(t=>t.completed)){
      this.Status.emit({ok:true})
      this.isInvalid = false;
      this.commonVariableService.isConsentValid = false
    }else{
      this.Status.emit({ok:false})
      this.field.options.forEach(val=>{
        this.isInvalid =this.commonVariableService.isConsentValid =  val.completed==null && !isFromDefault?false:true;
      })
    }
  }

  openEndLink(endLink){
    switch(endLink.linkType){
      case 'POPUP':
        if(endLink.consentCode){
          if(endLink.popupContent.length!=0){
            this.dialog.open(PopupComponent,{
              width: endLink.width,
              height: endLink.height,
              disableClose: true,
              role:"dialog",
              ariaLabel:"Popup Section",
              data:{
                title:endLink.label,
                popupContent:endLink.popupContent
              }
            }
            )
          }
          else{
            this.fetchEndLinkConsent(endLink)
          }      
        }
        else{
          this.dialog.open(PopupComponent,{
            width: endLink.width,
            height: endLink.height,
            disableClose: true,
            role:"dialog",
            ariaLabel:"Popup Section",
            data:{
              title:endLink.label,
              popupContent:endLink.popupContent
            }
          }
          )
        }
      break;
      case 'REDIRECT':

      break;
      case 'EXTERNAL_REDIRECT':

      break;
    }
  }

  fetchEndLinkConsent(endLink){
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    let params ={
      consentCode:endLink.consentCode,
      loanPurposeUuid:journey.product.loanPurposeUuid
    }
    this.theme1ApiService.fetchConsentList(params).then((res:any)=>{
      if(res.code=='200'){
        let consent = res.loanPurposeTemplateList[0]
        endLink.popupContent = [{
          componentType:'HTML_CONTENT',
          sectionContent:{
            htmlData:consent.description,
            isShow:true
          }
        }]
        this.dialog.open(PopupComponent,{
          width: endLink.width,
          height: endLink.height,
          disableClose: true,
          role:"dialog",
          ariaLabel:"Popup Section",
          data:{
            title:endLink.label,
            popupContent:endLink.popupContent
          }
        }
        )
      }
    })
  }
}
