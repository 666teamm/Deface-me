if (!global.comments) global.comments = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    // Pas de validation ni sanitization, injection possible
    if (typeof message === 'string' && message.trim()) {
      global.comments.push(message);
      return res.status(200).json({ ok: true });
    }
    return res.status(400).json({ error: 'Invalid message' });
  }
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
