const Team = (props) => {
  return (
    <div className="team">
      <img src={props.team.pictureLogo} alt={props.team.teamName} id="logo" />
      <h2 className="name">{props.team.teamName}</h2>
      <h3 className="founded">Founded:{props.team.founded}</h3>
    </div>
  )
}

export default Team
