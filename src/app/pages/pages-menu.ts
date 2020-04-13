import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Perfil',
    icon: 'people-outline',
    children: [
      {
        title: 'Calendario de actividades',
        icon: 'calendar-outline',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Intereses',
        icon: 'pie-chart-outline',
        link: '/pages/charts/chartjs',
      },
    ],
  },
  {
    title: 'Descubre afinidades',
    icon: 'edit-2-outline',
    link: '/pages/tables/smart-table',
  },
  {
    title: 'Conoce a nuestros gurUhs',
    icon: 'grid-outline',
    link: '/pages/extra-components/alert',
  },
  {
    title: 'Evalua tus opciones',
    icon: 'book-open-outline',
    link: '/pages/tables/smart-table',
  },
  {
    title: 'Configuración de cuenta',
    icon: 'options-outline',
    link: '/pages/forms/inputs',
  },
  {
    title: 'Cerrar sesión',
    icon: 'close-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Chat (próximamente)',
    icon: 'message-circle-outline',
    link: '/pages/extra-components/chat',
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
