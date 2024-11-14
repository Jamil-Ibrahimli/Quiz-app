import Providers from "@/components/providers/Providers";
import { rubik } from '../fonts';
import React from 'react'
import Header from "@/components/layout/Header";
import './globals.css'

const RootLayout = ({
  children,
}: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={rubik.variable}>
      <body >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

