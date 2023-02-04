import MeetupList from '../components/meetups/MeetupList';
const DUMMY_MEETUPS = [
  {
    id: 1,
    title: 'Meetup 1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/f8/Roman_Baths%2C_Bath%2C_2017.jpg',
    address: "Roman Baths in Somerset's Roman Settlement Tribe",
    description: 'Meetup 1 Image by Alix Clinkingbeard',
  },
  {
    id: 2,
    title: 'Meetup 2',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/1c/HER_Museum_6_July_2018_Petuaria_2.jpg',
    address: 'East Riding of Yorkshire of Tribe Parisi',
    description:
      'Part of a reconstruction of Peturia, the former Roman settlement near Brough, in the Hull and East Riding Museum, Meetup 2 Image by a Chemcial Engineer',
  },
  {
    id: 3,
    title: 'Meetup 3',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/Gateway_to_Caer_Beris_-_geograph.org.uk_-_1042227.jpg',
    address: 'Brecknockshire of Tribe Ordovices & Silures',
    description: 'Meetup 3 Image by Phil Jones',
  },
  {
    id: 4,
    title: 'Meetup 4',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Canterbury_-_Castle01.jpg',
    address: 'Kent City Castle of Tribe Cantiaci',
    description: ' Canterbury Castle, Meetup 4 Image by Whn64',
  },
];

const Homepage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};
export default Homepage;
