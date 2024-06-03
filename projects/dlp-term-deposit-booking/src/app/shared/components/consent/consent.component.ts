import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { CommonCommonService } from '@tlad-app/services/common-common.service';
import { PopupComponent } from '../popup/popup.component';
import { CommonVariableService } from '@tlad-app/services/common-variable-service';
import { ApiService } from '@tlad-app/services/api.service';

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
  popupConsentEnums=['Privacy_Policy_SBA','CJ-CC-PrivacyPolicy','PRIVACY_POLICY_PL','PRIVACY_POLICY_VL']
  idConsentRemaps = {
    'Privacy_Policy_SBA':{
      'type':'POPUP',
      'consentCode':'Privacy_Policy_SBA'
    },
    'PRIVACY_POLICY_PL':{
      'type':'POPUP',
      'consentCode':'PRIVACY_POLICY_PL'
    },
    'CJ-CC-PrivacyPolicy':{
      'type':'POPUP',
      'consentCode':'PRIVACY_POLICY_CC'
    },
    'PRIVACY_POLICY_VL':{
      'type':'POPUP',
      'consentCode':'PRIVACY_POLICY_VL'
    },
  }
   @Output() Status = new EventEmitter<any>();
  constructor(public dialog:MatDialog,public commonService:CommonCommonService,public commonVariableService:CommonVariableService,
    public theme1ApiService:ApiService) { 
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
    let journey = JSON.parse(sessionStorage.getItem('CURRENT_JOURNEY'))
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
  checkValidity(isFromDefault?){
    if(this.field.options.every(t=>t.completed===true)){
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
    let journey = JSON.parse(sessionStorage.getItem('CURRENT_JOURNEY'))
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
          data:{
            title:endLink.label,
            popupContent:endLink.popupContent
          }
        }
        )
      }
    })
  }
  consentCheck(_$event){
    this.Status.emit({ok:true,eventName:'CONSENT_CHECK'})
  }
}
