import { AppNav } from "./AppNav/AppNav";
import { Logo } from "./Logo";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p> lost of cities</p>
      <footer className={styles.footer}>footer</footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()}
      </p>
    </div>
  );
};
