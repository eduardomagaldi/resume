const commonSkills = ['HTML', 'CSS', 'JavaScript']

export default [
  {
    company: 'Locatelli Advogados',
    logoPath: '/logo-locatelli-min.png',
    logoPadding: '15px',
    sector: 'Tax law',
    location: 'São Paulo, Brazil',
    positions: [
      {
        title: 'Senior full-stack developer',
        start: '02/2022',
        end: '12/2024',
        description:
          'Built a lawsuit management system from scratch, saving many working hours from employees by emailing lawsuit pdf status reports to clients automatically.',
        skills: [
          'Team lead',
          'Vue.js',
          'Node.js',
          'PostgreSQL',
          'GraphQL',
          'Hasura',
          'AWS',
          ...commonSkills,
        ],
      },
    ],
  },

  {
    company: 'Tilda',
    logoPath: '/tilda.png',
    location: 'Berlin, Germany',
    sector: 'Mental health',
    positions: [
      {
        title: 'Senior full-stack developer',
        start: '09/2021',
        end: '01/2022',
        description:
          'Tilda was an app for women 45 or older who had light depression or light mental health issues, learning through content and having weekly online group therapy sessions.',
        skills: [
          'React.js',
          'Node.js',
          'PostgreSQL',
          'GraphQL',
          'Hasura',
          'AWS',
          ...commonSkills,
        ],
      },
    ],
  },

  {
    company: 'Wundertax',
    logoPath: '/wundertax.png',
    logoPadding: '10px',
    sector: 'Income tax',
    location: 'Berlin, Germany',
    positions: [
      {
        title: 'Senior front-end developer',
        start: '09/2020',
        end: '08/2021',
        description:
          'Wundertax is an webapp for simplifying income tax declarations in Germany, it sends the final declaration to the tax office electronically.',
        skills: ['React.js', ...commonSkills],
      },
    ],
  },

  {
    company: 'Talent Rocket',
    logoPath: '/talentrocket.png',
    sector: 'Lawyer recruiting',
    location: 'Munich, Germany',
    positions: [
      {
        title: 'Senior front-end developer',
        start: '03/2018',
        end: '08/2020',
        description:
          'Talent Rocket is a recruiting website for lawyers in Germany. Companies can offer jobs and have profile pages to get in touch with lawyers and hire them.',
        skills: ['Angular.js', 'E2E Testing', ...commonSkills],
      },
    ],
  },

  {
    company: 'BTG Pactual',
    logoPath: '/btg.png',
    via: {
      name: 'BRQ',
      logoPath: '/brq.png',
    },
    sector: 'Investment banking',
    location: 'São Paulo, Brazil',
    positions: [
      {
        title: 'Senior Front-end developer',
        start: '11/2017',
        end: '02/2018',
        description:
          'Single front-end developer of the algotrading contest system Stratsphera, where developers can code their investment strategies in Python directly on the website, select settings, and run their code, checking graphs of performance afterwards. The winners of contests get high prizes in cash.',
        skills: ['Angular', 'Protractor', ...commonSkills],
      },
    ],
  },

  {
    company: 'Mira Educação',
    sector: 'Education',
    logoPath: '/mira.jpeg',
    location: 'São Paulo, Brazil',
    positions: [
      {
        title: 'Senior Front-end developer',
        start: '06/2016',
        end: '10/2017',
        description:
          'First front-end developer of the Mira Portal, which allows teachers to plan lessons that will be automatically downloaded to tablets during classes.',
        skills: ['Angular.js', ...commonSkills],
      },
    ],
  },

  {
    company: 'F.biz',

    sector: 'Advertising agency',
    location: 'São Paulo, Brazil',
    logoPath: '/fbiz.jpg',
    logoColor: '#FADD02',
    positions: [
      {
        title: 'Technology coordinator',
        start: '08/2015',
        end: '06/2016',
        description:
          "I have coordinated third-party developers in Unilever's team. F.biz is one of Unilever's two worldwide production partners, applying layout designs in its CMS platform to most websites of the brand's products, such as Sunsilk, Hellmann's, Cif, Vim, Surf, Lipton, and so on. I acted as point of contact between programmers, international back-end partner, local creative agencies and project team, operating as consultant of layout application viability on the platform.",
        skills: ['Coordination', 'English'],
      },
      {
        title: 'Front-end developer',
        start: '06/2014',
        end: '07/2015',
        description:
          "Front-end developers at F.biz work initially in a guideline, similar to Twitter Bootstrap's documentation. Each module HTML/CSS/JS is built separately, using Sass, and then integrated in a single page using high standards of organization and agile methodology. A great part of the front-end of the sports e-commerce Netshoes was developed by the agency. I have also worked to brands as Unilever, Subaru, Zattini, Toddynho, Multiplus, Claro, NET and Instituto Maria da Penha.",
        skills: [...commonSkills],
      },
    ],
  },

  {
    company: 'Vérios Investimentos',
    sector: 'Investments',
    logoPath: '/verios.jpeg',
    location: 'São Paulo, Brazil',
    positions: [
      {
        title: 'Junior full-stack developer',
        start: '02/2012',
        end: '06/2014',
        description:
          'Built using very recent technologies at the time, as Twitter Bootstrap, Backbone.js, Node.js and Redis as a database, and focusing on performance, comparacaodefundos.com is the pioneer webapp for investment funds search in Brazil. Its architecture based on thick client makes it much faster than any (generally obsolete) national financial software. The webapp was famous in its market and very complimented by its performance.',
        skills: [
          'Bootstrap',
          'Backbone.js',
          'Node.js',
          'Redis',
          ...commonSkills,
        ],
      },
    ],
  },

  {
    company: 'B2ML Sistemas',
    sector: 'Software development',
    logoPath: '/b2ml.png',
    location: 'Itajubá, Brazil',
    positions: [
      {
        title: 'Trainee web developer and designer',
        start: '02/2012',
        end: '06/2014',
        description:
          'B2ml is the largest company inside the incubator of Federal University of Itajubá, Brazil. The startup offers websites based on their own CMS, using Java and pixel perfect design, and also develops awarded software, one of them acquired by Peixe Urbano. Besides learning HTML, Javascript and CSS, I also obtained important design concepts developing layouts.',
        skills: [
          'Web design',
          'Backbone.js',
          'Node.js',
          'Redis',
          ...commonSkills,
        ],
      },
    ],
  },
]
