export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <h2>Experience</h2>
        <p className="sub">Where I've worked and studied.</p>
        <div className="timeline">
          <div className="job">
            <p className="when">Aug 2025 to now</p>
            <h3>Software Engineer</h3>
            <p className="org">MABS TECH LTD</p>
            <ul>
              <li>Build scalable NestJS backend APIs for an e-commerce platform.</li>
              <li>Designed backend modules for dashboard management, cash closing and product exchange.</li>
              <li>Apply RESTful principles and modular architecture to keep the code easy to maintain.</li>
            </ul>
          </div>
          <div className="job">
            <p className="when">Oct 2020 to Jan 2025</p>
            <h3>B.Sc. in Computer Science and Engineering</h3>
            <p className="org">Ahsanullah University of Science and Technology</p>
            <ul>
              <li>Published thesis: "A Study on Application of Knowledge Graph".</li>
              <li>Built 5+ production-ready projects across multiple tech stacks.</li>
              <li>Member of the AUST Sports Club and the Innovation and Design Club.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
