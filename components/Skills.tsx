'use client'

import { useEffect, useRef } from 'react'

export default function Skills() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stackItems = entry.target.querySelectorAll('.stack > div')
            stackItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in')
              }, index * 100)
            })
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const stackSection = document.querySelector('.stack')
    if (stackSection) {
      observerRef.current.observe(stackSection)
    }

    return () => observerRef.current?.disconnect()
  }, [])

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
                // Typical API structure<br />
                @Controller('users')<br />
                export class UsersController &#123;&#125;
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
                // Modern React patterns<br />
                export default function Page() &#123;<br />
                &nbsp;&nbsp;return &lt;div /&gt;<br />
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
                // Database config<br />
                TypeOrmModule.forFeature([<br />
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
                # Automated deployment<br />
                on: [push]<br />
                jobs:<br />
                &nbsp;&nbsp;deploy:
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
