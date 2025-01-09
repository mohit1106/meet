import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "MeetX",
  description: "Make Real-time calls or host video meetings with your friends and colleagues",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ({children}: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
        
    </main>
  )
}

export default RootLayout