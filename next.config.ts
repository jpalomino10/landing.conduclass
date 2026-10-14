import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Genera .next/standalone con solo los archivos necesarios para producción
  // (sin necesidad de copiar node_modules completo a la imagen Docker).
  output: 'standalone',
}

export default nextConfig
