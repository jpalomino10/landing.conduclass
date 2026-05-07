import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ConduClass – Software para Academias de Conducción",
  description:
    "Gestiona tu academia de conducción de forma inteligente. Administra estudiantes, instructores, vehículos y clases desde una sola plataforma moderna y fácil de usar.",
  keywords: [
    "academia de conducción",
    "software academias",
    "gestión clases conducción",
    "instructores de manejo",
    "autoescuela software",
    "Colombia",
  ],
  authors: [{ name: "ConduClass" }],
  openGraph: {
    title: "ConduClass – Software para Academias de Conducción",
    description:
      "Gestiona tu academia de conducción de forma inteligente. Estudiantes, instructores, vehículos y agenda desde un solo lugar.",
    type: "website",
    locale: "es_CO",
    siteName: "ConduClass",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConduClass – Software para Academias de Conducción",
    description:
      "La plataforma #1 para gestionar academias de conducción en Colombia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-white text-slate-900">{children}</body>
    </html>
  );
}
