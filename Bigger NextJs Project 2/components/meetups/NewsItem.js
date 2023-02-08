import Card from "../ui/Card";
import classes from "./NewsItem.module.css";
import Link from "next/link";

function NewsItem(props) {
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
          <Link href="/showDetails">
            <button>Show Details</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default NewsItem;
