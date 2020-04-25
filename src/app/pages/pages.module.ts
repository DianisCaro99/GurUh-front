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
import { EstadisticasComponent } from "./estadisticas/estadisticas.component";
import { CalendarioComponent } from "./calendario/calendario.component";
import { RecomendacionesModule } from './recomendaciones/recomendaciones.module';
import { ChatFinalModule } from './chat/chat.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    RecomendacionesModule,
    MiscellaneousModule,
    ChatFinalModule,
  ],
  declarations: [
    PagesComponent,
    InicioComponent,
    DescubreComponent,
    FavoritasComponent,
    GuruhsComponent,
    EstadisticasComponent,
    CalendarioComponent,
  ],
})
export class PagesModule {}
