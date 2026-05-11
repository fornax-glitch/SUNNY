# Preview link setup (Vercel + Cloudflare domain)

## Goal
Provide a stable client audit URL (Vercel Preview) before pointing production traffic to the domain.

## Steps
1. Push the latest code to the Git repository connected to Vercel.
2. In Vercel Dashboard → open the project.
3. Wait for the latest deployment triggered by the push.
4. Open the deployment details and copy the **Preview URL**.
5. Quick routing sanity checks using the Preview URL:
   - `/`
   - `/services`
   - `/services/cleaning`
   - `/services/cleaning/pressure-washing`
6. Send the Preview URL to the client.

## Notes
- Your app uses client-side routing (BrowserRouter), and `vercel.json` contains an SPA rewrite to `/index.html`.
- Production domain (`sunnysideupmaintenance.com`) should be pointed only after the preview looks correct.

