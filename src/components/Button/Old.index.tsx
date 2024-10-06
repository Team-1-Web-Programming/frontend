import { HTMLAttributes } from "react";
import styles from "./Button.module.css";

type TButtonProps = HTMLAttributes<HTMLButtonElement> & {
  type?: "primary" | "secondary";
};

export default function Button(props: TButtonProps) {
  const { type, ...rest } = props;
  return (
    <button
      className={`${styles.button} ${type === "secondary" && styles.secondary}`}
      {...rest}
    />
  );
}
