import './index.css'
import companiesMap from '../../helpers/companiesData'

export default () => {
  return (
    <div className="timeline">
      {Array.from(companiesMap).map((item: any, index: number) => (
        <div
          key={'timeline-item-' + index}
          className="timeline-item"
          style={{
            width: item[1].percentage + '%',
          }}
        >
          <div
            className="bar"
            style={{
              backgroundColor: item[1].logoColor,
            }}
          ></div>

          <div
            className="tooltip"
            style={{
              borderColor: item[1].logoColor,
            }}
          >
            <img className="logo" src={item[1].logoShortPath} />
          </div>
        </div>
      ))}
    </div>
  )
}
