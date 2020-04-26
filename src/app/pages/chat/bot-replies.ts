const botAvatar: string = 'https://i.ytimg.com/vi/Erqi5ckVoEo/hqdefault.jpg';

const fileLink: string = 'http://google.com';

export const botReplies = [
  {
    regExp: /([G,g]uruhs)|([G,g]urUhs)|(guruh)|(Guruh)/g,
    answerArray: ['Contamos con estudiantes universitarios de 11 facultades académicas de diferentes universidades. Ellos te ayudarán a tomar una decisión informada con base sus experiencias académicas y personales.'],
    type: 'text',
    reply: {
      text: '',
      reply: false,
      date: new Date(),
      user: {
        name: 'GurUh',
        avatar: 'https://i.imgur.com/9fmGcuF.jpg',
      },
    },
  },
  {
    regExp: /([A,a]finidades)/g,
    answerArray: [`En esta sección podrás encontrar contenido clasificado por áreas del conocimiento, de esta forma podrás seleccionar como favoritos tus contenidos de interes.`],
    type: 'text',
    reply: {
      text: '',
      reply: false,
      date: new Date(),
      user: {
        name: 'GurUh',
        avatar: 'https://i.imgur.com/9fmGcuF.jpg',
      },
    },
  },
  {
    regExp: /([E,e]stadísticas)|([E,e]stadisticas)|([E,e]stadistica)/g,
    answerArray: [`Mientras tu exploras tus gustos y afinidades, nosotros llevaremos un registro. En esta sección encontrarás una forma dinámica de ver tus preferencias mientras usabas nuestra aplicación.`],
    type: 'text',
    reply: {
      text: '',
      reply: false,
      date: new Date(),
      user: {
        name: 'GurUh',
        avatar: 'https://i.imgur.com/9fmGcuF.jpg',
      },
    },
  },
  {
    regExp: /([C,c]alendario)/g,
    answerArray: [``],
    type: 'text',
    reply: {
      text: '',
      reply: false,
      date: new Date(),
      user: {
        name: 'GurUh',
        avatar: 'https://i.imgur.com/9fmGcuF.jpg',
      },
    },
  },
  {
    regExp: /(.*)/g,
    answerArray: [`Ingresa palabras como "guruhs", "afinidades", "estadísticas", "recomendaciones"  o "calendario" para conocer todo lo que tenemos preparado para ti.`],
    type: 'text',
    reply: {
      text: '',
      reply: false,
      date: new Date(),
      user: {
        name: 'GurUh',
      avatar: 'https://i.imgur.com/9fmGcuF.jpg',
      },
    },
  },
];
