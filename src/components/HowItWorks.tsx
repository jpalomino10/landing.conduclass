'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { UserPlus, CalendarCheck, ClipboardCheck, TrendingUp } from 'lucide-react'

const steps = [
  { num: '01', icon: UserPlus,       title: 'Registra tu academia',  desc: 'Crea tu cuenta, configura el perfil e importa estudiantes, instructores y vehículos en minutos.', bg: '#4f46e5' },
  { num: '02', icon: CalendarCheck,  title: 'Programa tus clases',   desc: 'La agenda inteligente asigna instructores y vehículos. Los estudiantes reciben recordatorios automáticos.', bg: '#7c3aed' },
  { num: '03', icon: ClipboardCheck, title: 'Evalúa y registra',     desc: 'El instructor registra el desempeño al finalizar cada clase. El alumno ve su avance por niveles.', bg: '#9333ea' },
  { num: '04', icon: TrendingUp,     title: 'Analiza y crece',       desc: 'Consulta reportes de progreso, uso de recursos y rendimiento. Decisiones basadas en datos reales.', bg: '#059669' },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id='how' ref={ref} style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 80px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', background: '#ede9fe', color: '#7c3aed', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>
            ¿Cómo funciona?
          </span>
          <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.15, marginBottom: 12 }}>
            De cero a tu academia digital en 4 pasos
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', lineHeight: 1.65 }}>
            Configuración rápida, sin complicaciones técnicas. Empieza a operar el mismo día.
          </p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Connector line */}
          <div style={{ position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(90deg,#c7d2fe,#ddd6fe,#d8b4fe,#a7f3d0)' }} className='how-line' />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }} className='how-grid'>
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div key={s.num}
                  initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ position: 'relative', marginBottom: 24 }}>
                    <div style={{ width: 72, height: 72, borderRadius: 20, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 24px ${s.bg}66`, position: 'relative', zIndex: 1 }}>
                      <Icon size={32} color='#fff' />
                    </div>
                    <div style={{ position: 'absolute', top: -8, right: -8, width: 26, height: 26, background: '#fff', border: '2px solid #e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#94a3b8', zIndex: 2 }}>
                      {i + 1}
                    </div>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#1e293b', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65 }}>{s.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.how-grid{grid-template-columns:repeat(2,1fr)!important}.how-line{display:none!important}}@media(max-width:520px){.how-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
