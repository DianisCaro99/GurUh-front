import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { ChartjsLineComponent } from './estadisticas-line.component';
import { ChartjsPieComponent } from './estadisticas-pie.component';
import {EstadisticasComponent} from './estadisticas.component'
const components = [
  ChartjsLineComponent,
  ChartjsPieComponent,
  EstadisticasComponent
];

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    NbCardModule,
  ],
  declarations: [ ...components],
})
export class EstadisticasModule {}
