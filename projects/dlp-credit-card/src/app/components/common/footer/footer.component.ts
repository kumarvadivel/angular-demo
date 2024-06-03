import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public isSowFooter: boolean;
  public url = ""

  popularProducts = [
    { name: "Agriculture" }, { name: "Corporate Credit" }, { name: "Insurance" }, { name: "Government Business Products" },
    { name: "MSME" }, { name: "Account Creation" }, { name: "Retail" }, { name: "Third Party Products - Fund" }]

  CalculatorsList = [
    { name: "Personal Loan EMI Calculator" }, { name: "Eligibility Calculator" }, { name: "Agri Gold Loan Calculator" }, { name: "More Calculators" }]

  locateList = [
    { name: "Find Branch", url: "https://www.bankofindia.co.in/Home/Locateus?parmtype=Branch" }, { name: "Find ATM", url: "" }, { name: "Find Aadhaar Seva Kendra", url: "https://www.bankofindia.co.in/Home/Locateus?parmtype=Branch" }]
  constructor(private router: Router, public commonVariableService: CommonVariableService, private commonCommonService: CommonCommonService) { }

  navigateTo(url) {
    window.open(url)
  }

}
