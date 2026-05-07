interface ExperienceItem {
  date: string
  company: string
  role: string
  points: string[]
}

const workExperience: ExperienceItem[] = [
  {
    date: 'Aug 2025 — Present',
    company: 'MABS TECH LTD',
    role: 'Software Engineer',
    points: [
      'Developed scalable backend APIs for e-commerce platform using NestJS',
      'Designed backend modules for dashboard management, cash closing & product exchange',
      'Applied RESTful API principles and modular architecture for maintainability',
    ],
  },
]

const education: ExperienceItem[] = [
  {
    date: 'Oct 2020 — Jan 2025',
    company: 'AHSANULLAH UNIVERSITY OF SCIENCE AND TECHNOLOGY',
    role: 'B.Sc. in Computer Science & Engineering',
    points: [
      'Published thesis: "A Study on Application of Knowledge Graph"',
      'Built 5+ production-ready projects across multiple tech stacks',
      'Member of AUST Sports Club & Innovation and Design Club',
    ],
  },
]

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <div
      className={`animate-fade-in-left delay-${index + 1}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        gap: '2rem',
        padding: '2rem 0',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{
        fontFamily: 'DM Mono, monospace', fontSize: '0.78rem',
        color: 'var(--muted)', paddingTop: '0.2rem'
      }}>
        {item.date}
      </div>

      <div>
        <div style={{
          fontSize: '0.75rem', fontFamily: 'DM Mono, monospace',
          color: 'var(--accent2)', letterSpacing: '0.1em', marginBottom: '0.4rem'
        }}>
          {item.company}
        </div>

        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          {item.role}
        </h3>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', margin: 0, padding: 0 }}>
          {item.points.map((point, pointIndex) => (
            <li
              key={pointIndex}
              style={{
                color: 'var(--muted)', fontSize: '0.85rem',
                fontFamily: 'DM Mono, monospace', listStyle: 'none',
                paddingLeft: '1rem', position: 'relative', lineHeight: 1.6
              }}
            >
              <span style={{
                position: 'absolute', left: 0, color: 'var(--accent)'
              }}>
                →
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 4rem', background: 'var(--surface)' }}>
      <h2 className="animate-fade-in-up delay-1" style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
        letterSpacing: '-0.02em', marginBottom: '1rem'
      }}>
        Work History
      </h2>

      <div style={{ marginTop: '2rem' }}>
        {workExperience.map((item, index) => (
          <ExperienceCard key={index} item={item} index={index} />
        ))}
      </div>

      {/* Education Section */}
      <div className="animate-fade-in-up delay-3" style={{ marginTop: '4rem' }}>
        <h2 className="animate-fade-in-up delay-4" style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
          letterSpacing: '-0.02em', marginBottom: '1rem'
        }}>
          Education
        </h2>
      </div>

      <div>
        {education.map((item, index) => (
          <ExperienceCard key={index} item={item} index={index + 2} />
        ))}
      </div>
    </section>
  )
}
