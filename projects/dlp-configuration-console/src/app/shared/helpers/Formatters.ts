import {Injectable} from "@angular/core";

@Injectable()
export class Formatters {
    dateToUnixParser(date) {
        let dateString = date;
        let dateParts = dateString.split("/");
        let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        return dateObject.valueOf()
    }

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

    template(strings, ...keys) {
        return ((...values) => {
            let dict = values[values.length - 1] || {};
            let result = [strings[0]];
            keys.forEach(function (key, i) {
                let value = Number.isInteger(key) ? values[key] : dict[key];
                result.push(value, strings[i + 1]);
            });
            return result.join('');
        });
    }

    generateRandomColorCode() {
        let color = "#";
        for (let i = 0; i < 3; i++)
            color += ("0" + Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] * Math.pow(16, 2) / 2).toString(16)).slice(-2);
        return color;
    }

    formatCurrency(number) {
        return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(number);
    }
}
