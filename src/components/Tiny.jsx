const Tiny = (props) => {
  return (
    <aside className="tiny">
      <h1 className="sideTitle">Retired Numbers</h1>
      <h4 className="numbers">{props.number.retiredNumber}</h4>
    </aside>
  )
}

export default Tiny
