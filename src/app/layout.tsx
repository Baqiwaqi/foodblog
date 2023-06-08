import { siteConfig } from '@/config/site'
import './globals.css'
import { Inter } from 'next/font/google'
import { MainNav } from '@/components/main-nav'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import Providers from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Madam Joanne',
   description: 'Your vegan food blog',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body>
            <Providers>
               <Header />
               <aside className='max-h-[93vh] container py-16 md:py-12 w-full'>
                  {children}
               </aside>
            </Providers>
         </body>
      </html>
   )
}


const Header = () => {
   return (
      <header className="sticky top-0 z-40 w-full border-b bg-background">
         <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <MainNav items={siteConfig.mainNav} />
            <div className="flex flex-1 items-center justify-end space-x-4">
               <nav className="flex items-center space-x-1">

                  <Link
                     href={siteConfig.links.github}
                     target="_blank"
                     rel="noreferrer"
                  >
                     <div
                        className={buttonVariants({
                           size: "sm",
                           variant: "ghost",
                        })}
                     >
                        <Icons.gitHub className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                     </div>
                  </Link>
                  <ThemeToggle />
               </nav>
            </div>
         </div>
      </header>
   )
}