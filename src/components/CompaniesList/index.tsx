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
            {experience.positions.map((position) => (
              <div>
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
        <div>Description: {position.description}</div>
        <div>Skills: {position.skills.join(',')}</div>
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
