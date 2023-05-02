import { ActiveLink } from "../ActiveLink";
import styles from "./Navbar.module.scss";

interface IMenuItems {
  href: string;
  text: string;
}

const menuItems: IMenuItems[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/pricing",
    text: "Pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles["navbar-container"]}>
      {menuItems.map(({ text, href }: IMenuItems) => (
        <ActiveLink key={text} text={text} href={href} />
      ))}
    </nav>
  );
};
