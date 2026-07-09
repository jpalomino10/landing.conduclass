import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Términos de Uso — ConduClass',
  description: 'Términos y condiciones de uso de ConduClass, plataforma de gestión para academias de conducción en Colombia.',
}

const sections = [
  {
    title: '1. Aceptación de los términos',
    content: `Al registrarte, acceder o usar la aplicación móvil o el sitio web de ConduClass (en adelante "la Plataforma"), aceptas quedar vinculado por estos Términos de Uso. Si no estás de acuerdo con alguno de estos términos, no debes usar la Plataforma.

Estos términos aplican a todos los usuarios: administradores de academia, instructores y estudiantes.`,
  },
  {
    title: '2. Descripción del servicio',
    content: `ConduClass es una plataforma SaaS (Software como Servicio) diseñada para academias de conducción en Colombia. Permite:

• A las academias: gestionar estudiantes, instructores, vehículos, agenda de clases y reportes.
• A los instructores: consultar y gestionar sus clases asignadas, registrar asistencia, subir evidencias fotográficas y hacer seguimiento de sus estudiantes.
• A los estudiantes: programar y cancelar clases, consultar su progreso académico, revisar su historial de clases y gestionar multas por inasistencia.

ConduClass actúa como proveedor tecnológico. La relación contractual de la academia con sus estudiantes e instructores es independiente de la Plataforma.`,
  },
  {
    title: '3. Registro y cuentas de usuario',
    content: `3.1. Para usar ConduClass debes tener una cuenta activa creada por el administrador de la academia o mediante el proceso de registro habilitado.

3.2. Eres responsable de mantener la confidencialidad de tus credenciales de acceso (correo y contraseña). No debes compartir tu cuenta con terceros.

3.3. Debes proporcionar información veraz, completa y actualizada al momento del registro. ConduClass se reserva el derecho de suspender cuentas con información falsa.

3.4. Si sospechas que tu cuenta ha sido comprometida, debes notificarnos de inmediato a hola@conduclass.com.`,
  },
  {
    title: '4. Uso aceptable',
    content: `Al usar la Plataforma, te comprometes a:

• Usar el servicio únicamente para los fines para los que fue diseñado.
• No intentar acceder a información de otras academias, usuarios o datos que no te correspondan.
• No usar la Plataforma para actividades ilegales, fraudulentas o que vulneren derechos de terceros.
• No intentar vulnerar, hackear o interferir con la seguridad o el funcionamiento de la Plataforma.
• No reproducir, copiar, distribuir o explotar comercialmente ninguna parte de la Plataforma sin autorización expresa.
• No subir contenido inapropiado, ofensivo o que viole derechos de autor en las fotografías de clases u otros campos.`,
  },
  {
    title: '5. Roles y responsabilidades',
    content: `Administrador de academia:
Es responsable de la configuración correcta de la plataforma para su organización, la gestión de usuarios (instructores y estudiantes) y el cumplimiento de las normas legales aplicables a su actividad como academia de conducción.

Instructor:
Es responsable de registrar con veracidad la asistencia, el progreso y las evidencias de las clases impartidas. La información que registre tiene efectos sobre el historial académico del estudiante.

Estudiante:
Es responsable de programar y cancelar clases dentro de los tiempos establecidos por la academia. Las inasistencias no justificadas pueden generar multas según la configuración de la academia.`,
  },
  {
    title: '6. Programación y cancelación de clases',
    content: `6.1. La programación de clases está sujeta a la disponibilidad del instructor y los horarios configurados por la academia.

6.2. Las cancelaciones deben realizarse con la antelación mínima definida por la academia en la configuración de la plataforma.

6.3. Las inasistencias no justificadas pueden generar multas económicas según la política configurada por cada academia. ConduClass no es responsable por la política de multas de cada organización, que es definida de forma autónoma por el administrador.

6.4. ConduClass no se hace responsable por clases no realizadas por causas ajenas a la Plataforma (condiciones climáticas, problemas del vehículo, situaciones de fuerza mayor, etc.).`,
  },
  {
    title: '7. Fotografías y contenido subido por el usuario',
    content: `7.1. Los instructores pueden subir fotografías como evidencia de clases realizadas. Al hacerlo, declaran que tienen derecho a subir dicho contenido y que este no infringe derechos de terceros.

7.2. El contenido subido queda almacenado en los servidores de ConduClass y puede ser accedido por el administrador de la academia.

7.3. ConduClass se reserva el derecho de eliminar contenido que viole estos términos o las leyes aplicables.`,
  },
  {
    title: '8. Notificaciones push',
    content: `ConduClass puede enviarte notificaciones push a tu dispositivo móvil para informarte sobre clases programadas, recordatorios, cambios de estado y alertas importantes. Al instalar la app y aceptar los permisos, autorizas el envío de estas notificaciones. Puedes desactivarlas en cualquier momento desde la configuración de tu dispositivo, aunque esto puede afectar la experiencia de uso.`,
  },
  {
    title: '9. Planes, pagos y facturación',
    content: `9.1. ConduClass opera bajo un modelo de suscripción. Los planes disponibles, precios y condiciones se encuentran publicados en el sitio web y pueden actualizarse con previo aviso.

9.2. El administrador de la academia es responsable del pago de la suscripción contratada. El incumplimiento en el pago puede resultar en la suspensión temporal o definitiva del acceso.

9.3. ConduClass no realiza reembolsos por períodos de tiempo no utilizados, salvo que exista un acuerdo escrito específico.`,
  },
  {
    title: '10. Disponibilidad del servicio',
    content: `ConduClass se compromete a mantener la Plataforma disponible de forma continua, pero no garantiza disponibilidad ininterrumpida. Pueden existir interrupciones por:

• Mantenimiento programado (se notificará con anticipación cuando sea posible).
• Fallos técnicos imprevistos.
• Causas de fuerza mayor.

ConduClass no será responsable por pérdidas o daños derivados de interrupciones del servicio.`,
  },
  {
    title: '11. Limitación de responsabilidad',
    content: `En la máxima medida permitida por la ley, ConduClass no será responsable por:

• Pérdida de datos causada por el usuario o por terceros.
• Daños derivados del uso indebido de la Plataforma.
• Decisiones tomadas por la academia con base en la información registrada en la Plataforma.
• Daños indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso del servicio.

La responsabilidad máxima de ConduClass en cualquier caso no superará el valor pagado por el usuario en los tres (3) meses anteriores al evento que dio lugar al reclamo.`,
  },
  {
    title: '12. Propiedad intelectual',
    content: `Todos los derechos sobre la Plataforma, incluyendo su diseño, código fuente, marca, logotipos, textos e interfaces, son propiedad exclusiva de ConduClass o sus licenciantes. Queda prohibida su reproducción, distribución o uso sin autorización expresa y escrita.

El contenido generado por los usuarios (datos de clases, fotos, etc.) es de su propiedad. Al subirlo, otorgas a ConduClass una licencia limitada para almacenarlo y mostrarlo dentro del servicio.`,
  },
  {
    title: '13. Modificaciones a los términos',
    content: `ConduClass se reserva el derecho de modificar estos Términos de Uso en cualquier momento. Los cambios serán notificados por correo electrónico o mediante aviso dentro de la aplicación con al menos 15 días de anticipación. El uso continuado de la Plataforma tras la notificación constituye aceptación de los nuevos términos.`,
  },
  {
    title: '14. Suspensión y terminación',
    content: `ConduClass puede suspender o terminar el acceso a la Plataforma, con o sin previo aviso, en casos de:

• Violación de estos Términos de Uso.
• Falta de pago de la suscripción.
• Actividades fraudulentas o ilegales.
• Solicitud expresa del administrador de la academia.

Tras la terminación, los datos podrán ser eliminados conforme a nuestra Política de Privacidad.`,
  },
  {
    title: '15. Ley aplicable y jurisdicción',
    content: `Estos Términos de Uso se rigen por las leyes de la República de Colombia. Cualquier controversia derivada de su interpretación o ejecución será resuelta ante los jueces competentes de la ciudad de Barranquilla, Colombia, salvo que las partes acuerden otro mecanismo de resolución de conflictos.`,
  },
  {
    title: '16. Contacto',
    content: `Para cualquier pregunta, reclamo o solicitud relacionada con estos Términos de Uso:

• Correo: hola@conduclass.com
• Sitio web: https://conduclass.com`,
  },
]

