export const metadata = {
  title: "OAuth Redirect Bridge",
  description: "A tiny site to bridge OAuth redirects for desktop apps."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'ui-sans-serif, system-ui, Arial', margin: 0 }}>
        <div style={{ maxWidth: 800, margin: '40px auto', padding: '0 16px' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
