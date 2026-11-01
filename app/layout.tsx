import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shawon Kumar Modak — Full Stack Engineer',
  description: 'Full-stack engineer building production APIs and web apps with NestJS, Next.js, TypeScript and PostgreSQL.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}