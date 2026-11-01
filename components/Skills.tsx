export default function Skills() {
  return (
    <section id="stack">
      <div className="wrap">
        <h2>Stack</h2>
        <p className="sub">The tools I use to ship scalable, production-grade apps.</p>
        <div className="stack">
          <div>
            <h3>Backend</h3>
            <ul>
              <li>NestJS</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>JWT auth</li>
            </ul>
          </div>
          <div>
            <h3>Frontend</h3>
            <ul>
              <li>Next.js 14</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <h3>Data and infra</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Redis</li>
              <li>Docker</li>
              <li>TypeORM</li>
            </ul>
          </div>
          <div>
            <h3>Delivery</h3>
            <ul>
              <li>GitHub Actions</li>
              <li>CI/CD</li>
              <li>Vercel</li>
              <li>Render</li>
              <li>Stripe, Cloudinary</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
