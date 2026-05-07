'use client'

import Image from 'next/image'

interface Project {
  title: string
  description: string
  tech: string[]
  featured?: boolean
  github?: string
  live?: string
  backend?: string
  frontend?: string
  image?: string
}

const projects: Project[] = [
  {
    title: 'Voltix — E-Commerce Platform',
    description: 'Full-stack production e-commerce platform. JWT refresh token auth, Google OAuth, Stripe payments, Redis caching, Cloudinary storage, and automated CI/CD via GitHub Actions. Deployed on Render + Vercel.',
    tech: ['NestJS', 'Next.js 14', 'PostgreSQL', 'Stripe', 'Redis', 'TypeORM', 'Cloudinary'],
    featured: true,
    github: 'https://github.com/shawonkumar01/voltix',
    live: 'https://voltix-frontend.vercel.app/',
    backend: 'https://github.com/shawonkumar01/voltix-backend',
    frontend: 'https://github.com/shawonkumar01/voltix-frontend',
    image: '/voltix.png',
  },
    {
    title: 'Famms — E-Commerce Web',
    description: 'Dynamic e-commerce website with real-time interactivity via Livewire. Shopping cart, authentication, payment, and order printing. Component-based SCSS architecture.',
    tech: ['Laravel', 'Livewire', 'PHP', 'SCSS'],
    github: 'https://github.com/shawonkumar01/famms',
    image: '/projects/famms.png',
  },
  ]

const tagStyles: Record<string, React.CSSProperties> = {
  accent: {
    background: 'rgba(124,106,247,0.12)', color: 'var(--accent)',
    border: '1px solid rgba(124,106,247,0.25)',
  },
  green: {
    background: 'rgba(78,205,196,0.12)', color: 'var(--accent2)',
    border: '1px solid rgba(78,205,196,0.25)',
  },
  gray: {
    background: 'rgba(255,255,255,0.06)', color: 'var(--muted)',
    border: '1px solid var(--border)',
  },
}

const getTagType = (tech: string): 'accent' | 'green' | 'gray' => {
  const greenTags = ['Stripe', 'Redis', 'Tailwind', 'Livewire', 'Firebase', 'Docker', 'Vercel', 'Render']
  const grayTags = ['TypeORM', 'Cloudinary', 'JavaScript', 'Express.js', 'SCSS', 'SQL Server', 'Android']
  
  if (greenTags.includes(tech)) return 'green'
  if (grayTags.includes(tech)) return 'gray'
  return 'accent'
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 4rem', background: 'var(--bg)' }}>
      <h2 className="animate-fade-in-up delay-1" style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
        letterSpacing: '-0.02em', marginBottom: '1rem'
      }}>
        Featured Projects
      </h2>

      <p className="animate-fade-in-up delay-2" style={{
        color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7,
        maxWidth: '500px', fontFamily: 'DM Mono, monospace'
      }}>
        Production-deployed applications built end-to-end.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`animate-fade-in-up delay-${index + 1} hover-glow`}
            style={{
              background: project.featured 
                ? 'linear-gradient(135deg, rgba(124,106,247,0.06) 0%, var(--surface) 100%)'
                : 'var(--surface)',
              border: project.featured 
                ? '1px solid rgba(124,106,247,0.4)'
                : '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: project.image ? '1fr 300px' : '1fr auto',
              gap: '1.5rem',
              alignItems: 'start',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = project.featured 
              ? 'rgba(124,106,247,0.4)' 
              : 'var(--border)'
            }
          >
            <div>
              {project.featured && (
                <span style={{
                  background: 'rgba(124,106,247,0.2)', color: 'var(--accent)',
                  border: '1px solid rgba(124,106,247,0.4)',
                  padding: '0.25rem 0.75rem', borderRadius: '20px',
                  fontSize: '0.7rem', fontFamily: 'DM Mono, monospace',
                  letterSpacing: '0.1em', display: 'inline-block', marginBottom: '0.75rem'
                }}>
                  ★ FEATURED
                </span>
              )}

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                {project.title}
              </h3>

              <p style={{
                color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7,
                fontFamily: 'DM Mono, monospace', marginBottom: '1rem'
              }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      ...tagStyles[getTagType(tech)],
                      padding: '0.3rem 0.75rem', borderRadius: '20px',
                      fontSize: '0.78rem', fontFamily: 'DM Mono, monospace'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.78rem', fontFamily: 'DM Mono, monospace',
                      color: 'var(--accent)', textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      transition: 'border-color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    Live Demo ↗
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.78rem', fontFamily: 'DM Mono, monospace',
                      color: 'var(--accent)', textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      transition: 'border-color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    GitHub ↗
                  </a>
                )}
                
                {project.backend && (
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.78rem', fontFamily: 'DM Mono, monospace',
                      color: 'var(--accent)', textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      transition: 'border-color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    Backend ↗
                  </a>
                )}
                {project.frontend && (
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.78rem', fontFamily: 'DM Mono, monospace',
                      color: 'var(--accent)', textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      transition: 'border-color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    Frontend ↗
                  </a>
                )}
              </div>
            </div>

            {project.image && (
              <div style={{
                position: 'relative',
                width: '300px',
                height: '200px',
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
              }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
