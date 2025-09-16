// pages/api/track.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const body = req.body || {};
    console.log('affiliate-click:', body);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('track err', err);
    return res.status(500).json({ ok: false });
  }
}
