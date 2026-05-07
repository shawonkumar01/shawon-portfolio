import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shawon Kumar Modak — Full Stack Engineer',
  description: 'Full-Stack Software Engineer specializing in NestJS, Next.js, TypeScript and PostgreSQL.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}