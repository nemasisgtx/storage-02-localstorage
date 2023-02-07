import NewsItem from './NewsItem';
import classes from './NewsList.module.css';

function NewsList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <NewsItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default NewsList;
