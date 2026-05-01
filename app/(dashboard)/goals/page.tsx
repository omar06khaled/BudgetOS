import { goals } from '@/lib/demo-data'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function GoalsPage() {
  return <div className='space-y-4'><h2 className='text-2xl font-semibold'>Goals</h2>{goals.map(g=>{const pct=(g.currentAmount/g.targetAmount)*100;return <Card key={g.name}><div className='mb-2 flex justify-between'><h3 className='font-medium'>{g.name}</h3><p>{pct.toFixed(0)}%</p></div><Progress value={pct} /><p className='mt-2 text-sm'>${g.currentAmount} / ${g.targetAmount} by {g.deadline}</p><p className='text-sm text-slate-500'>{g.notes}</p></Card>})}</div>
}
