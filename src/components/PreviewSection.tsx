'use client'

import { useEffect, useRef } from 'react'

const rows = [
  { av: 'JP', color: '#4f46e5', name: 'Juan Pérez',       time: '09:00 am · Luis Ramos',    chip: { label: 'En curso',   bg: 'rgba(34,197,94,.14)',   color: '#4ade80' } },
  { av: 'MR', color: '#7c3aed', name: 'María Rodríguez',  time: '10:00 am · Carlos García',  chip: { label: 'Programada', bg: 'rgba(99,102,241,.18)',  color: '#a5b4fc' } },
  { av: 'AT', color: '#0891b2', name: 'Andrés Torres',    time: '11:30 am · Luis Ramos',     chip: { label: 'Pendiente',  bg: 'rgba(251,191,36,.14)',  color: '#fbbf24' } },
]

export default function PreviewSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up') ?? []
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }), { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section style={{ padding: '80px 0', background: 'var(--g50)' }} ref={ref}>
      <div className='container'>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className='preview-grid'>

          {/* Text */}
          <div className='fade-up'>
            <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--c-600)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12 }}>La plataforma</p>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: -1, color: 'var(--g900)', marginBottom: 16, lineHeight: 1.2 }}>Un dashboard diseñado para actuar, no solo para ver</h2>
            <p style={{ fontSize: 16, color: 'var(--g600)', lineHeight: 1.7, marginBottom: 28 }}>Desde el momento en que inicias sesión, tienes todo el panorama de tu academia: clases del día, alertas y métricas clave.</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['Vista del día', 'todas las clases programadas con estado, instructor y vehículo asignado.'],
                ['Alertas proactivas', 'SOAT próximo a vencer, clases sin instructor, estudiantes inactivos.'],
                ['Métricas de completitud', 'tasa de clases completadas vs. canceladas por mes.'],
                ['Acceso por roles', 'vistas diferenciadas para admin, instructor y estudiante.'],
              ].map(([bold, rest]) => (
                <li key={bold} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--c-100)', color: 'var(--c-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, flexShrink: 0, marginTop: 2 }}>✓</div>
                  <span style={{ fontSize: 15, color: 'var(--g700)', lineHeight: 1.5 }}><strong>{bold}:</strong> {rest}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mock dashboard */}
          <div className='fade-up' style={{
            background: 'linear-gradient(135deg, #1e1b4b, #3730a3)',
            borderRadius: 24, padding: 24,
            boxShadow: '0 40px 80px rgba(30,27,75,.35)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,.28), transparent)' }} />

            {/* Window bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20 }}>
              {['#ef4444','#fbbf24','#4ade80'].map(c => <span key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c, display: 'block' }} />)}
              <span style={{ flex: 1, textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,.35)', fontWeight: 500 }}>ConduClass — Dashboard</span>
            </div>

            <p style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: .5, marginBottom: 12 }}>Resumen de hoy</p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
              {[['24','#a5b4fc','Estudiantes'],['8','#4ade80','Clases hoy'],['3','#fbbf24','Instructores'],['1','#f87171','Alerta SOAT']].map(([n, color, label]) => (
                <div key={label} style={{ background: 'rgba(255,255,255,.06)', borderRadius: 12, padding: 14, border: '1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color }}>{n}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: .5, marginBottom: 10 }}>Próximas clases</p>

            {rows.map(r => (
              <div key={r.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,.05)', borderRadius: 10, padding: '10px 14px', marginBottom: 8, border: '1px solid rgba(255,255,255,.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>{r.av}</div>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,.8)', fontWeight: 500 }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)' }}>{r.time}</div>
                  </div>
                </div>
                <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 99, fontWeight: 600, background: r.chip.bg, color: r.chip.color }}>{r.chip.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){.preview-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
