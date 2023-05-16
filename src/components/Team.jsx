import Divison from './Divison'

const Team = (props) => {
  return (
    <div className="team">
      <img src={props.team.pictureLogo} alt={props.team.teamName} id="logo" />
      <h2 className="name">{props.team.teamName}</h2>
      <div className="location">
        <h3 className="conference">Conference: {props.team.conference}</h3>
        <h4 className="founded">Founded: {props.team.founded}</h4>
      </div>
      <div className="divisons">
        {/* {props.results.teams.divison.map((divison) => (
          <Divison team={divison} key={divison.teamName} />
        ))} */}
      </div>
    </div>
  )
}

export default Team
