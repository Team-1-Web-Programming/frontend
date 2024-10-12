import { HTMLAttributes } from "react";
import styles from "./Button.module.css";
import Image from "next/image";

type TButtonProps = HTMLAttributes<HTMLButtonElement> & {
  type?: "primary" | "secondary";
};

export default function ButtonGoogle(props: TButtonProps) {
  const { type, ...rest } = props;
  return (
    <button className={`${styles.pushable}`} {...rest}>
      <span className={type === "secondary" ? "" : styles.shadow} />
      <span className={type === "secondary" ? "" : styles.edge} />
      <span className={`${styles.front} ${styles.google}`}>
        <Image src={"/google.svg"} width={18} height={18} alt="google sign in" style={{marginTop: 4}} />
        {props?.children}
      </span>
    </button>
  );
}
