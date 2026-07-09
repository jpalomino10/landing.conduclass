import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Habeas Data — ConduClass',
  description: 'Política de tratamiento de datos personales de ConduClass según la Ley 1581 de 2012 de Colombia.',
}

const sections = [
  {
    title: '1. Identificación del responsable',
    content: `ConduClass es el responsable del tratamiento de los datos personales recopilados a través de su plataforma web y aplicación móvil.

• Nombre: ConduClass
• Correo electrónico: hola@conduclass.com
• Sitio web: https://conduclass.com
• País: Colombia`,
  },
  {
    title: '2. Marco legal',
    content: `Esta política se rige por:

• Ley 1581 de 2012 — Régimen General de Protección de Datos Personales.
• Decreto 1377 de 2013 — Reglamentación parcial de la Ley 1581.
• Decreto 1074 de 2015 — Decreto Único Reglamentario del Sector Comercio.
• Circulares de la Superintendencia de Industria y Comercio (SIC).

ConduClass se compromete a tratar los datos personales de sus usuarios con pleno respeto a estas normas.`,
  },
  {
    title: '3. Datos personales que tratamos',
    content: `De acuerdo con el servicio prestado, ConduClass trata las siguientes categorías de datos:

Datos de identificación:
• Nombre completo
• Número de documento de identidad

Datos de contacto:
• Correo electrónico
• Número de teléfono celular

Datos del servicio:
• Rol en la academia (estudiante, instructor, administrador)
• Historial de clases, asistencia y progreso académico
• Horarios programados y cancelaciones
• Multas generadas por inasistencia
• Fotografías de clases subidas por instructores

Datos técnicos:
• Token de notificaciones push del dispositivo
• Dirección IP, tipo de dispositivo y sistema operativo

ConduClass no trata datos sensibles según la definición del artículo 5 de la Ley 1581 de 2012 (origen racial, salud, vida sexual, datos biométricos, etc.).`,
  },
  {
    title: '4. Finalidades del tratamiento',
    content: `Los datos personales son tratados exclusivamente para:

• Crear y administrar cuentas de usuario en la Plataforma.
• Gestionar la programación, asistencia y seguimiento de clases de conducción.
• Calcular y mostrar el progreso académico del estudiante.
• Enviar notificaciones relacionadas con el servicio (clases, recordatorios, alertas).
• Generar reportes para el administrador de la academia.
• Cumplir con obligaciones legales y contractuales.
• Mejorar la calidad y funcionalidades del servicio.`,
  },
  {
    title: '5. Derechos del titular',
    content: `Como titular de sus datos personales, usted tiene los siguientes derechos según la Ley 1581 de 2012:

• Conocer: acceder gratuitamente a sus datos personales que sean objeto de tratamiento.
• Actualizar: solicitar la corrección de datos inexactos, incompletos o desactualizados.
• Rectificar: corregir información que no corresponda a la realidad.
• Suprimir: solicitar la eliminación de sus datos cuando no exista obligación legal de conservarlos o cuando hayan dejado de ser necesarios para la finalidad del tratamiento.
• Revocar: retirar la autorización otorgada para el tratamiento de sus datos, siempre que no exista una obligación legal que lo impida.
• Acceder: obtener información sobre el uso que se ha dado a sus datos.
• Presentar quejas: ante la Superintendencia de Industria y Comercio (SIC) cuando considere que sus derechos han sido vulnerados.`,
  },
  {
    title: '6. Cómo ejercer sus derechos',
    content: `Para ejercer cualquiera de sus derechos como titular, puede escribirnos a:

• Correo electrónico: hola@conduclass.com

Su solicitud debe incluir:
• Nombre completo
• Número de documento de identidad
• Descripción clara del derecho que desea ejercer
• Correo electrónico de respuesta

Tiempo de respuesta:
• Consultas: 10 días hábiles (prorrogables por 5 días hábiles adicionales con notificación previa).
• Reclamos: 15 días hábiles (prorrogables por 8 días hábiles adicionales con notificación previa).

ConduClass verificará la identidad del solicitante antes de atender cualquier solicitud.`,
  },
  {
    title: '7. Autorización para el tratamiento',
    content: `El tratamiento de datos personales en ConduClass se realiza con base en:

• La autorización expresa otorgada por el titular al momento del registro en la Plataforma.
• La ejecución del contrato de servicios entre ConduClass y la academia de conducción.
• El cumplimiento de obligaciones legales aplicables.

El titular puede revocar su autorización en cualquier momento, salvo cuando exista una obligación legal o contractual que requiera la conservación de los datos.`,
  },
  {
    title: '8. Transferencia y transmisión de datos',
    content: `ConduClass no vende, alquila ni cede datos personales a terceros con fines comerciales.

Los datos pueden ser compartidos con:

• La academia de conducción contratante, dentro del alcance del servicio prestado.
• Proveedores tecnológicos bajo acuerdos de confidencialidad (ej. Firebase de Google para notificaciones push, servicios de almacenamiento en la nube).
• Autoridades competentes cuando la ley colombiana así lo exija.

Cuando los datos sean transmitidos a proveedores tecnológicos ubicados fuera de Colombia, ConduClass garantizará que dichos proveedores cuentan con niveles de protección adecuados conforme al artículo 26 de la Ley 1581 de 2012.`,
  },
  {
    title: '9. Seguridad de los datos',
    content: `ConduClass implementa medidas técnicas, humanas y administrativas para proteger los datos personales contra pérdida, acceso no autorizado, divulgación o alteración:

• Cifrado de comunicaciones mediante HTTPS/TLS.
• Control de acceso basado en roles de usuario.
• Copias de seguridad periódicas.
• Acceso restringido al personal autorizado.
• Monitoreo y auditoría de accesos.`,
  },
  {
    title: '10. Tiempo de conservación',
    content: `Los datos personales se conservarán durante el tiempo en que el usuario mantenga una cuenta activa en la Plataforma y durante el período posterior necesario para cumplir con obligaciones legales, contables o contractuales.

Una vez cumplidos los fines del tratamiento y las obligaciones legales, los datos serán eliminados o anonimizados de forma segura.`,
  },
  {
    title: '11. Datos de menores de edad',
    content: `ConduClass no está dirigida a menores de 16 años. No recopilamos intencionalmente datos personales de menores de edad sin el consentimiento verificado de sus padres o tutores legales.

Si un padre, madre o tutor identifica que un menor ha proporcionado datos sin su consentimiento, puede solicitarnos la eliminación inmediata escribiendo a hola@conduclass.com.`,
  },
  {
    title: '12. Modificaciones a esta política',
    content: `ConduClass se reserva el derecho de actualizar esta Política de Habeas Data en cualquier momento, dando cumplimiento a las disposiciones legales vigentes. Los cambios serán informados a los titulares mediante:

• Notificación por correo electrónico.
• Aviso publicado dentro de la aplicación móvil.

La versión vigente siempre estará disponible en https://conduclass.com/habeas-data`,
  },
  {
    title: '13. Autoridad de control',
    content: `La entidad encargada de velar por el cumplimiento de la protección de datos personales en Colombia es:

Superintendencia de Industria y Comercio (SIC)
• Sitio web: https://www.sic.gov.co
• Línea de atención: 01 8000 910 165

Los titulares pueden presentar ante la SIC quejas o reclamos relacionados con el tratamiento de sus datos personales, una vez hayan agotado el proceso de reclamación directo ante ConduClass.`,
  },
]

