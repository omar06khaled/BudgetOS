# BudgetOS - Personal Finance Dashboard

A private personal finance dashboard built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui-style components, Recharts, and Supabase.

## Features
- Dashboard with balance summaries, income vs expense chart, category donut chart, recent transactions, and budget alerts.
- Transactions with search/filter UI, add/edit form, delete-ready table, and CSV upload input.
- Budgets, Subscriptions, and Goals pages with progress tracking.
- Supabase schema with Row Level Security (RLS) on every table.
- Demo seed data with no real bank credential integration.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env.local` from `.env.example` and set your Supabase keys.
3. Run SQL in your Supabase project:
   - `db/schema.sql`
   - `db/seed.sql` (optional demo)
4. Start the app:
   ```bash
   npm run dev
   ```

## CSV Format
Supported columns:
- `date`
- `description`
- `amount`
- `type`
- `category`
- `account`
- `notes`

## Project Structure
- `app/` route pages
- `components/` UI and layout components
- `lib/` utilities, demo data, supabase client
- `db/` schema and seed SQL

## Security Notes
- No API keys are hardcoded.
- Uses environment variables for Supabase credentials.
- RLS policies restrict access to authenticated user's own data.
- No real bank login connection in v1.
