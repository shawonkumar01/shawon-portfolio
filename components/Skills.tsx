'use client'

const skills = [
  {
    title: 'BACKEND',
    items: [
      { label: 'NestJS', type: 'accent' },
      { label: 'Node.js', type: 'accent' },
      { label: 'TypeScript', type: 'accent' },
      { label: 'REST API', type: 'green' },
      { label: 'JWT / Auth', type: 'green' },
      { label: 'Express.js', type: 'gray' },
    ],
  },
  {
    title: 'FRONTEND',
    items: [
      { label: 'Next.js 14', type: 'accent' },
      { label: 'React', type: 'accent' },
      { label: 'TypeScript', type: 'accent' },
      { label: 'Tailwind', type: 'green' },
      { label: 'JavaScript', type: 'gray' },
    ],
  },
  {
    title: 'DATABASE & INFRA',
    items: [
      { label: 'PostgreSQL', type: 'accent' },
      { label: 'MySQL', type: 'accent' },
      { label: 'Redis', type: 'green' },
      { label: 'Docker', type: 'green' },
      { label: 'TypeORM', type: 'gray' },
    ],
  },
  {
    title: 'TOOLS & DEPLOYMENT',
    items: [
      { label: 'GitHub Actions', type: 'accent' },
      { label: 'CI/CD', type: 'accent' },
      { label: 'Vercel', type: 'green' },
      { label: 'Render', type: 'green' },
      { label: 'Stripe', type: 'gray' },
      { label: 'Cloudinary', type: 'gray' },
    ],
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

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 4rem', background: 'var(--surface)' }}>

      <h2 className="animate-fade-in-up delay-1" style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
        letterSpacing: '-0.02em', marginBottom: '1rem'
      }}>
        What I Work With
      </h2>

      <p className="animate-fade-in-up delay-2" style={{
        color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7,
        maxWidth: '500px', fontFamily: 'DM Mono, monospace'
      }}>
        A focused stack built for shipping scalable, production-grade applications.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem', marginTop: '3rem'
      }}>
        {skills.map((card, index) => (
          <div key={card.title} className={`animate-fade-in-up delay-${index + 1} hover-glow`} style={{
            background: 'var(--surface2)', border: '1px solid var(--border)',
            borderRadius: '12px', padding: '1.5rem',
            transition: 'border-color 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{
              fontSize: '0.75rem', fontFamily: 'DM Mono, monospace',
              color: 'var(--accent2)', letterSpacing: '0.1em', marginBottom: '1rem'
            }}>
              {card.title}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {card.items.map((item) => (
                <span key={item.label} style={{
                  ...tagStyles[item.type],
                  padding: '0.3rem 0.75rem', borderRadius: '20px',
                  fontSize: '0.78rem', fontFamily: 'DM Mono, monospace'
                }}>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}