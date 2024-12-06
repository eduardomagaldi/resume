const commonSkills = ['HTML', 'CSS', 'JavaScript']

const locatelli = {
  company: 'Locatelli Advogados',
  logoPath: '/logo-locatelli-min.png',
  logoPadding: '15px',
  sector: 'Tax law',
  location: 'São Paulo, Brazil',
  logoColor: '#E94E25',
  today: true,
}

const tilda = {
  company: 'Tilda',
  logoPath: '/tilda.png',
  location: 'Berlin, Germany',
  sector: 'Mental health',
  logoColor: '#409B88',
}

const wundertax = {
  company: 'Wundertax',
  logoPath: '/wundertax.png',
  logoPadding: '10px',
  sector: 'Income tax',
  location: 'Berlin, Germany',
  logoColor: '#41CB9C',
}

const talentrocket = {
  company: 'Talent Rocket',
  logoPath: '/talentrocket.png',
  sector: 'Lawyer recruiting',
  location: 'Munich, Germany',
  logoColor: '#04182B',
}

const btg = {
  company: 'BTG Pactual',
  logoPath: '/btg.png',
  via: {
    name: 'BRQ',
    logoPath: '/brq.png',
  },
  sector: 'Investment banking',
  location: 'São Paulo, Brazil',
  logoColor: '#0C1E62',
}

const mira = {
  company: 'Mira Educação',
  sector: 'Education',
  logoPath: '/mira.jpeg',
  location: 'São Paulo, Brazil',
  logoColor: '#F6892B',
}

const fbiz = {
  company: 'F.biz',
  sector: 'Advertising agency',
  location: 'São Paulo, Brazil',
  logoPath: '/fbiz.jpg',
  logoColor: '#FADD02',
}

const verios = {
  company: 'Vérios Investimentos',
  sector: 'Investments',
  logoPath: '/verios.jpeg',
  location: 'São Paulo, Brazil',
  logoColor: '#3EB9BD',
}

const b2ml = {
  company: 'B2ML Sistemas',
  sector: 'Software development',
  logoPath: '/b2ml.png',
  location: 'Itajubá, Brazil',
  logoColor: '#282828',
}

