import Timeline from '../../components/Timeline'
import Ruler from '../../components/Ruler'

import './index.scss'

import companiesMap from '../../helpers/companiesData'

const timelineData: any[] = []

companiesMap.forEach((value, key) => {
  console.log('value.company', value.company, value.percentage)
  timelineData.push(value)
})

const countryTimelineData = getCountryTimelineData()
const skillsTimelineData = getSkillsTimelineData()

export default function App() {
  return (
    <>
      {/* <div className="guide guide-h" style={{ top: '46px' }}></div>

      <div className="guide guide-h" style={{ top: '131px' }}></div> */}

      <div className="section">
        <Header />
      </div>

      <div className="section-wrapper">
        <div className="section-left">
          <div className="section-inner">
            {/* <img className="made" src="/made.png" /> */}

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
          </div>

          <div className="section-top">
            <div className="section-inner">
              <div className="title-styled-wrapper title-main-skills">
                <h2 className="title-styled">
                  <div className="title-styled-text mt-10 title-other-skills">
                    MAIN SKILLS
                  </div>
                </h2>
              </div>

              <div className="skill-wrapper">
                <div className="skill">
                  <div className="icon-wrapper">
                    <div className="icon-wrapper-react">
                      {/* <strong className="icon-html">{'</>'}</strong> */}
                      <img src="/html.png" className="icon-small-2" />
                    </div>
                  </div>
                  <div>HTML</div>
                </div>

                <div className="skill">
                  <div className="icon-wrapper">
                    <div className="icon-wrapper-react">
                      <strong className="icon-css">{'{ }'}</strong>
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
              </div>

              {/* <hr /> */}

              <div className="skill-wrapper">
                <strong className="classification">Front-end:</strong>

                <div className="skill">
                  <div className="icon-wrapper">
                    <img src="/vuejs.png" className="icon-small-2 icon-vue" />
                  </div>
                  <div>Vue.js</div>
                </div>

                <div className="skill">
                  <div className="icon-wrapper">
                    <div className="icon-wrapper-react">
                      <img src="/reactjs.png" className="icon-small-2" />
                    </div>
                  </div>
                  <div>React</div>
                </div>

                <div className="skill">
                  <div className="icon-wrapper">
                    <img src="/angular.png" className="icon-small-2" />
                  </div>
                  <div>Angular</div>
                </div>

                <div className="skill">
                  <div className="icon-wrapper">
                    <img
                      src="/backbonejs.png"
                      className="icon-small-2 icon-backbone"
                    />
                  </div>
                  <div>Backbone.js</div>
                </div>

                <div className="skill">
                  <div className="icon-wrapper">
                    <img src="/jquery.png" className="icon-small-2" />
                  </div>
                  <div>jQuery</div>
                </div>
              </div>

              {/* <hr /> */}

              <div className="skill-wrapper">
                <strong className="classification">Testing:</strong>

                <div className="skill">
                  <div className="icon-wrapper">
                    <img src="/protractor.png" className="icon-small-2" />
                  </div>
                  <div>Protractor (End-to-end)</div>
                </div>
              </div>

              <div className="skill-wrapper">
                <strong className="classification">Back-end:</strong>

                <div className="skill">
                  <div className="icon-wrapper">
                    <img src="/nodejs.png" className="icon-small-2" />
                  </div>
                  <div>Node.js (Express)</div>
                </div>

                <div className="skill">
                  <div className="icon-wrapper">
                    <div className="icon-wrapper-react">
                      <img src="/graphql.png" className="icon-small-2" />
                    </div>
                  </div>
                  <div>GraphQL</div>
                </div>

                <div className="skill">
                  <div className="icon-wrapper">
                    <div className="icon-wrapper-react">
                      <img src="/postgresql.png" className="icon-small-2" />
                    </div>
                  </div>
                  <div>PostgreSQL</div>
                </div>

                <div className="skill">
                  <div className="icon-wrapper">
                    <div className="icon-wrapper-react">
                      <img src="/redis.png" className="icon-small-2" />
                    </div>
                  </div>
                  <div>Redis</div>
                </div>
              </div>

              <div className="skill-wrapper">
                <strong className="classification">Infrastructure:</strong>

                <div className="skill">
                  <div className="icon-wrapper">
                    <img src="/aws.png" className="icon-small-2" />
                  </div>
                  <div>AWS</div>
                </div>
              </div>

              <div className="skill-wrapper">
                <strong className="classification">Other:</strong>

                <div className="skill">
                  <div className="icon-wrapper">
                    <img src="/git.png" className="icon-small-2" />
                  </div>
                  <div>GIT</div>
                </div>

                <div className="skill">
                  <div className="icon-wrapper">
                    <img src="/responsive.png" className="icon-small-2" />
                  </div>
                  <div>Responsive pages</div>
                </div>

                <div className="skill">
                  <div className="icon-wrapper">
                    <img src="/ajax.png" className="icon-small-2" />
                  </div>
                  <div>AJAX</div>
                </div>
              </div>
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

          <div className="section-top section-made">
            <div className="section-inner">
              <Profile />
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

function getCountryTimelineData() {
  return [
    {
      percentage: 19.6,

      year: 2024,
      logoColor: 'green',
      logoShortPath: '/brazil-flag.svg',
      text: 'Brazil - 3 years',
    },
    {
      percentage: 26.3,
      logoColor: 'red',
      logoShortPath: '/germany-flag.svg',
      text: 'Germany - 4 years',
    },
    {
      percentage: 54.1,
      first: true,
      year: 2010,
      logoColor: 'green',
      logoShortPath: '/brazil-flag.svg',
      text: 'Brazil - 8 years',
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
    },

    {
      percentage: 12.8,
      logoColor: '#2A73B4',
      logoShortPath: '/jquery.png',
      text: '',
    },
  ]
}

function Profile() {
  return (
    <>
      <div className="title-styled-wrapper">
        <h2 className="title-styled">
          <div className="title-styled-text">PROFILE</div>
        </h2>
      </div>

      <ul className="list-content">
        <li>
          Experienced front-end developer with a great enthusiasm for{' '}
          <strong>Design</strong>, <strong>UI</strong>, and <strong>UX</strong>.
        </li>

        <li>
          Strong <a href="https://cantunsee.space/">attention to detail</a>.
        </li>

        <li>
          Familiarity with <strong>RESTful back-end</strong> and{' '}
          <strong>databases</strong>.
        </li>

        <li>
          <strong>Web design</strong> competences.
        </li>
        <li>
          Fluent in <strong>English</strong> and <strong>Portuguese</strong>{' '}
          with good communication skills.
        </li>
      </ul>
      <p></p>
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
