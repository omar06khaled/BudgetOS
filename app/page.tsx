'use client'
import { Card } from '@/components/ui/card'
import { budgets, categories, monthlySeries, summary, transactions } from '@/lib/demo-data'
import { Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const colors = ['#4f46e5', '#0ea5e9', '#14b8a6', '#f59e0b', '#ef4444']

export default function DashboardPage() {
  return <div className='space-y-6'>
    <h2 className='text-2xl font-semibold'>Dashboard</h2>
    <div className='grid gap-4 md:grid-cols-4'>
      {Object.entries(summary).map(([k, v]) => <Card key={k}><p className='text-sm capitalize text-slate-500'>{k.replace(/([A-Z])/g, ' $1')}</p><p className='text-2xl font-bold'>${v.toLocaleString()}</p></Card>)}
    </div>
    <div className='grid gap-4 lg:grid-cols-2'>
      <Card><h3 className='mb-3 font-medium'>Income vs Expenses</h3><div className='h-64'><ResponsiveContainer width='100%' height='100%'><LineChart data={monthlySeries}><XAxis dataKey='month' /><YAxis /><Tooltip /><Line type='monotone' dataKey='income' stroke='#4f46e5' /><Line type='monotone' dataKey='expenses' stroke='#ef4444' /></LineChart></ResponsiveContainer></div></Card>
      <Card><h3 className='mb-3 font-medium'>Expenses by Category</h3><div className='h-64'><ResponsiveContainer width='100%' height='100%'><PieChart><Pie data={categories} dataKey='value' innerRadius={55} outerRadius={90}>{categories.map((_,i)=><Cell key={i} fill={colors[i%colors.length]} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></div></Card>
    </div>
    <Card><h3 className='mb-3 font-medium'>Recent Transactions</h3><table className='w-full text-sm'><thead><tr className='text-left text-slate-500'><th>Date</th><th>Description</th><th>Category</th><th>Amount</th></tr></thead><tbody>{transactions.map(t=><tr key={t.date+t.description} className='border-t'><td>{t.date}</td><td>{t.description}</td><td>{t.category}</td><td>${t.amount}</td></tr>)}</tbody></table></Card>
    <div className='grid gap-4 md:grid-cols-2'>{budgets.filter(b=>b.spent>b.amount).map(b=><Card key={b.category} className='border border-red-200'><h4 className='font-medium text-red-600'>Budget Warning: {b.category}</h4><p className='text-sm'>Over by ${b.spent-b.amount}</p></Card>)}</div>
  </div>
}
