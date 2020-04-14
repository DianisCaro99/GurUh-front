import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';

import { LandingPageComponent } from './landingpage.component';


@NgModule({
  imports: [
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
  ],
  declarations: [
    LandingPageComponent,
  ],
})
export class LandingPageModule { }
