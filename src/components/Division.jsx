import teams from '../teams.json'
import Team from './Team'

const division = (props) => {
  return (
    <div className="division">
      <h1>{props.name}</h1>
      <div className="teams">
        {teams.results
          .filter((team) => {
            return team.division === props.name
          })
          .map((team) => (
            <Team team={team} />
          ))}
      </div>
    </div>
  )
}

export default division
