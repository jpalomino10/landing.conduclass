import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidad — ConduClass',
  description: 'Política de privacidad y tratamiento de datos personales de ConduClass, plataforma para academias de conducción en Colombia.',
}

const sections = [
  {
    title: '1. Responsable del tratamiento',
    content: `ConduClass (en adelante "la Plataforma") es responsable del tratamiento de los datos personales recopilados a través de su aplicación móvil y sitio web. Para consultas sobre privacidad puedes escribirnos a: hola@conduclass.com`,
  },
  {
    title: '2. Datos que recopilamos',
    content: `Recopilamos la siguiente información cuando usas ConduClass:

• Datos de identificación: nombre completo, número de documento de identidad.
• Datos de contacto: correo electrónico y número de teléfono.
• Datos de rol: si eres estudiante, instructor o administrador de academia.
• Datos de la academia: nombre, dirección y configuración de la organización.
• Datos de uso del servicio: historial de clases, horarios, asistencia, progreso académico, calificaciones y multas generadas.
• Datos del vehículo: placa, marca, modelo y estado (para instructores y administradores).
• Fotografías de clases: imágenes que el instructor sube como evidencia de la clase.
• Tokens de notificaciones push: identificador del dispositivo para enviar notificaciones.
• Datos técnicos: dirección IP, tipo de dispositivo, sistema operativo y versión de la app.`,
  },
  {
    title: '3. Finalidad del tratamiento',
    content: `Usamos tus datos exclusivamente para:

• Crear y gestionar tu cuenta en la Plataforma.
• Permitir la programación, seguimiento y registro de clases de conducción.
• Enviar notificaciones sobre clases, recordatorios y alertas importantes.
• Calcular el progreso académico del estudiante.
• Generar reportes para la academia.
• Mejorar la experiencia y funcionalidades de la Plataforma.
• Cumplir con obligaciones legales aplicables.`,
  },
  {
    title: '4. Compartición de datos',
    content: `ConduClass no vende ni cede tus datos personales a terceros con fines comerciales. Los datos pueden ser compartidos únicamente con:

• La academia de conducción a la que perteneces (instructor o estudiante), dentro del alcance del servicio contratado.
• Proveedores tecnológicos que operan bajo acuerdos de confidencialidad (ej. servicios de almacenamiento en la nube, notificaciones push mediante Firebase de Google).
• Autoridades competentes cuando la ley colombiana así lo exija.`,
  },
  {
    title: '5. Almacenamiento y seguridad',
    content: `Tus datos se almacenan en servidores con medidas de seguridad técnicas y organizativas, incluyendo:

• Cifrado de datos en tránsito (HTTPS/TLS).
• Control de acceso basado en roles.
• Copias de seguridad periódicas.
• Acceso restringido al personal autorizado.

Conservamos tus datos mientras tu cuenta esté activa o mientras sea necesario para prestar el servicio. Puedes solicitar la eliminación de tu cuenta en cualquier momento.`,
  },
  {
    title: '6. Tus derechos (Habeas Data)',
    content: `De conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia, tienes derecho a:

• Conocer, actualizar y rectificar tus datos personales.
• Solicitar la eliminación de tus datos cuando no exista obligación legal de conservarlos.
• Revocar la autorización para el tratamiento de tus datos.
• Acceder de forma gratuita a tus datos personales.
• Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).

Para ejercer cualquiera de estos derechos escríbenos a: hola@conduclass.com`,
  },
  {
    title: '7. Notificaciones push',
    content: `La app solicita permiso para enviarte notificaciones push. Estas se usan para informarte sobre clases programadas, cambios de horario, inasistencias y otros eventos relevantes. Puedes desactivar las notificaciones en cualquier momento desde la configuración de tu dispositivo.`,
  },
  {
    title: '8. Menores de edad',
    content: `ConduClass no está dirigida a menores de 16 años. Si eres padre, madre o tutor y tienes conocimiento de que un menor nos ha proporcionado datos personales sin tu consentimiento, contáctanos para eliminar esa información.`,
  },
  {
    title: '9. Cambios en esta política',
    content: `Podemos actualizar esta política ocasionalmente. Cuando lo hagamos, notificaremos a los usuarios registrados mediante correo electrónico o una notificación dentro de la app. Te recomendamos revisar esta página periódicamente. La fecha de última actualización aparece al final del documento.`,
  },
  {
    title: '10. Contacto',
    content: `Si tienes preguntas, comentarios o solicitudes sobre esta política de privacidad, contáctanos:

• Correo: hola@conduclass.com
• Sitio web: https://conduclass.com`,
  },
]

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f8fafc', minHeight: '100vh', paddingTop: 72 }}>

        {/* Hero header */}
        <div style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', padding: '56px 24px 64px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>

            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 28 }}>
              <a href='/' style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontWeight: 500 }}>Inicio</a>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>›</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>Legal</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>›</span>
              <span style={{ fontSize: 13, color: '#e0e7ff', fontWeight: 600 }}>Política de Privacidad</span>
            </div>

            <h1 style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.5px' }}>
              Política de Privacidad
            </h1>
            <p style={{ fontSize: 16, color: '#c7d2fe', lineHeight: 1.65, margin: '0 auto', maxWidth: 560 }}>
              En ConduClass nos tomamos muy en serio la protección de tus datos personales.
              Aquí te explicamos qué información recopilamos y cómo la usamos.
            </p>
            <p style={{ fontSize: 12, color: '#a5b4fc', marginTop: 20, fontWeight: 500 }}>
              Última actualización: julio de 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 72px' }}>

          {/* Intro box */}
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 16, padding: '20px 24px', marginBottom: 40 }}>
            <p style={{ fontSize: 14, color: '#1e40af', lineHeight: 1.75, margin: 0 }}>
              Esta Política de Privacidad describe cómo <strong>ConduClass</strong> recopila, usa y protege
              la información personal de los usuarios de su aplicación móvil y plataforma web,
              en cumplimiento de la <strong>Ley 1581 de 2012</strong> (Protección de Datos Personales) y
              el <strong>Decreto 1377 de 2013</strong> de Colombia.
            </p>
          </div>

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {sections.map((section) => (
              <div
                key={section.title}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  padding: '28px 28px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
                  border: '1px solid #f1f5f9',
                }}
              >
                <h2 style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: 14,
                  paddingBottom: 12,
                  borderBottom: '2px solid #f1f5f9',
                }}>
                  {section.title}
                </h2>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.85, margin: 0, whiteSpace: 'pre-line' }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div style={{ marginTop: 40, padding: '20px 24px', background: '#f1f5f9', borderRadius: 16, textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#64748b', margin: 0, lineHeight: 1.7 }}>
              Al usar ConduClass aceptas los términos de esta Política de Privacidad.{' '}
              Para más información escríbenos a{' '}
              <a href='mailto:hola@conduclass.com' style={{ color: '#4f46e5', fontWeight: 600 }}>
                hola@conduclass.com
              </a>
            </p>
          </div>

          {/* Back to home */}
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <a
              href='/'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 14,
                fontWeight: 600,
                color: '#4f46e5',
                textDecoration: 'none',
                padding: '10px 20px',
                border: '1.5px solid #c7d2fe',
                borderRadius: 12,
                background: '#fff',
                transition: 'all .2s',
              }}
            >
              ← Volver al inicio
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
