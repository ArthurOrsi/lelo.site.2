import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lelo Auto Peças - Biguaçu/SC',
  description: 'Há mais de 25 anos fornecendo peças, acessórios, escapamentos e lubrificantes com qualidade, preço justo e atendimento especializado em Biguaçu e região.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
