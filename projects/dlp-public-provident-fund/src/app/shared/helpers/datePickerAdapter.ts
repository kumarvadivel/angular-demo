import {NativeDateAdapter,DateAdapter} from '@angular/material/core';

export class DatePickerAdapter extends NativeDateAdapter{
    parse(value: string) {
      let it=value.split('/');
      if (it.length==3)
      return new Date(+it[2],+it[1]-1,+it[0],12)
    }
  }