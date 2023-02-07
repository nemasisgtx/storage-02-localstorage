// domain.com/news
import Link from "next/link";
const newsPage = () => {
  <>
    <h1>This is the news page.</h1>
    <ul>
      <li>
        <Link href="/news/news1">
          NextJs is evolving everyday at a fast pace.
        </Link>
      </li>
      <li>
        <Link href="/news/news2">
          ReactJs seems like its at the final evolution stage.
        </Link>
      </li>
      <li>Some Other News.</li>
    </ul>
  </>
};
export default newsPage;
