import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ContentListRoutingModule, routedComponents } from './content-list-routing.module';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    ContentListRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ContentListModule { }