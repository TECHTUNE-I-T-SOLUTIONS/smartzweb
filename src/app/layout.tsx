import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Layout from '@/components/Layout'

export const metadata: Metadata = {
  title: 'Smartz Global Ventures',
  description: 'Accessories, Bookshop, and Business Center Services',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
