'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Smartphone, Lock, CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    icon: Clock, bg: '#4f46e5', lightBg: '#eef2ff',
    title: 'Ahorra hasta 10 horas semanales',
    desc: 'Automatiza la programación de clases, envío de recordatorios y generación de reportes. Dedica ese tiempo a mejorar la calidad de tu enseñanza.',
    items: ['Agenda automática con validación de disponibilidad', 'Recordatorios por SMS y correo electrónico', 'Reportes listos en un clic'],
    link: { label: 'Saber más', color: '#4f46e5', bg: '#eef2ff' },
  },
  {
    icon: Smartphone, bg: '#7c3aed', lightBg: '#f5f3ff',
    title: 'Accesible desde cualquier dispositivo',
    desc: 'Diseñada mobile-first para que administradores, instructores y estudiantes puedan usar la plataforma desde celular, tablet o computador sin fricción.',
    items: ['Interfaz adaptable a cualquier pantalla', 'App móvil para instructores y estudiantes', 'Funciona sin conexión en modo básico'],
    link: { label: 'Saber más', color: '#7c3aed', bg: '#f5f3ff' },
  },
  {
    icon: Lock, bg: '#059669', lightBg: '#ecfdf5',
    title: 'Seguridad y cumplimiento legal',
    desc: 'Cumple con la Ley Habeas Data de Colombia. Datos cifrados, copias de seguridad automáticas y control de acceso por roles.',
    items: ['Roles: Administrador, Instructor, Estudiante', 'Cifrado de datos en reposo y tránsito', 'Backups automáticos diarios'],
    link: { label: 'Saber más', color: '#059669', bg: '#ecfdf5' },
  },
]

export default function Benefits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id='benefits' ref={ref} style={{ padding: '96px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 64px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', background: '#d1fae5', color: '#065f46', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>
            Beneficios
          </span>
          <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.15, marginBottom: 12 }}>
            ¿Por qué elegir ConduClass?
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', lineHeight: 1.65 }}>
            Construido pensando en las necesidades reales de las academias de conducción en Colombia.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }} className='benefits-grid'>
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div key={b.title}
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,.05)', transition: 'box-shadow .25s, transform .25s', display: 'flex', flexDirection: 'column' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(79,70,229,.12)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,.05)'; (e.currentTarget as HTMLDivElement).style.transform = 'none' }}>
                {/* Icon */}
                <div style={{ width: 60, height: 60, borderRadius: 18, background: b.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: `0 8px 20px ${b.bg}55` }}>
                  <Icon size={28} color='#fff' />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1e293b', marginBottom: 12, lineHeight: 1.25 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: 24 }}>{b.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28, flexGrow: 1 }}>
                  {b.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <CheckCircle2 size={15} color={b.bg} style={{ marginTop: 2, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: '#475569', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href='#contact' style={{ display: 'inline-block', padding: '9px 18px', borderRadius: 10, fontSize: 13, fontWeight: 700, color: b.link.color, background: b.link.bg, textDecoration: 'none', alignSelf: 'flex-start' }}>
                  {b.link.label} →
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
      <style>{`@media(max-width:900px){.benefits-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
