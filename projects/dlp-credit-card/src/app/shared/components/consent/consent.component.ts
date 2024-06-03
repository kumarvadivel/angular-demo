import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { ApiService } from '@cc-app/services/api.service';
import { PopupComponent } from '../popup/popup.component';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { LocalStorage } from '@cc-app/shared/helpers/localStorage';

@Component({
  selector: 'consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class ConsentComponent implements OnInit {

  @Input() field: any;
  @Input() options: any;
  isInvalid: any = false;
  isExpandIndex = [];
  popupConsentEnums = ['Privacy_Policy_SBA', 'CJ-CC-PrivacyPolicy', 'PRIVACY_POLICY_PL', 'PRIVACY_POLICY_VL']
  idConsentRemaps = {
    'Privacy_Policy_SBA': {
      'type': 'POPUP',
      'consentCode': 'Privacy_Policy_SBA'
    },
    'PRIVACY_POLICY_PL': {
      'type': 'POPUP',
      'consentCode': 'PRIVACY_POLICY_PL'
    },
    'CJ-CC-PrivacyPolicy': {
      'type': 'POPUP',
      'consentCode': 'PRIVACY_POLICY_CC'
    },
    'PRIVACY_POLICY_VL': {
      'type': 'POPUP',
      'consentCode': 'PRIVACY_POLICY_VL'
    },
  }
  @Output() Status = new EventEmitter<any>();
  constructor(public dialog: MatDialog, public commonService: CommonCommonService, public commonVariableService: CommonVariableService,
    public apiService: ApiService,private localStorage: LocalStorage) {
    this.commonService.mySub.subscribe(val => {
      this.isInvalid = val;
      this.checkValidity(true)
    });
  }


  ngOnInit(): void {
    this.bindconsentEventListeners()
  }

  bindconsentEventListeners() {
    window.addEventListener('click', (ev: any) => {
      if (this.popupConsentEnums.includes(ev.target.className)) {
        this.fetchConsentCode(ev.target.className)
      }

      if (this.popupConsentEnums.includes(ev.target.id)) {
        this.fetchConsentCode(ev.target.id)
      }

      if (ev.target.id == 'readButton') {
        let target: any = ev.target;
        let parent = target.parentElement;
        let ele = parent.firstChild
        if (ele.id == 'readMore') {
          ele.style.display = 'block'
          target.style.display = 'none'
          if(!target.parentElement.children.viewLess){
            let viewMore = document.createElement('span')
            viewMore.style.display = 'block'
            viewMore.classList.add('link_consent_dynamic')
            viewMore.setAttribute('id', 'viewLess')
            viewMore.textContent = 'View Less'
            parent.appendChild(viewMore)
          }
          return
        }
        return
      }
      if (ev.target.id == 'viewLess') {
        let target: any = ev.target;
        let parent = target.parentElement;
        let ele = parent.firstChild
        if (ele.id == 'readMore') {
          ele.style.display = 'none'
          target.style.display = 'none'
          let ReadMore = parent.firstChild.nextSibling
          ReadMore.nextSibling.style.display = 'block'
          parent.removeChild(target)
        }
      }
    })
  }

  fetchConsentCode(consentCode) {
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    let width
    let height
    let consent_remapped = this.idConsentRemaps[consentCode]
    let params = {
      consentCode: consent_remapped.consentCode,
      loanPurposeUuid:journey.product.loanPurposeUuid
    }
    if(consentCode == 'CJ-CC-PrivacyPolicy'){
       width = '50%'
       height = '25%'
    }else{
      width ='70%'
      height ='70%'
    }
    this.apiService.fetchConsentList(params).then((res: any) => {
      if (res.code == '200') {
        let consent = res.loanPurposeTemplateList[0]
        let endlink = {
          linkType: consent_remapped.type,
          width: width,
          height: height,
          label: consent.name,
          popupContent: [{
            componentType: 'HTML_CONTENT',
            sectionContent: {
              htmlData: consent.description,
              isShow: true
            }
          }]
        }
        this.openEndLink(endlink)
      }
    }).catch(console.error);
  }
  viewMore(index) {
    this.isExpandIndex.push(index);

  }
  less(index) {
    const removeIndex = this.isExpandIndex.indexOf(index);
    this.isExpandIndex.splice(removeIndex, 1);

  }
  notClick(event) {
    event.preventDefault();
  }
  checkValidity(isFromDefault) {
    if (this.field.options.every(t => t.completed === true)) {
      this.Status.emit({ ok: true })
      this.isInvalid = false;
      this.commonVariableService.isConsentValid = false
    } else {
      this.Status.emit({ ok: false })
      this.field.options.forEach(val => {
        this.isInvalid = this.commonVariableService.isConsentValid = val.completed == null && !isFromDefault ? false : true;
      })
    }
  }

  openEndLink(endLink) {
    switch (endLink.linkType) {
      case 'POPUP':
        if (endLink.consentCode) {
          if (endLink.popupContent.length != 0) {
            this.dialog.open(PopupComponent, {
              width: endLink.width,
              height: endLink.height,
              disableClose: true,
              role:"dialog",
              ariaLabel:"popup",
              data: {
                title: endLink.label,
                popupContent: endLink.popupContent
              }
            }
            )
          }
          else {
            this.fetchEndLinkConsent(endLink)
          }
        }
        else {
          this.dialog.open(PopupComponent, {
            width: endLink.width,
            height: endLink.height,
            disableClose: true,
            role:"dialog",
            ariaLabel:"popup",
            data: {
              title: endLink.label,
              popupContent: endLink.popupContent
            }
          }
          )
        }
        break;
      case 'REDIRECT':
        this.openEndLinkRedirect(endLink);
      break;
      case 'EXTERNAL_REDIRECT':

        break;
    }
  }

  openEndLinkRedirect(endLink){
    if (endLink.consentCode) {
      if (endLink.popupContent.length != 0) {
        if(endLink.popupContent[0].sectionContent.htmlData){
          window.open((endLink.popupContent[0].sectionContent.htmlData.split('href="')[1]).split('">')[0],"_blank")
        }
      } else {
        this.fetchEndLinkConsent(endLink)
      }
    }
  }

  fetchEndLinkConsent(endLink) {
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    let params = {
      consentCode: endLink.consentCode,
      loanPurposeUuid:journey.product.loanPurposeUuid
    }
    this.apiService.fetchConsentList(params).then((res: any) => {
      if (res.code == '200') {
        let consent = res.loanPurposeTemplateList[0]
        endLink.popupContent = [{
          componentType: 'HTML_CONTENT',
          sectionContent: {
            htmlData: consent.description,
            isShow: true
          }
        }]
        // this.dialog.open(PopupComponent, {
        //   width: endLink.width,
        //   height: endLink.height,
        //   disableClose: true,
        //   data: {
        //     title: endLink.label,
        //     popupContent: endLink.popupContent
        //   }
        // }
        // )
        this.openEndLink(endLink);
      }
    }).catch(console.error)
  }
}
