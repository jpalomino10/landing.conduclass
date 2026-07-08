'use client'

import { Car, Globe, MessageCircle, Mail } from 'lucide-react'

const links = {
  Producto: [
    { label: 'Funcionalidades', href: '#features' },
    { label: 'Cómo funciona',   href: '#how' },
    { label: 'Beneficios',      href: '#benefits' },
    { label: 'Testimonios',     href: '#testimonials' },
  ],
  Empresa: [
    { label: 'Sobre nosotros', href: '#' },
    { label: 'Blog',           href: '#' },
    { label: 'Casos de éxito', href: '#' },
  ],
  Soporte: [
    { label: 'Centro de ayuda', href: '#' },
    { label: 'Documentación',   href: '#' },
    { label: 'Contacto',        href: '#contact' },
  ],
  Legal: [
    { label: 'Términos de uso',        href: '#' },
    { label: 'Política de privacidad', href: '/privacidad' },
    { label: 'Habeas Data',            href: '#' },
  ],
}

const social = [
  { Icon: Globe,          href: '#',                         label: 'Web' },
  { Icon: MessageCircle,  href: 'https://wa.me/573001234567', label: 'WhatsApp' },
  { Icon: Mail,           href: 'mailto:hola@conduclass.co',  label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px repeat(4,1fr)', gap: 40, paddingBottom: 48, borderBottom: '1px solid #1e293b' }} className='footer-grid'>

          {/* Brand */}
          <div>
            <a href='/' style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 14 }}>
              <div style={{ width: 38, height: 38, background: '#4f46e5', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Car size={20} color='#fff' />
              </div>
              <span style={{ fontSize: 19, fontWeight: 800, color: '#fff' }}>
                Condu<span style={{ color: '#818cf8' }}>Class</span>
              </span>
            </a>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
              La plataforma líder para la gestión de academias de conducción en Colombia.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {social.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  style={{ width: 36, height: 36, background: '#1e293b', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#4f46e5'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#1e293b'}>
                  <Icon size={16} color='#94a3b8' />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: '#f1f5f9', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '.05em' }}>{category}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(item => (
                  <li key={item.label}>
                    <a href={item.href}
                      style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#e2e8f0'}
                      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#64748b'}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: 13 }}>© {new Date().getFullYear()} ConduClass. Todos los derechos reservados.</p>
          <p style={{ fontSize: 13 }}>Hecho con ❤️ para academias de conducción de Colombia</p>
        </div>
      </div>
      <style>{`@media(max-width:900px){.footer-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </footer>
  )
}
