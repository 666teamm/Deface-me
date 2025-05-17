let comments = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    comments.push(message);
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
