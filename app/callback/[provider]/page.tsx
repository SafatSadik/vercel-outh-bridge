"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function CallbackPage() {
  const { provider } = useParams(); // get dynamic route param
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    if (!provider) {
      setStatus("Invalid provider.");
      return;
    }

    const paramsObj = new URLSearchParams(window.location.search);
    const query = paramsObj.toString();

    const localhostUrl = `http://localhost:3000/callback/${provider}?${query}`;

    // Try sending the code to your Electron Express server
    fetch(localhostUrl, { method: "GET", mode: "no-cors" })
      .then(() => {
        setStatus(`${provider} connected successfully! Closing this tab...`);
        // Try to auto-close the tab
        setTimeout(() => {
          window.close();
        }, 500);
      })
      .catch(() => {
        setStatus(
          `Could not reach desktop app. Make sure it’s running. You can close this tab manually.`
        );
      });
  }, [provider]);

  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>OAuth Redirect</h1>
      <p>Provider: <b>{provider || "unknown"}</b></p>
      <p>{status}</p>
    </main>
  );
}
