'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react'

const highlights = ['Sin tarjeta de crédito', 'Configura en 5 minutos', 'Soporte en español']

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 45%, #4c1d95 100%)',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: 80,
    }}>
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(165,180,252,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(165,180,252,0.4) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      {/* Glow orbs */}
      <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,.28) 0%, transparent 70%)', filter: 'blur(80px)', top: -100, right: -80, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,.2) 0%, transparent 70%)', filter: 'blur(80px)', bottom: -60, left: -60, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 40px', width: '100%', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className='hero-grid'>

          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(165,180,252,.12)', color: '#c7d2fe', border: '1px solid rgba(165,180,252,.2)', borderRadius: 99, padding: '6px 14px', fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#a5b4fc', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Software N.° 1 para academias de conducción
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, lineHeight: 1.1, color: '#fff', letterSpacing: -1.5, marginBottom: 20 }}>
              Gestiona tu academia{' '}
              <span style={{ background: 'linear-gradient(90deg, #a5b4fc, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                de conducción
              </span>{' '}
              sin complicaciones
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,.65)', marginBottom: 28, maxWidth: 460 }}>
              ConduClass centraliza estudiantes, instructores, vehículos y agenda en una sola plataforma. Más tiempo para enseñar, menos para papeleo.
            </motion.p>

            <motion.ul initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
              {highlights.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,.75)', fontSize: 13 }}>
                  <CheckCircle2 size={14} color='#34d399' />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
              <a href='#contact' style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', borderRadius: 12, fontSize: 15, fontWeight: 700, background: '#4f46e5', color: '#fff', boxShadow: '0 4px 20px rgba(79,70,229,.5)', textDecoration: 'none' }}>
                Comenzar gratis <ArrowRight size={16} />
              </a>
              <a href='#how' style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', borderRadius: 12, fontSize: 15, fontWeight: 600, background: 'rgba(255,255,255,.1)', color: '#fff', border: '1px solid rgba(255,255,255,.25)', textDecoration: 'none' }}>
                <Play size={14} fill='white' /> Cómo funciona
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }}
              style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ display: 'flex' }}>
                {['MA','LP','CR','SV','JP'].map((av, i) => (
                  <div key={av} style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #1e1b4b', background: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', marginLeft: i === 0 ? 0 : -10 }}>{av}</div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', lineHeight: 1.4 }}>
                <strong style={{ color: '#fff' }}>+500 academias</strong><br />ya gestionan sus clases con ConduClass
              </p>
            </motion.div>
          </div>

          {/* Right — Dashboard mockup */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            style={{ position: 'relative' }}>
            <div style={{ background: 'rgba(15,23,42,.85)', backdropFilter: 'blur(12px)', borderRadius: 20, border: '1px solid rgba(99,102,241,.25)', boxShadow: '0 40px 80px rgba(0,0,0,.5)', overflow: 'hidden' }}>
              {/* Browser bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '12px 20px', borderBottom: '1px solid rgba(99,102,241,.15)', background: 'rgba(0,0,0,.3)' }}>
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'rgba(248,113,113,.8)' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'rgba(250,204,21,.8)' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'rgba(74,222,128,.8)' }} />
                <span style={{ marginLeft: 14, fontSize: 11, color: 'rgba(148,163,184,.7)', fontFamily: 'monospace' }}>app.conduclass.co</span>
              </div>
              <div style={{ padding: 20 }}>
                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 16 }}>
                  {[{ label: 'Estudiantes', value: '248', bg: '#4f46e5' }, { label: 'Instructores', value: '12', bg: '#7c3aed' }, { label: 'Vehículos', value: '18', bg: '#059669' }].map(s => (
                    <div key={s.label} style={{ background: 'rgba(255,255,255,.06)', borderRadius: 12, padding: 14 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: s.bg, marginBottom: 8 }} />
                      <div style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>{s.value}</div>
                      <div style={{ fontSize: 11, color: 'rgba(148,163,184,.7)' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                {/* Clases */}
                <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 12, padding: 14, marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(203,213,225,.9)', marginBottom: 10 }}>Clases de hoy</div>
                  {[{ time: '08:00', name: 'Carlos Gómez', inst: 'Luis R.', s: 'Completada', c: '#10b981' }, { time: '10:30', name: 'Ana Torres', inst: 'María V.', s: 'En curso', c: '#818cf8' }, { time: '14:00', name: 'Pedro Silva', inst: 'Luis R.', s: 'Pendiente', c: '#64748b' }].map(row => (
                    <div key={row.time} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#818cf8', width: 36 }}>{row.time}</span>
                        <div><div style={{ fontSize: 11, fontWeight: 600, color: '#fff' }}>{row.name}</div><div style={{ fontSize: 10, color: '#64748b' }}>{row.inst}</div></div>
                      </div>
                      <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 99, background: row.c + '22', color: row.c, fontWeight: 600 }}>{row.s}</span>
                    </div>
                  ))}
                </div>
                {/* Progress */}
                <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 12, padding: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(203,213,225,.9)' }}>Progreso mensual</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#818cf8' }}>78%</span>
                  </div>
                  <div style={{ height: 6, background: 'rgba(255,255,255,.1)', borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '78%', background: 'linear-gradient(90deg, #6366f1, #a78bfa)', borderRadius: 99 }} />
                  </div>
                  <div style={{ fontSize: 10, color: '#64748b', marginTop: 6 }}>156 de 200 clases completadas</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.9 }}
              style={{ position: 'absolute', bottom: -20, left: -20, background: '#fff', borderRadius: 16, boxShadow: '0 20px 40px rgba(0,0,0,.2)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 38, height: 38, background: '#d1fae5', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={20} color='#059669' />
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a' }}>Clase completada</div>
                <div style={{ fontSize: 10, color: '#64748b' }}>Pedro aprobó nivel básico</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.1 }}
              style={{ position: 'absolute', top: -16, right: -16, background: '#4f46e5', borderRadius: 16, boxShadow: '0 20px 40px rgba(79,70,229,.4)', padding: '12px 18px', color: '#fff' }}>
              <div style={{ fontSize: 11, opacity: 0.8 }}>Nuevos estudiantes</div>
              <div style={{ fontSize: 26, fontWeight: 900, lineHeight: 1.1 }}>+34%</div>
              <div style={{ fontSize: 10, opacity: 0.65 }}>este mes</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox='0 0 1440 72' fill='none'>
          <path d='M0 72L60 64C120 56 240 40 360 32C480 24 600 24 720 30.7C840 37.3 960 50.7 1080 53.3C1200 56 1320 48 1380 44L1440 40V72H0Z' fill='white' />
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.85)} }
      `}</style>
    </section>
  )
}
