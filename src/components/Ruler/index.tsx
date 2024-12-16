import IconTextTitle from '../IconTextTitle'
import './index.scss'

export default () => {
  return (
    <>
      <div className="wrapper-ruler">
        <div className="text-wrapper">
          <IconTextTitle
            iconPath="work2.png"
            text="15 YEARS OF WEB DEVELOPMENT"
          />
        </div>
        <div className="ruler"></div>
        <div className="sub">FOCUS ON FRONT-END</div>
      </div>
    </>
  )
}
