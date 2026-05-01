export const summary = { totalBalance: 18420, monthlyIncome: 7200, monthlyExpenses: 4910, netSavings: 2290 }
export const monthlySeries = [
  { month: 'Jan', income: 6500, expenses: 4300 },
  { month: 'Feb', income: 6800, expenses: 4500 },
  { month: 'Mar', income: 7100, expenses: 4700 },
  { month: 'Apr', income: 7200, expenses: 4910 }
]
export const categories = [
  { name: 'Housing', value: 2100 },
  { name: 'Food', value: 860 },
  { name: 'Transport', value: 550 },
  { name: 'Entertainment', value: 480 },
  { name: 'Utilities', value: 420 }
]
export const transactions = [
  { date: '2026-04-29', description: 'Salary', category: 'Income', account: 'Checking', type: 'income', amount: 3600, notes: 'Bi-weekly pay' },
  { date: '2026-04-28', description: 'Rent', category: 'Housing', account: 'Checking', type: 'expense', amount: 1800, notes: 'April rent' },
  { date: '2026-04-27', description: 'Groceries', category: 'Food', account: 'Credit Card', type: 'expense', amount: 134, notes: '' }
]
export const budgets = [
  { category: 'Food', amount: 700, spent: 860 },
  { category: 'Transport', amount: 600, spent: 550 },
  { category: 'Entertainment', amount: 300, spent: 480 }
]
export const subscriptions = [
  { name: 'Netflix', amount: 15.49, billingCycle: 'monthly', category: 'Entertainment', nextPaymentDate: '2026-05-10', status: 'active' },
  { name: 'Spotify', amount: 10.99, billingCycle: 'monthly', category: 'Entertainment', nextPaymentDate: '2026-05-04', status: 'active' }
]
export const goals = [
  { name: 'Emergency Fund', targetAmount: 10000, currentAmount: 6200, deadline: '2026-12-31', notes: '6 months expenses' },
  { name: 'Vacation', targetAmount: 3000, currentAmount: 1200, deadline: '2026-09-01', notes: 'Italy trip' }
]
