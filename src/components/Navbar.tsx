'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Car } from 'lucide-react'

const hashLinks = [
  { hash: '#features',     label: 'Funcionalidades' },
  { hash: '#how',          label: 'Cómo funciona' },
  { hash: '#benefits',     label: 'Beneficios' },
  { hash: '#testimonials', label: 'Testimonios' },
  { hash: '#contact',      label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) { setScrolled(true); return }
    const h = () => setScrolled(window.scrollY > 20)
    h()
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [isHome])

  const navLinks = hashLinks.map(l => ({
    href: isHome ? l.hash : `/${l.hash}`,
    label: l.label,
  }))

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all .3s',
      background: scrolled ? 'rgba(255,255,255,.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 #e2e8f0' : 'none',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <a href={isHome ? '#' : '/'} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 38, height: 38, background: '#4f46e5', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Car size={20} color='#fff' />
            </div>
            <span style={{ fontSize: 20, fontWeight: 800, color: scrolled ? '#0f172a' : '#fff' }}>
              Condu<span style={{ color: '#818cf8' }}>Class</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className='desktop-nav'>
            {navLinks.map(l => (
              <a key={l.href} href={l.href}
                style={{ fontSize: 14, fontWeight: 500, color: scrolled ? '#475569' : 'rgba(255,255,255,.85)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#6366f1'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? '#475569' : 'rgba(255,255,255,.85)'}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className='desktop-cta'>
            <a href='https://web.conduclass.com/en/login'
              style={{ fontSize: 14, fontWeight: 500, color: scrolled ? '#475569' : 'rgba(255,255,255,.85)', textDecoration: 'none' }}>
              Iniciar sesión
            </a>
            <a href={isHome ? '#contact' : '/#contact'}
              style={{ display: 'inline-flex', alignItems: 'center', padding: '10px 20px', background: '#4f46e5', color: '#fff', fontSize: 14, fontWeight: 700, borderRadius: 12, textDecoration: 'none', boxShadow: '0 2px 8px rgba(79,70,229,.4)' }}>
              Solicitar demo
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(o => !o)} aria-label='Menú'
            style={{ display: 'none', padding: 8, background: 'none', border: 'none', cursor: 'pointer' }} className='hamburger'>
            {open ? <X size={22} color={scrolled ? '#1e293b' : '#fff'} /> : <Menu size={22} color={scrolled ? '#1e293b' : '#fff'} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #e2e8f0', boxShadow: '0 8px 24px rgba(0,0,0,.12)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 32px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ padding: '12px 16px', fontSize: 14, fontWeight: 500, color: '#334155', textDecoration: 'none', borderRadius: 10 }}>
                {l.label}
              </a>
            ))}
            <div style={{ borderTop: '1px solid #f1f5f9', marginTop: 8, paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href='https://web.conduclass.com/en/login'
                style={{ padding: '12px', textAlign: 'center', fontSize: 14, fontWeight: 500, color: '#475569', border: '1px solid #e2e8f0', borderRadius: 12, textDecoration: 'none' }}>
                Iniciar sesión
              </a>
              <a href={isHome ? '#contact' : '/#contact'}
                style={{ padding: '12px', textAlign: 'center', fontSize: 14, fontWeight: 700, color: '#fff', background: '#4f46e5', borderRadius: 12, textDecoration: 'none' }}>
                Solicitar demo
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`@media(max-width:900px){.desktop-nav,.desktop-cta{display:none!important}.hamburger{display:block!important}}`}</style>
    </header>
  )
}
