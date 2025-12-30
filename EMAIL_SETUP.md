# Email Setup Instructions

The contact form is now set up to send emails using Resend. Follow these steps to configure it:

## Step 1: Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Navigate to **API Keys** in your dashboard
4. Click **Create API Key**
5. Copy your API key (starts with `re_`)

## Step 2: Set Up Environment Variables

Create a `.env.local` file in the root of your project (if it doesn't exist) and add:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=info@painatlanta.com
```

Replace:
- `re_your_api_key_here` with your actual Resend API key
- `info@painatlanta.com` with the email address where you want to receive contact form submissions

## Step 3: Verify Your Domain (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. Go to **Domains** in your Resend dashboard
2. Click **Add Domain**
3. Add your domain (e.g., `painatlanta.com`)
4. Follow the DNS setup instructions to verify your domain
5. Once verified, update the `from` email in `/app/api/contact/route.ts` to use your verified domain instead of `onboarding@resend.dev`

## Step 4: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check the email inbox specified in `CONTACT_EMAIL`

## Troubleshooting

- **Emails not sending?** Check that your `RESEND_API_KEY` is correct in `.env.local`
- **Getting errors?** Check the browser console and server logs for error messages
- **Domain verification issues?** You can use `onboarding@resend.dev` for testing, but it's limited to 100 emails/day

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variables in your hosting platform's dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
2. Make sure your domain is verified with Resend
3. Update the `from` email address in the API route to use your verified domain

## Alternative: Using Your Own SMTP Server

If you prefer to use your own email server instead of Resend, you can modify `/app/api/contact/route.ts` to use Nodemailer. Contact your developer for assistance with this setup.

