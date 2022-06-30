import { Certifications } from '../certifications';

export const ArticlesList = [
  {
    id: 0,
    title: 'Da música à T.I.',
    introText:
      'Sempre amante da boa música as influências tecnológicas também tem uma longa data',
    text: 'Conhecendo o mundo da tecnologia desde os anos 90 e ter também sobrevivido ao bug do millenium, sempre tive tendências a amar tecnologia, jogos bem como inevitável seria não amar a boa música. A foto acima foi tirada em um festival universitário, e abaixo um vídeo de Thrash gravado há alguns anos atrás.',
    image: '/music.png',
    imageAlt: 'music',
    video: 'https://www.youtube.com/embed/WGos75cSE0o',
  },
  {
    id: 1,
    title: 'Experiências à parte',
    introText:
      'Um pouco sobre as minhas experiências no mercado de trabalho',
    text: 'Já trabalhei como garçom, barista, barman, caixa, operacional em logística, financeiro e agora onde estou focado na carreira de desenvolvedor de sites, Web Apps, APIs e sistemas online como Front-End e Fullstack usando como base JavaScript/TypeScript.',
    image: '/jobs.png',
    imageAlt: 'jobs',
    // video: '',
  },
  {
    id: 2,
    title: 'Formação e Cursos',
    introText: `Minha formação acadêmica e cursos concluídos`,
    text: 'Sou Tecnólogo, graduado em Análise e Desenvolvimento de Sistemas pela UNIS-MG, atualmente meu foco é desenvolvimento web, Front-End/Fullstack com React/Next. Tenho certificados dos cursos de React, Angular, Express dentre outros que você pode checar com maiores detalhes no meu linkedin.',
    image: '/university.png',
    imageAlt: 'university',
    // video: '',
    certifications: Certifications,
  },
];