export default [
  {
    ...locatelli,
    positions: [
      {
        title: 'Senior full-stack developer',
        start: '2022-02-01',
        end: '2024-12-01',

        ...locatelli,

        description: [
          'Built a lawsuit management system from scratch, saving many working hours from employees by emailing lawsuit pdf status reports to clients automatically.',

          'Developed a lawsuit management system from scratch, significantly reducing employee workload by automatically emailing clients PDF status reports on their lawsuits.',

          'Developed a tax lawsuit management system from scratch, significantly reducing employee workload by automatically emailing clients PDF status reports on their cases. After that, hired 2 other programmers and leaded the team developing internal tools to manage deadlines, keep track of public lawsuits throughout the market, calculate potential lawsuit savings, being an important support for most of the company teams.',

          'Developed a tax lawsuit management system from scratch, significantly reducing employee workload by automatically emailing clients PDF status reports on their cases. Following this, I hired two additional programmers and led the team in developing internal tools to fetch lawsuit api data automatically, manage deadlines, monitor public lawsuits in the market, and calculate potential savings from lawsuits, providing crucial support to various teams across the company.',

          'Developed a tax lawsuit management system from scratch, significantly reducing employee workload by sending automatic PDF status reports to clients. Following this, I recruited two more programmers and led the team building internal tools to independently retrieve lawsuit API data, track deadlines, monitor public legal tax cases, and calculate possible savings, providing crucial support to various departments.',

          'Developed from scratch a tax lawsuit management system that automated PDF status reports, significantly reducing employee workload. Subsequently, I recruited two programmers and led the team in developing internal tools for retrieving lawsuit API data, tracking deadlines, monitoring legal tax cases, and calculating potential savings, supporting multiple departments, specially sales.',

          [
            'Tax lawsuit system developed from scratch',
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
        ],

        results: [
          'Founded an IT team',
          'Significant reduction of employee workload',
          'Crutial support to multiple departments, specially sales',
        ],

        skills: [
          { name: 'Team leading', img: '/team-leading.png' },
          { name: 'Vue.js', img: '/vuejs.png' },
          { name: 'Node.js', img: '/nodejs.png' },
          { name: 'PostgreSQL', img: '/postgresql.png' },
          { name: 'GraphQL', img: '/graphql.png' },

          // 'GraphQL',
          // 'Hasura',
          // 'AWS',
          ...commonSkills,
        ],
      },
    ],
  },

  {
    ...tilda,
    positions: [
      {
        title: 'Senior full-stack developer',
        start: '2021-09-01',
        end: '2022-01-01',

        ...tilda,

        description: [
          'Tilda was an app for women 45 or older who had light depression or light mental health issues, learning through content and having weekly online group therapy sessions.',

          'Tilda was an app designed for women aged 45 and older experiencing mild depression or mental health challenges, offering educational content and weekly online group therapy sessions.',

          [
            'Mental health treatment app for women aged 45 and older',
            [
              'Addressing only mild depression and mental health challenges',
              'Educational content',
              'Weekly online group therapy sessions',
            ],
          ],
        ],

        results: [
          'Assist in the acquisition and development of internal tools for multiple teams',
          'Interaction with newer technologies such as GraphQL',
          'Successfully persuaded CEO to adopt an Apple computer',
        ],

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
    ...wundertax,
    positions: [
      {
        title: 'Senior front-end developer',
        start: '2020-09-01',
        end: '2021-08-01',

        ...wundertax,

        description: [
          'Wundertax is an webapp for simplifying income tax declarations in Germany, it sends the final declaration to the tax office electronically.',

          'Wundertax is a web app that simplifies income tax declarations in Germany, electronically submitting the final declaration to the tax office.',

          [
            'Web app that simplifies income tax declarations in Germany',
            [
              'Electronically submitting the final declaration to the tax office',
            ],
          ],
        ],

        results: [
          'Built landing pages with strict requirements of Google Lighthouse for SEO optimization',
        ],

        skills: ['React.js', ...commonSkills],
      },
    ],
  },

  {
    ...talentrocket,
    positions: [
      {
        title: 'Senior front-end developer',
        start: '2018-03-01',
        end: '2020-08-01',

        ...talentrocket,

        description: [
          'Talent Rocket is a recruiting website for lawyers in Germany. Companies can offer jobs and have profile pages to get in touch with lawyers and hire them.',

          'Talent Rocket is a recruiting platform for lawyers in Germany. Companies can post job openings and create profile pages to connect with and hire legal professionals.',

          [
            'Recruiting platform for lawyers in Germany',
            [
              'Companies can post job openings and create profile pages',
              'Goal: connect with and hire legal professionals',
            ],
            'Volunteer work teaching HTML/CSS/JS to refugees',
          ],
        ],

        results: [
          'Full set of end-to-end testing development, essential for quality control in extensive software projects.',
        ],
        skills: ['Angular.js', 'E2E Testing', ...commonSkills],
      },
    ],
  },

  {
    ...btg,
    positions: [
      {
        title: 'Senior Front-end developer',
        start: '2017-11-01',
        end: '2018-02-01',

        ...btg,

        description: [
          'Single front-end developer of the algotrading contest system Stratsphera, where developers can code their investment strategies in Python directly on the website, select settings, and run their code, checking graphs of performance afterwards. The winners of contests get high prizes in cash.',

          "I'm the sole front-end developer for Stratsphera, an algorithmic trading contest platform where users can code their investment strategies in Python directly on the website. Participants can customize their settings, execute their code, and review performance graphs afterward. Winners of the contests receive substantial cash prizes.",

          [
            'User interface design and development for algorithmic trading platform Stratsphera',
            [
              'Implementation of a live Python coding interface for investment strategies',
              'Included performance graphs that provide practical insights',
              'Winners of the contests receive substantial cash prizes',
            ],
          ],
        ],

        results: [
          'Projects carried out as a freelancer for past coworkers after relocating abroad.',
        ],

        skills: ['Angular', 'Protractor', ...commonSkills],
      },
    ],
  },

  {
    ...mira,
    positions: [
      {
        title: 'Senior Front-end developer',
        start: '2016-06-01',
        end: '2017-10-01',

        ...mira,

        description: [
          'First front-end developer of the Mira Portal, which allows teachers to plan lessons that will be automatically downloaded to tablets during classes.',

          'First front-end developer of a platform that enabled teachers to plan lessons that were automatically downloaded to tablets during class of public schools.',

          [
            'User interface initial development of education platform',
            [
              'Enabled teachers to plan lessons',
              'Lessons were downloaded automatically to tablets kept inside public schools',
            ],
          ],
        ],

        results: [
          'Successful trial implementation of strategies to improve public education.',
        ],

        skills: ['Angular.js', ...commonSkills],
      },
    ],
  },

  {
    ...fbiz,
    positions: [
      {
        title: 'Technology coordinator',
        start: '2015-08-01',
        end: '2016-05-01',

        ...fbiz,

        description: [
          "I have coordinated third-party developers in Unilever's team. F.biz is one of Unilever's two worldwide production partners, applying layout designs in its CMS platform to most websites of the brand's products, such as Sunsilk, Hellmann's, Cif, Vim, Surf, Lipton, and so on. I acted as point of contact between programmers, international back-end partner, local creative agencies and project team, operating as consultant of layout application viability on the platform.",

          "I coordinated third-party developers within the Unilever team, specifically working with F.biz, one of the company's two global production partners. They apply layout designs on their CMS platform for many of Unilever's product websites, including Sunsilk, Hellmann's, Cif, Vim, Surf, Lipton, and more. In this role, I served as the main point of contact between programmers, our international back-end partner, local creative agencies, and the project team, consulting on the feasibility of layout applications on the platform.",

          [
            "Team coordination for the development and maintenance of software within Unilever's CMS department",
            [
              'Evaluation of design application viability',
              'Assistance with utilizing the CMS',
              "Management of development of local product websites of Unilever's multiple brands and countries",
              'Point of contact between foreigner back-end partner, local advertising agencies and third-party developers',
            ],
          ],
        ],

        results: [
          "Successful development and maintenance of websites in multiple languages of products such as Sunsilk, Hellmann's, Cif, Vim, Surf, Lipton, and so on.",
        ],

        skills: ['Coordination', 'English'],
      },
      {
        title: 'Front-end developer',
        start: '2014-07-01',
        end: '2015-07-01',

        ...fbiz,

        description: [
          "Front-end developers at F.biz work initially in a guideline, similar to Twitter Bootstrap's documentation. Each module HTML/CSS/JS is built separately, using Sass, and then integrated in a single page using high standards of organization and agile methodology. A great part of the front-end of the sports e-commerce Netshoes was developed by the agency. I have also worked to brands as Unilever, Subaru, Zattini, Toddynho, Multiplus, Claro, NET and Instituto Maria da Penha.",

          "Front-end developers at F.biz start by following a guideline similar to the documentation for Twitter Bootstrap. Each module—HTML, CSS, and JavaScript—is built independently using Sass and then integrated into a single page with a strong focus on organization and agile methodology. A significant portion of the front-end for the sports e-commerce site Netshoes was developed by the agency. I've also worked with brands such as Unilever, Subaru, Zattini, Toddynho, Multiplus, Claro, NET, and Instituto Maria da Penha.",

          [
            'Front-end development and maintenance of inumerous websites and landing pages',
            'Development of components independenlty in a "storybook" like documentation platform',
          ],
        ],

        results: [
          'Successful development of software for large brazilian and international companies like Zattini, Unilever, Subaru, Toddynho, Multiplus, Claro, NET, on so on.',
        ],

        skills: [...commonSkills],
      },
    ],
  },

  {
    ...verios,
    positions: [
      {
        title: 'Junior full-stack developer',
        start: '2012-01-01',
        end: '2014-06-01',

        ...verios,

        description: [
          'Built using very recent technologies at the time, as Twitter Bootstrap, Backbone.js, Node.js and Redis as a database, and focusing on performance, comparacaodefundos.com is the pioneer webapp for investment funds search in Brazil. Its architecture based on thick client makes it much faster than any (generally obsolete) national financial software. The webapp was famous in its market and very complimented by its performance.',

          "comparacaodefundos.com is Brazil's pioneering web application for searching investment funds. Its thick client architecture makes it significantly faster than existing (often outdated) national financial software. The web app gained a strong reputation in its market and received high praise for its performance.",

          [
            'Development of comparacaodefundos.com, web solution for analyzing and comparing investment funds data',
            [
              'Data retrieved from government agency CVM',
              'Development of a tool to simulate investment fund amounts',
            ],
          ],
        ],

        results: [
          'Maintained a symbolic stock option in recognition of the work.',
        ],

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
    ...b2ml,
    positions: [
      {
        title: 'Trainee web developer and designer',
        start: '2010-02-01',
        end: '2011-12-01',

        ...b2ml,

        description: [
          'B2ml is the largest company inside the incubator of Federal University of Itajubá, Brazil. The startup offers websites based on their own CMS, using Java and pixel perfect design, and also develops awarded software, one of them acquired by Peixe Urbano. Besides learning HTML, Javascript and CSS, I also obtained important design concepts developing layouts.',

          'B2ml is the largest company within the incubator at the Federal University of Itajubá in Brazil. This startup specializes in creating websites using its proprietary CMS, built with Java and featuring pixel-perfect design.',

          [
            'Design and front-end development of proprietary CMS websites',
            'Largest company within the incubator at the Federal University of Itajubá',
            'Pixel-perfect development',
            'Highly rigid design principles.',
          ],
        ],

        results: [
          'Projects designed by me:',
          '/print-mk.jpg',
          '/print-authosp.jpg',
        ],

        skills: ['Web design', 'jQuery', ...commonSkills],
      },
    ],
  },
]
