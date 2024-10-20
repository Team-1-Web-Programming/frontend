import { HTMLAttributes } from "react";
import styles from "./Button.module.css";

type TButtonProps = HTMLAttributes<HTMLButtonElement> & {
  type?: "primary" | "secondary";
  loading?: boolean;
};

export default function Button(props: TButtonProps) {
  const { type, ...rest } = props;
  return (
    <button className={`${styles.pushable}`} {...rest}>
      <span className={type === "secondary" ? "" : styles.shadow} />
      <span className={type === "secondary" ? "" : styles.edge} />
      <span
        className={`${styles.front} ${
          type === "secondary" && styles.secondary
        }`}
      >
        {props?.loading && <div className={styles.spinner} />}
        {props?.children}
      </span>
    </button>
  );
}
