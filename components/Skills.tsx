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
            <div className="code-block">
              <code>
                <span className="c">// Typical API structure</span><br />
                <span className="k">@Controller</span>(<span className="s">'users'</span>)<br />
                <span className="k">export class</span> UsersController &#123;&#125;
              </code>
            </div>
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
            <div className="code-block">
              <code>
                <span className="c">// Modern React patterns</span><br />
                <span className="k">export default function</span> Page() &#123;<br />
                &nbsp;&nbsp;<span className="k">return</span> &lt;div /&gt;<br />
                &#125;
              </code>
            </div>
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
            <div className="code-block">
              <code>
                <span className="c">// Database config</span><br />
                <span className="k">TypeOrmModule</span>.forFeature([<br />
                &nbsp;&nbsp;User, Product<br />
                ])
              </code>
            </div>
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
            <div className="code-block">
              <code>
                <span className="c"># Automated deployment</span><br />
                <span className="k">on:</span> [push]<br />
                <span className="k">jobs:</span><br />
                &nbsp;&nbsp;deploy:
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
