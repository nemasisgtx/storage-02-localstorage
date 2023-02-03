import Link from "next/link";
// our-Domain.com/news

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/NextJsDemo">Trying out NextJs</Link> 
        </li>
        <li><a href="/news/NextJsWorld">Trying out the World</a></li>
      </ul>
    </>
  );
};
export default NewsPage;
