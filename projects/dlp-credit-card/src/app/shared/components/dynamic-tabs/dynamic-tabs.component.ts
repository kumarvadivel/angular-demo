import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { ApiService } from '@cc-app/services/api.service';
import { PopupComponent } from '../popup/popup.component';
import { LocalStorage } from '@cc-app/shared/helpers/localStorage';
@Component({
    selector: 'app-dynamic-tabs',
    templateUrl: './dynamic-tabs.component.html',
    styleUrls: ['./dynamic-tabs.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DynamicTabsComponent implements OnInit {
@Input() tabsData: any
  journey: any;

    constructor(private dialog: MatDialog,
      public commonVariableService:CommonVariableService,public apiService:ApiService,private localStorage:LocalStorage) { }

    ngOnInit(): void {
      this.commonVariableService.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
      this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
      let isEmi = this.tabsData.find(e=>e.displayType=='emiCalculator')      
      if(this.journey.product.access_token && isEmi) {
        this.getApprovedLoanDetails()
      }
    }

    termsAndConditions(){
        window.open("https://bankofindia.co.in/documents/20121/395836/BOI_CREDITCARD_MITC_2022.pdf/57d9e152-159d-aaee-ddf6-14652ceeea09?t=1670235815948","_blank")
    }

    faqPopup(){
         this.dialog.open(PopupComponent,{
            width: '70%',
            height: '90%',
            disableClose: true,
            role:"dialog",
            ariaLabel:"popup",
            data:{
              title:"FAQ's",
             popupContent:this.termsAndConditionsInfo
            }
          })
    }
    
    termsAndConditionsInfo = [
                  {
                    "label":"FAQ's",
                    "linkType":'POPUP',
                    "isShow":true,
                      "componentType":'ACCORDION',
                      "sectionContent":{
                        "isShow":true,
                        "listItem": [{
                          "htmlContent": false,
                          "label":"Can the charge account of the card be changed?",
                          "content":"Yes, please contact your Branch for the same."
                        },
                        {
                          "htmlContent": false,
                          "label":"What are the special features we have in Bank of India credit card?",
                          "content":"Maximum 51 days interest free credit period Revolving credit: Here, by availing this revolving credit facility the card holder need to pay only 10% of the bill amount on or before due date and he will be charged interest @1.70% per month only on the outstanding 90% balance. If the entire amount is overdue then he will be charged @2.5%p.m EMI facility: The card holder can convert his billing into E.M.I (up to maximum 36 E.M.I) provided the value of the transaction is Rs.5000 or more and the request is given to Card Products Department, through the Branch, with recommendations within 20 days of purchase. Cash withdrawals are excluded from EMI facility and only transactions for purchase of goods/services allowed for EMI. The card holder can withdraw cash from any branch of Bank of India as well as through any ATM. BOI’s balance Transfer Scheme - Cardholder shall be eligible to transfer outstanding balance on his existing Credit Card of another Bank to his Credit Card from our Bank Maximum upto 75% of spending limit. The minimum amount eligible for availing the balance transfer scheme is Rs.5,000/- in case of India Card and Rs.10,000/- in case of other cards. Concession in the premium of Medi-Claim policy up to Rs. 5.00 lakhs, under tie-up with National Insurance Co. Ltd."
                        },
                        {
                          "htmlContent": false,
                          "label":"Renewal fee is not applicable for me, but it has been debited to my account erroneously.",
                          "content":"The system will debit the renewal fees as applicable on the due date to your card account and it will appear on your statement. If you are exempted for this annual fee (Diamond Customer etc.) and system has applied these charges, contact the branch for reversal of charges. The branch will reverse the charges as per Bank guidelines."
                        },
                        {
                          "htmlContent": false,
                          "label":"Whom to contact in case of failed transactions with credit cards wherein card account is debited but no service is received?",
                          "content":"For failure in ATM transactions and POS transactions with MEDR remarks, send e-mail to Card Products Department. For failure in Internet Banking transactions with remarks STPB and PGMNT, card holder has to approach the StarConnect Cell at Data Centre (e-mail to Boi.Starconnect@bankofindia.co.in)."
                        },
                        {
                          "label":"What are the charges that are leviable on credit card usages?",
                          "content":"<span>Service Charges on Cash Advances -</span><br/><ul><li>At Branch 2.50% minimum Rs. 50/-</li><li>At our Bank’s ATM 2.00% minimum Rs. 50/-</li><li>At other Bank’s ATM 2.50% minimum Rs. 75/-</li></ul><br/><span>It would be automatically billed to you.</span><br/><span>Charges for Balance Enquiry -</span><br/><ul><li>At BOI ATM - NIL</li><li>At other Bank’s ATM - Rs. 20/-</li></ul>",
                          "htmlContent": true
                        },
                        {
                          "label":"What are the Service Charges applicable?",
                          "htmlContent": true,
                          "content":"<ul><li>Upcountry cheque collection – commission – as per latest Service Charges applicable.</li><li>Cheque Return Charges - as per the latest Service Charges applicable.</li><li>PIN replacement - Per occasion Rs.50/- <br/> Usage over spending limit - Rs. 10 per transaction.</li><li>Retrieval of Charge slip - Rs.100/- or Actual charges whichever is higher (now w.e.f 19/04/2013 this has been enhanced to US$25.00 by VISA/Master Card) Duplicate copies of bills (after 3 months) - Rs.50 per quarter.</li><li>Railway Ticket / Petrol Purchase - Commission as per Industry practice. Presently it is 2.5% of transaction amount minimum.</li><li>Issue of replacement of Credit card - Customers – Rs. 200/-</li></ul><span>(Service Tax – As applicable from time to time)</span>"
                        },
                        {
                          "htmlContent": false,
                          "label":"Can I get cash at branch?",
                          "content":"Yes, with the help of a POS machine in the branch or by manual cash."
                        },
                        {
                          "htmlContent": false,
                          "label":"Can I withdraw cash at ATMs with my Credit Card?",
                          "content":"Yes, you can by using the Pin."
                        },
                        {
                          "htmlContent": false,
                          "label":"How to increase the spending limit of the card?",
                          "content":"Submit your request for the increase in spending limit with the proof of latest income (latest I.T, return or salary slip) or earmarking lien on the deposit. If the card is a corporate card, then Board resolution to that effect is also essential."
                        },
                        {
                          "htmlContent": false,
                          "label":"I have not received the PIN / My PIN is not working. How do I get a re-pin?",
                          "content":"Send a request through post or e-mail or through branch for issuance of re- pin to CPD, quoting the card number and the reason. Then the re -pin will be issued and sent to the address to which the monthly bill is being sent."
                        },
                        {
                          "htmlContent": false,
                          "label":"Will any SMS alerts be sent to me upon Card usage?",
                          "content":"Yes, SMS alerts are being sent immediately after every successful transaction to your registered mobile number."
                        },
                        {
                          "htmlContent": false,
                          "label":"I do not get the alerts. What should I do?",
                          "content":"If you do not get the SMS Alerts, it may be either your mobile is not registered at the Card Master or it has not been updated after change in mobile number. Immediately inform your Branch about your mobile number updation."
                        },
                        {
                          "htmlContent": true,
                          "label":"What do I do if I receive alerts on my mobile, for the transactions I have not done?",
                          "content":"<span>Immediately hotlist / block the card and file the charge back. Request for the charge back should be sent to HO-CPD through e-mail, giving complete details of the transaction like date, amount, card number etc.</span><br/><span>Charge Back VISA Cards: HeadOffice.visachargeback@bankofindia.co.in</span><br/><span>Charge Back MasterCards: HeadOffice.masterchargeback@bankofindia.co.in</span>"
                        },
                        {
                          "htmlContent": false,
                          "label":"How can I use my Card for E-Commerce transactions?",
                          "content":"Register for your Card through Bank of India’s web site, in the following steps BOI web site => Cards=> select type of the card=> select option for Registration=> give information required=>create Password as per guidelines. It is recommended that you change the password on regular intervals If you have forgotten the password, you can re-generate it by using Forgot password option. Use this password for e-commerce transactions."
                        },
                        {
                          "htmlContent": true,
                          "label":"What is the contact number for Hot-listing cards in case they are lost/ stolen?",
                          "content":"<span>The Contact number/ E-mail ID for Customer Care / Hot-listing of Cards:</span><ul><li>Toll free 24/7/365 Helpline – 1800 220088</li><li>Landline No.022-40426006</li><li>Credit Cards queries : HeadOffice.CPDcreditcard@bankofindia.co.in</li><li>EDC/POS Machine :HeadOffice.CPDedc@bankofindia.co.in</li><li>Charge Back VISA : HeadOffice.visachargeback@bankofindia.co.in</li><li>Charge Back Master : HeadOffice.masterchargeback@bankofindia.co.in</li><li>All other matters : HeadOffice.CPD@bankofindia.co.in</li><li>Card Products Department Address- <br/> Asst. General Manager <br/>BANK OF INDIA<br/>STAR HOUSE - 2,C - 5, 'G' Block, 1st Floor,<br/>Bandra Kurla Complex,Bandra (East), Mumbai 400 051.</li></ul>"
                        }
                      ]
                      }
                    
                  }
                ]

  getApprovedLoanDetails() {
    let params={
      access_token:this.journey.product.access_token,
      loanUuid:this.journey.product.loanUuid,
      microservicetoken:this.journey.product.oauthAccessToken
    }
    this.apiService.fetchPrincipalApprovedDetails(params).then((res:any)=>{
      this.tabsData.forEach(data =>{
      data.LoanData.forEach(loanData =>{
        loanData.emiToBePaid = res.object.emiToBePaid
        loanData.maxLoanAmount = res.object.loanAmount
        loanData.maxTenure = res.object.tenure
      })
      })
      
    })
  }
}
