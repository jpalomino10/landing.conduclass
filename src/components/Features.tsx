'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, UserCheck, Car, CalendarDays, ClipboardList, Bell, BarChart3, Smartphone } from 'lucide-react'

const features = [
  { icon: Users,         title: 'Gestión de estudiantes',  desc: 'Registra, organiza y da seguimiento al avance de cada alumno. Historial de clases, nivel y proceso de formación.', bg: '#eef2ff', color: '#4f46e5' },
  { icon: UserCheck,     title: 'Control de instructores', desc: 'Administra disponibilidad, permisos e incapacidades. Asigna vehículos y monitorea el desempeño de tu equipo.', bg: '#f5f3ff', color: '#7c3aed' },
  { icon: Car,           title: 'Parque automotor',        desc: 'Inventario completo con control de mantenimientos, alertas de SOAT y estado operacional en tiempo real.', bg: '#ecfdf5', color: '#059669' },
  { icon: CalendarDays,  title: 'Agenda inteligente',      desc: 'Programa clases con validación automática de disponibilidad. El sistema previene conflictos de horario al instante.', bg: '#faf5ff', color: '#9333ea' },
  { icon: ClipboardList, title: 'Evaluaciones por nivel',  desc: 'Registra el desempeño por clase con calificaciones. El alumno ve su avance por niveles en tiempo real.', bg: '#ecfeff', color: '#0891b2' },
  { icon: Bell,          title: 'Notificaciones',          desc: 'Recordatorios de clases, alertas de cambios de horario y avisos de mantenimiento enviados automáticamente.', bg: '#fffbeb', color: '#d97706' },
  { icon: BarChart3,     title: 'Reportes en tiempo real', desc: 'Dashboards con progreso de estudiantes, horas de instructores y uso de vehículos para tomar mejores decisiones.', bg: '#fff1f2', color: '#e11d48' },
  { icon: Smartphone,    title: 'App móvil incluida',      desc: 'Estudiantes e instructores tienen su propia app para programar clases y consultar la agenda desde cualquier lugar.', bg: '#f0f9ff', color: '#0284c7' },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id='features' ref={ref} style={{ padding: '96px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', background: '#e0e7ff', color: '#4338ca', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>
            Funcionalidades
          </span>
          <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.15, marginBottom: 12 }}>
            Todo lo que tu academia necesita
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', lineHeight: 1.65 }}>
            Una plataforma completa diseñada para el flujo de trabajo real de las academias de conducción.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className='features-grid'>
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,.04)', transition: 'box-shadow .2s,transform .2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(79,70,229,.12)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 4px rgba(0,0,0,.04)'; (e.currentTarget as HTMLDivElement).style.transform = 'none' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon size={22} color={f.color} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1e293b', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
      <style>{`@media(max-width:900px){.features-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:520px){.features-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
