import Timeline from '../../components/Timeline'
import Ruler from '../../components/Ruler'
// import Experience from '../../components/Experience'
import positionsData from '../../helpers/positionsData'

import './index.scss'

import companiesMap from '../../helpers/companiesData'
import { decrypt } from '../../helpers/encrypt'
import IconText from '../../components/IconText'
import IconTextTitle from '../../components/IconTextTitle'
import { useSearchParams } from 'react-router'
import { useEffect, useState } from 'react'
import ExperienceShort from '../../components/ExperienceShort'

const timelineData: any[] = []

companiesMap.forEach((value) => {
  timelineData.push(value)
})

const countryTimelineData = getCountryTimelineData()
const skillsTimelineData = getSkillsTimelineData()
const positionsTimelineData = getPositionsTimelineData()

const page2Data = [positionsData[0]]
const page2DataShort = [positionsData[1]]
const page3Data = [
  positionsData[2],
  positionsData[3],
  positionsData[4],
  positionsData[5],
]
const page4Data = [positionsData[6], positionsData[7], positionsData[8]]

const phoneNumberFormattedEncrypted =
  'iU03IjBxqpZAr8JeOMcFMyRe/8vLphWImHPnGebnWF2kQJom151ZNTBIkQBB3hPCtbY7oAroaDQP9MNlEg=='
const emailPrefixEncrypted =
  'KmkqrAiZs1PzDmVMU2cOoWcCITUblHdDWhwZGl+Y2wASC2x9He3S0EMQeN9mFdg9DTQ4+IRSSQ=='

