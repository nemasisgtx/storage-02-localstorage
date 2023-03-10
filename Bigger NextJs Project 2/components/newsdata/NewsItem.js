import Card from "../ui/Card";
import { useRouter } from "next/router";
import classes from "./NewsItem.module.css";
// import Link from "next/link";

function NewsItem(props) {
  const router = useRouter();
  const showDetailsHandler = (event) => {
    router.push('/' + props.id);
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          {/* <Link href="/showDetails"> */}
            <button onClick={showDetailsHandler}>Show Details</button>
          {/* </Link> */}
        </div>
      </Card>
    </li>
  );
}

export default NewsItem;
