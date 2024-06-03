import { Injectable } from "@angular/core";
import { Workbook } from "exceljs";
import { saveAs } from 'file-saver';

@Injectable({
    providedIn: 'root'
})
export class ExportService {
    exportExcel(excelData: any) {
        const title = excelData.title;
        const header = excelData.headers
        const data = excelData.data;
        let workbook = new Workbook();
        let worksheet = workbook.addWorksheet('Sales Data');
        worksheet.addRow(header);
        data.forEach((d: any) => {
            worksheet.addRow(d);
        });
        workbook.xlsx.writeBuffer().then((f) => {
            let blob = new Blob([f], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, title + '.xlsx');
        }).catch(console.error)
    }
}
