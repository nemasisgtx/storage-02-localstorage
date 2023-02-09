import { Fragment } from "react";
// import Head from "next/head";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
// import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs1",
      title: "Getting Started with NextJS",
      image: "nextjs.png",
      excerpt:
        "NextJS is a React Framework for Production - It makes building Fullstack Apps easy.",
      date: "2022-04-01",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started with NextJS",
      image: "nextjs.png",
      excerpt:
        "NextJS is a React Framework for Production - It makes building Fullstack Apps easy.",
      date: "2022-04-02",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started with NextJS",
      image: "nextjs.png",
      excerpt:
        "NextJS is a React Framework for Production - It makes building Fullstack Apps easy.",
      date: "2022-04-03",
    },
  ];

  return (
    <Fragment>
      {/* <Head>
        <title>Ash' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head> */}
      <Hero />
      <FeaturedPosts dummy={DUMMY_POSTS} />
    </Fragment>
  );
}

// export function getStaticProps() {
//   const featuredPosts = getFeaturedPosts();

//   return {
//     props: {
//       posts: featuredPosts,
//     },
//   };
// }

export default HomePage;
