import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ExtraComponentsComponent } from "./extra-components.component";
import { AlertComponent } from "./alert/alert.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { ChatComponent } from "./chat/chat.component";
import { InicioComponent } from "../inicio/inicio.component";

const routes: Routes = [
  {
    path: "",
    component: ExtraComponentsComponent,
    children: [
      {
        path: "calendar",
        component: CalendarComponent,
      },
      {
        path: "alert",
        component: AlertComponent,
      },
      {
        path: "chat",
        component: ChatComponent,
      },
      {
        path: "inicio",
        component: InicioComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraComponentsRoutingModule {}
