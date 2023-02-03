import { useRouter } from "next/router";

// our-getDomainLocale.com/news/<add anything when using []>

const DetailedPage=() => {
  const router = useRouter();
  const newsId = router.query.newsId; // shows dynamic inserted domain url extension.  

  console.log(newsId);


  return <h1>The Detailed Page</h1>;
}
export default DetailedPage;