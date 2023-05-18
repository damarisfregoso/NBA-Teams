import './App.css'
import SideBar from './components/SideBar'
import Division from './components/Division'

const App = () => {
  const divisions = [
    'Pacific',
    'Central',
    'Atlantic',
    'Southeast',
    'Southwest',
    'Northwest'
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
    </div>
  )
}

export default App
