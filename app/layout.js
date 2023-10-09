import Header from './components/Header'
import Sidebar from './components/Sidebar/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-[#f9f9f9] text-black w-screen h-screen overflow-auto'>
          <Header />
          <main className='flex'>
            <div className="min-w-[fit-content]"><Sidebar /></div>
            <div className='w-full overflow-x-hidden'>{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}