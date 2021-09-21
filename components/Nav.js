import Link from "next/link";
import Styles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={Styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a>Photo</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
