import { Certifications } from '../certifications';

export const ArticlesList = [
  // {
  //   id: 0,
  //   title: 'Da música à T.I.',
  //   introText:
  //     'Sempre amante da boa música as influências tecnológicas também tem uma longa data',
  //   text: 'Conhecendo o mundo da tecnologia desde os anos 90 e ter também sobrevivido ao bug do millenium, sempre tive tendências a amar tecnologia, jogos bem como inevitável seria não amar a boa música. A foto acima foi tirada em um festival universitário, e abaixo um vídeo de Thrash gravado há alguns anos atrás.',
  //   image: '/music.png',
  //   imageAlt: 'music',
  //   video: 'https://www.youtube.com/embed/WGos75cSE0o',
  // },
  {
    id: 0,
    title: 'From Music to I.T.',
    introText:
      'Always a lover of good music, technological influences also have a long history',
    text: `Knowing the world of technology since the 90's and having also survived the millennium bug, I've always tended to love technology, games as well as it would be inevitable not to love good music. The photo above was taken at a university festival, and below is a video of Thrash taken a few years ago.`,
    image: '/music.png',
    imageAlt: 'music',
    video: 'https://www.youtube.com/embed/WGos75cSE0o',
  },
  {
    id: 1,
    title: 'Experiences apart',
    introText:
      'A little about my experiences in the job market',
    text: `I've worked as a waiter, bartender, cashier, operational in logistics, finance and now I'm focused on the developer carrer, creating websites, Web Apps, APIs and online systems such as Front-End and Fullstack using JavaScript/TypeScript as main languages.`,
    // text: 'Já trabalhei como garçom, barista, barman, caixa, operacional em logística, financeiro e agora onde estou focado na carreira de desenvolvedor de sites, Web Apps, APIs e sistemas online como Front-End e Fullstack usando como base JavaScript/TypeScript.',
    image: '/jobs.png',
    imageAlt: 'jobs',
    // video: '',
  },
  {
    id: 2,
    title: 'Graduation and Courses',
    introText: `My academic background and completed courses`,
    // introText: `Minha formação acadêmica e cursos concluídos`,
    text: `I'm a Technologist, graduated in Systems Analysis and Development from UNIS-MG, currently my focus is web development, Front-End/Fullstack with React/Next. I have certificates from React, Angular, Express courses among others that you can check in more detail on my linkedin.`,
    image: '/university.png',
    imageAlt: 'university',
    // video: '',
    certifications: Certifications,
  },
];
