'use client'

interface ContactLink {
  icon: string
  label: string
  href: string
}

const contactLinks: ContactLink[] = [
  { icon: '✉', label: 'shawonkumar.139@gmail.com', href: 'mailto:shawonkumar.139@gmail.com' },
  { icon: '☎', label: '+880 1639 426 477', href: 'tel:+8801639426477' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/shawonkumar01' },
  { icon: '🌐', label: 'GitHub', href: 'https://github.com/shawonkumar01' },
]

const copyEmail = (e: React.MouseEvent) => {
  e.preventDefault()
  navigator.clipboard.writeText('shawonkumar.139@gmail.com')
  alert('Email copied to clipboard!')
}

const copyPhone = (e: React.MouseEvent) => {
  e.preventDefault()
  navigator.clipboard.writeText('+8801639426477')
  alert('Phone number copied to clipboard!')
}

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 4rem', background: 'var(--surface2)', textAlign: 'center' }}>
      <h2 className="animate-fade-in-up delay-1" style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
        letterSpacing: '-0.02em', marginBottom: '0.75rem', marginTop: '0.5rem'
      }}>
        Let's Work Together
      </h2>

      <p className="animate-fade-in-up delay-2" style={{
        color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.7,
        maxWidth: '600px', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        margin: '0 auto 1.5rem'
      }}>
        Available for hybrid, onsite & remote work worldwide
      </p>

      <div className="animate-fade-in-up delay-3" style={{
        display: 'flex', justifyContent: 'center', gap: '1.5rem',
        flexWrap: 'wrap', marginBottom: '2.5rem'
      }}>
        {['Remote', 'Hybrid', 'Onsite'].map((type, index) => (
          <span key={type} style={{
            background: 'rgba(124,106,247,0.1)', border: '1px solid rgba(124,106,247,0.3)',
            padding: '0.4rem 1rem', borderRadius: '20px',
            fontSize: '0.85rem', fontFamily: 'DM Mono, monospace',
            color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase'
          }}>
            {type}
          </span>
        ))}
      </div>

      <p className="animate-fade-in-up delay-4" style={{
        color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7,
        maxWidth: '500px', fontFamily: 'DM Mono, monospace',
        margin: '0 auto 2.5rem'
      }}>
        Seeking full-time opportunities. Passionate about building scalable applications and working with innovative teams.
      </p>

      <div style={{
        display: 'flex', justifyContent: 'center', gap: '1rem',
        flexWrap: 'wrap', marginTop: '2rem'
      }}>
        {contactLinks.map((link, index) => (
          <a
            key={link.label}
            className={`animate-scale-in delay-${index + 2} hover-glow`}
            href={link.href}
            target={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? '_self' : '_blank'}
            rel={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? '' : 'noopener noreferrer'}
            onClick={link.href.startsWith('mailto:') ? copyEmail : link.href.startsWith('tel:') ? copyPhone : undefined}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--surface)', border: '1px solid var(--border)',
              padding: '0.75rem 1.5rem', borderRadius: '8px',
              textDecoration: 'none', color: 'var(--text)',
              fontSize: '0.85rem', fontFamily: 'DM Mono, monospace',
              transition: 'border-color 0.2s, background 0.2s'
            }}
                      >
            <span style={{ fontSize: '1rem' }}>{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
