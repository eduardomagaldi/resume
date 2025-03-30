import './index.scss'

interface Props {
  iconPath: string
  text?: string
  className?: string
}

export default ({ iconPath, text, className }: Props) => {
  return (
    <div className={'d-flex icon-text-title ' + className}>
      <img src={iconPath} className="icon" />
      <h1 className="text">{text}</h1>
    </div>
  )
}
