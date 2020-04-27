import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  styleUrls: ["dashboard.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class DashboardComponent {
  menu = [
    {
      title: "Inicio",
      icon: "home-outline",
      link: "/inicio",
    },
    {
      title: "Afinidades",
      icon: "edit-outline",
      link: "/descubre",
      children: [
        {
          title: "Descubre",
          icon: "plus-circle-outline",
          link: "/descubre",
        },
        {
          title: "Favoritas",
          icon: "star-outline",
          link: "/favoritas",
        },
      ],
    },
    {
      title: "GurUhs",
      icon: "people-outline",
      link: "/guruhs",
      home: true,
    },
    {
      title: "Recomendaciones (Beta)",
      icon: "bulb-outline",
      link: "/recomendaciones",
    },
    {
      title: "Estadísticas (Próximamente)",
      icon: "pie-chart-outline",
      link: "/estadisticas",
    },

    {
      title: "Calendario (Próximamente)",
      icon: "calendar-outline",
      link: "/calendario",
    },
    {
      title: "Chat (próximamente)",
      icon: "message-circle-outline",
      link: "/chat",
    },
  ];
}
