import './App.css'
import SideBar from './components/SideBar'
import Division from './components/Division'
import team from './teams.json'
import Footer from './components/Footer'

const App = () => {
  const divisions = [
    'Pacific',
    'Central',
    'Southwest',
    'Southeast',
    'Northwest',
    'Atlantic'
  ]
  return (
    <div className="App">
      <header>
        <h1 className="title">All Teams</h1>
      </header>
      <main>
        <div className="info">
          {divisions.map((division) => (
            <Division name={division} key={division.name} />
          ))}
        </div>

        <SideBar />
      </main>
      <h1 className="Merchandise">Merchandise</h1>
      <div className="footerNames">
        {team.results.map((name) => (
          <Footer name={name} key={name.teamName} />
        ))}
      </div>
    </div>
  )
}

export default App
