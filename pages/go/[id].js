// pages/go/[id].js
import React from 'react';

export default function Go() {
  return <p>Redirecting…</p>;
}

export async function getServerSideProps({ params, req, res }) {
  const id = params.id;

  // ---- EDIT THIS MAP: add your slugs => affiliate smartlinks here ----
  const MAP = {
    revenuecpm: 'https://www.revenuecpmgate.com/r1p74kcgsb?key=91ad51fb4170b5d16494d570db2f45a8',
    // add more slugs later like:
    // amazon_phone: 'https://www.amazon.in/your-affiliate-link',
  };

  const target = MAP[id];

  if (!target) {
    return { notFound: true };
  }

  // Optional: fire-and-forget server-side tracking
  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || `https://${req.headers.host}`}/api/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, time: new Date().toISOString(), ua: req.headers['user-agent'] || '' }),
    });
  } catch (err) {
    console.error('track error', err?.message || err);
  }

  res.writeHead(302, { Location: target });
  res.end();

  return { props: {} };
}
