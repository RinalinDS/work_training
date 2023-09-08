import { Outlet } from "react-router-dom";
import { AppNav } from "./AppNav/AppNav";
import { Logo } from "./Logo";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <footer className={styles.footer}>footer</footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()}
      </p>
    </div>
  );
};
