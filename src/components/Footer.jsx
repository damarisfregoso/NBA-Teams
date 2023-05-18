const Footer = (props) => {
  return (
    <footer className="Footer">
      <div>
        <a className="links" href={props.name.merchandise}>
          <h5>{props.name.teamName}</h5>
        </a>
      </div>
    </footer>
  )
}
export default Footer
