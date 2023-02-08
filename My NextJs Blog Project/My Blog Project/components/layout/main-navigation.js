import Logo from "./logo";
import Link from "next/link";
const MainNavigation = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
