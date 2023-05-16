const Divison = (props) => {
  switch (props.team.divison) {
    case 'Pacific':
      break
    case 'Central':
      break
    case 'Southeast':
      break
    case 'Northwest':
      break
    case 'Southwest':
      break
    case 'Atlantic':
      break
  }

  return <div className="divison">{props.team.divison}</div>
}

export default Divison
