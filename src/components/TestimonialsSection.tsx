'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  { initials: 'MV', gradient: 'linear-gradient(135deg,#4f46e5,#818cf8)', name: 'Martina Vargas',  role: 'Directora · AutoEscuela Norte',  text: '"Antes tardábamos horas coordinando clases por WhatsApp. Ahora todo es automático y los instructores saben exactamente dónde tienen que estar."' },
  { initials: 'RG', gradient: 'linear-gradient(135deg,#7c3aed,#4f46e5)', name: 'Ricardo Gómez',   role: 'Administrador · VialPro',         text: '"Los reportes de progreso me permiten ver en segundos qué estudiantes están rezagados y cuáles van al día. Es exactamente lo que necesitábamos."' },
  { initials: 'CP', gradient: 'linear-gradient(135deg,#0891b2,#6366f1)', name: 'Camila Pedraza',  role: 'Coordinadora · Academia Segura',  text: '"La app móvil para estudiantes fue un cambio total. Ellos mismos programan sus clases y yo dejo de recibir mensajes a las 11 pm."' },
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up') ?? []
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }), { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id='testimonials' style={{ padding: '100px 0', background: 'var(--g50)' }} ref={ref}>
      <div className='container'>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--c-600)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12 }}>Testimonios</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1, color: 'var(--g900)', lineHeight: 1.15 }}>Lo que dicen nuestros clientes</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className='test-grid'>
          {testimonials.map(t => (
            <div key={t.name} className='fade-up' style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid var(--g200)', boxShadow: '0 4px 16px rgba(0,0,0,.04)', transition: 'transform .3s, box-shadow .3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(0,0,0,.08)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,.04)' }}
            >
              <div style={{ fontSize: 16, marginBottom: 16 }}>⭐⭐⭐⭐⭐</div>
              <p style={{ fontSize: 15, color: 'var(--g700)', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: t.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 800, color: '#fff', flexShrink: 0 }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--g900)' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--g400)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.test-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
