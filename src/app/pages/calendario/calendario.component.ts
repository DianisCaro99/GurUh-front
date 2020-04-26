import { Component, OnInit } from "@angular/core";
import { NbDateService } from '@nebular/theme';

@Component({
  selector: "app-calendario",
  templateUrl: "./calendario.component.html",
  styleUrls: ["./calendario.component.scss"],
})
export class CalendarioComponent implements OnInit 
{
  date: Date;
  dateActual: Date;

  constructor(dateService: NbDateService<Date>) 
  {
    this.dateActual = dateService.today();
  }
  ngOnInit(): void {
  }
}
