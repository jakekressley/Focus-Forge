import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'
import NavMenu from '@/components/NavMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Focus Forge',
  description: 'Level up your focus with Focus Forge',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <head>
        <title>Focus Forge</title>
        <link rel="icon" href="../public/apple-touch-icon.png" />
      </head>
      <body>
        <SessionProvider session={session}>
          <main className="bg-gray-800 text-white h-screen">
            <NavMenu />
            <div className="p-10 border border-blue-600 h-100">
              {children}
            </div>
          </main>
        </SessionProvider>
      </body>
    </html>
)}