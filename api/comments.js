if (!global.comments) global.comments = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(global.comments);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
