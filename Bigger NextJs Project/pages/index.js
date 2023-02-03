import MeetupList from '../components/meetups/MeetupList';
const DUMMY_MEETUPS = [
    {
        id: 1,
        title: 'Meetup 1',
        image: '',
        address: '',
        description: 'Meetup 1 description',
    }
]

const Homepage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS}/>;
};
export default Homepage;