export default function App() {
  const [searchParams] = useSearchParams()
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('')
  const [emailPrefix, setEmailPrefix] = useState('')

  useEffect(() => {
    ;(async function enc() {
      const decryptedPhone = await decrypt(
        phoneNumberFormattedEncrypted,
        privateKey,
      )
      if (decryptedPhone !== 'decryption failed!') {
        setFormattedPhoneNumber(decryptedPhone)
      }

      const decryptedEmailPrefix = await decrypt(
        emailPrefixEncrypted,
        privateKey,
      )
      if (decryptedEmailPrefix !== 'decryption failed!') {
        setEmailPrefix(decryptedEmailPrefix)
      }
    })()
  }, [])

  const privateKey: any = searchParams.get('key')

  return (
    <>
      <div className="size-a4 page-first">
        <div className="wrapper-inner-page">
          <div className="section">
            <div className="section-inner">
              <Header />
            </div>
          </div>

          <div className="section-wrapper">
            <div className="section-left">
              <div className="section-inner">
                <Ruler />

                <div className="timeline-experience">
                  <Timeline data={timelineData} />
                </div>

                <div className="timeline-country">
                  <Timeline data={countryTimelineData} />
                </div>

                <div className="timeline-skills">
                  <Timeline data={skillsTimelineData} />
                </div>

                <div className="timeline-positions">
                  <Timeline data={positionsTimelineData} />
                </div>
              </div>

              <div className="section-top section-skills">
                <div className="section-inner">
                  <IconTextTitle iconPath="skills.png" text="MAIN SKILLS" />

                  <div className="skill-wrapper skill-main">
                    <IconText iconPath="/html.png" text="HTML" />
                    <IconText iconPath="/css.png" text="CSS" />
                    <IconText iconPath="/javascript.png" text="JavaScript" />
                  </div>

                  <div className="skill-wrapper">
                    <strong className="classification">Front-end</strong>
                    <div className="d-flex">
                      <IconText iconPath="/vuejs.png" text="Vue.js" />
                      <IconText iconPath="/reactjs.png" text="React" />
                      <IconText iconPath="/angular.png" text="Angular" />
                      <IconText iconPath="/bootstrap.png" text="Bootstrap" />
                    </div>
                  </div>

                  {/* <hr /> */}

                  <div className="skill-wrapper">
                    <strong className="classification">Testing</strong>
                    <div className="d-flex">
                      <IconText
                        iconPath="/protractor.png"
                        text="Protractor (End-to-end)"
                      />
                    </div>
                  </div>

                  <div className="skill-wrapper">
                    <strong className="classification">Back-end</strong>
                    <div className="d-flex">
                      <IconText
                        iconPath="/nodejs.png"
                        text="Node.js (Express)"
                      />
                      <IconText iconPath="/graphql.png" text="GraphQL" />
                      <IconText iconPath="/postgresql.png" text="PostgreSQL" />
                      <IconText iconPath="/redis.png" text="Redis" />
                    </div>
                  </div>

                  <div className="skill-wrapper">
                    <strong className="classification">Infrastructure</strong>
                    <div>
                      <IconText iconPath="/aws.png" text="AWS" />
                    </div>
                  </div>

                  <div className="skill-wrapper">
                    <strong className="classification">Other</strong>

                    <div className="icon-text">
                      GIT, Responsive pages, AJAX, RESTful APIs
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-top">
                <div className="section-inner section-keywords">
                  <strong>Keywords:</strong> #software #developer #programmer
                  #engineer #desenvolvedor #programador #engenheiro #front-end
                  #frontend #full-stack #fullstack #vue #vue.js #react #react.js
                  #angular #angular.js #node.js #node
                  {/* <div className="title-styled-wrapper title-main-skills">
                    <h2 className="title-styled">
                      <img className="icon-skills" src="/skills.png" />
                      <div className="title-styled-text mt-10 title-other-skills">
                        VOLUNTEERING
                      </div>
                    </h2>
                  </div>

                  <span>Teaching HTML/CSS/JavaScript to refugees</span> */}
                </div>
              </div>
            </div>

            <div className="section-right">
              <div className="section-inner">
                <div className="bachelor">
                  <div className="bachelor-text">
                    <div>Bachelor's</div>
                    <div>degree in</div>
                  </div>
                </div>

                <div className="course-wrapper">
                  <IconTextTitle iconPath="education2.png" text="COMPUTER" />
                  <h1 className="engineering">ENGINEERING</h1>
                  <div className="at">at</div>
                </div>

                <img src="/inatel.svg" />
              </div>

              <div className="section-top section-made">
                <div className="section-inner">
                  <div className="made">
                    <div>CV made with</div>
                    <img src="/reactjs.png" className="icon-small" />

                    <div>React</div>
                  </div>
                </div>
              </div>

              <div className="section-top section-profile">
                <div className="section-inner">
                  <Profile />
                </div>
              </div>

              <div className="section-top section-contact">
                <div className="section-inner">
                  <Contact
                    formattedPhoneNumber={formattedPhoneNumber}
                    emailPrefix={emailPrefix}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="size-a4 page-detail">
        <div className="wrapper-inner-page">
          <div className="section">
            {/* <div className="section-inner">bla</div> */}

            <div className="section-wrapper">
              <h1>Eduardo Magaldi</h1>
              <hr />
            </div>
          </div>

          {/* - Highly experienced Computer Engineer with over 15 years of solid hands-on expertise in production user-friendly web development in both Germany and Brazil.
- Proficient in JavaScript (ES6+), HTML, CSS, JSON, AJAX, and HTTP.
- Knowledge of the three major modern front-end frameworks: React, Vue, and Angular.
- Familiarity with RESTful node.js back-ends, relational (PostgreSQL, SQL, GraphQL) and NoSQL (Redis) databases.
- AWS infrastructure competences, with expertise in designing, deploying, and managing cloud solutions.
- Committed with a deep understanding of visual design principles and user interface (UI) impact on user experiences (UX), thanks to a keen eye for detail and prior work as a designer and pixel-perfect developer.
- Strong critical thinking and problem-solving skills, with the ability to drive successful project outcomes. */}

          {/*           
          
- Independently developed and maintained an internal tax lawsuit management system entirely from scratch, choosing cutting-edge technologies (Vue.js, Node and GraphQL) and taking on all responsibilities and challenges with full ownership.
- Team leadership: founded and led the IT team, hiring and supervising two Programmers.
- Integrated court APIs data to automate repetitive tasks, boosting team productivity and eﬃciency optimizing the process of emailing updated lawsuit PDF status reports to B2B clients.
- Created custom calculators to support sales initiatives estimating potential economy of tax lawsuits and enhancing sales proposal accuracy.
- Brought support solving technical issues promptly, minimizing downtime for users and providing stable software.
- Gathered and defined customer requirements to create successful systems meeting unique client needs.
- Used Vuex (similar to Redux) as a singleton design pattern state management strategy.
- Chose Express because of prior background with its chain of responsibility and middleware design patterns.
- Began generating PDFs with PDFKit but switched to a headless Puppeteer Chromium browser Docker image solution, which enabled easier creation of dynamic, content-size adaptable tables using HTML and CSS within the PDF documents.
- Quoted third-party automated unit, interface (e2e) and integration tests development services.
- DevOps practices: used Github Actions for CI/CD (Continuous Integration and Continuous Delivery) pipelines.
- Adopted Amazon Web Services EC2 Linux servers, AWS RDS for database with Hasura platform for GraphQL and AWS Lambda for scheduled routines, using its SDK for nodejs.
- Tasks were managed in Agile Methodology via Kanban Trello board.
- Applied DRY and KISS concepts to write clean, readable, reusable, and maintainable code.
- Version control via GIT and Github.
- Volunteer initiative teaching HTML5 and CSS3 to non-technical staff.
          
           */}
          {/* 

- Contributed to the development of a mental healthcare treatment app for women aged 45 and older, addressing only mild mental health issues, with educational content and weekly online group therapy sessions.
- Utilized SEO best practices to increase website visibility in search engine results and accessibility, following strict requirements of Google Lighthouse, including color contrast.
- Tech stack: ReactJS, React hooks, TypeScript, SASS (SCSS), Node.js, GraphQL, PostgreSQL, Terraform, AWS, Ruby on Rails, Hugo (Golang static site generator - SSG), and Gitlab.


 */}

          {/* 

- Contributed to the frontend development of a recruitment platform for lawyers in Germany, working with B2B and B2C.
- Used scrum methodology with Fibonacci sequence for story point estimation, contributing to sprint planning and reviews.
- Implemented responsive design techniques to ensure websites performed well on desktop, tablet, and mobile browsers and devices.
- Conducted website testing, identifying and fixing bugs for smoother operation and building end-to-end (interface) automated testing suite with Protractor (WebDriverJS / Selenium), covering key features to ensure software stability and mitigate the risk of unforeseen errors caused by new features.
- Real-time connection with WebSockets.
- Volunteer initiative teaching HTML, CSS, and JavaScript to refugees at ReDI School.
- Tech stack: Angular, TypeScript, SASS, PHP, and hosted on DigitalOcean.

 */}

          {/* - Single designer and front-end programmer of algorithmic trading platform Stratsphera, with live Python coding interface for developing investment strategies competition opportunities.
- Tech stack: AngularJS, Design System, CodeMirror, node-sass, webpack, and Java Spring Boot. */}

          <div className="pagination">Page 2 / 4</div>
        </div>
      </div>

      {/* <div className="size-a4 page-detail">
        <div className="wrapper-inner-page">
          <div className="section">
            <div className="section-inner">
              <HeaderShort />
            </div>
          </div>

          <div className="section-wrapper">
            <div className="section-inner w-100">
              

              <ExperienceShort companies={page3Data} />

              <div className="pagination">Page 3 / 4</div>
            </div>
          </div>
        </div>
      </div>

      <div className="size-a4 page-detail">
        <div className="wrapper-inner-page">
          <div className="section">
            <div className="section-inner">
              <HeaderShort />
            </div>
          </div>

          <div className="section-wrapper">
            <div className="section-inner w-100">
              <ExperienceShort companies={page4Data} />

              <div className="pagination">Page 4 / 4</div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

function Header() {
  return (
    <div className="header">
      <big className="big cv">
        <h1>CV</h1>
      </big>

      <h1 className="title name">
        <div className="first">EDUARDO</div>
        <div className="last">MAGALDI</div>
      </h1>

      <img className="software" src="/softwaredeveloper.png" />

      <div className="map">
        <img className="map-img" src="/world-stroke.svg" />

        <div className="bubble bubble-germany">
          <img className="img" src="/germany-flag-rounded.svg" />
        </div>

        <div className="bubble bubble-brazil">
          <img className="img" src="/brazil-flag-rounded.svg" />
        </div>
      </div>
    </div>
  )
}

function HeaderShort() {
  return (
    <>
      <div className="header short">
        <h1 className="title education">
          <div>CV</div>
        </h1>

        <h1 className="title name">
          <div className="first">EDUARDO</div>
          <div className="last">MAGALDI</div>
        </h1>

        <h1 className="title education">
          {/* <div>SOFTWARE</div> */}

          <div className="line-second">DEVELOPER</div>
          <div className="line-second">
            <span className="skills">MORE</span>
            <span>DETAILED</span>
            <span className="line-1">INFO</span>
          </div>
        </h1>
      </div>
    </>
  )
}

