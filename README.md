# Vercel OAuth Redirect Bridge (for Desktop Apps)

A tiny Next.js site you can deploy to Vercel to satisfy OAuth requirements (website, privacy policy, HTTPS redirect URIs) and forward authorization parameters back to your Electron desktop app via a custom protocol or localhost dev fallback.

## How it works

1. User authorizes your app on TikTok/YouTube/Instagram/Facebook/Twitter (X).
2. The provider redirects back to this site at `/callback/[provider]`.
3. The page attempts to open your desktop app using a custom URL scheme: `myapp://oauth-callback/{provider}?...`.
4. If that fails, it optionally tries a localhost fallback like `http://localhost:5173/callback/{provider}?...` (good for development).

## Configure

Set these environment variables in Vercel (Project Settings → Environment Variables):

```env
NEXT_PUBLIC_APP_PROTOCOL=myapp
NEXT_PUBLIC_LOCALHOST_FALLBACK=
```
- `NEXT_PUBLIC_APP_PROTOCOL`: your custom protocol scheme (e.g., `bufferclone`, `shafatapp`).
- `NEXT_PUBLIC_LOCALHOST_FALLBACK`: optional. If set (e.g., `http://localhost:5173/callback`), the callback page will try this after the deep link.

## Redirect URIs to add on each provider

Whitelist these in your provider dashboards (add only the ones you need):

```
https://YOUR-APP-NAME.vercel.app/callback/tiktok
https://YOUR-APP-NAME.vercel.app/callback/google
https://YOUR-APP-NAME.vercel.app/callback/facebook
https://YOUR-APP-NAME.vercel.app/callback/twitter
https://YOUR-APP-NAME.vercel.app/callback/instagram
```

## Desktop App Deep Link Format

Your desktop app should register a custom protocol and handle URLs like:

```
myapp://oauth-callback/{provider}?code=...&state=...
```

- On Windows during dev, use `app.setAsDefaultProtocolClient` with the extra args (see our earlier chat).
- In production, register the protocol in your installer (electron-builder `protocols` or requestedExecutionLevel).

## Local Development

Run locally:
```bash
npm install
npm run dev
```

Navigate to: `http://localhost:3000`

Simulate a provider redirect:
```
http://localhost:3000/callback/tiktok?code=TESTCODE&state=xyz
```

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. Import the repo in Vercel.
3. Set env vars (see Configure).
4. Deploy. Use the resulting `https://your-app-name.vercel.app` URLs in your provider dashboards.

---

**Security note:** This site does not store data. All query parameters are immediately forwarded to your desktop app. Ensure your desktop app validates `state` and follows OAuth best practices.
