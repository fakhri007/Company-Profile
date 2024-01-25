import { Roboto } from 'next/font/google'
import './globals.css';
import AppWrapper from './app-wrapper';

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"] })

export const metadata = {
  title: 'Fakhri Ramdani',
  description: "Fakhri Ramdani's Profile",
  
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
          <base href="/" />
      </head>
      <body className={roboto.className}>
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  )
}

