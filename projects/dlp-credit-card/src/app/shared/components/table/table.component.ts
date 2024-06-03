import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() config
  @Output() status = new EventEmitter<any>()
  

  actionEmitter(action,index){
    this.status.emit({action,record:this.config.data[index],recordIndex:index})
  }
  footerAction(config){
    if(config.showFacilityList){
      this.status.emit({action:{actionCode:'FACILITY'}})
    }else{
      this.status.emit({action:{actionCode:'FOOTER'}})
    }
  }
}
