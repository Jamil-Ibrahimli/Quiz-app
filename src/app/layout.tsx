import Providers from "@/components/Providers";
import { rubik } from '../fonts';
import React from 'react'
import Header from "@/components/layout/Header";
const RootLayout = ({
  children,
}: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={rubik.variable}>
      <body >
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

