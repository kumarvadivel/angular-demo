export class LoanProgramModel {
    code: string;
    description:  string;
    descriptionHtml:  string;
    endDate:  string; // "30/06/2031"
    identifierNumberOne:  string;
    identifierNumberTwo:  string; // nullable
    isActive = true; // boolean
    isDefault = false; // boolean
    maxDurationInMonths:  string; // nullable
    maxInterestRate:  string; // nullable
    maxLoanAmount: number;
    minDurationInMonths:  string; // nullable
    minInterestRate:  string; // nullable
    minLoanAmount: number;
    name:  string;
    programImageDownloadUrl:  string;
    specialChargeCategoryCode:  string; // nullable
    startDate:  string; // "01/05/2022"
    typeOfAdvance:  string; // nullable
    uuid: string;

    isSelected = false;
    isSelectedText = isSelectedTextEnum.keySelect;
    isSelectPossible = true;
}

export enum isSelectedTextEnum { 'keySelect' = 'Select', 'keySelected' = 'Selected' }

export class FetchExistingCCDetails{
  borrowerDetailNumberVariable11: string; // nullable
  borrowerDetailTextVariable65: string;
  cardType: string;
  existingCreditCardList: ExistingCreditCardList[] = [];
}
  
export class ExistingCreditCardList {
  cardNumber: string;
  cardLimit: string;
  cardType: string;
}

export const CompareCardsDataItem = {
name: "Compare Cards",
descriptionHtml: `
<p><span style=\"font-size: 13pt;\"><strong>Schedule of Charges:</strong></span></p>
\r\n
<p>Entrance Fee, Anual Membership Fees and Replacement Card Charges without GST.</p>
\r\n<table class=\"table table-responsive table-borderless\" style=\"border-collapse: collapse; width: 100%;\" border=\"1\">\r\n
<thead>
  \r\n
  <tr class=\"bg-light\">
    \r\n<th style=\"width: 15.5267%;\"><strong>Card</strong></th>\r\n<th style=\"width: 17.8067%;\"><strong>Type</strong></th>\r\n<th style=\"width: 16.6667%;\"><strong>Entrance Fee</strong></th>\r\n<th style=\"width: 16.6667%;\">\r\n
    <p><strong>Annual Membership Fee</strong></p>
    \r\n
    <p><strong>Principle&nbsp;</strong></p>
    \r\n</th>\r\n<th style=\"width: 16.6667%;\">\r\n
    <p><strong>Annual Membership Fee</strong></p>
    \r\n
    <p><strong>Add-On</strong></p>
    \r\n</th>\r\n<th style=\"width: 16.6667%;\">\r\n
    <p><strong>Replacement Charges&nbsp;</strong></p>
    \r\n
    <p><strong>Principle/Add-on</strong></p>
    \r\n</th>\r\n
  </tr>
  \r\n
</thead>
\r\n
<tbody>
  \r\n
  <tr class=\"tablebottom\">\r\n<td style=\"width: 15.5267%;\">&nbsp;India Card</td>\r\n<td style=\"width: 17.8067%;\">&nbsp;Credit</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n</tr>
  
  <tr class=\"tablebottom\">\r\n<td style=\"width: 15.5267%;\">&nbsp;SwaDhan Rupay Platinum</td>\r\n<td style=\"width: 17.8067%;\">&nbsp;Credit</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n</tr>
  
  <tr class=\"tablebottom\">\r\n<td style=\"width: 15.5267%;\">&nbsp;Gold Card International – Visa</td>\r\n<td style=\"width: 17.8067%;\">&nbsp;Credit</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 500</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 500</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n</tr>
  
  <tr class=\"tablebottom\">\r\n<td style=\"width: 15.5267%;\">&nbsp;Rupay Platinum</td>\r\n<td style=\"width: 17.8067%;\">&nbsp;Credit</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n</tr>
  
    <tr class=\"tablebottom\">\r\n<td style=\"width: 15.5267%;\">&nbsp;Visa Platinum-international</td>\r\n<td style=\"width: 17.8067%;\">&nbsp;Credit</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 500</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 500</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n</tr>
    
      <tr class=\"tablebottom\">\r\n<td style=\"width: 15.5267%;\">&nbsp;Master Platinum-international</td>\r\n<td style=\"width: 17.8067%;\">&nbsp;Credit</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 1000</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 1000</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 500</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n</tr>
  \r\n
</tbody>
\r\n</table>

\r\n
<p><strong>Note: Issuance and Annual charges in respect of all cards are exempt for the following categories:</strong></p>
\r\n
<ol>
  \r\n
  <ol>
    \r\n
    <li>Staff/Ex-Staff</li>
    \r\n
    <li>Senior Citizen</li>
    \r\n
  </ol>
  \r\n
</ol>
\r\n`
}