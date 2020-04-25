import { Component, OnInit } from '@angular/core';
import { NbCalendarRange, NbDateService } from '@nebular/theme';
import { DayCellComponent } from './day-cell/day-cell.component';

@Component({
  selector: 'ngx-calendario',
  templateUrl: 'calendario.component.html',
  styleUrls: ['calendario.component.scss'],
  entryComponents: [DayCellComponent],
})
export class CalendarioComponent implements OnInit {

  ngOnInit(): void {
  }

  date = new Date();
  date2 = new Date();
  range: NbCalendarRange<Date>;
  dayCellComponent = DayCellComponent;

  constructor(protected dateService: NbDateService<Date>) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, 3),
      end: this.dateService.addDay(this.monthEnd, -3),
    };
  }

  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }

}
