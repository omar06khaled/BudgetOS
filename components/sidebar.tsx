import Link from 'next/link'

const links = [
  ['/', 'Dashboard'],
  ['/transactions', 'Transactions'],
  ['/budgets', 'Budgets'],
  ['/subscriptions', 'Subscriptions'],
  ['/goals', 'Goals']
]

export function Sidebar() {
  return (
    <aside className='w-full border-b bg-white p-4 md:h-screen md:w-64 md:border-b-0 md:border-r'>
      <h1 className='mb-4 text-xl font-bold'>BudgetOS</h1>
      <nav className='space-y-2'>
        {links.map(([href, label]) => (
          <Link key={href} href={href} className='block rounded-lg px-3 py-2 hover:bg-slate-100'>
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
