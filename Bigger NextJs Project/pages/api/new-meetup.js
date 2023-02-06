// /api/new-meetup
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // const { image, title, address, description } = data;
    
    const client = await MongoClient.connect(
      "mongodb+srv://retroTechdev:Veo1g1E8m76UGQDQ@cluster0.rnedgjz.mongodb.net/meetups"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup Inserted!" });
  }
};

export default handler;
