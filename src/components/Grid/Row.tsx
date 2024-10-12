import { HTMLAttributes } from "react";
import styles from "./Grid.module.css";

export default function Row({
  children,
  gutter = 16,
  ...rest
}: HTMLAttributes<HTMLDivElement> & {
  children?: any;
  gutter?: number;
}) {
  return (
    <div className={styles.row} style={{ gap: `${gutter}px`, ...rest.style }}>
      {children}
    </div>
  );
}
