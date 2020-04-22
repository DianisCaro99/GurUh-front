import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Landing page',
    icon: 'edit-2-outline',
    link: '/landing',
    
  },
  {
    title: 'Descubre afinidades',
    icon: 'edit-2-outline',
    link: '/tables/smart-table',
    home: true
  },
  
 
  {
    title: 'Calendario de actividades',
    icon: 'calendar-outline',
    link: '/extra-components/calendar',
  },
  {
        title: 'Intereses',
        icon: 'pie-chart-outline',
        link: '/charts/chartjs',
      },
  {
    title: 'Conoce a nuestros gurUhs',
    icon: 'grid-outline',
    link: '/extra-components/alert',
  },
  {
    title: 'Evalua tus opciones',
    icon: 'book-open-outline',
    link: '/tables/smart-table',
  },
  {
    title: 'Configuración de cuenta',
    icon: 'options-outline',
    link: '/forms/inputs',
  },
  {
    title: 'Chat (próximamente)',
    icon: 'message-circle-outline',
    link: '/extra-components/chat',
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
