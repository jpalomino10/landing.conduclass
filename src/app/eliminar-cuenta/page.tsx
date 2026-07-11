import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EliminarCuentaForm from './EliminarCuentaForm'

export const metadata: Metadata = {
  title: 'Eliminar cuenta — ConduClass',
  description: 'Solicita la eliminación de tu cuenta y datos personales de ConduClass.',
}

export default function EliminarCuentaPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f8fafc', minHeight: '100vh', paddingTop: 72 }}>

        {/* Hero header */}
        <div style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', padding: '56px 24px 64px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 28 }}>
              <a href='/' style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontWeight: 500 }}>Inicio</a>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>›</span>
              <span style={{ fontSize: 13, color: '#e0e7ff', fontWeight: 600 }}>Eliminar cuenta</span>
            </div>

            <h1 style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.5px' }}>
              Eliminar mi cuenta
            </h1>
            <p style={{ fontSize: 16, color: '#c7d2fe', lineHeight: 1.65, margin: '0 auto', maxWidth: 560 }}>
              Puedes solicitar la eliminación de tu cuenta y todos tus datos personales en cualquier momento.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 72px' }}>

          {/* Warning box */}
          <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: 16, padding: '20px 24px', marginBottom: 40 }}>
            <p style={{ fontSize: 14, color: '#92400e', lineHeight: 1.75, margin: 0 }}>
              <strong>Importante:</strong> La eliminación de tu cuenta es permanente e irreversible.
              Una vez procesada la solicitud, no podrás recuperar tu historial de clases, progreso ni ningún otro dato asociado a tu cuenta.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            {/* Form */}
            <EliminarCuentaForm />

            {/* Step 2 */}
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', padding: '28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#4f46e5', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, flexShrink: 0 }}>2</div>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b', margin: 0 }}>Confirmación y procesamiento</h2>
              </div>
              <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.75, margin: 0 }}>
                Recibirás una confirmación por correo en un plazo de <strong>48 horas hábiles</strong>.
                La eliminación completa de tus datos se procesará en un máximo de <strong>30 días calendario</strong>
                a partir de la confirmación.
              </p>
            </div>

            {/* What gets deleted */}
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', padding: '28px 32px' }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b', margin: '0 0 16px' }}>¿Qué datos se eliminan?</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  'Nombre y datos de contacto',
                  'Correo electrónico y contraseña',
                  'Historial de clases',
                  'Progreso académico',
                  'Foto de perfil',
                  'Tokens de notificaciones push',
                  'Datos del proceso de formación',
                  'Calificaciones y multas',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#475569' }}>
                    <span style={{ color: '#22c55e', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: '#94a3b8', marginTop: 20, marginBottom: 0, lineHeight: 1.6 }}>
                Algunos datos pueden conservarse por obligaciones legales o contables según la Ley 1581 de 2012 de Colombia, por un período no mayor a 5 años.
              </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