function getCountryTimelineData() {
  return [
    {
      percentage: 54.1,
      first: true,
      year: 2010,
      logoColor: '#009548',
      logoShortPath: '/brazil-flag.svg',
      logoOnly: true,
      className: 'brazil-flag-only',
      text: 'Brazil - 8 years',
    },

    {
      percentage: 26.3,
      logoColor: '#DD2327',
      logoShortPath: '/germany-flag.svg',
      text: 'Germany - 4 years',
      className: 'germany',
    },

    {
      percentage: 19.6,
      year: 2024,
      logoColor: '#009548',
      logoShortPath: '/brazil-flag.svg',
      text: 'Brazil - 3 years',
      className: 'brazil',
    },
  ]
}

function getSkillsTimelineData() {
  return [
    {
      percentage: 12.8,
      logoColor: '#2A73B4',
      logoShortPath: '/jquery.png',
      year: 2010,
      first: true,
      text: 'jQuery',
    },

    {
      percentage: 16.8,
      logoColor: '#002A41',
      logoShortPath: '/backbonejs.png',
      text: 'Backbone.js',
      className: 'backbone',
    },

    {
      percentage: 12.8,
      logoColor: '#2A73B4',
      logoShortPath: '/jquery.png',
      text: 'jQuery',
    },

    {
      percentage: 28.5,
      logoColor: '#C42AF1',
      logoShortPath: '/angular.png',
      text: 'Angular',
    },

    {
      percentage: 9.5,
      logoColor: '#387ca0',
      logoShortPath: '/reactjs.png',
      text: 'React',
    },

    {
      percentage: 19.6,
      logoColor: '#41B883',
      logoShortPath: '/vuejs.png',
      text: 'Vue.js',
    },
  ]
}

