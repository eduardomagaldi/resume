import CompaniesList from '../../components/CompaniesList'
import './index.css'

export default function App() {
  return (
    <>
      <div>
        <h1 className="title">EDUARDO MAGALDI</h1>

        <img className="map" src="/world.png" />
      </div>

      <div className="ruler">
        <h2 className="ruler-text">15 YEARS OF WEB DEVELOPMENT</h2>
      </div>

      <CompaniesList />
    </>
  )
}
