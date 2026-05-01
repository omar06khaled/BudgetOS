import './globals.css'
import { Sidebar } from '@/components/sidebar'

export const metadata = { title: 'BudgetOS Dashboard' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='md:flex'>
          <Sidebar />
          <main className='flex-1 p-6'>{children}</main>
        </div>
      </body>
    </html>
  )
}
