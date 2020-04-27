import { Component, Input } from "@angular/core";
import { ViewCell } from "ng2-smart-table";

@Component({
  template: `
    <a href="{{ value }}" target="_blank" rel="noopener noreferrer">{{
      value
    }}</a>
  `,
})
export class CustomRendererComponent implements ViewCell {
  @Input() value: any; // This hold the cell value
  @Input() rowData: any; // This holds the entire row object
}
