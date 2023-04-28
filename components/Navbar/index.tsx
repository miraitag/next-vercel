import { ActiveLink } from "../ActiveLink";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles["navbar-container"]}>
      <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
    </nav>
  );
};
