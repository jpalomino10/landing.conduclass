'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { end: 200, suffix: '+',  label: 'Academias activas' },
  { end: 50,  suffix: 'k+', label: 'Clases programadas' },
  { end: 98,  suffix: '%',  label: 'Satisfacción de usuarios' },
  { end: 24,  suffix: '/7', label: 'Soporte disponible' },
]

function useCounter(end: number, active: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    const duration = 2000
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, end])
  return val
}

function StatItem({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const val = useCounter(end, active)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '40px 24px', borderRight: '1px solid rgba(255,255,255,.08)' }} className='stat-item'>
      <div style={{ fontSize: 52, fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: -2 }}>
        {val}<span style={{ fontSize: 32, color: 'var(--c-300)' }}>{suffix}</span>
      </div>
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,.5)', marginTop: 10, fontWeight: 500 }}>{label}</div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #3730a3 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(99,102,241,.18), transparent 70%)', pointerEvents: 'none' }} />
      <div className='container'>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className='stats-grid'>
          {stats.map(s => <StatItem key={s.label} {...s} />)}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .stats-grid{grid-template-columns:repeat(2,1fr)!important;}
          .stat-item:nth-child(2){border-right:none!important;}
          .stat-item:nth-child(3){border-top:1px solid rgba(255,255,255,.08);}
        }
      `}</style>
    </section>
  )
}
