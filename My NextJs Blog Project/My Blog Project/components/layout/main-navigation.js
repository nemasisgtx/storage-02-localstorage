import Logo from "./logo";
import Link from "next/link";
import classes from './main-navigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
