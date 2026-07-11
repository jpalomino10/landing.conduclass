'use client'

import { useEffect, useState } from 'react'
import { Send, AlertCircle, CheckCircle2, Loader2, Mail } from 'lucide-react'

declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''
const API_BASE           = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3600'
const TENANT_ID          = process.env.NEXT_PUBLIC_TENANT_ID ?? ''

const SUBJECT = 'Eliminar cuenta'
const MESSAGE = 'Solicito la eliminación permanente de mi cuenta y todos mis datos personales de la plataforma ConduClass.'

const inputStyle: React.CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '14px 16px 14px 44px',
  fontSize: 15,
  color: '#1e293b',
  border: '1.5px solid #e2e8f0',
  borderRadius: 12,
  outline: 'none',
  fontFamily: 'inherit',
  background: '#f8fafc',
  transition: 'border-color .2s',
}

export default function EliminarCuentaForm() {
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState<string | null>(null)
  const [email, setEmail]     = useState('')

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
    script.async = true
    document.head.appendChild(script)
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script)
    }
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      if (!window.grecaptcha) {
        throw new Error('recaptcha_not_ready')
      }

      const recaptcha_token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact' })

      const headers: Record<string, string> = { 'Content-Type': 'application/json' }
      if (TENANT_ID) headers['X-Tenant-ID'] = TENANT_ID

      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ email: email.trim(), subject: SUBJECT, message: MESSAGE, recaptcha_token }),
      })

      if (res.ok) {
        setSent(true)
      } else if (res.status === 400) {
        const body = await res.json().catch(() => ({}))
        setError(body?.message ?? 'Datos inválidos. Verifica tu correo e intenta de nuevo.')
      } else {
        setError('Error en el servidor. Por favor inténtalo más tarde.')
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.message === 'recaptcha_not_ready') {
        setError('El verificador de seguridad aún no está listo. Espera un momento e intenta de nuevo.')
      } else {
        setError('No se pudo conectar con el servidor. Verifica tu conexión e inténtalo de nuevo.')
      }
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 20, padding: '48px 32px', textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <CheckCircle2 size={32} color='#16a34a' />
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', marginBottom: 10 }}>Solicitud enviada</h3>
        <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, margin: 0 }}>
          Recibimos tu solicitud de eliminación de cuenta para <strong>{email}</strong>.
          <br />Te confirmaremos por correo en un plazo de <strong>48 horas hábiles</strong>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}
      style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 4 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#4f46e5', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, flexShrink: 0 }}>1</div>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b', margin: 0 }}>Envía tu solicitud</h2>
      </div>

      <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.75, margin: 0 }}>
        Ingresa el correo electrónico asociado a tu cuenta de ConduClass y enviaremos tu solicitud de eliminación automáticamente.
      </p>

      <div style={{ position: 'relative' }}>
        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
          Correo electrónico
        </label>
        <div style={{ position: 'relative' }}>
          <Mail size={16} color='#94a3b8' style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          <input
            type='email'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='tu@correo.com'
            style={inputStyle}
            onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#6366f1'}
            onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#e2e8f0'}
          />
        </div>
      </div>

      {error && (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10, padding: '12px 16px' }}>
          <AlertCircle size={16} color='#dc2626' style={{ flexShrink: 0, marginTop: 1 }} />
          <span style={{ fontSize: 13, color: '#dc2626' }}>{error}</span>
        </div>
      )}

      <button
        type='submit'
        disabled={loading}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 24px', background: '#ef4444', color: '#fff', fontSize: 15, fontWeight: 700, borderRadius: 14, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '0 4px 16px rgba(239,68,68,.3)', transition: 'background .2s', opacity: loading ? 0.8 : 1 }}
        onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = '#dc2626' }}
        onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = '#ef4444' }}>
        {loading ? <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> : <Send size={16} />}
        {loading ? 'Enviando...' : 'Solicitar eliminación de cuenta'}
      </button>

      <p style={{ fontSize: 12, textAlign: 'center', color: '#94a3b8', margin: 0 }}>
        Esta acción es irreversible. Al enviar confirmas que deseas eliminar tu cuenta permanentemente.
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </form>
  )
}
