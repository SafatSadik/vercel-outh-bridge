import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>OAuth Redirect Bridge for Desktop App</h1>
      <p>
        This minimal site exists to satisfy OAuth requirements (website, privacy policy, and HTTPS redirect URIs) and to forward OAuth authorization codes back to your desktop app.
      </p>

      <h2>How it works</h2>
      <ol>
        <li>User authorizes on the provider&apos;s website.</li>
        <li>Provider redirects to this site at <code>/callback/[provider]</code>.</li>
        <li>This page forwards the parameters to your desktop app via a custom protocol like <code>myapp://</code>.</li>
        <li>If the custom protocol isn&apos;t available, it optionally contacts <code>http://localhost</code> as a dev fallback.</li>
      </ol>

      <h2>Useful links</h2>
      <ul>
        <li><Link href="/privacy">Privacy Policy</Link></li>
        <li><Link href="/terms">Terms</Link></li>
        <li><a href="https://vercel.com" target="_blank" rel="noreferrer">Hosted on Vercel</a></li>
      </ul>

      <h2>Redirect URIs to whitelist with providers</h2>
      <p>
        Add the following callback URL (and optionally provider-specific ones) in your OAuth app settings:
      </p>
      <pre><code>{`https://YOUR-APP-NAME.vercel.app/callback/tiktok
https://YOUR-APP-NAME.vercel.app/callback/google
https://YOUR-APP-NAME.vercel.app/callback/facebook
https://YOUR-APP-NAME.vercel.app/callback/twitter
https://YOUR-APP-NAME.vercel.app/callback/instagram
`}</code></pre>

      <p>
        Configure your protocol and optional localhost fallback with environment variables:
      </p>
      <pre><code>{`NEXT_PUBLIC_APP_PROTOCOL=myapp
NEXT_PUBLIC_LOCALHOST_FALLBACK=http://localhost:5173/callback
`}</code></pre>
    </main>
  );
}
