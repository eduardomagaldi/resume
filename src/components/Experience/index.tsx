import './index.scss'
import positions from '../../helpers/positionsData'
import companiesMap from '../../helpers/companiesData'

export default () => {
  return (
    <>
      {positions.map((item: any, index: number) => (
        <div key={'experience-' + index}>
          <div>
            {item.company +
              (companiesMap.get(item.company).via
                ? ' (via ' + companiesMap.get(item.company).via.name + ')'
                : '')}
          </div>
          <div>Sector: {companiesMap.get(item.company).sector}</div>
          <strong>{item.title}</strong>
          <div className="experience-logo">
            <img src={companiesMap.get(item.company).logoPath} />
            <Via via={companiesMap.get(item.company).via} />
          </div>
          <div>start: {item.start}</div>
          <div>end: {item.end}</div>
          ===================
        </div>
      ))}
    </>
  )
}

function Via({ via }: { via: any }) {
  if (!via) {
    return null
  }

  return (
    <>
      <div>Via</div>
      <img src={via.logoPath} />
    </>
  )
}
