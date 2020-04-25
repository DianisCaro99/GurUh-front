import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { ECommerceModule } from "./e-commerce/e-commerce.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { GuruhsComponent } from "./guruhs/guruhs.component";
import { EstadisticasComponent } from "./estadisticas/estadisticas.component";
import { CalendarioComponent } from "./calendario/calendario.component";
import { RecomendacionesModule } from './recomendaciones/recomendaciones.module';
import { ChatFinalModule } from './chat/chat.module';
import { InicioModule } from './inicio/inicio.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    RecomendacionesModule,
    MiscellaneousModule,
    ChatFinalModule,
    InicioModule,
  ],
  declarations: [
    PagesComponent,
    GuruhsComponent,
    EstadisticasComponent,
    CalendarioComponent,
  ],
})
export class PagesModule {}
