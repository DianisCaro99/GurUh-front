import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
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
        link: "/afinidades/descubre",
      },
      {
        title: "Favoritas",
        icon: "star-outline",
        link: "/afinidades/favoritos",
      },
    ],
  },
  {
    title: "Guruhs",
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
