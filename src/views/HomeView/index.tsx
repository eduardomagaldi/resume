import Timeline from '../../components/Timeline'
import Ruler from '../../components/Ruler'
import './index.css'

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

          <Timeline />
        </div>

        <div className="section-right">
          <div className="made">
            <div>Made with</div>
            <IconReact className="icon-small" />
            <div>React.js</div>
          </div>

          {/* <img className="made" src="/made.png" /> */}
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
        <div>COMPUTER</div>
        <div className="wrapper-icon-education">
          <div className="line-second">
            ENGINEER
            <div className="ball"></div>
          </div>

          <img className="icon-education" src="/education.svg" />
        </div>
      </h1>

      <h1 className="title skills">
        <div className="line-1">HTML / CSS</div>
        <div>JAVASCRIPT</div>
      </h1>

      <div className="map">
        <img src="/world-stroke.svg" />

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

function IconReact({ className }: { className: string }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={'icon-react ' + className}
    >
      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
      <g stroke="currentColor" stroke-width="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
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
