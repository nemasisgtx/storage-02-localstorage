import classes from '../../components/newsData/NewsDetail.module.css';
import Link from 'next/link';
const newsDetail = (props) => {
    return (
      <section className={classes.detail}>
        <img src={props.image}/>
        <h1>{props.title}</h1>
        <Link className={classes.source} href={props.source} >Source Link</Link>
        <p>{props.description}</p>
      </section>
    );
  };
  export default newsDetail;