import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';

const routes: Route[] = [
  { path: '', component: Dashboard1Component},
  { path: '**', redirectTo: ''},

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
