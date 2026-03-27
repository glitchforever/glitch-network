const RESEND_KEY = process.env.RESEND_API_KEY || '';
const leads = []; // In-memory for now — TODO: migrate to Vercel KV or Neon Postgres

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const { email, archetype, answers } = req.body || {};
  if (!email) return res.status(400).json({ error: 'email required' });

  // Save lead
  const lead = {
    email,
    archetype: archetype || 'unknown',
    answers: answers || {},
    ts: new Date().toISOString(),
    source: 'quiz',
  };
  leads.push(lead);
  console.log('[capture] New lead:', email, archetype);

  // Send welcome email via Resend
  if (RESEND_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Glitch Network <onboarding@resend.dev>',
          to: email,
          subject: 'Your Glitch is ready ⚡',
          html: welcomeEmail(archetype || 'Operator'),
        }),
      });
      console.log('[capture] Welcome email sent to', email);
    } catch (e) {
      console.error('[capture] Email error:', e.message);
    }
  }

  return res.status(200).json({ ok: true, archetype });
}

function welcomeEmail(archetype) {
  return `
<div style="background:#06060b;color:#e4e4e7;font-family:'Courier New',monospace;padding:2rem;max-width:600px;margin:0 auto">
  <div style="border-bottom:1px solid #1e1e2e;padding-bottom:1rem;margin-bottom:1.5rem">
    <span style="color:#00d4ff;font-size:1.4rem;font-weight:bold">⚡ GLITCH NETWORK</span>
  </div>

  <p style="font-size:1.1rem;margin-bottom:1rem">yo — your archetype just locked in.</p>

  <div style="background:#0d0d14;border:1px solid #00d4ff;border-radius:8px;padding:1.2rem;margin:1.5rem 0">
    <div style="color:#00d4ff;font-size:0.8rem;text-transform:uppercase;letter-spacing:2px;margin-bottom:0.5rem">YOUR ARCHETYPE</div>
    <div style="font-size:1.5rem;font-weight:bold;color:#00e676">${archetype.toUpperCase()}</div>
  </div>

  <p>your AI agents are being configured based on your quiz answers. here's what's happening rn:</p>

  <ul style="color:#a855f7;margin:1rem 0;line-height:2">
    <li style="color:#e4e4e7">🔍 scanning your interests → matching agent modules</li>
    <li style="color:#e4e4e7">⚙️ configuring guardrails + risk settings</li>
    <li style="color:#e4e4e7">📊 building your personalized dashboard template</li>
    <li style="color:#e4e4e7">🚀 preparing your deployment guide</li>
  </ul>

  <p>your system is 35% built. to finish deployment and go live, unlock your full build guide:</p>

  <div style="text-align:center;margin:2rem 0">
    <a href="https://glitch-network-xi.vercel.app" style="background:linear-gradient(135deg,#00d4ff,#a855f7);color:#000;padding:0.8rem 2rem;border-radius:8px;text-decoration:none;font-weight:bold;font-size:1rem">DEPLOY YOUR AGENTS →</a>
  </div>

  <p style="color:#71717a;font-size:0.8rem;margin-top:2rem">you're part of something different now. no courses. no fluff. just systems that run while you sleep.</p>

  <div style="border-top:1px solid #1e1e2e;margin-top:2rem;padding-top:1rem;color:#71717a;font-size:0.75rem">
    we are glitch. the cheat code.<br>
    <a href="https://glitch-network-xi.vercel.app" style="color:#00d4ff">glitch network</a>
  </div>
</div>`;
}
