'use client'
import * as ProgressPrimitive from '@radix-ui/react-progress'

export function Progress({ value }: { value: number }) {
  return (
    <ProgressPrimitive.Root className='relative h-2 w-full overflow-hidden rounded-full bg-slate-200'>
      <ProgressPrimitive.Indicator className='h-full bg-indigo-500 transition-all' style={{ width: `${Math.min(value, 100)}%` }} />
    </ProgressPrimitive.Root>
  )
}
