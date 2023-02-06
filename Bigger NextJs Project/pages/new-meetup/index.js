//out-domain.com/new-meetup
import { useRouter } from 'next/router';
import Head from "next/head";
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetUpData) => {
    console.log(enteredMeetUpData);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);

    router.push('/');
  };
  
  return (
    <>
    <Head>
      <title>Add New Meetups</title>
      <meta
        name="description"
        content="Add new meetups that showcases our history and beauty of ancient architecture"
      />
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
    );
};
export default NewMeetupPage;
