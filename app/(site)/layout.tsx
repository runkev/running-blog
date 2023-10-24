import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../app/globals.css'
import { FaRunning } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
          <div className='flex items-center space-x-2'>
            <Link href="/">
                <FaRunning 
                    className='cursor-pointer'
                    size={30}
                />
            </Link>
            <h1>Kevin Petow&apos;s Running Log</h1>
          </div>
          <div className='flex items-center space-x-4'>
            <Link href="/posts">
                Posts
            </Link>
            <Link href="/about">
                About
            </Link>
          </div>
      </header>
        {children}
      </body>
    </html>
  )
}
