// /api/new-meetup

const handler = (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const { image, title, address, description } = data;
  }
};

export default handler;
