import Timeline from '../../components/Timeline'
import Ruler from '../../components/Ruler'
import Experience from '../../components/Experience'
import positionsData from '../../helpers/positionsData'

import './index.scss'

import companiesMap from '../../helpers/companiesData'
import IconText from '../../components/IconText'

const timelineData: any[] = []

companiesMap.forEach((value) => {
  timelineData.push(value)
})

const countryTimelineData = getCountryTimelineData()
const skillsTimelineData = getSkillsTimelineData()
const positionsTimelineData = getPositionsTimelineData()

const page2Data = [positionsData[0], positionsData[1]]
const page3Data = [positionsData[2], positionsData[3], positionsData[4]]
const page4Data = [positionsData[5], positionsData[6]]
const page5Data = [positionsData[7], positionsData[8]]

export default function App() {
  return (
    <>
      <div className="size-a4">
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

              <div className="section-top">
                <div className="section-inner">
                  <div className="title-styled-wrapper title-main-skills">
                    <h2 className="title-styled">
                      <img className="icon-skills" src="/skills.png" />
                      <div className="title-styled-text mt-10 title-other-skills">
                        MAIN SKILLS
                      </div>
                    </h2>
                  </div>

                  {/* <div className="skill-wrapper">
                    <div className="skill">
                      <div className="icon-wrapper">
                        <div className="icon-wrapper-react">
                          <img src="/html.png" className="icon-small-2" />
                        </div>
                      </div>
                      <div>HTML</div>
                    </div>

                    <div className="skill">
                      <div className="icon-wrapper">
                        <div className="icon-wrapper-react">
                          <img src="/css.png" className="icon-small-2" />
                        </div>
                      </div>
                      <div>CSS</div>
                    </div>

                    <div className="skill">
                      <div className="icon-wrapper">
                        <div className="icon-wrapper-react">
                          <img src="/javascript.png" className="icon-small-2" />
                        </div>
                      </div>
                      <div>JavaScript</div>
                    </div>
                  </div> */}

                  {/* <hr /> */}

                  {/* 
                  
                  
                  
                  <IconText iconPath="/backbonejs.png" text="Backbone.js" />
                  <IconText iconPath="/jquery.png" text="jQuery" />
                   */}

                  {/* 
                  
                  
                   */}

                  <div className="skill-wrapper">
                    <IconText iconPath="/html.png" text="HTML" />
                    <IconText iconPath="/css.png" text="CSS" />
                    <IconText iconPath="/javascript.png" text="JavaScript" />
                  </div>

                  <div className="skill-wrapper">
                    <strong className="classification">Front-end:</strong>

                    <IconText iconPath="/vuejs.png" text="Vue.js" />
                    <IconText iconPath="/reactjs.png" text="React" />
                    <IconText iconPath="/angular.png" text="Angular" />
                    <IconText iconPath="/bootstrap.png" text="Bootstrap" />
                  </div>

                  {/* <hr /> */}

                  <div className="skill-wrapper">
                    <strong className="classification">Testing:</strong>

                    <IconText
                      iconPath="/protractor.png"
                      text="Protractor (End-to-end)"
                    />
                  </div>

                  <div className="skill-wrapper">
                    <strong className="classification">Back-end:</strong>

                    <IconText iconPath="/nodejs.png" text="Node.js (Express)" />
                    <IconText iconPath="/graphql.png" text="GraphQL" />
                    <IconText iconPath="/postgresql.png" text="PostgreSQL" />
                    <IconText iconPath="/redis.png" text="Redis" />
                  </div>

                  <div className="skill-wrapper">
                    <strong className="classification">Infrastructure:</strong>

                    <IconText iconPath="/aws.png" text="AWS" />
                  </div>

                  <div className="skill-wrapper">
                    <strong className="classification">Other:</strong>

                    {/* <IconText iconPath="/git.png" text="GIT" /> */}
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
                  <img className="icon-education" src="/education.svg" />
                  <div className="bachelor-text">
                    <div>Bachelor's</div>
                    <div>degree in</div>
                  </div>
                </div>

                <div className="course-wrapper">
                  <h1 className="course">COMPUTER ENGINEERING</h1>
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

              <div className="section-top">
                <div className="section-inner">
                  <Profile />
                </div>
              </div>

              <div className="section-top section-contact">
                <div className="section-inner">
                  <Contact />
                </div>
              </div>
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

          <div className="section">
            <div className="section-wrapper">
              <div className="section-inner w-100">
                <div className="title-styled-wrapper">
                  <h2 className="title-styled">
                    {/* <img className="icon-profile" src="/education.png" /> */}
                    <img className="icon-education" src="/education.svg" />
                    <div className="title-styled-text">EDUCATION</div>
                  </h2>
                </div>

                <div className="wrapper-education">
                  <div className="wrapper-education-inner">
                    <div className="education-content">
                      <div>Bachelor's degree in</div>
                      <strong>Computer Engineering</strong>
                      <div className="d-flex">
                        {/* <IconText iconPath="/calendar.png" text="2008 - " /> */}
                        2008 - 2012
                        {/* <IconText iconPath="/calendar.png" text="2012" /> */}
                      </div>
                    </div>

                    <div className="education-content">
                      <strong>INATEL</strong>
                      <div>
                        Instituto Nacional de <br />
                        Telecomunicações
                      </div>
                    </div>
                    <div className="education-content">
                      <div>&nbsp;</div>
                      <div className="d-flex">
                        <img className="icon-whatsapp" src="/location.png" />
                        <div>Minas Gerais,&nbsp;</div>
                        <div>Brazil</div>
                      </div>
                    </div>
                    <img
                      className="logo-inatel education-content"
                      src="/inatel.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-wrapper">
            <div className="section-inner w-100">
              <div className="title-styled-wrapper">
                <h2 className="title-styled">
                  <img className="icon-education" src="/work.png" />
                  <div className="title-styled-text">EXPERIENCE</div>
                </h2>
              </div>

              <Experience companies={page2Data} />

              <div className="pagination">Page 2 / 5</div>
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
              <Experience companies={page3Data} />

              <div className="pagination">Page 3 / 5</div>
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
              <Experience companies={page4Data} />

              <div className="pagination">Page 4 / 5</div>
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
              <Experience companies={page5Data} />

              <div className="pagination">Page 5 / 5</div>
            </div>
          </div>
        </div>
      </div>
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

      <h1 className="title education">
        <div>SOFTWARE</div>

        <div className="line-second">
          DEVELOPER
          <div className="ball"></div>
        </div>
      </h1>

      <h1 className="title skills">
        <div className="line-1">HTML / CSS</div>
        <div>JAVASCRIPT</div>
      </h1>

      <div className="map">
        {/* <img className="map-img map-img-green" src="/world-green.svg" /> */}
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
      percentage: 19.6,
      year: 2024,
      logoColor: '#2a742a',
      logoShortPath: '/brazil-flag.svg',
      text: 'Brazil - 11 years',
      className: 'brazil',
    },
    {
      percentage: 26.3,
      logoColor: '#DD2327',
      logoShortPath: '/germany-flag.svg',
      text: 'Germany - 4 years',
      className: 'germany',
    },
    {
      percentage: 54.1,
      first: true,
      year: 2010,
      logoColor: '#2a742a',
      logoShortPath: '/brazil-flag.svg',
      logoOnly: true,
      className: 'brazil-flag-only',
    },
  ]
}

