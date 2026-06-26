'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '500+',    label: 'Academias activas',       sub: 'en toda Colombia' },
  { value: '12.000+', label: 'Estudiantes gestionados', sub: 'cada mes' },
  { value: '98%',    label: 'Satisfacción',              sub: 'en encuestas NPS' },
  { value: '5 min',  label: 'Para configurar',           sub: 'y empezar a operar' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} style={{ padding: '48px 0', background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }} className='stats-grid'>
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                textAlign: 'center', padding: '24px 20px',
                borderRight: i < 3 ? '1px solid #e2e8f0' : 'none',
              }}>
              <div style={{ fontSize: 38, fontWeight: 900, background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.1, marginBottom: 4 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1e293b', marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  )
}