export default function HabeasDataPage() {
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
              <span style={{ fontSize: 13, color: '#e0e7ff', fontWeight: 600 }}>Habeas Data</span>
            </div>

            <h1 style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.5px' }}>
              Política de Habeas Data
            </h1>
            <p style={{ fontSize: 16, color: '#c7d2fe', lineHeight: 1.65, margin: '0 auto', maxWidth: 560 }}>
              Tratamiento de datos personales conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.
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
              En cumplimiento de la <strong>Ley Estatutaria 1581 de 2012</strong> y el <strong>Decreto 1377 de 2013</strong>,
              ConduClass adopta la presente Política para el Tratamiento de Datos Personales,
              garantizando los derechos de privacidad y de Habeas Data de todos sus usuarios.
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
              Para ejercer sus derechos como titular de datos personales:
            </p>
            <a href='mailto:hola@conduclass.com' style={{ fontSize: 14, color: '#4f46e5', fontWeight: 600, textDecoration: 'none' }}>
              hola@conduclass.com
            </a>
            <p style={{ fontSize: 13, color: '#94a3b8', margin: '16px 0 0' }}>
              Ver también:{' '}
              <a href='/privacidad' style={{ color: '#4f46e5', textDecoration: 'none', fontWeight: 500 }}>Política de Privacidad</a>
              {' · '}
              <a href='/terminos' style={{ color: '#4f46e5', textDecoration: 'none', fontWeight: 500 }}>Términos de Uso</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
