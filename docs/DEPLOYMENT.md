# DATALOG ONE ResearchHub Deployment

## Supabase
Project ref: `joaaruypqzseozjaadjx`
Project URL: `https://joaaruypqzseozjaadjx.supabase.co`

Applied migrations:
1. `001_init`
2. `002_security_and_profiles`
3. security hardening for `handle_new_user()` RPC execute permissions

## Required Vercel environment variables

```text
NEXT_PUBLIC_SUPABASE_URL=https://joaaruypqzseozjaadjx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<Supabase publishable/anon key>
PAYSTACK_SECRET_KEY=<Paystack test or live secret>
NEXT_PUBLIC_APP_URL=<production Vercel URL or custom domain>
```

Optional later:

```text
OPENAI_API_KEY=<key for premium AI features>
```

Do not commit private service-role, Paystack secret, or OpenAI secret keys.

## Production checklist

- Import/link the GitHub repository to the existing Vercel project `datalog-one-researchhub`.
- Add environment variables for Production and Preview.
- Redeploy `main`.
- Confirm `/`, `/login`, `/topic-finder`, `/diagnostic`, `/dashboard`, `/referrals`, and `/consultation` load.
- Sign up a test user and confirm a `profiles` row is created.
- Run a diagnostic and confirm persistence.
- Test Paystack in test mode before adding live credentials.
- Configure the Paystack webhook to `/api/paystack/webhook` on the production domain.
- Test referral URL `/r/<code>` and verify referral tracking.
- Run Supabase security/performance advisors after schema changes.

## Current Vercel project

Project ID: `prj_do2IhXBjCwRJRP1Vg1NlfPwptC69`
Team ID: `team_I9pVFVANMRxOUF0TKMbFfEPb`

The first deployment is an initialization deployment. Replace it with the complete GitHub application once Git integration/environment variables are configured.
