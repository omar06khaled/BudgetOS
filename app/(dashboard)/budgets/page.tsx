import { budgets } from '@/lib/demo-data'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function BudgetsPage() {
  return <div className='space-y-4'><h2 className='text-2xl font-semibold'>Budgets</h2>{budgets.map(b=>{const used=b.spent/b.amount*100;const rem=b.amount-b.spent;return <Card key={b.category} className={used>100?'border border-red-200':''}><div className='mb-2 flex justify-between'><h3 className='font-medium'>{b.category}</h3><p>${b.spent} / ${b.amount}</p></div><Progress value={used} /><p className='mt-2 text-sm'>{rem>=0?`Remaining $${rem}`:`Over by $${Math.abs(rem)}`} ({used.toFixed(0)}%)</p></Card>})}</div>
}
