import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'ask from askari',
  description: 'ask from askari',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
