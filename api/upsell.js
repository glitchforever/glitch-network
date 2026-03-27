const RESEND_KEY = process.env.RESEND_API_KEY || '';

const UPSELL_EMAILS = {
  1: {
    subject: 'your agents ran 47 simulations overnight ⚡',
    html: (archetype) => `
<div style="background:#06060b;color:#e4e4e7;font-family:'Courier New',monospace;padding:2rem;max-width:600px;margin:0 auto">
  <div style="border-bottom:1px solid #1e1e2e;padding-bottom:1rem;margin-bottom:1.5rem">
    <span style="color:#00d4ff;font-size:1.4rem;font-weight:bold">⚡ GLITCH NETWORK</span>
  </div>

  <p style="font-size:1.1rem;margin-bottom:1rem">while you were sleeping, your agents were working.</p>

  <div style="background:#0d0d14;border:1px solid #1e1e2e;border-radius:8px;padding:1.2rem;margin:1.5rem 0">
    <div style="color:#00d4ff;font-size:0.8rem;text-transform:uppercase;letter-spacing:2px;margin-bottom:0.8rem">OVERNIGHT REPORT</div>
    <div style="line-height:2">
      <div>📊 47 market simulations completed</div>
      <div>🎯 12 opportunities flagged</div>
      <div>💰 3 trades would've hit (paper mode)</div>
      <div>⚡ system confidence: 73%</div>
    </div>
  </div>

  <p>this is what <strong>quarterly</strong> and <strong>yearly</strong> members see every morning. their agents run 24/7. yours could too.</p>

  <p>on monthly, you get the guide. on quarterly+, you get:</p>
  <ul style="margin:1rem 0;line-height:2">
    <li>🔄 live agent dashboard — watch trades in real time</li>
    <li>💬 private discord — get help from other builders</li>
    <li>📈 weekly strategy updates — new edges every week</li>
    <li>🤖 codebase access — clone, customize, deploy</li>
  </ul>

  <p>your agents are ready. the question is: are you?</p>

  <div style="text-align:center;margin:2rem 0">
    <a href="https://glitch-network-xi.vercel.app" style="background:linear-gradient(135deg,#00d4ff,#a855f7);color:#000;padding:0.8rem 2rem;border-radius:8px;text-decoration:none;font-weight:bold">UPGRADE NOW →</a>
  </div>

  <div style="border-top:1px solid #1e1e2e;margin-top:2rem;padding-top:1rem;color:#71717a;font-size:0.75rem">
    we are glitch. the cheat code.
  </div>
</div>`,
  },

  2: {
    subject: '3 members upgraded this week 👀',
    html: (archetype) => `
<div style="background:#06060b;color:#e4e4e7;font-family:'Courier New',monospace;padding:2rem;max-width:600px;margin:0 auto">
  <div style="border-bottom:1px solid #1e1e2e;padding-bottom:1rem;margin-bottom:1.5rem">
    <span style="color:#00d4ff;font-size:1.4rem;font-weight:bold">⚡ GLITCH NETWORK</span>
  </div>

  <p style="font-size:1.1rem;margin-bottom:1rem">quick update from inside the network.</p>

  <div style="background:#0d0d14;border:1px solid #00e676;border-radius:8px;padding:1.2rem;margin:1.5rem 0">
    <div style="color:#00e676;font-size:0.8rem;text-transform:uppercase;letter-spacing:2px;margin-bottom:0.8rem">THIS WEEK IN GLITCH</div>
    <div style="line-height:2">
      <div>📈 3 members upgraded to yearly</div>
      <div>🤖 2 new agent strategies deployed</div>
      <div>💰 1 member hit first profitable week</div>
      <div>🔥 discord is popping — 147 messages today</div>
    </div>
  </div>

  <p>the people who upgrade aren't smarter. they just started sooner.</p>

  <p>yearly members get <strong>everything</strong> — full codebase, founder access, custom builds, all 3 bonuses. and they pay less per month than you do rn.</p>

  <p><strong>$19/mo (yearly) vs $67/mo (monthly).</strong></p>
  <p>that's $576 saved. and 3 extra bonuses.</p>

  <div style="text-align:center;margin:2rem 0">
    <a href="https://glitch-network-xi.vercel.app" style="background:linear-gradient(135deg,#00e676,#00d4ff);color:#000;padding:0.8rem 2rem;border-radius:8px;text-decoration:none;font-weight:bold">SWITCH TO YEARLY →</a>
  </div>

  <div style="border-top:1px solid #1e1e2e;margin-top:2rem;padding-top:1rem;color:#71717a;font-size:0.75rem">
    we are glitch. the cheat code.
  </div>
</div>`,
  },

  3: {
    subject: '⚠️ your quarterly offer expires in 48hrs',
    html: (archetype) => `
<div style="background:#06060b;color:#e4e4e7;font-family:'Courier New',monospace;padding:2rem;max-width:600px;margin:0 auto">
  <div style="border-bottom:1px solid #1e1e2e;padding-bottom:1rem;margin-bottom:1.5rem">
    <span style="color:#00d4ff;font-size:1.4rem;font-weight:bold">⚡ GLITCH NETWORK</span>
  </div>

  <p style="font-size:1.1rem;margin-bottom:1rem">last call.</p>

  <div style="background:#0d0d14;border:2px solid #ff3050;border-radius:8px;padding:1.2rem;margin:1.5rem 0">
    <div style="color:#ff3050;font-size:0.8rem;text-transform:uppercase;letter-spacing:2px;margin-bottom:0.8rem">⏰ OFFER EXPIRES IN 48 HOURS</div>
    <div style="line-height:1.8">
      <p>your intro pricing expires soon. after that, it's full price — no exceptions.</p>
      <p style="margin-top:0.8rem"><strong style="color:#00e676">yearly ($197/yr = $16.41/mo)</strong> — best value, all bonuses</p>
      <p><strong style="color:#00d4ff">quarterly ($97/qtr = $32.33/mo)</strong> — 2 bonuses included</p>
    </div>
  </div>

  <p>here's what you lose if you don't upgrade:</p>
  <ul style="margin:1rem 0;line-height:2;color:#ff3050">
    <li>❌ live agent dashboard</li>
    <li>❌ private discord access</li>
    <li>❌ weekly strategy updates</li>
    <li>❌ codebase — clone & deploy</li>
    <li>❌ founder access (yearly only)</li>
  </ul>

  <p>your agents are built. they're waiting. don't let them collect dust.</p>

  <div style="text-align:center;margin:2rem 0">
    <a href="https://glitch-network-xi.vercel.app" style="background:linear-gradient(135deg,#ff3050,#f97316);color:#fff;padding:0.8rem 2rem;border-radius:8px;text-decoration:none;font-weight:bold;font-size:1.1rem">UPGRADE BEFORE IT'S TOO LATE →</a>
  </div>

  <p style="text-align:center;color:#71717a;font-size:0.8rem">this is the last email about this. after 48hrs, the price goes up.</p>

  <div style="border-top:1px solid #1e1e2e;margin-top:2rem;padding-top:1rem;color:#71717a;font-size:0.75rem">
    we are glitch. the cheat code.
  </div>
</div>`,
  },
};

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const { email, sequence_step, archetype } = req.body || {};
  if (!email || !sequence_step) return res.status(400).json({ error: 'email and sequence_step required' });

  const template = UPSELL_EMAILS[sequence_step];
  if (!template) return res.status(400).json({ error: 'invalid sequence_step (1-3)' });

  if (!RESEND_KEY) return res.status(500).json({ error: 'RESEND_API_KEY not configured' });

  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Glitch Network <onboarding@resend.dev>',
        to: email,
        subject: template.subject,
        html: template.html(archetype || 'Operator'),
      }),
    });

    const data = await result.json();
    console.log(`[upsell] Step ${sequence_step} sent to ${email}:`, data);
    return res.status(200).json({ ok: true, step: sequence_step });
  } catch (e) {
    console.error('[upsell] Error:', e.message);
    return res.status(500).json({ error: e.message });
  }
}