function getSkillsTimelineData() {
  return [
    {
      percentage: 19.6,
      year: 2024,
      logoColor: '#41B883',
      logoShortPath: '/vuejs.png',
      text: 'Vue.js',
    },
    {
      percentage: 9.5,
      logoColor: '#387ca0',
      logoShortPath: '/reactjs.png',
      text: 'React',
    },
    {
      percentage: 28.5,
      logoColor: '#C42AF1',
      logoShortPath: '/angular.png',
      text: 'Angular',
    },

    {
      percentage: 12.8,
      logoColor: '#2A73B4',
      logoShortPath: '/jquery.png',
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
    },
  ]
}

function getPositionsTimelineData() {
  return [
    {
      text: 'Full-stack',
      logoShortPath: '/fullstack.png',
      percentage: 19.6 + 2.8,
      logoColor: '#18356e',
      year: 2024,
      className: 'fullstack',
    },
    {
      text: 'Front-end',
      percentage: 12.8 + 6.7 + 16.8 + 2.2 + 9.5,
      logoColor: '#DD2327',
      logoShortPath: '/html.png',
    },
    {
      percentage: 16.8,
      logoColor: '#18356e',
      logoShortPath: '/fullstack.png',
      className: 'fullstack',
    },
    {
      percentage: 12.8,
      logoColor: '#DD2327',
      logoShortPath: '/html.png',
    },
  ]
}

function Profile() {
  return (
    <>
      <div className="title-styled-wrapper">
        <h2 className="title-styled">
          <img className="icon-profile" src="/profile.png" />
          <div className="title-styled-text">PROFILE</div>
        </h2>
      </div>

      <ul className="list-content list-content-first-page">
        <li>
          Experienced front-end developer with great enthusiasm for{' '}
          <strong>Design</strong>, <strong>UI</strong>, and <strong>UX</strong>
        </li>

        <li>
          Strong{' '}
          <a href="https://cantunsee.space/" target="_blank">
            attention to detail
          </a>
        </li>

        <li>
          Familiarity with <strong>RESTful back-ends</strong> and{' '}
          <strong>databases</strong>
        </li>

        <li>
          <strong>Web design</strong> competences
        </li>
        <li>
          Fluent in <strong>English</strong> and <strong>Portuguese</strong>,{' '}
          with good communication skills
        </li>
      </ul>
    </>
  )
}

function Contact() {
  return (
    <>
      <div className="title-styled-wrapper">
        <h2 className="title-styled">
          <img className="icon-profile" src="/phone.png" />
          <div className="title-styled-text">CONTACT INFO</div>
        </h2>
      </div>

      <div className="email-wrapper">
        <img className="icon-email" src="/email.png" />
        <a
          className="email"
          href="mailto:magaldi1989@gmail.com"
          target="_blank"
        >
          magaldi1989<small>@gmail.com</small>
        </a>
      </div>

      <div className="email-wrapper phone-wrapper">
        <img className="icon-whatsapp" src="/whatsapp.png" />
        <a className="email" href="tel:+5511912725949" target="_blank">
          +55 11 91272 5949
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

      <div className="email-wrapper phone-wrapper pagination">Page 1 / 5</div>
    </>
  )
}

// {/* <div className="wrapper-flag">
//             <img className="tooltip-flag" src="/germany-flag.svg" />
//           </div> */}

// {
//   /* <div className="tooltip-11years">
//               <div className="wrapper">
//                 <div className="arrow"></div>
//                 <div className="pill">
//                   <div className="wrapper-flag">
//                     <img className="tooltip-flag" src="/brazil-flag.svg" />
//                   </div>

//                   <div className="pill-text">11 YEARS</div>
//                 </div>
//               </div>
//             </div> */
// }

// {
//   /* <div className="tooltip-h">
//               <div className="tooltip-h-before"></div>
//               <div className="tooltip-h-wrapper">
//                 <div className="wrapper-flag">
//                   <img className="tooltip-flag" src="/brazil-flag.svg" />
//                 </div>

//                 <div className="tooltip-h-text">11 YEARS</div>
//               </div>
//             </div> */
// }
