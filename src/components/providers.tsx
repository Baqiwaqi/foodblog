'use client'

import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { TailwindIndicator } from './tailwind-indicator'
import { ThemeProvider } from './theme-provider'

interface ProvidersProps {
   children: ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={cn(
               "min-h-screen bg-background font-sans antialiased",
               fontSans.variable
            )}
         >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
               {children}
               <TailwindIndicator />
            </ThemeProvider>
         </body>
      </html>
   )
}

export default Providers
