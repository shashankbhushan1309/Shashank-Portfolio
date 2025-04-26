import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shashank Bhushan Portfolio',
  description: 'Introduction',
  generator: 'Shashank Bhushan---',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
