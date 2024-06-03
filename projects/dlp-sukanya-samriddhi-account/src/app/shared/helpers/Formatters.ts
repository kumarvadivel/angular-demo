import {  Injectable } from "@angular/core";
@Injectable()
export class Formatters{ 

    dateToUnixParser(date){
        let dateString =date; // Oct 23
  
        let dateParts = dateString.split("/");
  
        // month is 0-based, that's why we need dataParts[1] - 1
        let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
        
        return dateObject.valueOf()
      }

      //global date formatter
    formatDate(date, sourceFormat, desiredFormat) {
      let exitFormat;
      if (sourceFormat == 'DD/MM/YYYY') {
        if (date != null) {
          let source_date = date.substr(0, 2)
          let source_month = date.substr(3, 2)
          let source_year = date.substr(6, 4)
          if (desiredFormat == 'MM/DD/YYYY') {
            exitFormat = `${source_month}/${source_date}/${source_year}`
          }
        } else {
          exitFormat = ''
        }
      }
      return exitFormat;
    }

    //method for string template formatting
    template(strings, ...keys) {
      return ((...values) => {
        let dict = values[values.length - 1] || {};
        let result = [strings[0]];
        keys.forEach(function(key, i) {
          let value = Number.isInteger(key) ? values[key] : dict[key];
          result.push(value, strings[i + 1]);
        });
        return result.join('');
      });
    }
 

    //format currency from number
    formatCurrency(number){
      return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    getEncryptionFormattedTimestamp() {
      const currentDate = new Date();
    
      const day = this.padZero(currentDate.getDate());
      const month = this.padZero(currentDate.getMonth() + 1); // Months are zero-based
      const year = currentDate.getFullYear();
      const hours = this.padZero(currentDate.getHours());
      const minutes = this.padZero(currentDate.getMinutes());
      const seconds = this.padZero(currentDate.getSeconds());
    
      return `${day}${month}${year}${hours}${minutes}${seconds}`;
    }
    
     padZero(value) {
      // This function adds a leading zero if the value is less than 10
      return value < 10 ? `0${value}` : value;
    }
}