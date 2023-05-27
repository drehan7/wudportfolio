import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dawud Rehan Portfolio',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <script src="https://kit.fontawesome.com/d6061e99f0.js" crossOrigin="anonymous"></script>
      <div>
        <body className={inter.className}>{children}</body>
      </div>
    </html>
  )
}
