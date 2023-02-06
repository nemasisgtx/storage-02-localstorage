//HomePage
// import { useEffect, useState } from 'react';
import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "Meetup 1",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/f/f8/Roman_Baths%2C_Bath%2C_2017.jpg",
//     address: "Roman Baths in Somerset's Roman Settlement Tribe",
//     description: "Meetup 1 Image by Alix Clinkingbeard",
//   },
//   {
//     id: "m2",
//     title: "Meetup 2",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/1/1c/HER_Museum_6_July_2018_Petuaria_2.jpg",
//     address: "East Riding of Yorkshire of Tribe Parisi",
//     description:
//       "Part of a reconstruction of Peturia, the former Roman settlement near Brough, in the Hull and East Riding Museum, Meetup 2 Image by a Chemcial Engineer",
//   },
//   {
//     id: "m3",
//     title: "Meetup 3",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/4/47/Gateway_to_Caer_Beris_-_geograph.org.uk_-_1042227.jpg",
//     address: "Brecknockshire of Tribe Ordovices & Silures",
//     description: "Meetup 3 Image by Phil Jones",
//   },
//   {
//     id: "m4",
//     title: "Meetup 4",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/1/15/Canterbury_-_Castle01.jpg",
//     address: "Kent City Castle of Tribe Cantiaci",
//     description: " Canterbury Castle, Meetup 4 Image by Whn64",
//   },
// ];

const Homepage = (props) => {
  // const [loadedMeetups, setLoadedMeetups]=useState([]);

  // useEffect(()=>{
  //   //send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // },[]);
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a Huge content of React Meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from an API

//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export async function getStaticProps() {
  //fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://retroTechdev:Veo1g1E8m76UGQDQ@cluster0.rnedgjz.mongodb.net/meetups"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        image: meetup.image,
        title: meetup.title,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, // regenerate pages every 1 seconds
  };
}

export default Homepage;
