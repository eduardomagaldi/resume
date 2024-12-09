import Timeline from '../../components/Timeline'
import Ruler from '../../components/Ruler'
import IconReact from '../../components/IconReact'
import './index.css'

import companiesMap from '../../helpers/companiesData'

const timelineData: any[] = []

companiesMap.forEach((value, key) => {
  console.log('value.company', value.company, value.percentage)
  timelineData.push(value)
})

const countryTimelineData = getCountryTimelineData()

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
          {/* <img className="made" src="/made.png" /> */}

          <Ruler />

          <Timeline data={timelineData} />
          <Timeline data={countryTimelineData} />
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
            {/* <div>MG, Brazil (2008 - 2012)</div> */}
          </div>

          <div className="section-top section-made">
            <div className="section-inner">
              <div className="made">
                <div>CV made with</div>
                <IconReact className="icon-small" />
                <div>React.js</div>
              </div>
            </div>
          </div>

          <div className="section-top section-made">
            <div className="section-inner">
              <div className="title-styled-wrapper">
                <h2 className="title-styled">
                  <div className="title-styled-text">MAIN SKILLS</div>
                </h2>
              </div>

              <div className="skill-wrapper">
                <div className="skill-inner">
                  <div className="skill">HTML, CSS, JavaScript</div>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-bar-colored"
                    style={{ width: '100%' }}
                  ></div>
                </div>

                <div className="skill-label">15 years</div>
              </div>

              <div className="skill-wrapper">
                <div className="skill-inner">
                  <div className="skill">
                    <div className="icon-wrapper">
                      <div className="icon-wrapper-react">
                        <IconReact className="icon-small-2" />
                      </div>
                    </div>
                    <div>React.js</div>
                  </div>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-bar-colored"
                    style={{ width: '10%' }}
                  ></div>
                </div>

                <div className="skill-label">1.5 years</div>
              </div>

              <div className="skill-wrapper">
                <div className="skill-inner">
                  <div className="skill">
                    <div className="icon-wrapper">
                      <img src="/vuejs.png" className="icon-small-2 icon-vue" />
                    </div>
                    <div>Vue.js</div>
                  </div>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-bar-colored"
                    style={{ width: '20%' }}
                  ></div>
                </div>

                <div className="skill-label">3 years</div>
              </div>

              <div className="skill-wrapper">
                <div className="skill-inner">
                  <div className="skill">
                    <div className="icon-wrapper">
                      <img src="/angular.png" className="icon-small-2" />
                    </div>
                    <div>Angular / Angular.js</div>
                  </div>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-bar-colored"
                    style={{ width: '26.66%' }}
                  ></div>
                </div>

                <div className="skill-label">4 years</div>
              </div>

              <div className="skill-wrapper">
                <div className="skill-inner">
                  <div className="skill">
                    <div className="icon-wrapper">
                      <img src="/nodejs.png" className="icon-small-2" />
                    </div>
                    <div>Node.js / Express</div>
                  </div>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-bar-colored"
                    style={{ width: '36.66%' }}
                  ></div>
                </div>

                <div className="skill-label">5.5 years</div>
              </div>

              <div className="skill-wrapper">
                <div className="skill-inner">
                  <div className="skill">
                    <div className="icon-wrapper">
                      <img src="/backbonejs.png" className="icon-small-2" />
                    </div>
                    <div>Backbone.js</div>
                  </div>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-bar-colored"
                    style={{ width: '16.66%' }}
                  ></div>
                </div>

                <div className="skill-label">2.5 years</div>
              </div>

              <div className="skill-wrapper">
                <div className="skill-inner">
                  <div className="skill">
                    <div className="icon-wrapper">
                      <img src="/jquery.png" className="icon-small-2" />
                    </div>
                    <div>jQuery</div>
                  </div>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-bar-colored"
                    style={{ width: '23.33%' }}
                  ></div>
                </div>

                <div className="skill-label">3.5 years</div>
              </div>
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
      first: true,
      year: true,
      logoColor: 'green',
      logoShortPath: '/brazil-flag.svg',
      text: 'Brazil - 3 years',
    },
    {
      percentage: 26.3,
      first: true,
      year: true,
      logoColor: 'red',
      logoShortPath: '/germany-flag.svg',
      text: 'Germany - 4 years',
    },
    {
      percentage: 54.1,
      last: true,
      year: true,
      logoColor: 'green',
      logoShortPath: '/brazil-flag.svg',
      text: 'Brazil - 8 years',
    },
  ]
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
