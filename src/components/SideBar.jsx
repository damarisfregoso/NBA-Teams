const SideBar = () => {
  return (
    <aside className="sidebar">
      <h1 className="start"> The Start</h1>
      <div className="NBA-info">
        <img
          className="nbaLogo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/105px-National_Basketball_Association_logo.svg.png"
          alt="NBA Logo"
        />
        <p>
          The National Basketball Association was founded in New York City on
          June 6, 1946. At the time being called the Basketball Association of
          America, then changed the name its now famous National Basketball
          Association. The NBA is now 76 years old.
        </p>
        <p>
          This professional basketball league in North American is composed of
          30 teams. 29 in the United States and 1 in Canada.
        </p>
      </div>
    </aside>
  )
}
export default SideBar
