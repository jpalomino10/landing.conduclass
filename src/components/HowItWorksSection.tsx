'use client'

import { useEffect, useRef } from 'react'

const steps = [
  { n: '1', title: 'Configura tu academia',      desc: 'Registra tus instructores, vehículos y define el horario de operación. En minutos tienes la base lista.' },
  { n: '2', title: 'Inscribe tus estudiantes',   desc: 'Crea perfiles con categoría objetivo, matrícula y contacto de emergencia. El sistema calcula el progreso automáticamente.' },
  { n: '3', title: 'Programa y haz seguimiento', desc: 'Agenda clases validando disponibilidad en tiempo real. Consulta reportes de avance y toma decisiones con datos.' },
]

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up') ?? []
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }), { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id='how' style={{ padding: '100px 0' }} ref={ref}>
      <div className='container'>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--c-600)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12 }}>Cómo funciona</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1, color: 'var(--g900)', lineHeight: 1.15 }}>En tres pasos, tu academia organizada</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40, position: 'relative' }} className='how-grid'>
          {/* Connector line */}
          <div style={{ position: 'absolute', top: 32, left: 'calc(16.6% + 32px)', right: 'calc(16.6% + 32px)', height: 2, background: 'linear-gradient(90deg, var(--c-200), var(--c-500), var(--c-200))' }} className='how-line' />

          {steps.map(s => (
            <div key={s.n} className='fade-up' style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, var(--c-600), var(--c-400))', color: '#fff', fontSize: 22, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', position: 'relative', zIndex: 1, boxShadow: '0 8px 24px rgba(79,70,229,.4)' }}>{s.n}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--g900)', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--g600)', lineHeight: 1.7, maxWidth: 220, margin: '0 auto' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .how-grid{grid-template-columns:1fr!important;}
          .how-line{display:none!important;}
        }
      `}</style>
    </section>
  )
}
