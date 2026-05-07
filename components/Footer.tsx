export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 4rem', borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    }}>
      <p style={{
        fontFamily: 'DM Mono, monospace', fontSize: '0.75rem',
        color: 'var(--muted)'
      }}>
        © 2025 Shawon Kumar Modak — Full Stack Engineer, Dhaka, Bangladesh
      </p>
      <p style={{
        color: 'var(--accent)', fontFamily: 'DM Mono, monospace',
        fontSize: '0.75rem'
      }}>
        Available for hybrid, onsite & remote work worldwide
      </p>
    </footer>
  )
}
