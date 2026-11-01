'use client'

import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [selectedTab, setSelectedTab] = useState('profile')
  const [displayContent, setDisplayContent] = useState('')
  const outRef = useRef<HTMLPreElement>(null)

  const data = {
    profile: {
      name: "Shawon Kumar Modak",
      role: "Full-stack engineer",
      location: "Dhaka, Bangladesh",
      currently: "Software Engineer at MABS TECH LTD",
      focus: ["NestJS", "Next.js", "TypeScript", "PostgreSQL"],
      openTo: "full-time, remote / hybrid / onsite"
    },
    stack: {
      backend: ["NestJS", "Node.js", "Express.js", "REST", "JWT"],
      frontend: ["Next.js 14", "React", "TypeScript", "Tailwind"],
      data: ["PostgreSQL", "MySQL", "Redis", "TypeORM"],
      delivery: ["Docker", "GitHub Actions", "Vercel", "Render"]
    },
    projects: [
      {
        name: "Voltix",
        type: "e-commerce platform",
        highlights: ["JWT refresh tokens", "Google OAuth", "Stripe", "Redis cache", "CI/CD"],
        live: "voltix-frontend.vercel.app"
      },
      {
        name: "Famms",
        type: "e-commerce web",
        stack: ["Laravel", "Livewire", "SCSS"]
      }
    ],
    experience: [
      {
        company: "MABS TECH LTD",
        title: "Software Engineer",
        since: "2025-08",
        built: ["dashboard management", "cash closing", "product exchange"]
      },
      {
        school: "AUST",
        degree: "B.Sc. CSE",
        years: "2020-2025",
        thesis: "A Study on Application of Knowledge Graph"
      }
    ]
  }

  const tabs = [
    ["profile", "/profile"],
    ["stack", "/stack"],
    ["projects", "/projects"],
    ["experience", "/experience"]
  ]

  const highlight = (line: string) => {
    if (!line) return ''
    return line
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/("[^"]*")(\s*:)?|(-?\b\d+\b)/g, (match, str, colon, num) => {
        if (num) return `<span class="n">${num}</span>`
        if (colon) return `<span class="k">${str}</span>${colon}`
        return `<span class="s">${str}</span>`
      })
      .replace(/(\/\*.*?\*\/|\/\/.*$)/gm, '<span class="c">$1</span>')
      .replace(/\b(true|false|null)\b/g, '<span class="k">$1</span>')
  }

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let timer: NodeJS.Timeout

    const show = (key: string) => {
      clearInterval(timer)
      setSelectedTab(key)
      const lines = JSON.stringify(data[key as keyof typeof data], null, 2).split("\n")

      if (reduce) {
        setDisplayContent(lines.map(line => highlight(line || '')).join("\n"))
        return
      }

      setDisplayContent("")
      let i = 0
      timer = setInterval(() => {
        if (lines[i]) {
          setDisplayContent(prev => prev + highlight(lines[i]) + "\n")
          if (outRef.current) {
            outRef.current.scrollTop = outRef.current.scrollHeight
          }
        }
        if (++i >= lines.length) clearInterval(timer)
      }, 34)
    }

    show(selectedTab)

    return () => clearInterval(timer)
  }, [selectedTab])

  return (
    <div className="hero">
      <div className="wrap">
        <div>
          <figure className="avatar">
            <img src="/photo.jpg" alt="Shawon Kumar Modak" />
            <figcaption>Shawon Kumar Modak</figcaption>
          </figure>
          <p className="avail"><i></i>Open to: Full-time, Part-time, On-site, Remote</p>
          <p className="role">Full-stack engineer who ships backends that hold up.</p>
          <p className="lede">I build production web apps with NestJS, Next.js and TypeScript, from the API and database to the deployed frontend.</p>
          <div className="terminal-snippet">
            <code>
              <span className="prompt">$</span> curl -X GET https://api.shawon.dev/profile
            </code>
          </div>
          <div className="cta">
            <a className="btn" href="#projects">See my work</a>
            <a className="btn ghost" href="#contact">Get in touch</a>
          </div>
        </div>
        <div className="console" role="region" aria-label="Interactive API console about Shawon">
          <div className="tabs" role="tablist">
            {tabs.map(([key, path]) => (
              <button
                key={key}
                className="tab"
                role="tab"
                aria-selected={selectedTab === key}
                onClick={() => setSelectedTab(key)}
              >
                GET {path}
              </button>
            ))}
          </div>
          <div className="req">
            <span>GET /{selectedTab}</span>
            <b>200 OK</b>
          </div>
          <pre ref={outRef} aria-live="polite" dangerouslySetInnerHTML={{ __html: displayContent }}></pre>
          <p className="hint">Click an endpoint to query my portfolio.</p>
        </div>
      </div>
    </div>
  )
}