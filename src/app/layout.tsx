import Providers from "@/components/Providers";
import { rubik } from '../fonts';

import React from 'react'

const RootLayout = ({
  children,
}: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={rubik.variable}>
      <body >
        
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

