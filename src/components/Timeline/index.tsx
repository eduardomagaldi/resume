import './index.css'

export default ({ data }: { data: any }) => {
  return (
    <>
      <div className="timeline">
        {data.map((item: any, index: number) => (
          <div
            key={'timeline-item-' + index}
            className="timeline-item"
            style={{
              width: item.percentage + '%',
            }}
          >
            {item.year && (
              <div className={'year' + (item.first ? ' first' : '')}>
                {item.year}
              </div>
            )}

            <div
              className="bar"
              style={{
                backgroundColor: item.logoColor,
              }}
            ></div>

            <div
              className={'tooltip' + (!item.text ? ' logo-only' : '')}
              style={{
                borderColor: item.logoColor,
              }}
            >
              <img className="logo" src={item.logoShortPath} />
              {item.text && <div className="text">{item.text}</div>}
            </div>
          </div>
        ))}
      </div>

      {/* <div>
        {Array.from(data).map((item: any, index: number) => (
          <div
            key={'timeline-item-' + index}
            style={{
              width: item[1].percentage + '%',
              margin: '10px',
            }}
          >
            {item[0]} {((item[1].percentage / 100) * 176) / 12}
          </div>
        ))}
      </div> */}
    </>
  )
}
