import Divison from './Division'

const Team = (props) => {
  return (
    <div className="team">
      <img src={props.team.pictureLogo} alt={props.team.teamName} id="logo" />
      <h2 className="name">{props.team.teamName}</h2>
      <div className="location">
        <h3 className="conference">Conference: {props.team.conference}</h3>
        <h4 className="founded">Founded: {props.team.founded}</h4>
      </div>
    </div>
  )
}

export default Team
