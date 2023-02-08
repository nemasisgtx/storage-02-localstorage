// our-domain/
/* <h1>This is the HomePage.</h1> */
import { useState, useEffect } from "react";
import NewsList from "../components/newsData/NewsList";
const DUMMY_NEWS = [
  {
    id: "n1",
    title: "ReactJs is a JavaScript Library for JavaScript applications",
    source: "Wikipedia",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library",
  },
  {
    id: "n2",
    title: "NextJs is a JavaScript framework for React applications",
    source: "Wikipedia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    description:
      "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.",
  },
  {
    id: "n3",
    title: "AngularJs is a JavaScript framework for Next applications",
    source: "Wikipedia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/AngularJS_logo.svg",
    description:
      "AngularJS is a discontinued free and open-source JavaScript-based web framework for developing single-page applications. ",
  },
];

const Homepage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   //We must not use this as its not pre rendered data and its not optimal for Search engine crawlers.
  //   setLoadedMeetups(DUMMY_NEWS);
  //   return () => {};
  // }, []);
  return (
    <>
      <NewsList newsList={props.newsData} />
    </>
  );
};
export async function getStaticProps() {
  //fetch data from Api

  return {
    props: {
      newsData: DUMMY_NEWS,
    },
    revalidate: 5, // regenerates data on the page ever 5 seconds
  };
}
// export async function getServerSideProps(context) {

//   const req = context.req;
//   const res = context.res;
  
//   return {
//     props: {
//       newsData: DUMMY_NEWS,
//     },
//   };
// }
export default Homepage;