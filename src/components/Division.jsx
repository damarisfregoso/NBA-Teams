import teams from '../teams.json'
import Team from './Team'

const Divison = (props) => {
  return (
    <div className="divison">
      <h1>{props.name}</h1>
      <div className="teams">
        {teams.results
          .filter((team) => {
            return team.divison === props.name
          })
          .map((team) => (
            <Team team={team} />
          ))}
      </div>
    </div>
  )
}

export default Divison
