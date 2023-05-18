const Tiny = (props) => {
  return (
    <aside className="tiny">
      <h1 className="sideTitle">Retired Numbers</h1>
      {props.team.retiredNumber?.map((number, index) => (
        <h4 className="numbers">{number}</h4>
      ))}
    </aside>
  )
}

export default Tiny
