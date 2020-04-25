import { NgModule } from '@angular/core';
import {
  NbAccordionModule,
  NbStepperModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { InicioComponent } from './inicio.component';
import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    ngFormsModule,
    NbAccordionModule,
    NbStepperModule,
  ],
  declarations: [
    InicioComponent
  ],
})
export class InicioModule { }