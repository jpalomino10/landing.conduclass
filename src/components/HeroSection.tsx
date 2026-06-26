'use client'

const CarSVG = () => (
  <svg viewBox='0 0 1024 780' xmlns='http://www.w3.org/2000/svg' style={{ width: '100%', maxWidth: 520, filter: 'drop-shadow(0 40px 60px rgba(30,27,75,.55))' }}>
    <ellipse cx='512' cy='755' rx='400' ry='24' fill='#1E1B4B' opacity='.45' />
    <rect x='132' y='390' width='760' height='165' rx='32' fill='#fff' />
    <path d='M275,390Q292,265 375,232L649,232Q732,265 749,390Z' fill='#fff' />
    <path d='M530,380L540,242L643,242Q712,268 726,380Z' fill='#818CF8' />
    <path d='M494,380L484,242L381,242Q312,268 298,380Z' fill='#818CF8' />
    <rect x='503' y='240' width='18' height='140' rx='4' fill='#6366F1' />
    <ellipse cx='180' cy='40' rx='280' ry='200' fill='#6366F1' opacity='.12' />
    <circle cx='278' cy='562' r='84' fill='#1E1B4B' />
    <circle cx='278' cy='562' r='58' fill='#C7D2FE' />
    <circle cx='278' cy='562' r='36' fill='#1E1B4B' />
    <circle cx='278' cy='562' r='16' fill='#E0E7FF' />
    <rect x='274' y='528' width='8' height='68' rx='4' fill='#1E1B4B' />
    <rect x='246' y='558' width='64' height='8' rx='4' fill='#1E1B4B' />
    <rect x='253' y='534' width='8' height='56' rx='4' fill='#1E1B4B' transform='rotate(45 257 562)' />
    <rect x='253' y='534' width='8' height='56' rx='4' fill='#1E1B4B' transform='rotate(-45 257 562)' />
    <circle cx='746' cy='562' r='84' fill='#1E1B4B' />
    <circle cx='746' cy='562' r='58' fill='#C7D2FE' />
    <circle cx='746' cy='562' r='36' fill='#1E1B4B' />
    <circle cx='746' cy='562' r='16' fill='#E0E7FF' />
    <rect x='742' y='528' width='8' height='68' rx='4' fill='#1E1B4B' />
    <rect x='714' y='558' width='64' height='8' rx='4' fill='#1E1B4B' />
    <rect x='721' y='534' width='8' height='56' rx='4' fill='#1E1B4B' transform='rotate(45 725 562)' />
    <rect x='721' y='534' width='8' height='56' rx='4' fill='#1E1B4B' transform='rotate(-45 725 562)' />
    <rect x='854' y='435' width='38' height='20' rx='8' fill='#E0E7FF' />
    <rect x='854' y='461' width='38' height='13' rx='5' fill='#FCD34D' />
    <rect x='132' y='435' width='38' height='20' rx='8' fill='#FCA5A5' />
    <rect x='132' y='461' width='38' height='13' rx='5' fill='#EF4444' />
    <rect x='509' y='395' width='6' height='155' rx='3' fill='#E0E7FF' opacity='.3' />
    <rect x='375' y='460' width='64' height='14' rx='7' fill='#C7D2FE' opacity='.55' />
    <rect x='585' y='460' width='64' height='14' rx='7' fill='#C7D2FE' opacity='.55' />
    <rect x='628' y='206' width='5' height='32' rx='2.5' fill='#C7D2FE' opacity='.7' />
    <circle cx='630' cy='204' r='5' fill='#E0E7FF' opacity='.8' />
    <rect x='56' y='510' width='52' height='6' rx='3' fill='#6366F1' opacity='.5' />
    <rect x='42' y='528' width='66' height='4' rx='2' fill='#6366F1' opacity='.35' />
    <rect x='50' y='542' width='38' height='3' rx='1.5' fill='#6366F1' opacity='.25' />
  </svg>
)

const FloatCard = ({ style, icon, label, value }: { style: React.CSSProperties; icon: string; label: string; value: string }) => (
  <div style={{
    position: 'absolute', ...style,
    background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,.12)', borderRadius: 16,
    padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12, zIndex: 2,
  }}>
    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(99,102,241,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{icon}</div>
    <div style={{ color: '#fff' }}>
      <div style={{ fontSize: 11, opacity: .6, fontWeight: 500, textTransform: 'uppercase', letterSpacing: .5 }}>{label}</div>
      <div style={{ fontSize: 17, fontWeight: 800 }}>{value}</div>
    </div>
  </div>
)

export default function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #3730a3 100%)',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '120px 0 80px',
    }}>
      {/* Orbs */}
      <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,.22) 0%, transparent 70%)', filter: 'blur(80px)', top: -100, right: -100, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,.18) 0%, transparent 70%)', filter: 'blur(80px)', bottom: -80, left: -80, pointerEvents: 'none' }} />

      <div className='container'>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className='hero-grid'>

          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(165,180,252,.12)', color: '#c7d2fe', border: '1px solid rgba(165,180,252,.2)', borderRadius: 99, padding: '6px 14px', fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#a5b4fc', animation: 'pulse-dot 2s infinite', display: 'inline-block' }} />
              Software N.° 1 para academias de conducción
            </div>

            <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 900, lineHeight: 1.08, color: '#fff', letterSpacing: -2, marginBottom: 24 }}>
              Más tiempo<br />para <span style={{ color: '#a5b4fc' }}>enseñar,</span><br />menos tiempo<br />en papeleo
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,.65)', marginBottom: 40, maxWidth: 480 }}>
              ConduClass centraliza estudiantes, instructores, agenda, vehículos y reportes en una sola plataforma. Simple, rápida y diseñada para academias de conducción.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href='#contact' style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, fontSize: 15, fontWeight: 600, background: 'var(--c-600)', color: '#fff', boxShadow: '0 4px 16px rgba(79,70,229,.4)', transition: 'all .2s' }}>
                ⚡ Empieza gratis
              </a>
              <a href='#how' style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, fontSize: 15, fontWeight: 600, background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,.3)', transition: 'all .2s' }}>
                ▶ Ver cómo funciona
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ display: 'flex' }}>
                {['MA','LP','CR','SV'].map((av, i) => (
                  <div key={av} style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #1e1b4b', background: 'var(--c-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', marginLeft: i === 0 ? 0 : -10 }}>{av}</div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', lineHeight: 1.4 }}>
                <strong style={{ color: '#fff' }}>+200 academias</strong><br />ya gestionan sus clases con ConduClass
              </p>
            </div>
          </div>

          {/* Right — car */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='hero-visual'>
            <FloatCard style={{ top: '8%', left: '-5%' }} icon='🎓' label='Estudiantes activos' value='1,248' />
            <div style={{ animation: 'float 6s ease-in-out infinite' }}>
              <CarSVG />
            </div>
            <FloatCard style={{ bottom: '10%', right: '-5%' }} icon='✅' label='Clase completada' value='Hoy, 10:00 am' />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-visual { display: none !important; }
        }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
      `}</style>
    </section>
  )
}
