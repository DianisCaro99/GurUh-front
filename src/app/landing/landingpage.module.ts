import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbSelectModule,
} from '@nebular/theme';

import { LandingPageComponent } from './landingpage.component';
import { LandingPageRoutingModule } from './landingpage-routing.module';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbTabsetModule,
    NbSelectModule,
    ThemeModule,
    NbProgressBarModule,
    LandingPageRoutingModule,
  ],
  declarations: [
    LandingPageComponent,
  ],
})
export class LandingPageModule { }
