import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCalendarKitModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbChatModule,
  NbIconModule,
  NbProgressBarModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { GuruhsComponent } from './guruhs.component';



const COMPONENTS = [
    GuruhsComponent,
  ];
  
  const MODULES = [
    NbAlertModule,
    NbActionsModule,
    NbButtonModule,
    NbCalendarModule,
    NbCalendarKitModule,
    NbCalendarRangeModule,
    NbCardModule,
    NbChatModule,
    NbIconModule,
    NbProgressBarModule,
    NbSelectModule,
    NbSpinnerModule,
    NbTabsetModule,
    ThemeModule,
  ];
  
  @NgModule({
    imports: [
      ...MODULES,
    ],
    declarations: [
      ...COMPONENTS,
    ],
  })
  export class GuruhsModule { }
  