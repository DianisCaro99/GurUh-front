import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";
import { InicioComponent } from "./inicio/inicio.component";
import { GuruhsComponent } from "./guruhs/guruhs.component";
import { EstadisticasComponent } from "./estadisticas/estadisticas.component";
import { CalendarioComponent } from "./calendario/calendario.component";
import { ChatComponentFinal } from "./chat/chat.component";
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: ECommerceComponent,
      },
      {
        path: "layout",
        loadChildren: () =>
          import("./layout/layout.module").then((m) => m.LayoutModule),
      },

      {
        path: "forms",
        loadChildren: () =>
          import("./forms/forms.module").then((m) => m.FormsModule),
      },
      {
        path: "modal-overlays",
        loadChildren: () =>
          import("./modal-overlays/modal-overlays.module").then(
            (m) => m.ModalOverlaysModule
          ),
      },
      {
        path: "extra-components",
        loadChildren: () =>
          import("./extra-components/extra-components.module").then(
            (m) => m.ExtraComponentsModule
          ),
      },
      {
        path: "landing",
        loadChildren: () =>
          import("./landing/landingpage.module").then(
            (m) => m.LandingPageModule
          ),
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./charts/charts.module").then((m) => m.ChartsModule),
      },
      {
        path: "tables",
        loadChildren: () =>
          import("./tables/tables.module").then((m) => m.TablesModule),
      },
      {
        path: "inicio",
        component: InicioComponent,
      },
      {
        path: "afinidades",
        loadChildren: () =>
          import("./afinidades/afinidades.module").then((m) => m.AfinidadesModule),
      },
      {
        path: "recomendaciones",
        component: RecomendacionesComponent
      },
      {
        path: "estadisticas",
        component: EstadisticasComponent,
      },
      {
        path: "calendario",
        component: CalendarioComponent,
      },
      {
        path: "chat",
        component: ChatComponentFinal,
      },
      {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full",
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
