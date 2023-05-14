import './globals.css'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from "../src/context/AuthContext"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gifme',
  description: 'Find your GIF',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
