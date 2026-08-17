# DATALOG ONE — ResearchHub MVP

A lean research-support platform for Datalog ICT & General Merchandise Ltd.

## MVP Features
- Research Topic Finder
- Research Diagnostic + Research Health Score
- Supabase authentication
- Saved diagnostics and consultations
- Paystack payment initialization + signed webhook verification
- Referral tracking
- WhatsApp expert handoff
- Client and admin dashboards
- PostgreSQL schema + Row Level Security

## Stack
Next.js (App Router), TypeScript, Supabase, Paystack, Vercel-ready deployment, with optional OpenAI API extensions.

## Customer Journey
Create account → Find topic → Run Diagnostic → Save result → Upgrade → Pay → Book Expert → Share referral link → Earn reward.

## Setup
1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Create a Supabase project and run SQL migrations in `supabase/migrations`.
4. Add Supabase and Paystack environment variables.
5. Run `npm run dev` and open `http://localhost:3000`.

The deterministic diagnostic engine keeps the MVP inexpensive to run. AI-assisted premium reports can be added later.

**Data | Insight | Solutions | Success**
