'use client'

import { useEffect, useRef } from 'react'

export default function Projects() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const projects = document.querySelectorAll('.proj')
    projects.forEach((proj) => observerRef.current?.observe(proj))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section id="projects">
      <div className="wrap">
        <h2>Projects</h2>
        <p className="sub">Built end to end and deployed, with code you can read.</p>
        <article className="proj">
          <div className="shot">
            <img src="/voltix.png" alt="Voltix e-commerce platform screenshot" loading="lazy" />
          </div>
          <div className="body">
            <div className="api-endpoint">
              <code>GET /api/projects/voltix</code>
            </div>
            <span className="tag">Featured</span>
            <h3>Voltix, e-commerce platform</h3>
            <p>A full-stack store with JWT refresh-token auth, Google sign-in, Stripe payments, Redis caching and Cloudinary image storage. GitHub Actions deploys it automatically to Render and Vercel.</p>
            <div className="chips">
              <span>NestJS</span>
              <span>Next.js 14</span>
              <span>PostgreSQL</span>
              <span>Stripe</span>
              <span>Redis</span>
              <span>TypeORM</span>
              <span>Cloudinary</span>
            </div>
            <div className="links">
              <a href="https://voltix-frontend.vercel.app/">Live demo</a>
              <a href="https://github.com/shawonkumar01/voltix-backend">Backend code</a>
              <a href="https://github.com/shawonkumar01/voltix-frontend">Frontend code</a>
            </div>
          </div>
        </article>
        <article className="proj flip">
          <div className="shot">
            <img src="/projects/famms.png" alt="Famms e-commerce website screenshot" loading="lazy" />
          </div>
          <div className="body">
            <div className="api-endpoint">
              <code>GET /api/projects/famms</code>
            </div>
            <h3>Famms, e-commerce web</h3>
            <p>A dynamic store with a live shopping cart, login, payment and printable orders. Livewire updates the page without reloads, and the styles are split into SCSS components.</p>
            <div className="chips">
              <span>Laravel</span>
              <span>Livewire</span>
              <span>PHP</span>
              <span>SCSS</span>
            </div>
            <div className="links">
              <a href="https://github.com/shawonkumar01/famms">GitHub</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
