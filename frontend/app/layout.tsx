import type { Metadata } from 'next'
import './globals.css'
import { TooltipProvider } from '@/components/ui/tooltip'
import SidebarLayout from '@/components/layout/sidebar'

export const metadata: Metadata = {
  title: 'VidyAI — Smart Study Platform',
  description: 'AI-powered NEET & CBSE preparation platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <SidebarLayout />
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}
