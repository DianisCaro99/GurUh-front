import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {
  HttpClientModule,
  HttpClientJsonpModule,
} from "@angular/common/http";
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DataService } from "./services/data.service";
import {
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbCardModule,
  NbActionsModule,
  NbCalendarKitModule,
  NbCalendarModule,
  NbUserModule,
  NbCalendarRangeModule,
  NbChatModule,
  NbProgressBarModule,
  NbSelectModule,
  NbSpinnerModule,
  NbListModule,
  NbTabsetModule,
  NbButtonModule,
  NbInputModule,
  NbAlertModule,
  NbLayoutModule,
  NbIconModule,
  NbCheckboxModule,
  NbThemeService,
  NbAccordionModule,
  NbStepperModule,
  NbFormFieldModule,
} from "@nebular/theme";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./auth/reset-password/reset-password.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { DescubreComponent } from "./pages/descubre/descubre.component";
import { FavoritasComponent } from "./pages/favoritas/favoritas.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { GuruhsComponent } from "./pages/guruhs/guruhs.component";
import { EstadisticasComponent } from "./pages/estadisticas/estadisticas.component";
import { RecomendacionesComponent } from "./pages/recomendaciones/recomendaciones.component";
import { CalendarioComponent } from "./pages/calendario/calendario.component";
import { NotFoundComponent } from "./notFound/not-found.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { LoginGuardian } from "./services/loginGuardian.service";
import { CuentaComponent } from "./pages/cuenta/cuenta.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { RecomendacionesDataService } from "./services/recomendacion.data.service";
import { ChartjsPieComponent } from "./pages/estadisticas/estadisticas-pie.component";
import { ChartjsLineComponent } from "./pages/estadisticas/estadisticas-line.component";
import { NgxEchartsModule } from "ngx-echarts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartModule } from "angular2-chartjs";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    InicioComponent,
    DescubreComponent,
    FavoritasComponent,
    GuruhsComponent,
    RecomendacionesComponent,
    EstadisticasComponent,
    CalendarioComponent,
    ChatComponent,
    NotFoundComponent,
    CuentaComponent,
    ChartjsPieComponent,
    ChartjsLineComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbLayoutModule,
    NbIconModule,
    NbCardModule,
    NbFormFieldModule,
    NbActionsModule,
    NbCalendarKitModule,
    NbCalendarModule,
    NbUserModule,
    NbCalendarRangeModule,
    NbChatModule,
    NbProgressBarModule,
    NbSelectModule,
    NbSpinnerModule,
    NbListModule,
    NbTabsetModule,
    NbButtonModule,
    RouterModule,
    FormsModule,
    NbInputModule,
    NbAlertModule,
    NbCheckboxModule,
    Ng2SmartTableModule,
    ChartModule,
    NgxChartsModule,
    NgxEchartsModule,
    NbAccordionModule,
    NbStepperModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    DataService,
    AuthService,
    LoginGuardian,
    LoginGuardian,
    RecomendacionesDataService,
    NbThemeService,
  ],
})
export class AppModule {}
