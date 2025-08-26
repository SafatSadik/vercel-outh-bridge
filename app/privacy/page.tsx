export default function Privacy() {
  return (
    <main>
      <h1>Privacy Policy</h1>
      <p>
        This website acts solely as an OAuth redirect bridge for a desktop application. We do not store user data on this site.
        During OAuth, the provider may redirect back with query parameters (e.g., <code>code</code>, <code>state</code>, etc.).
        These parameters are forwarded directly to the user&apos;s desktop application via a custom protocol or localhost.
      </p>
      <h2>Information We Collect</h2>
      <p>We do not collect, store, or process personal data. No analytics are used on this site.</p>
      <h2>Cookies</h2>
      <p>This site does not set cookies.</p>
      <h2>Contact</h2>
      <p>For questions, contact the app developer.</p>
    </main>
  );
}
