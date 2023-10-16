import './globals.css'
import type { Metadata } from 'next'
import { Indie_Flower } from 'next/font/google'

const inter =  Indie_Flower({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yolana Chetwynd',
  description: 'Yolanda Chetwynd Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
