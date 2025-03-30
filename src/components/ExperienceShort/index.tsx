import './index.scss'
import companiesMap from '../../helpers/companiesData'
import IconText from '../IconText'

export default ({ companies }: { companies: any }) => {
  return (
    <div>
      {companies.map((item: any, index: number) => (
        <div
          className={
            'wrapper-experience ' +
            getCompanyData(item.company).className +
            (item.first ? ' wrapper-exp-first' : '') +
            (item.last ? ' wrapper-exp-last' : '')
          }
          key={'experience-' + index}
        >
          <div
            className="bar-exp"
            style={{
              backgroundColor: getCompanyData(item.company).logoColor,
              borderColor: getCompanyData(item.company).logoColor,
            }}
          ></div>

          <div className="wrapper-content">
            <div className="header-company d-flex">
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
                    <strong className="company-name">{item.company}</strong>
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
                    text={companiesMap.get(item.company).city}
                  />

                  <IconText
                    iconPath={
                      companiesMap.get(item.company).country === 'Brazil'
                        ? '/brazil-flag.svg'
                        : '/germany-flag.svg'
                    }
                    text={companiesMap.get(item.company).country}
                    className="flag"
                  />
                </div>
              </div>
            </div>

            <div className="wrapper-positions">
              {item.positions.map((position: any, indexPosition: number) => (
                <div
                  key={'position-' + indexPosition}
                  className="wrapper-inner-position"
                >
                  <div className="position d-flex">
                    <strong className="position-title">{position.title}</strong>
                    <div className="d-flex">
                      {format(position.start)}
                      &nbsp;-&nbsp;
                      {format(position.end)}
                    </div>
                  </div>

                  <hr className="divider" />

                  <div className="wrapper-details">
                    <div className="description">
                      <List
                        list={position.descriptionShort}
                        moreInfo={position.moreInfo}
                        stack={position.stack || null}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function getCompanyData(name: string) {
  return companiesMap.get(name)
}

function List({
  list,
  child,
  stack,
  moreInfo,
}: {
  list: any
  child?: boolean
  stack?: any
  moreInfo?: any
}) {
  if (!list || !list.length) return null

  return (
    <ul className={'list-content' + (child ? ' child' : '')}>
      {list.map((item: any, index: number) => (
        <li key={index} className={getClassName(item)}>
          <Output item={item} />
          {moreInfo && (
            <>
              {' '}
              <a target="_blank" href={moreInfo}>
                <img className="icon-linkedin" src="/linkedin.png" />
                More info
              </a>
              {'.'}
            </>
          )}
        </li>
      ))}

      {stack && (
        <li>
          <div className="d-flex">
            <div className="stack-title">Tech stack:</div>
            {stack.map((item: any, index: number) => (
              <div className="wrapper-stack" key={'stack-' + index}>
                &#8203;
                <IconText iconPath={item.img} text={item.name} />
              </div>
            ))}
          </div>
        </li>
      )}
    </ul>
  )
}

function getClassName(item: any) {
  if (typeof item === 'string') {
    return 'string'
  }

  if (Array.isArray(item)) {
    return 'parent'
  }

  if (item.stack) return 'stack'

  return ''
}

function Output({ item }: { item: any }) {
  const isString = typeof item === 'string'

  let output: any = isString ? item : null

  if (!output) {
    if (item.src) {
      output = (
        <div className="d-flex">
          &#8203;
          <img className="my-design" src={item.src} />
        </div>
      )
    } else {
      output = <List list={item} child={true} />
    }
  }

  return output
}

// function Stack({ stack }: { stack: any[] }) {
//   if (!stack || !stack.length) return null

//   return (
//     <ul className="list-content list-stack">
//       <li>Tech stack:</li>
//       <li className="parent">
//         <ul className="list-content list-stack-inner">
//           {stack.map((item: any, index: number) => (
//             <li key={'stack-' + index}>
//               <div className="wrapper-stack">
//                 &#8203;
//                 <IconText iconPath={item.img} text={item.name} />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </li>
//     </ul>
//   )
// }

function format(date: string) {
  const splitted = date.split('-')

  const year = splitted[0]
  const monthNumber = splitted[1]

  const monthName: any = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  }

  return monthName[monthNumber] + ' ' + year
}