export default function TerminosPage() {
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
              <span style={{ fontSize: 13, color: '#e0e7ff', fontWeight: 600 }}>Términos de Uso</span>
            </div>

            <h1 style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.5px' }}>
              Términos de Uso
            </h1>
            <p style={{ fontSize: 16, color: '#c7d2fe', lineHeight: 1.65, margin: '0 auto', maxWidth: 560 }}>
              Estos términos regulan el uso de la plataforma ConduClass por parte de academias,
              instructores y estudiantes en Colombia.
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
              Al usar <strong>ConduClass</strong> aceptas estos Términos de Uso en su totalidad.
              Te recomendamos leerlos detenidamente antes de utilizar la plataforma.
              Si tienes dudas, contáctanos en{' '}
              <a href='mailto:hola@conduclass.com' style={{ color: '#4f46e5', fontWeight: 600 }}>hola@conduclass.com</a>.
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
                  padding: '28px 32px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
                }}
              >
                <h2 style={{ fontSize: 17, fontWeight: 700, color: '#1e293b', marginBottom: 14, paddingBottom: 12, borderBottom: '2px solid #e2e8f0' }}>
                  {section.title}
                </h2>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.85, margin: 0, whiteSpace: 'pre-line' }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div style={{ marginTop: 48, padding: '24px 28px', background: '#f1f5f9', borderRadius: 16, textAlign: 'center' }}>
            <p style={{ fontSize: 14, color: '#64748b', margin: '0 0 8px' }}>
              ¿Tienes preguntas sobre estos términos?
            </p>
            <a href='mailto:hola@conduclass.com' style={{ fontSize: 14, color: '#4f46e5', fontWeight: 600, textDecoration: 'none' }}>
              hola@conduclass.com
            </a>
            <p style={{ fontSize: 13, color: '#94a3b8', margin: '16px 0 0' }}>
              Ver también:{' '}
              <a href='/privacidad' style={{ color: '#4f46e5', textDecoration: 'none', fontWeight: 500 }}>Política de Privacidad</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
