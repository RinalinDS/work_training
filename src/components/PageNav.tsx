import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

export const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/pricing"
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/product"
          >
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
