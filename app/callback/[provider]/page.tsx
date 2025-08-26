"use client";

import { useEffect } from "react";

export default function Callback({ params }) {
  const provider = params.provider;

  useEffect(() => {
    const paramsObj = new URLSearchParams(window.location.search);
    const query = paramsObj.toString();

    // Try forwarding the code to localhost Express
    fetch(`http://localhost:3000/callback/${provider}?${query}`)
      .then(() => {
        document.body.innerHTML = `<h2>${provider} connected successfully! You can close this tab.</h2>`;
      })
      .catch(() => {
        document.body.innerHTML = `<h2>Could not reach desktop app. Make sure it’s running.</h2>`;
      });
  }, [params.provider]);

  return <p>Connecting {params.provider}...</p>;
}
