import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EliminarCuentaForm from './EliminarCuentaForm'

export const metadata: Metadata = {
  title: 'Eliminar cuenta — ConduClass',
  description: 'Solicita la eliminación de tu cuenta y datos personales de la app ConduClass.',
}

const deleted = [
  'Nombre completo y foto de perfil',
  'Correo electrónico y contraseña',
  'Número de teléfono y datos de contacto',
  'Historial de clases prácticas',
  'Progreso académico y calificaciones',
  'Datos del proceso de formación vial',
  'Registro de multas e infracciones',
  'Tokens de notificaciones push',
]

const retained = [
  {
    type: 'Registros de facturación y pagos',
    period: 'Hasta 10 años',
    reason: 'Obligación contable y tributaria (Decreto 2649 de 1993)',
  },
  {
    type: 'Registros de asistencia a clases',
    period: 'Hasta 5 años',
    reason: 'Requerimiento de autoridades de tránsito',
  },
  {
    type: 'Logs de auditoría del sistema',
    period: 'Hasta 2 años',
    reason: 'Seguridad y trazabilidad según Ley 1581 de 2012',
  },
]

export default function EliminarCuentaPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f8fafc', minHeight: '100vh', paddingTop: 72 }}>

        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', padding: '56px 24px 64px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 28 }}>
              <a href='/' style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontWeight: 500 }}>Inicio</a>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>›</span>
              <span style={{ fontSize: 13, color: '#e0e7ff', fontWeight: 600 }}>Eliminar cuenta</span>
            </div>
            <h1 style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.5px' }}>
              Eliminar mi cuenta en ConduClass
            </h1>
            <p style={{ fontSize: 16, color: '#c7d2fe', lineHeight: 1.65, margin: '0 auto', maxWidth: 580 }}>
              La app <strong style={{ color: '#fff' }}>ConduClass</strong>, desarrollada por ConduClass SAS, te permite solicitar
              la eliminación de tu cuenta y todos tus datos personales en cualquier momento.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 72px' }}>

          {/* Warning */}
          <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: 16, padding: '20px 24px', marginBottom: 40 }}>
            <p style={{ fontSize: 14, color: '#92400e', lineHeight: 1.75, margin: 0 }}>
              <strong>Importante:</strong> La eliminación de tu cuenta en la app ConduClass es permanente e irreversible.
              Una vez procesada la solicitud no podrás recuperar tu historial de clases, progreso ni ningún otro dato asociado a tu cuenta.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            {/* Step 1 — Form */}
            <EliminarCuentaForm />

            {/* Step 2 — Confirmation */}
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', padding: '28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#4f46e5', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, flexShrink: 0 }}>2</div>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b', margin: 0 }}>Confirmación de tu solicitud</h2>
              </div>
              <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.75, margin: 0 }}>
                Recibirás un correo de confirmación en un plazo de <strong>48 horas hábiles</strong> a la dirección que proporcionaste.
                Si no recibes el correo, revisa tu carpeta de spam o vuelve a enviar la solicitud.
              </p>
            </div>

            {/* Step 3 — Processing */}
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', padding: '28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#4f46e5', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, flexShrink: 0 }}>3</div>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b', margin: 0 }}>Eliminación de tus datos</h2>
              </div>
              <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.75, margin: 0 }}>
                Una vez confirmada la solicitud, eliminaremos tu cuenta y la totalidad de tus datos personales en un plazo máximo
                de <strong>30 días calendario</strong>. Recibirás un correo final cuando el proceso se haya completado.
              </p>
            </div>

            {/* Data deleted */}
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', padding: '28px 32px' }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b', margin: '0 0 6px' }}>Datos que se eliminan</h2>
              <p style={{ fontSize: 14, color: '#64748b', margin: '0 0 20px', lineHeight: 1.6 }}>
                Los siguientes datos se borran de forma permanente e irrecuperable:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {deleted.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: '#475569' }}>
                    <span style={{ color: '#22c55e', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Data retained */}
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', padding: '28px 32px' }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b', margin: '0 0 6px' }}>Datos que se conservan</h2>
              <p style={{ fontSize: 14, color: '#64748b', margin: '0 0 20px', lineHeight: 1.6 }}>
                Ciertos datos deben conservarse por obligaciones legales o regulatorias en Colombia aún después de eliminar tu cuenta:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {retained.map((item) => (
                  <div key={item.type} style={{ display: 'flex', gap: 16, padding: '14px 16px', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                    <div style={{ flexShrink: 0, marginTop: 2 }}>
                      <span style={{ display: 'inline-block', padding: '2px 10px', background: '#fef3c7', color: '#92400e', borderRadius: 99, fontSize: 12, fontWeight: 700 }}>
                        {item.period}
                      </span>
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#1e293b', marginBottom: 4 }}>{item.type}</div>
                      <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{item.reason}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: '#94a3b8', marginTop: 20, marginBottom: 0, lineHeight: 1.6 }}>
                Transcurrido el período de retención indicado, estos datos también serán eliminados de forma permanente.
              </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
