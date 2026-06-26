'use client'

import { useEffect, useRef } from 'react'

const features = [
  { icon: '🎓', bg: '#eef2ff', title: 'Gestión de estudiantes',  desc: 'Registra, organiza y da seguimiento al avance de cada alumno. Controla matrícula, nivel, horas de práctica y proceso de formación.' },
  { icon: '👨‍🏫', bg: '#fef3c7', title: 'Control de instructores', desc: 'Administra disponibilidad semanal, permisos, incapacidades y vacaciones. Asigna vehículos y monitorea el desempeño de tu equipo.' },
  { icon: '📅', bg: '#f0fdf4', title: 'Agenda inteligente',      desc: 'Programa clases con validación automática de disponibilidad. El sistema previene conflictos de horario en tiempo real.' },
  { icon: '🚗', bg: '#fff1f2', title: 'Parque automotor',        desc: 'Inventario completo de vehículos con control de mantenimientos, alertas de SOAT y estado operacional.' },
  { icon: '📊', bg: '#eff6ff', title: 'Reportes en tiempo real', desc: 'Visualiza el progreso de estudiantes y las horas de instructores al instante. Toma decisiones basadas en datos.' },
  { icon: '📱', bg: '#faf5ff', title: 'App móvil incluida',      desc: 'Estudiantes e instructores tienen su propia app móvil para programar clases y consultar su agenda desde cualquier lugar.' },
]

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up') ?? []
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }), { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id='features' style={{ padding: '100px 0' }} ref={ref}>
      <div className='container'>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--c-600)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12 }}>Funcionalidades</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1, color: 'var(--g900)', marginBottom: 16, lineHeight: 1.15 }}>Todo lo que tu academia necesita</h2>
          <p style={{ fontSize: 17, color: 'var(--g600)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>Una plataforma completa para gestionar cada aspecto de tu academia de conducción, sin complicaciones.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className='features-grid'>
          {features.map((f, i) => (
            <div key={i} className='feature-card fade-up' style={{
              padding: 32, borderRadius: 20, border: '1px solid var(--g200)',
              background: '#fff', transition: 'all .3s', position: 'relative', overflow: 'hidden',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(79,70,229,.1)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#c7d2fe' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--g200)' }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 14, background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>{f.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--g900)', marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--g600)', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px)  { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
