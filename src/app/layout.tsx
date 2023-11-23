import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yoodjee - черная пятница',
  description: 'СКИДКИ ДО 70% С 24.11 по 26.11',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
