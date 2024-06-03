import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KnowMoreDialogComponent } from '../know-more-dialog/know-more-dialog.component';
import {MatDialog } from '@angular/material/dialog';
import { LoanProgramModel, isSelectedTextEnum } from '@cc-app/components/credit-card/credit-card-selection';
import { LocalStorage } from '@cc-app/shared/helpers/localStorage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() config
  @Input() cardData;
  @Output() status = new EventEmitter<any>()
  loanProgramList: LoanProgramModel[] = [];
  selectedCardVariantName = '';
  isSelectPossible = true;
  selectedCard;
  journey;
  constructor(private route:ActivatedRoute,private dialog: MatDialog, private cdr: ChangeDetectorRef,private localStorage:LocalStorage) { }

  ngOnInit(): void {
     this.loanProgramList = this.cardData.fetchAllEligibleLoanPrograms.loanProgramList;
    this.loanProgramList.forEach((item) => {
      item.isSelectedText = item.isSelected ? isSelectedTextEnum.keySelected : isSelectedTextEnum.keySelect;
    });
    this.route.queryParams.subscribe((params) => {
      if (params && params.isPreviwUpdate) {
        this.activeSelectedCard()
      }
    });
  }

  selectCCVariant(ind: number) {
    this.loanProgramList.forEach((item, itemInd) => {
      if (itemInd == ind) {
        item.isSelected = !item.isSelected;
        item.isSelectedText = item.isSelected ? isSelectedTextEnum.keySelected : isSelectedTextEnum.keySelect;
        this.selectedCardVariantName = item.isSelected ? item.name : '';
        this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY');
        this.selectedCard = item.uuid;
        this.status.emit(item);
        this.localStorage.SessionSetItem("CURRENT_JOURNEY", this.journey);
      } else {
        item.isSelected = false;
        item.isSelectedText = isSelectedTextEnum.keySelect;
      }
    });
    this.cdr.detectChanges();
  }

  activeSelectedCard(){

    for(let item of this.loanProgramList){
      if(item.name == this.cardData.fetchExistingCreditCardDetails.cardType) {
        item.isSelected = !item.isSelected;
        item.isSelectedText = item.isSelected ? isSelectedTextEnum.keySelected : isSelectedTextEnum.keySelect;
        this.selectedCardVariantName = item.isSelected? item.name : '';
      } else {
        item.isSelected = false;
        item.isSelectedText = isSelectedTextEnum.keySelect;
      }
    }
    this.cdr.detectChanges();

  }

  openKnowMoreDialog(ind: number) {
    let dataItemObj;
    if (ind != -1) {
      dataItemObj = this.loanProgramList[ind];
    }

    let dialogRef = this.dialog.open(KnowMoreDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      minWidth: '50vw',
      minHeight: '50vh',
      role:"dialog",
      ariaLabel:"popup",
      data: {
        item: dataItemObj
      }
    });
    dialogRef.afterClosed().subscribe();
  }

}
