import './index.scss'
import positionsData from '../../helpers/positionsData'
import companiesMap from '../../helpers/companiesData'
import IconText from '../IconText'

const positions = positionsData
// const positions = [positionsData[0]]

export default () => {
  return (
    <div>
      {positions.map((item: any, index: number) => (
        <div className="wrapper-experience" key={'experience-' + index}>
          <div
            className="bar-exp"
            style={{
              backgroundColor: companiesMap.get(item.company).logoColor,
            }}
          ></div>

          <div className="wrapper-content">
            <div className="wrapper-experience-inner">
              <div
                className="wrapper-experience-logo"
                style={{
                  borderColor: companiesMap.get(item.company).logoColor,
                }}
              >
                <img
                  src={companiesMap.get(item.company).logoPath}
                  style={{ width: companiesMap.get(item.company).logoWidth }}
                  className="logo-large"
                />
              </div>

              <div className="wrapper-company-info d-flex">
                <div className="wrapper-company">
                  <div>
                    <strong>{item.company}&nbsp;</strong>
                    <div>
                      {companiesMap.get(item.company).via ? (
                        <>
                          via{' '}
                          <strong>
                            {companiesMap.get(item.company).via.name}
                          </strong>
                        </>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>

                  <div>{companiesMap.get(item.company).sector}</div>
                </div>

                <div className="location">
                  <IconText
                    iconPath="/location.png"
                    text={companiesMap.get(item.company).location}
                  />
                </div>
              </div>
            </div>

            <div className="wrapper-position">
              <div className="position">
                <strong className="position-title">{item.title}</strong>
                <div className="d-flex">
                  <IconText
                    iconPath="/calendar.png"
                    text={format(item.start)}
                  />
                  &nbsp;-&nbsp;
                  <IconText iconPath="/calendar.png" text={format(item.end)} />
                </div>
              </div>

              <hr className="divider" />

              <div className="wrapper-details">
                <div className="description">
                  <List list={item.description} />
                </div>

                <ul className="results list-content">
                  <li>Notable results:</li>
                  <li className="parent">
                    <List list={item.results} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function List({ list, child }: { list: any; child?: boolean }) {
  return (
    <ul className={'list-content' + (child ? ' child' : '')}>
      {list.map((item: any, index: number) => (
        <li
          key={index}
          className={typeof item === 'string' ? 'string' : 'parent'}
        >
          <Output item={item} />
        </li>
      ))}
    </ul>
  )
}

function Output({ item }: { item: any }) {
  const isString = typeof item === 'string'

  let output: any = isString ? item : null

  if (!output) {
    if (item.src) {
      output = <img className="my-design" src={item.src} />
    } else {
      output = <List list={item} child={true} />
    }
  }

  return output
}

function format(date: string) {
  const d = new Date(date)
  const month = d.toLocaleString('default', { month: 'short' })
  const year = d.getFullYear()

  return month + ' ' + year
}
