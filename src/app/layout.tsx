import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ConduClass — Gestiona tu academia de conducción',
  description:
    'La plataforma todo-en-uno para academias de conducción. Estudiantes, instructores, agenda, vehículos y reportes en un solo lugar. Empieza gratis hoy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
