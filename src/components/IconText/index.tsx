import './index.scss'

interface Props {
  iconPath: string
  text?: string
  href?: string
}

export default ({ iconPath, text, href }: Props) => {
  let textOutput

  if (href) {
    textOutput = <a href={href}>{text}</a>
  } else {
    textOutput = <div>{text}</div>
  }

  let style: any = {}
  if (iconPath === '/calendar.png') {
    style.marginBottom = '2px'
    style.marginRight = '3px'
  }

  if (iconPath === '/html.png') {
    style.marginBottom = '1px'
  }

  if (iconPath === '/css.png') {
    style.marginTop = '1px'
  }

  if (iconPath === '/reactjs.png') {
    style.marginBottom = '1px'
  }

  return (
    <div className="d-flex icon-text">
      <img src={iconPath} className="icon" style={style} />
      {textOutput}
    </div>
  )
}
