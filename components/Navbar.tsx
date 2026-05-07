'use client'

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1.2rem 4rem', display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)',
      backdropFilter: 'blur(20px)', background: 'rgba(10,10,15,0.8)'
    }}>
      <a href="#hero" style={{
        fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.02em', color: 'var(--accent)',
        textDecoration: 'none', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        textTransform: 'uppercase',
        transition: 'transform 0.2s, color 0.2s'
      }}
      onMouseEnter={e => { 
        e.currentTarget.style.transform = 'scale(1.05)'; 
        e.currentTarget.style.color = 'var(--text)'; 
      }}
      onMouseLeave={e => { 
        e.currentTarget.style.transform = 'scale(1)'; 
        e.currentTarget.style.color = 'var(--accent)'; 
      }}>
        SKM
      </a>

      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {['skills', 'projects', 'experience', 'contact'].map((item) => (
          <a key={item} href={`#${item}`} style={{
            textDecoration: 'none', color: 'var(--muted)',
            fontSize: '0.85rem', fontFamily: 'DM Mono, monospace',
            letterSpacing: '0.1em', transition: 'color 0.2s'
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {item}
          </a>
        ))}
      </div>

      <a href="#contact" style={{
        background: 'var(--accent)', color: '#fff',
        padding: '0.5rem 1.2rem', borderRadius: '6px',
        fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none'
      }}>
        Hire Me
      </a>
    </nav>
  )
}