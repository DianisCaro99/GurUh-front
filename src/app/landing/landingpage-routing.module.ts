import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { LandingPageComponent } from './landingpage.component';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {
}
