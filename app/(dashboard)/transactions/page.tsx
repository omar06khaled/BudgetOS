'use client'
import { useMemo, useState } from 'react'
import { transactions as seed } from '@/lib/demo-data'
import { Card } from '@/components/ui/card'

export default function TransactionsPage() {
  const [q, setQ] = useState('')
  const data = useMemo(() => seed.filter(t => t.description.toLowerCase().includes(q.toLowerCase())), [q])
  return <div className='space-y-4'>
    <h2 className='text-2xl font-semibold'>Transactions</h2>
    <Card><div className='grid gap-3 md:grid-cols-5'>
      <input className='rounded border p-2' placeholder='Search description' value={q} onChange={e=>setQ(e.target.value)} />
      <input className='rounded border p-2' placeholder='Filter category' />
      <input className='rounded border p-2' placeholder='Filter type' />
      <input className='rounded border p-2' type='date' />
      <input className='rounded border p-2' type='file' accept='.csv' />
    </div></Card>
    <Card><table className='w-full text-sm'><thead><tr><th>Date</th><th>Description</th><th>Category</th><th>Account</th><th>Type</th><th>Amount</th><th>Notes</th></tr></thead><tbody>{data.map(t=><tr className='border-t' key={t.date+t.description}><td>{t.date}</td><td>{t.description}</td><td>{t.category}</td><td>{t.account}</td><td>{t.type}</td><td>${t.amount}</td><td>{t.notes}</td></tr>)}</tbody></table></Card>
    <Card><h3 className='mb-3 font-medium'>Add / Edit Transaction (demo)</h3><div className='grid gap-2 md:grid-cols-4'>{['date','description','amount','type','category','account','notes'].map(f=><input key={f} className='rounded border p-2' placeholder={f} />)}</div><button className='mt-3 rounded bg-indigo-600 px-4 py-2 text-white'>Save Transaction</button></Card>
  </div>
}
