import IconText from '../IconText'
import './index.scss'

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
              className={
                'tooltip' +
                (!item.text && item.text !== '' ? ' logo-only' : ' logo-text')
              }
              style={{
                borderColor: item.logoColor,
              }}
            >
              <IconText
                iconPath={item.logoShortPath}
                text={item.text}
                className={item.className}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
