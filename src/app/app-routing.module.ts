import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./notFound/not-found.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { DescubreComponent } from "./pages/descubre/descubre.component";
import { FavoritasComponent } from "./pages/favoritas/favoritas.component";
import { GuruhsComponent } from "./pages/guruhs/guruhs.component";
import { RecomendacionesComponent } from "./pages/recomendaciones/recomendaciones.component";
import { EstadisticasComponent } from "./pages/estadisticas/estadisticas.component";
import { CalendarioComponent } from "./pages/calendario/calendario.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./auth/reset-password/reset-password.component";
import { LoginGuardian } from "./services/loginGuardian.service";
import { CuentaComponent } from "./cuenta/cuenta.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "inicio",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "forgotpassword",
    component: ForgotPasswordComponent,
  },
  {
    path: "resetpassword",
    component: ResetPasswordComponent,
  },
  {
    path: "",
    component: DashboardComponent,
    canActivate: [LoginGuardian],
    children: [
      {
        path: "inicio",
        component: InicioComponent,
        canActivate: [LoginGuardian],
      },
      {
        path: "descubre",
        component: DescubreComponent,
        canActivate: [LoginGuardian],
      },
      {
        path: "favoritas",
        component: FavoritasComponent,
        canActivate: [LoginGuardian],
      },
      {
        path: "guruhs",
        component: GuruhsComponent,
        canActivate: [LoginGuardian],
      },
      {
        path: "recomendaciones",
        component: RecomendacionesComponent,
        canActivate: [LoginGuardian],
      },
      {
        path: "estadisticas",
        component: EstadisticasComponent,
        canActivate: [LoginGuardian],
      },
      {
        path: "calendario",
        component: CalendarioComponent,
        canActivate: [LoginGuardian],
      },
      {
        path: "chat",
        component: ChatComponent,
        canActivate: [LoginGuardian],
      },
      {
        path: "cuenta",
        component: CuentaComponent,
        canActivate: [LoginGuardian],
      },
      {
        path: "**",
        component: NotFoundComponent,
        canActivate: [LoginGuardian],
      },
    ],
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
