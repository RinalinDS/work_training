import { FC, MouseEvent } from "react";
import styles from "./Button.module.css";
type ButtonPropsT = {
  children?: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: string;
};
const Button: FC<ButtonPropsT> = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type || ""]}`}>
      {children}
    </button>
  );
};

export default Button;
