import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AfinidadesComponent } from "./afinidades.component";
import { DescubreComponent } from "./descubre/descubre.component";
import { FavoritosComponent } from "./favoritos/favoritos.component";

const routes: Routes = [
  {
    path: "",
    component: AfinidadesComponent,
    children: [
      {
        path: "descubre",
        component: DescubreComponent,
      },
      {
        path: "favoritos",
        component: FavoritosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfinidadesRoutingModule {}

export const routedComponents = [AfinidadesComponent, DescubreComponent, FavoritosComponent];
