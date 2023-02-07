import Link from "next/link";
import MeetupList from "../components/meetups/NewsList";
import Layout from "../components/layout/Layout";
const Homepage = () => {
  const DUMMY_NEWS = [
    {
      title: "ReactJs is a JavaScript Library for JavaScript applications",
      source: "Wikipedia",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      description:
        "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library",
    },
    {
      title: "NextJs is a JavaScript framework for React applications",
      source: "Wikipedia",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      description:
        "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.",
    },
    {
      title: "AngularJs is a JavaScript framework for Next applications",
      source: "Google",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/AngularJS_logo.svg",
      description:
        "AngularJS is a discontinued free and open-source JavaScript-based web framework for developing single-page applications. ",
    },
  ];
  return (
    <>
      <Layout>
        <MeetupList meetups={DUMMY_NEWS} />
        <h1>This is the home page.</h1>
        <Link href="/news/newsPage"></Link>
      </Layout>
    </>
  );
};
export default Homepage;
