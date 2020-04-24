import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { ECommerceModule } from "./e-commerce/e-commerce.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { InicioComponent } from "./inicio/inicio.component";
import { DescubreComponent } from "./descubre/descubre.component";
import { FavoritasComponent } from "./favoritas/favoritas.component";
import { GuruhsComponent } from "./guruhs/guruhs.component";
import { RecomendacionesComponent } from "./recomendaciones/recomendaciones.component";
import { EstadisticasComponent } from "./estadisticas/estadisticas.component";
import { CalendarioComponent } from "./calendario/calendario.component";
import { ChatComponent } from "./chat/chat.component";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    InicioComponent,
    DescubreComponent,
    FavoritasComponent,
    GuruhsComponent,
    RecomendacionesComponent,
    EstadisticasComponent,
    CalendarioComponent,
    ChatComponent,
  ],
})
export class PagesModule {}
