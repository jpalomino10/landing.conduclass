'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ricardo Peñaloza',
    role: 'Director, Academia Vial Bogotá',
    avatar: 'RP', bg: '#4f46e5',
    rating: 5,
    text: 'ConduClass transformó la operación de nuestra academia. Antes tardábamos horas organizando los horarios; ahora todo está automatizado. Nuestros instructores están más tranquilos y los estudiantes más satisfechos.',
  },
  {
    name: 'Camila Ospina',
    role: 'Administradora, ConductMed Medellín',
    avatar: 'CO', bg: '#7c3aed',
    rating: 5,
    text: 'La gestión de los vehículos y el control de mantenimiento fue lo que me enamoró. Ya no se nos "cuela" ningún carro sin revisión. Los reportes nos ayudan a tomar mejores decisiones cada mes.',
  },
  {
    name: 'Jorge Ramírez',
    role: 'Fundador, EscuelaMoto Cali',
    avatar: 'JR', bg: '#9333ea',
    rating: 5,
    text: 'Empezamos con 30 estudiantes y hoy gestionamos 180 gracias a que la plataforma escala con nosotros. El soporte del equipo es excepcional, siempre están disponibles cuando los necesitamos.',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id='testimonials' ref={ref} style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 64px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', background: '#fef3c7', color: '#92400e', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>
            Testimonios
          </span>
          <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.15, marginBottom: 12 }}>
            Academias que ya confían en ConduClass
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', lineHeight: 1.65 }}>
            Más de 500 academias en Colombia ya gestionan sus clases con nosotros.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }} className='testimonials-grid'>
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{ background: '#f8fafc', borderRadius: 20, padding: 32, border: '1px solid #e2e8f0', position: 'relative', boxShadow: '0 2px 8px rgba(0,0,0,.04)' }}>
              {/* Quote icon */}
              <div style={{ position: 'absolute', top: 24, right: 24, opacity: 0.12 }}>
                <Quote size={40} color='#4f46e5' />
              </div>
              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} color='#f59e0b' fill='#f59e0b' />
                ))}
              </div>
              <blockquote style={{ fontSize: 14, color: '#475569', lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic' }}>
                "{t.text}"
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, color: '#fff', flexShrink: 0 }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1e293b' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#94a3b8' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.testimonials-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
