const commonSkills = ['HTML', 'CSS', 'JavaScript']

export default [
  {
    company: 'Locatelli Advogados',
    title: 'Senior full-stack developer',
    start: '2022-02-01',
    end: '2024-12-01',

    description: [
      'Tax lawsuit management system developed from scratch',
      ['Automation of PDF status reports'],
      'Team leadership',
      ['Recruitment of two programmers'],
      'Internal tools development',
      [
        'Retrieving lawsuit API data',
        'Tracking deadlines',
        'Monitoring legal public tax cases',
        'Calculating potential savings',
      ],
      'Volunteer initiative teaching HTML and CSS to non-technical staff',
    ],

    results: [
      'Hired by former employer',
      'Founded an IT team',
      'Significant reduction of employee workload',
      'Crutial support to multiple departments, specially sales',
    ],

    skills: [
      { name: 'Vue.js', img: '/vuejs.png' },
      { name: 'Node.js', img: '/nodejs.png' },
      { name: 'PostgreSQL', img: '/postgresql.png' },
      { name: 'GraphQL', img: '/graphql.png' },
      { name: 'AWS', img: '/aws.png' },
    ],
  },

  {
    company: 'Tilda',

    title: 'Senior full-stack developer',
    start: '2021-09-01',
    end: '2022-01-01',

    description: [
      'Mental health treatment app for women aged 45 and older',
      [
        'Addressing only mild depression and mental health challenges',
        'Educational content',
        'Weekly online group therapy sessions',
      ],
    ],

    results: ['Successfully persuaded CEO to adopt an Apple computer'],

    skills: ['React', 'Node.js', 'PostgreSQL', 'GraphQL', 'AWS'],
  },

  {
    company: 'Wundertax',

    title: 'Senior front-end developer',
    start: '2020-09-01',
    end: '2021-08-01',

    description: [
      'Web app that simplifies income tax declarations in Germany',
      ['Electronically submitting the final declaration to the tax office'],
    ],

    results: [
      'Built landing pages with strict requirements of Google Lighthouse for SEO optimization and usability',
    ],

    skills: ['React', ...commonSkills],
  },

  {
    company: 'Talent Rocket',

    title: 'Senior front-end developer',
    start: '2018-03-01',
    end: '2020-08-01',

    description: [
      'Recruiting platform for lawyers in Germany',
      [
        'Companies post job openings and create profile pages',
        'Goal: connect with and hire legal professionals',
      ],
      'Volunteer work teaching HTML/CSS/JS to refugees',
    ],

    results: [
      'Full set of end-to-end testing development, covering most important features',
    ],
    skills: ['Angular.js', 'E2E Testing', ...commonSkills],
  },

  {
    company: 'BTG Pactual',

    title: 'Senior front-end developer',
    start: '2017-11-01',
    end: '2018-02-01',

    description: [
      'User interface design and development for algorithmic trading platform Stratsphera',
      [
        'Implementation of a live Python coding interface for investment strategies',
        'Included performance graphs providing practical insights',
        'Winners of the contests receive substantial cash prizes',
      ],
    ],

    results: [
      'Projects carried out as a freelancer for former coworkers after relocating abroad',
    ],

    skills: ['Angular', 'Protractor', ...commonSkills],
  },

  {
    company: 'Mira Educação',

    title: 'Senior front-end developer',
    start: '2016-06-01',
    end: '2017-10-01',

    description: [
      'User interface initial development of education platform',
      [
        'Enabled teachers to plan lessons in PDF format',
        'Lessons were downloaded automatically to tablets kept inside public schools',
      ],
    ],

    results: [
      'Successful trial implementation of strategies to improve public education.',
    ],

    skills: ['Angular.js', ...commonSkills],
  },

  {
    company: 'F.biz',

    title: 'Technology coordinator',
    start: '2015-08-01',
    end: '2016-05-01',

    description: [
      "Team coordination for the development and maintenance of software within Unilever's CMS department",
      [
        'Evaluation of design application viability',
        'Assistance with CMS use',
        "Management of development of local product websites of Unilever's multiple brands and countries",
        'Point of contact between foreigner back-end partner, local advertising agencies and third-party developers',
      ],
    ],

    results: [
      "Successful development and maintenance of websites in multiple languages of products such as Sunsilk, Hellmann's, Cif, Vim, Surf, Lipton, etc...",
    ],

    skills: ['Coordination', 'English'],
  },
  {
    company: 'F.biz',

    title: 'Front-end developer',
    start: '2014-07-01',
    end: '2015-07-01',

    description: [
      'Front-end development and maintenance of inumerous websites and landing pages',
      'Development of components independenlty in a "storybook" like documentation platform',
      'Development of ads for digital magazines',
    ],

    results: [
      'Delivered work for companies like Netshoes, Zattini, Unilever, Subaru, Toddynho, Multiplus, Claro and NET',
    ],

    skills: ['jQuery'],
  },

  {
    company: 'Vérios Investimentos',

    title: 'Junior full-stack developer',
    start: '2012-01-01',
    end: '2014-06-01',

    description: [
      'Development of comparacaodefundos.com, web solution for analyzing and comparing investment funds data',
      [
        'Development of a tool to simulate investment fund amounts',
        'Automation, simplification and validation of investment funds registration paperwork',
      ],
    ],

    results: [
      'Significantly reduced errors in filled-out documentation for fund investments',
      'Maintained a symbolic stock option in recognition of the work',
    ],

    skills: ['Backbone.js', 'Node.js', 'Redis', ...commonSkills],
  },

  {
    company: 'B2ml Sistemas',

    title: 'Trainee web developer and designer',
    start: '2010-02-01',
    end: '2011-12-01',

    description: [
      'Design and front-end development of proprietary CMS websites',
      'Largest company within the incubator at the Federal University of Itajubá',
      'Pixel-perfect development',
      'Highly rigid design principles',
    ],

    results: [
      'My design:',
      { src: '/print-mk.jpg' },
      // { src: '/print-mk.jpg' },
      // '/print-authosp.jpg',
    ],

    skills: ['Web design', 'jQuery'],
  },
]
