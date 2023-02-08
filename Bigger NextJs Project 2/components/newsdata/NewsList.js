import NewsItem from './NewsItem';
import classes from './NewsList.module.css';

function NewsList(props) {
  return (
    <ul className={classes.list}>
      {props.newsList.map((news) => (
        <NewsItem
          key={news.id}
          id={news.id}
          image={news.image}
          title={news.title}
          address={news.address}
        />
      ))}
    </ul>
  );
}

export default NewsList;
