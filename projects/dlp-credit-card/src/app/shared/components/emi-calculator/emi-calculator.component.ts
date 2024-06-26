import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { ConfigurationService } from '@cc-app/services/configuration.service';
import { ApiService } from '@cc-app/services/api.service';
import { LocalStorage } from '@cc-app/shared/helpers/localStorage';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.scss']
})
export class EmiCalculatorComponent implements OnInit {
  @Input() emiCalcData;
  @Input() setMaxAmount;
  @Input() isCheckboxTrue;
  @Output() valueEmit=new EventEmitter()
  loanAmount: number = 1000;
  tenure: number = 1;
  interest
  journey
  pageCode
  emi:any=0;
  loanAmtDisp = {
    dispName: 'Loan Amount',
    min: null,
    max: null,
    steps: 1000,
    binder: null,
    footerStartVal: null,
    footerEndVal: null,
    func: this.formatAmount
  }

  tenureDisp = {
    dispName: 'Tenure',
    min: null,
    max: null,
    steps: 1,
    binder: null,
    footerStartVal: null,
    footerEndVal: null,
    func: this.formatTenure
  }

  constructor(public service :ConfigurationService,public apiService:ApiService,public commonVariableService:CommonVariableService,
    private route: ActivatedRoute,public commonService:CommonCommonService,private localStorage:LocalStorage
    ) { }

  ngOnInit(): void {
    this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    this.loanAmtDisp.min=this.emiCalcData?.minLoanAmount
    this.loanAmtDisp.max=this.emiCalcData?.maxLoanAmount
    this.loanAmtDisp.binder=this.emiCalcData?.maxLoanAmount
    this.loanAmtDisp.footerStartVal=this.formatAmount(this.emiCalcData?.minLoanAmount)
    this.loanAmtDisp.footerEndVal=this.formatAmount(this.emiCalcData?.maxLoanAmount)
    this.tenureDisp.min=this.emiCalcData?.minTenure
    this.tenureDisp.max=this.emiCalcData?.maxTenure
    this.tenureDisp.binder=this.emiCalcData?.maxTenure
    this.tenureDisp.footerStartVal=this.formatTenure(this.emiCalcData?.minTenure)
    this.tenureDisp.footerEndVal=this.formatTenure(this.emiCalcData?.maxTenure)
    this.interest= this.emiCalcData?.interest
    this.emi = this.emiCalcData?.emiToBePaid
    this.calculate(true)
  }

  ngOnChanges(){
    this.loanAmtDisp.binder=this.isCheckboxTrue?this.setMaxAmount:this.emiCalcData?.minLoanAmount;
  }

  formatAmount(value: number) {
    return '₹ '+ new Intl.NumberFormat('en-IN').format(value) ;
  }

  formatTenure(value: number){
    return value + ' months'
  }

  calculate(dontemit?){
    if(this.emiCalcData.rule){
      this.emi =this.formatAmount(this.commonService.applyJsonLogic(this.emiCalcData.rule,{"loanAmount":this.loanAmtDisp.binder,"tenure":this.tenureDisp.binder,"interest":this.interest}))
      const totalEmiDetails={
        totalEmi: this.emi,
        principalAmount:this.loanAmtDisp.binder 
      }
      this.service.totalEmi.next(totalEmiDetails.totalEmi);
      this.service.principalAmount.next(totalEmiDetails.principalAmount);
      
    }else{
      if(this.emiCalcData.dontCalculate){
        this.emiCalcData.loanAmount = this.loanAmtDisp.binder
        this.emiCalcData.tenure = this.tenureDisp.binder
        if(!dontemit){
          this.valueEmit.emit(this.emiCalcData)
        }
      }else{
        this.emi = Math.round(((this.loanAmtDisp.binder / this.tenureDisp.binder)+((this.loanAmtDisp.binder*(this.interest*0.01))/this.tenureDisp.binder)))
        this.emiCalcData.emiToBePaid =this.emi
        // emi calculation formula mentioned below
        // const interest = (amount * (rate * 0.01))/months;
        // const total = ((amount/months) + interest);
        const totalEmiDetails={
          totalEmi: this.emi,
          principalAmount:this.loanAmtDisp.binder 
        }
        this.emiCalcData.emiToBePaid =this.emi
        this.service.totalEmi.next(totalEmiDetails.totalEmi);
        this.service.principalAmount.next(totalEmiDetails.principalAmount);
        }
      }
    
  }

  calculateEmi() {
    this.commonVariableService.sanctionProceedBtnEnable = true
    this.calculate()
  }

  validateValue(data){
    data.binder = Number(data.binder)
    if(isNaN(data.binder)){
      data.binder = data.min
    }

    if(data.binder<data.min){
      data.binder = data.min
    }
    if(data.binder>data.max){
      data.binder = data.max
    }
  }

  
}
