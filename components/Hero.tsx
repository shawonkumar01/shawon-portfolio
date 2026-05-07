'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 4rem', position: 'relative', overflow: 'hidden',
      background: 'var(--bg)'
    }}>

      {/* Animated Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(124,106,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,106,247,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        animation: 'gradientMove 20s ease-in-out infinite',
        pointerEvents: 'none',
        opacity: 0.5
      }} />

      {/* Large animated purple orb */}
      <div style={{
        position: 'absolute', width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,106,247,0.15) 0%, rgba(124,106,247,0.05) 30%, transparent 70%)',
        top: '10%', right: '5%',
        pointerEvents: 'none',
        animation: 'gradientMove 15s ease-in-out infinite',
        filter: 'blur(40px)'
      }} />

      {/* Large animated cyan orb */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(78,205,196,0.12) 0%, rgba(78,205,196,0.04) 30%, transparent 70%)',
        bottom: '15%', left: '10%',
        pointerEvents: 'none',
        animation: 'gradientMove 18s ease-in-out infinite reverse',
        filter: 'blur(50px)'
      }} />

      {/* Small floating particles */}
      {[
        { top: '20%', left: '10%', size: 4, delay: '0s', duration: '12s' },
        { top: '60%', left: '85%', size: 6, delay: '2s', duration: '15s' },
        { top: '80%', left: '30%', size: 3, delay: '4s', duration: '10s' },
        { top: '30%', left: '70%', size: 5, delay: '1s', duration: '14s' },
        { top: '50%', left: '50%', size: 4, delay: '3s', duration: '11s' },
        { top: '15%', left: '60%', size: 3, delay: '5s', duration: '13s' },
        { top: '75%', left: '75%', size: 5, delay: '2.5s', duration: '16s' },
        { top: '40%', left: '20%', size: 4, delay: '1.5s', duration: '12s' },
      ].map((particle, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: particle.top,
          left: particle.left,
          width: particle.size,
          height: particle.size,
          borderRadius: '50%',
          background: i % 2 === 0 ? 'rgba(124,106,247,0.6)' : 'rgba(78,205,196,0.6)',
          pointerEvents: 'none',
          animation: `particleFloat ${particle.duration} linear ${particle.delay} infinite`,
          boxShadow: `0 0 ${particle.size * 3}px ${i % 2 === 0 ? 'rgba(124,106,247,0.4)' : 'rgba(78,205,196,0.4)'}`,
        }} />
      ))}

      {/* Shooting stars */}
      <div style={{
        position: 'absolute',
        top: '15%', right: '20%',
        width: '100px', height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(124,106,247,0.8), transparent)',
        transform: 'rotate(-45deg)',
        pointerEvents: 'none',
        animation: 'shootingStar 4s ease-out 2s infinite',
        opacity: 0
      }} />
      <div style={{
        position: 'absolute',
        top: '45%', right: '10%',
        width: '80px', height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(78,205,196,0.6), transparent)',
        transform: 'rotate(-45deg)',
        pointerEvents: 'none',
        animation: 'shootingStar 5s ease-out 5s infinite',
        opacity: 0
      }} />

      <div style={{ maxWidth: '1200px', width: '100%', position: 'relative', zIndex: 1, display: 'flex', gap: '5rem', alignItems: 'center', marginTop: '4rem' }}>

        {/* Content - Left Side */}
        <div style={{ flex: 1 }}>
          {/* Availability badge */}
          <div className="animate-fade-in-up delay-1" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(78,205,196,0.08)', border: '1px solid rgba(78,205,196,0.25)',
            padding: '0.4rem 1rem', borderRadius: '50px',
            fontSize: '0.75rem', fontFamily: 'DM Mono, monospace',
            color: 'var(--accent2)', marginBottom: '2rem',
            letterSpacing: '0.08em', textTransform: 'uppercase'
          }}>
            <span className="dot-pulse" />
            Open to new opportunities
          </div>

          {/* Greeting */}
          <div className="animate-fade-in-up delay-2" style={{
            fontFamily: 'DM Mono, monospace', fontSize: '0.8rem',
            color: 'var(--accent2)', letterSpacing: '0.2em',
            marginBottom: '0.75rem', textTransform: 'uppercase'
          }}>
            Hello, I'm
          </div>

          {/* Name */}
          <h1 className="animate-fade-in-up delay-3 animate-wave" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700,
            lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '0.5rem',
            fontFamily: 'Syne, sans-serif'
          }}>
            <span>S</span><span>h</span><span>a</span><span>w</span><span>o</span><span>n</span> <span>K</span><span>u</span><span>m</span><span>a</span><span>r</span> <span style={{ color: 'var(--accent)' }}><span>M</span><span>o</span><span>d</span><span>a</span><span>k</span></span>
          </h1>

          {/* Role with typing effect */}
          <div className="animate-fade-in-up delay-4" style={{
            fontSize: '1.25rem', fontWeight: 400,
            color: 'var(--accent)', marginBottom: '1.5rem',
            fontFamily: "'DM Mono', monospace",
            display: 'inline-block',
            borderRight: '2px solid var(--accent)',
            paddingRight: '4px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            animation: 'typing 2s steps(30) 1s forwards, blink 0.75s step-end infinite'
          }}>
            Full-Stack Software Engineer
          </div>

          {/* Description */}
          <p className="animate-fade-in-up delay-5" style={{
            color: 'var(--muted)', lineHeight: 1.8, maxWidth: '600px',
            marginBottom: '2.5rem', 
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', 
            fontSize: '1rem', fontWeight: 300
          }}>
            I build production-ready web applications with NestJS, Next.js & TypeScript.
            From scalable backend APIs to pixel-perfect frontends — shipped and deployed.
          </p>

          {/* Buttons */}
          <div className="animate-fade-in-up delay-6" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="#projects" className="magnetic-button hover-glow animate-shimmer" style={{
              background: 'var(--accent)', color: '#fff',
              padding: '0.9rem 2rem', borderRadius: '8px',
              textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem',
              transition: 'transform 0.2s, opacity 0.2s', boxShadow: '0 4px 15px rgba(124,106,247,0.25)',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
            }}>
              View My Work
            </a>
            <a href="#contact" className="magnetic-button animate-shimmer" style={{
              border: '1px solid var(--border)', color: 'var(--text)',
              padding: '0.9rem 2rem', borderRadius: '8px',
              textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem',
              transition: 'border-color 0.2s, background 0.2s',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
            }}>
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-7" style={{
            display: 'flex', gap: '3.5rem',
            flexWrap: 'wrap', paddingTop: '2rem', borderTop: '1px solid var(--border)'
          }}>
            {[
              { val: '5+', label: 'Production Projects' },
              { val: '1yr', label: 'Professional Exp.' },
              { val: '10+', label: 'Technologies' },
            ].map((stat, index) => (
              <div key={stat.label} className={`animate-fade-in-up delay-${8 + index}`}>
                <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1, fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  {stat.val}
                </div>
                <div style={{
                  fontSize: '0.7rem', color: 'var(--muted)',
                  fontFamily: 'DM Mono, monospace', marginTop: '0.25rem',
                  letterSpacing: '0.05em', textTransform: 'uppercase'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image - Right Side */}
        <div className="animate-float" style={{
          position: 'relative',
          width: '400px',
          height: '400px',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '2px solid var(--border)',
          flexShrink: 0,
          background: 'var(--surface2)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          marginTop: '-3rem',
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}>
          <img
            src="/photo.jpg"
            alt="Shawon Kumar Modak"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

      </div>
    </section>
  )
}