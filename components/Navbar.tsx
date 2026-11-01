export default function Navbar() {
  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top">Shawon Modak</a>
        <nav aria-label="Main">
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#experience">Experience</a>
          <a className="btn" href="#contact">Hire me</a>
        </nav>
      </div>
    </header>
  )
}