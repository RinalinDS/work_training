import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import { Logo } from "./Logo";

export const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li></li>
        <li>
          <NavLink
            // className={({ isActive }) => (isActive ? styles.active : "")}
            to="/pricing"
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={({ isActive }) => (isActive ? styles.active : "")}
            to="/product"
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={({ isActive }) => (isActive ? styles.active : "")}
            className={styles.ctaLink}
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
