'use client'

import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            zIndex: 9999,
            fontSize: '14px',
            fontWeight: '500',
          },
        }}
      />
    </NextUIProvider>
  )
}