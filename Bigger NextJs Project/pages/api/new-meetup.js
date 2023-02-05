// /api/new-meetup

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    // const { image, title, address, description } = data;

    MongoClient.connect(
      'mongodb+srv://techadmin:retroTechdev@97@cluster0.rnedgjz.mongodb.net/test'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: 'Meetup Inserted!'});
  }
};

export default handler;
