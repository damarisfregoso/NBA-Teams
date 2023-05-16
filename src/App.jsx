import './App.css'
import teams from './teams.json'
import SideBar from './components/SideBar.jsx'
import Team from './components/Team.jsx'

const App = () => {
  return (
    <div className="App">
      <h1 className="title">All Teams</h1>
      <div className="info">
        {teams.results.map((team) => (
          <Team team={team} key={team.teamName} />
        ))}
        <SideBar />
      </div>
    </div>
  )
}

export default App
