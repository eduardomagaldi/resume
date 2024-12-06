import './index.css'
import experiences from '../../helpers/experiencesData'

interface Experience {
  company: string
  sector: string
  start: string
  end: string
  location: string
  logoPath: string
  positions: {
    title: string
    start: string
    end: string
    description: string
    skills: string[]
  }[]
  logoPadding: string
  via?: {
    logoPath: string
    name: string
  }
}

export default () => {
  return (
    <div>
      <TimelineHorizontal experiences={experiences} />

      <Timeline experiences={experiences} />

      {experiences.map((experience: any, index: number) => (
        <div key={'experience-' + index}>
          <Logo
            logoPadding={experience.logoPadding}
            logoPath={experience.logoPath}
          />

          {experience?.via?.logoPath ? (
            <Logo logoPath={experience?.via?.logoPath} logoPadding="" />
          ) : null}

          <div>Company: {experience.company}</div>
          <div>Sector: {experience.sector}</div>
          <div>Location: {experience.location}</div>
          <div>
            {experience.positions.map((position, index) => (
              <div key={'position-' + index}>
                <Position position={position} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function Position({ position }: { position: any }) {
  return (
    <>
      <div className="position">
        <div>title: {position.title}</div>
        <div>start: {position.start}</div>
        <div>end: {position.end}</div>
        <div style={{ margin: '20px' }}>
          <LastDescription position={position} />
        </div>
        {/* <div style={{ margin: '20px' }}>
          Description2: {position.description2}
        </div> */}
        <div>
          Skills: <Skills skills={position.skills} />
        </div>
      </div>
    </>
  )
}

function Logo({
  logoPadding,
  logoPath,
}: {
  logoPadding: string
  logoPath: string
}) {
  return (
    <>
      <div className="wrapper-logo">
        <img
          className="logo"
          style={{
            padding: logoPadding,
          }}
          src={logoPath}
        />
      </div>
    </>
  )
}

function LastDescription({ position }: any) {
  const description = position.description[position.description.length - 1]

  // return {
  //   <div key={'description-' + index}>{item}</div>
  // )}</>

  // description.map((item: any, index: number) => (

  return (
    <ul>
      {description.map((item: any, index: number) => (
        <li
          key={'description-' + index}
          className={Array.isArray(item) ? 'nested' : ''}
        >
          {!Array.isArray(item) ? item : <List list={item} />}
        </li>
      ))}
    </ul>
  )
}

function List({ list }: any) {
  return (
    <ul>
      {list.map((item: any, index: number) => (
        <li key={'description-list-' + index}>{item}</li>
      ))}
    </ul>
  )
}

function Skills({ skills }: any) {
  return (
    <div>
      {skills.map((item: any, index: number) => (
        <div className="skill" key={'skill-' + index}>
          <div className="skill-icon">
            <img className="skill-img" src={item.img} />
          </div>
          <div key={'skill-' + index}>{item.name}</div>
        </div>
      ))}
    </div>
  )
}

function Timeline({ experiences }: any) {
  let lastDateString = experiences[0].positions[0].end
  let firstDateString = experiences[experiences.length - 1].positions[0].start

  // const { month: fMonth, year: fYear } = getMonthAndYear(firstMonth)
  // const firstDateString = `${fYear}-${fMonth}-01`

  // const { month: lMonth, year: lYear } = getMonthAndYear(lastMonth)
  // const lastDateString = `${lYear}-${lMonth}-01`
  // // console.log('firstDate', firstDate)

  const firstDate = new Date(firstDateString)
  const lastDate = new Date(lastDateString)

  const allDates = dateRange(firstDate, lastDate)

  const allPositions: any[] = []

  experiences.forEach((experience: any) => {
    allPositions.push(...experience.positions)
  })

  console.log('allPositions', allPositions)

  const timeline = allDates
    .map((date) => {
      const foundPositionStart = allPositions.find((position) => {
        const start = position.start

        if (start === date) {
          return true
        }
      })

      const foundPositionEnd = allPositions.find((position) => {
        const end = position.end

        if (end === date) {
          return true
        }
      })

      const foundPositionBetween = allPositions.find((position) => {
        const start = new Date(position.start)
        const end = new Date(position.end)
        const $date = new Date(date)

        const smaller = $date.getTime() < end.getTime()
        const bigger = $date.getTime() > start.getTime()

        if (smaller && bigger) {
          return true
        }
      })

      const result: any = {
        date: date,
      }

      if (foundPositionStart) {
        result.start = true
        result.company = foundPositionStart
      }

      if (foundPositionEnd) {
        // result.end = foundPositionEnd

        result.end = true
        result.company = foundPositionEnd
      }

      if (foundPositionBetween) {
        // result.between = foundPositionBetween
        result.company = foundPositionBetween
      }

      return result
    })
    .reverse()

  // console.log('timeline', timeline)

  // return timeline

  // {skills.map((item: any, index: number) => (

  return (
    <>
      {timeline.map((item: any, index: number) => (
        <div className="timeline-item" key={'timeline-' + index}>
          <div className="end-date">
            {item.end && getMonthNameAndYear(item.company.end)}
          </div>
          <div
            className="bar"
            style={{ backgroundColor: item.company.logoColor }}
          ></div>

          {item.end && item.company.company}

          {/* {JSON.stringify(item)} */}
        </div>
      ))}
    </>
  )

  // console.log('currDate.getTime()', currDate.getTime())

  // let index = 0
  // while (index < 20) {
  //   // timeline.push(currDate.toISOString())
  //   //   console.log('currDate.toISOString()', currDate.toISOString())
  //   //   const nextMonth = currDate.getMonth() + 1
  //   //   currDate.setMonth(nextMonth)
  //   //   // currDate.setMonth( + 1)
  //   //   currDate.setDate(0)
  //   //   index++
  // }

  // console.log('timeline', timeline)

  // console.log('$date', new Date($date))

  // const timeline = []
}

function getMonthAndYear(monthStringDate) {
  const splitted = monthStringDate.split('/')
  return {
    month: splitted[0],
    year: splitted[1],
  }
}

/**
 * dateRange returns an array of year-month dates between the supplied start and end dates
 * @param startDate Date or natively parseable string (e.g. 2024-04-01)
 * @param endDate Date or natively parseable string (e.g. 2024-04-01)
 * @returns string[] of ISO 8601 strings for each month between start and end
 */
function dateRange(startDate: Date, endDate: Date) {
  // we use UTC methods so that timezone isn't considered
  let start = new Date(startDate)
  const end = new Date(endDate)
  end.setUTCHours(12)
  const dates = []
  while (start.getTime() <= end.getTime()) {
    // compensate for zero-based months in display
    const displayMonth = start.getUTCMonth() + 1
    dates.push(
      [
        start.getUTCFullYear(),
        // months are zero based, ensure leading zero
        displayMonth.toString().padStart(2, '0'),
        // always display the first of the month
        '01',
      ].join('-'),
    )

    // progress the start date by one month
    start = new Date(start.setUTCMonth(displayMonth))
  }

  return dates
}

function getMonthNameAndYear(date) {
  const monthNames = {
    '01': 'Jan',
    '02': 'Fev',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dez',
  }

  const splitted = date.split('-')

  return monthNames[splitted[1]] + ' ' + splitted[0]
}

function TimelineHorizontal({ experiences }: any) {
  let lastDateString = experiences[0].positions[0].end
  let firstDateString = experiences[experiences.length - 1].positions[0].start

  // const { month: fMonth, year: fYear } = getMonthAndYear(firstMonth)
  // const firstDateString = `${fYear}-${fMonth}-01`

  // const { month: lMonth, year: lYear } = getMonthAndYear(lastMonth)
  // const lastDateString = `${lYear}-${lMonth}-01`
  // // console.log('firstDate', firstDate)

  const firstDate = new Date(firstDateString)
  const lastDate = new Date(lastDateString)

  const allDates = dateRange(firstDate, lastDate)

  const allPositions: any[] = []

  experiences.forEach((experience: any) => {
    allPositions.push(...experience.positions)
  })

  console.log('allPositions', allPositions)

  const dateCountByCompany: any = {
    total: 0,
  }

  const companiesByName: any = {}

  const timeline = allDates
    .map((date) => {
      const foundPositionStart = allPositions.find((position) => {
        const start = position.start

        if (start === date) {
          return true
        }
      })

      const foundPositionEnd = allPositions.find((position) => {
        const end = position.end

        if (end === date) {
          return true
        }
      })

      const foundPositionBetween = allPositions.find((position) => {
        const start = new Date(position.start)
        const end = new Date(position.end)
        const $date = new Date(date)

        const smaller = $date.getTime() < end.getTime()
        const bigger = $date.getTime() > start.getTime()

        if (smaller && bigger) {
          return true
        }
      })

      const result: any = {
        date: date,
      }

      if (foundPositionStart) {
        result.start = true
        result.company = foundPositionStart

        companiesByName[foundPositionStart.company] = foundPositionStart
      }

      if (foundPositionEnd) {
        result.end = true
        result.company = foundPositionEnd

        companiesByName[foundPositionEnd.company] = foundPositionEnd
      }

      if (foundPositionBetween) {
        result.company = foundPositionBetween

        companiesByName[foundPositionBetween.company] = foundPositionBetween
      }

      dateCountByCompany.total += 1

      dateCountByCompany[result.company.company] =
        dateCountByCompany[result.company.company] || 0

      dateCountByCompany[result.company.company] += 1

      return result
    })
    .reverse()

  // console.log('timeline', timeline)

  // return timeline

  // {skills.map((item: any, index: number) => (

  console.log('dateCountByCompany', dateCountByCompany)

  const datePercentageByCompany = {}

  const totalValue = dateCountByCompany.total
  Object.keys(dateCountByCompany).forEach((key) => {
    const absoluteValue = dateCountByCompany[key]

    if (key !== 'total') {
      datePercentageByCompany[key] =
        parseFloat((absoluteValue / totalValue).toFixed(3)) * 100
    }
  })

  console.log('datePercentageByCompany', datePercentageByCompany)

  const datePercentageByCompanyKeys = Object.keys(
    datePercentageByCompany,
  ).reverse()

  return (
    <>
      <div className="wrapper-timeline-h">
        {datePercentageByCompanyKeys.map((companyName: any, index: number) => (
          <div
            className="timeline-h-item"
            key={'timeline-h-item-' + index}
            style={{
              width: datePercentageByCompany[companyName] + '%',
            }}
          >
            <div
              style={{
                backgroundColor:
                  (companiesByName[companyName] &&
                    companiesByName[companyName].logoColor) ||
                  '',
              }}
              className="bar-h"
            ></div>
            {/* {item} */}

            {/* <div className="company-name">{companyName}</div> */}

            <div className="label">
              <img
                className="logo-h"
                src={companiesByName[companyName].logoPath}
              />
            </div>
          </div>

          // <div className="timeline-h-item" key={'timeline-' + index}>
          //   item
          //   {/* <div className="end-date">
          //     {item.end && getMonthNameAndYear(item.company.end)}
          //   </div>
          //   <div
          //     className="bar"
          //     style={{ backgroundColor: item.company.logoColor }}
          //   ></div>

          //   {item.end && item.company.company} */}
          // </div>
        ))}
      </div>

      <div className="wrapper-countries">
        <div className="country brazil" style={{ width: '19.6%' }}>
          <div className="line"></div>
        </div>
        <div className="country germany" style={{ width: '26.3%' }}>
          <div className="line"></div>
        </div>
        <div className="country brazil" style={{ width: '54.1%' }}>
          <div className="line"></div>
        </div>
      </div>
    </>
  )

  // console.log('currDate.getTime()', currDate.getTime())

  // let index = 0
  // while (index < 20) {
  //   // timeline.push(currDate.toISOString())
  //   //   console.log('currDate.toISOString()', currDate.toISOString())
  //   //   const nextMonth = currDate.getMonth() + 1
  //   //   currDate.setMonth(nextMonth)
  //   //   // currDate.setMonth( + 1)
  //   //   currDate.setDate(0)
  //   //   index++
  // }

  // console.log('timeline', timeline)

  // console.log('$date', new Date($date))

  // const timeline = []
}
