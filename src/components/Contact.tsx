'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const info = [
  { icon: Mail,   label: 'Correo electrónico', value: 'condu.class@conduclass.com', href: 'mailto:condu.class@conduclass.com' },
  { icon: Phone,  label: 'WhatsApp',           value: '+57 301 760 2570',           href: 'https://wa.me/573017602570' },
  { icon: MapPin, label: 'Cobertura',          value: 'Todo Colombia',              href: '#' },
]

const trust = [
  '30 días de prueba gratuita',
  'Migración de datos sin costo',
  'Capacitación incluida',
  'Soporte técnico en español',
]

const inputStyle: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box',
  padding: '12px 16px', fontSize: 14, color: '#1e293b',
  border: '1.5px solid #e2e8f0', borderRadius: 12, outline: 'none',
  fontFamily: 'inherit', background: '#f8fafc', transition: 'border-color .2s',
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3600'

const STUDENTS_OPTIONS = [
  { label: 'Menos de 20',   value: '1-20' },
  { label: '20 - 50',       value: '20-50' },
  { label: '50 - 150',      value: '50-150' },
  { label: '150 - 300',     value: '150-300' },
  { label: 'Más de 300',    value: '300+' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const form = e.currentTarget
    const data = {
      full_name:      (form.elements.namedItem('full_name')      as HTMLInputElement).value.trim(),
      company:        (form.elements.namedItem('company')        as HTMLInputElement).value.trim(),
      email:          (form.elements.namedItem('email')          as HTMLInputElement).value.trim(),
      phone:          (form.elements.namedItem('phone')          as HTMLInputElement).value.trim(),
      students_range: (form.elements.namedItem('students_range') as HTMLSelectElement).value,
      message:        (form.elements.namedItem('message')        as HTMLTextAreaElement).value.trim() || undefined,
    }

    try {
      const res = await fetch(`${API_BASE}/api/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.status === 201) {
        setSent(true)
      } else if (res.status === 400) {
        const body = await res.json().catch(() => ({}))
        setError(body?.message ?? 'Hay campos inválidos o faltantes. Revísalos e intenta de nuevo.')
      } else {
        setError('Ocurrió un error en el servidor. Por favor inténtalo más tarde.')
      }
    } catch {
      setError('No se pudo conectar con el servidor. Verifica tu conexión e inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id='contact' ref={ref} style={{ padding: '96px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 64px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', background: '#e0e7ff', color: '#4338ca', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>
            Contacto
          </span>
          <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.15, marginBottom: 12 }}>
            ¿Listo para empezar?
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', lineHeight: 1.65 }}>
            Deja tus datos y un asesor te contactará en menos de 24 horas.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }} className='contact-grid'>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 40 }}>
              {info.map(item => {
                const Icon = item.icon
                return (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{ width: 48, height: 48, background: '#eef2ff', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={20} color='#4f46e5' />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 2 }}>{item.label}</div>
                      <a href={item.href} style={{ fontSize: 15, fontWeight: 600, color: '#1e293b', textDecoration: 'none' }}>
                        {item.value}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>

            <div style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1e293b', marginBottom: 16 }}>Con ConduClass obtienes:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {trust.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle2 size={16} color='#10b981' />
                    <span style={{ fontSize: 13, color: '#475569' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
            {sent ? (
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 20, padding: '64px 32px', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Send size={28} color='#16a34a' />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>¡Solicitud enviada!</h3>
                <p style={{ fontSize: 14, color: '#64748b' }}>Te contactaremos en las próximas 24 horas. ¡Gracias por tu interés!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                style={{ background: '#fff', borderRadius: 20, padding: 36, border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,.06)', display: 'flex', flexDirection: 'column', gap: 20 }}>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className='form-row'>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Nombre completo</label>
                    <input name='full_name' type='text' required placeholder='Carlos García' style={inputStyle}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#6366f1'}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#e2e8f0'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Academia / Empresa</label>
                    <input name='company' type='text' required placeholder='Academia Vial Colombia' style={inputStyle}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#6366f1'}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#e2e8f0'} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Correo electrónico</label>
                  <input name='email' type='email' required placeholder='carlos@academia.co' style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#6366f1'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#e2e8f0'} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Teléfono / WhatsApp</label>
                  <input name='phone' type='tel' required placeholder='+57 300 000 0000' style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#6366f1'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#e2e8f0'} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>¿Cuántos estudiantes activos tiene tu academia?</label>
                  <select name='students_range' required style={{ ...inputStyle, appearance: 'none' }}
                    onFocus={e => (e.target as HTMLSelectElement).style.borderColor = '#6366f1'}
                    onBlur={e => (e.target as HTMLSelectElement).style.borderColor = '#e2e8f0'}>
                    <option value=''>Selecciona una opción</option>
                    {STUDENTS_OPTIONS.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Mensaje (opcional)</label>
                  <textarea name='message' rows={3} placeholder='Cuéntanos sobre tu academia...' style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = '#6366f1'}
                    onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = '#e2e8f0'} />
                </div>

                {error && (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10, padding: '12px 16px' }}>
                    <AlertCircle size={16} color='#dc2626' style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontSize: 13, color: '#dc2626' }}>{error}</span>
                  </div>
                )}

                <button type='submit' disabled={loading}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 24px', background: loading ? '#6366f1' : '#4f46e5', color: '#fff', fontSize: 15, fontWeight: 700, borderRadius: 14, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '0 4px 16px rgba(79,70,229,.4)', transition: 'background .2s, transform .1s', opacity: loading ? 0.8 : 1 }}
                  onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = '#4338ca' }}
                  onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = '#4f46e5' }}>
                  {loading ? <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> : <Send size={16} />}
                  {loading ? 'Enviando...' : 'Solicitar información gratuita'}
                </button>

                <p style={{ fontSize: 12, textAlign: 'center', color: '#94a3b8' }}>
                  Al enviar, aceptas nuestra{' '}
                  <a href='#' style={{ color: '#6366f1', textDecoration: 'underline' }}>política de privacidad</a>.
                  Nunca compartiremos tus datos.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}.form-row{grid-template-columns:1fr!important}}
        @keyframes spin{to{transform:rotate(360deg)}}
      `}</style>
    </section>
  )
}
