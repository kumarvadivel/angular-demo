import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog } from '@angular/material/dialog'; 
import { ApiService } from '../../../services/api.service';
import { PopupComponent } from '../popup/popup.component';
import { LocalStorage } from '../../helpers/LocalStorage';
import { CommonVariableService } from '@ssa-app/services/common-variable-service';

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
      this.commonVariableService.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY');
      this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
      let isEmi = this.tabsData.find(e=>e.displayType=='emiCalculator')      
      if(this.journey.product.access_token && isEmi) {
        this.getApprovedLoanDetails()
      }
    }

    termsAndConditions(){
         this.dialog.open(PopupComponent,{
            width: '71%',
            height: '90%',
            disableClose: true,
            role:"dialog",
            ariaLabel:"popup",
            data:{
              title:'Terms & Conditions',
             popupContent:this.termsAndConditionsInfo
            }
          })
    }
    
    termsAndConditionsInfo = [
                  {
                    "label":'Terms & Conditions',
                    "linkType":'POPUP',
                    "isShow":true,
                      "componentType":'ORDERED_LIST',
                      "sectionContent":{
                        "isShow":true,
                        "listItem":["Any Resident Indian who is citizen of India as per FEMA guidelines & having age 18 years and above and provides his/her details in the application form for opening Account offered by Bank of India (“Bank”) is referred as Customer.",
                        "By providing his/her details, customer agrees to the terms and conditions of the Bank as listed in BOI Terms & Conditions link.",
                        "By sharing all the information, customer agrees and consents to provide his/her name, contact details and other information on and at will basis to the Bank.",
                        "Bank shall not be liable for any connectivity/ signal/ data issues leading to non-completion or wrong/false/incomplete information being provided by the customer leading to the incompletion of his/her application.",
                        "The customer herewith agrees to provide his/ her Valid Aadhaar number voluntary (if customer wishes to open Savings or Fixed deposit account through Video KYC) and Valid Pan Card Number. He/she understands that opening an account is subject to correct, complete, and accurate information as provided to Bank.",
                        "Customer agrees that the name in the account will be as per the name updated in Aadhaar Number database and bank shall not be responsible for any erroneous credentials being updated through Aadhaar data base.",
                        "Application once submitted cannot be withdrawn by the customer. Bank shall not be liable to pay for any costs (technical/ data plan related or otherwise) incurred by the customer while sharing his/her details on the application.",
                        "The customer herewith agrees to provide the accurate documentation and information as listed in the application for the purpose of account opening. Customer understands and agrees that failure to provide requisite documentation and information shall result in rejection of application by the Bank. The customer agrees that Bank has every right to reject the account opening application, if there is/are any erroneous, incomplete or misleading information/credentials provided by the customer or for any other reason whatsoever with/without assigning any reason or if KYC documents submitted do not comply with the KYC norms of the Bank.",
                        "This A/C opening process is also available for existing Bank of India customers who already have a customer relationship number (Customer ID) with the bank.",
                        "This A/C opening process is not available for customers who are FATCA reportable. Such customers are requested to approach the branch and to comply with requirement for opening an account.",
                        "Bank reserves the right to take necessary action, legal or otherwise, if it finds any Wilful modification/ withholding of information or misrepresentation by the customer.",
                        "Customers, who would like to deposit funds using the funding facility available while account opening, can do so only from their own bank account and not from a Third-Party Bank account. Bank shall be at liberty to refuse to open the accounts funded from a Third-Party Bank account at its sole discretion.",
                        "Customer understands and agrees that interest on the amount funded online will be paid subject to activation of the account and only from the date when the funds has been credited into the account.",
                        "The customer shall not be able to enjoy the full services provided by the bank unless the customer onboarding process is complete.",
                        "Customer declares and confirms that the Bank shall be entitled to rely on all/any communication, information and details provided on the electronic form and all such communications, information and details shall be final and legally binding on the Customer.",
                        "Customer understands and confirms that the Bank has every right to close or debit freeze the account, if the details provided by him/her are found to be inaccurate, incorrect or false by the Bank or for any other reason whatsoever without assigning any reason thereof. In such an event the bank shall not be liable to pay any interest on the amount of deposit & the refund of amount deposited in the account to the source account. In such an event, bank will retain the documents/video / Photographs (if any) and any other signed document submitted.",
                        "The Customer understands that the Bank is offering video KYC services at the customer’s request to ease the process of account opening for him/her and the Bank shall not be liable for any unauthorized disclosure/misuse of the Customer’s information recorded during Video KYC for any reason whatsoever. The Customer shall indemnify the Bank for any claim/loss/damage/penalty suffered by the Bank due to any negligence or default on part of the customer.",
                        "This application is available for opening a savings account or Fixed Deposit by Resident Indian Individuals only.",
                        "The Bank reserves the right to hold the accounts in Debit Freeze or close the Account even after account activation in case of any discrepancy found as part of regular monitoring and document verification activities.",
                        "The customer agrees to provide the necessary details (Mobile, Email etc.,) as per requirements at the time of submission of details through the application. Bank shall not bear any liability for any loss arising out of customer’s failure to do so.",
                        "The customer herewith agrees to be contacted by the bank to receive information in respect of account maintenance, alerts, payments due, updates on existing and new products, servicing of account for sales, marketing or servicing their relationship with Bank of India, or agents through Telephone/Mobile/SMS/Email/WhatsApp etc. Further he/she understands that the consent to receive calls/communications shall be valid and shall prevail over their current or any subsequent registration of their mobile number for National Do Not Call registry and shall continue to be treated as customer consent/acceptance.",
                        "The customer authorizes Bank to share his/her mobile number and address with the respective mobile operator to verify customer's address at any point of time.",
                        "The customer herewith agrees that if the application is rejected, Bank will retain the documents / Photographs and any other signed document submitted by the customer on the application or otherwise.",
                        "The customer confirms that the account is being opened by him/her for his/her own use and that the mobile number, SIM & device used for opening the account belongs to him and same have not been shared by him with any other individual. The customer further confirms that he/she has not shared the credentials pertaining to the account opening with any other person. In case of any discrepancy, the bank reserves the right to block or close the account without any notice. Customer confirms to have read, understood, and will be bound to/ abide by the Terms and Conditions of account opening and the general terms applicable to account as available on Bank’s website at www.BankofIndia.in. Once an account is opened, the terms and conditions listed as hereabove shall also apply, as per the product selected by the customer.",
                        "The customer agrees to complete his verification through Video KYC (VKYC).",
                        "The customer agrees to the use of Penny Drop API to verify bank details provided by the customer."]
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
