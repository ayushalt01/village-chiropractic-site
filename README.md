# Pain Atlanta - Chiropractic Website

Next.js website for Pain Atlanta chiropractic services in Stone Mountain, GA.

## Quick Start

```sh
npm install
cp .env.example .env.local
# Fill in your environment variables in .env.local
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the following:

### Email (Resend)
- `RESEND_API_KEY` - Get from [resend.com](https://resend.com) (free: 100 emails/day)
- `CONTACT_EMAIL` - Email address to receive contact form submissions

### Google Integration
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Google Search Console verification code
- `NEXT_PUBLIC_GOOGLE_PLACE_ID` - Your Google Business Profile Place ID
- `GOOGLE_PLACES_API_KEY` - Google Places API key (server-side only)

**Quick Setup:**
1. **Resend**: Sign up at [resend.com](https://resend.com) → API Keys → Create API Key
2. **Google Place ID**: Find your business on Google Maps → Share → Embed → Copy Place ID
3. **Google API Key**: [Google Cloud Console](https://console.cloud.google.com/) → Enable Places API → Create API Key
4. **Google Verification**: [Google Search Console](https://search.google.com/search-console) → Add property → HTML tag method → Copy verification code

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui
- Resend (email)
- Google Places API (reviews)
