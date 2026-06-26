export default function CtaSection() {
  return (
    <section id='contact' style={{
      padding: '100px 0',
      background: 'linear-gradient(135deg, var(--c-600) 0%, var(--c-800) 100%)',
      textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Dot pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: .04, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className='container' style={{ position: 'relative' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 900, color: '#fff', letterSpacing: -1.5, marginBottom: 16 }}>
          ¿Listo para transformar tu academia?
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,.7)', marginBottom: 40 }}>
          Solicita una demo gratuita y descubre cómo ConduClass simplifica la gestión desde el primer día.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href='https://web.conduclass.com/en/login' style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, fontSize: 15, fontWeight: 600, background: '#fff', color: 'var(--c-700)', boxShadow: '0 4px 16px rgba(0,0,0,.1)', transition: 'all .2s' }}>
            ⚡ Solicitar demo gratuita
          </a>
          <a href='mailto:soporte@conduclass.com' style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, fontSize: 15, fontWeight: 600, background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,.35)', transition: 'all .2s' }}>
            Hablar con un asesor
          </a>
        </div>
      </div>
    </section>
  )
}
