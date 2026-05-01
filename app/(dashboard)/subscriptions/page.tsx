import { subscriptions } from '@/lib/demo-data'
import { Card } from '@/components/ui/card'

export default function SubscriptionsPage() {
  const total = subscriptions.reduce((sum, s) => sum + s.amount, 0)
  return <div className='space-y-4'><h2 className='text-2xl font-semibold'>Subscriptions</h2><Card><p className='text-lg font-semibold'>Total monthly recurring cost: ${total.toFixed(2)}</p></Card><Card><table className='w-full text-sm'><thead><tr><th>Name</th><th>Amount</th><th>Billing Cycle</th><th>Category</th><th>Next Payment</th><th>Status</th></tr></thead><tbody>{subscriptions.map(s=><tr className='border-t' key={s.name}><td>{s.name}</td><td>${s.amount}</td><td>{s.billingCycle}</td><td>{s.category}</td><td>{s.nextPaymentDate}</td><td>{s.status}</td></tr>)}</tbody></table></Card></div>
}