function getPositionsTimelineData() {
  return [
    {
      percentage: 12.8,
      logoColor: '#DD2327',
      logoShortPath: '/html.png',
      year: 2010,
      first: true,
      text: 'Front-end',
    },

    {
      percentage: 16.8,
      logoColor: '#18356e',
      logoShortPath: '/fullstack.png',
      className: 'fullstack',
      text: 'Full-stack',
    },

    {
      text: 'Front-end',
      percentage: 12.8 + 6.7 + 16.8 + 2.2 + 9.5,
      logoColor: '#DD2327',
      logoShortPath: '/html.png',
    },

    {
      text: 'Full-stack',
      logoShortPath: '/fullstack.png',
      percentage: 19.6 + 2.8,
      logoColor: '#18356e',
      className: 'fullstack',
    },
  ]
}

function Profile() {
  return (
    <>
      {/* <div className="title-styled-wrapper">
        <h2 className="title-styled">
          <img className="icon-profile" src="/profile.png" />
          <div className="title-styled-text">PROFILE</div>
        </h2>
      </div> */}

      <IconTextTitle iconPath="profile.png" text="PROFILE" />

      <ul className="list-content list-content-first-page">
        <li>
          Experienced front-end developer with great enthusiasm for{' '}
          <strong>Design</strong>, <strong>UI</strong>, and <strong>UX</strong>.
        </li>

        <li>
          Strong{' '}
          <a href="https://cantunsee.space/" target="_blank">
            attention to detail
          </a>
          .
        </li>

        <li>
          Familiarity with <strong>RESTful back-ends</strong> and{' '}
          <strong>databases</strong>.
        </li>

        <li>
          <strong>Web design</strong> competences.
        </li>
        <li>
          Fluent in <strong>English</strong> and <strong>Portuguese</strong>,{' '}
          with good communication skills.
        </li>
      </ul>
    </>
  )
}

function Contact({
  formattedPhoneNumber,
  emailPrefix,
}: {
  formattedPhoneNumber: any
  emailPrefix: any
}) {
  return (
    <>
      <IconTextTitle iconPath="phone.png" text="CONTACT INFO" />

      <div className="email-wrapper phone-wrapper">
        <span>
          <small>Name: </small>
          <strong>Eduardo Magaldi</strong>
        </span>
      </div>

      <div className="email-wrapper phone-wrapper">
        <img className="icon-email" src="/email.png" />
        <a
          className="email"
          href={emailPrefix ? `mailto:${emailPrefix}@gmail.com` : undefined}
          target="_blank"
        >
          {emailPrefix || '#########'}
          <small>@gmail.com</small>
        </a>
      </div>

      <div className="email-wrapper phone-wrapper">
        <img className="icon-whatsapp" src="/whatsapp.png" />

        <a
          className="email"
          href={
            formattedPhoneNumber
              ? 'https://wa.me/' + formattedPhoneNumber.replace(/ /g, '')
              : undefined
          }
          target="_blank"
        >
          {formattedPhoneNumber ? formattedPhoneNumber : '+## ## ##### ####'}
        </a>
      </div>

      <div className="email-wrapper phone-wrapper">
        <img className="icon-whatsapp" src="/linkedin.png" />
        <a
          className="email"
          href="https://www.linkedin.com/in/eduardomagaldi"
          target="_blank"
        >
          /in/eduardomagaldi
        </a>
      </div>

      <div className="email-wrapper phone-wrapper">
        <img className="icon-whatsapp" src="/github.png" />
        <a
          className="email"
          href="https://github.com/eduardomagaldi"
          target="_blank"
        >
          /eduardomagaldi
        </a>
      </div>

      <div className="email-wrapper phone-wrapper">
        <img className="icon-whatsapp" src="/globe.png" />
        <a
          className="email"
          href="https://eduardomagaldi.github.io/eduardomagaldi.com.br/"
          target="_blank"
        >
          Portfolio website
        </a>
      </div>

      <div className="email-wrapper phone-wrapper">
        <img className="icon-whatsapp" src="/location.png" />
        <span>Juiz de Fora, Brazil</span>
      </div>

      <div className="email-wrapper phone-wrapper pagination">Page 1 / 4</div>
    </>
  )
}
