import styles from "./Grid.module.css";

export default function Col({
  xs,
  sm,
  md,
  lg,
  xl,
  children,
}: {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children?: any;
}) {
  const getColumnClass = () => {
    let className = "";
    if (xs) className += `${styles[`col-xs-${xs}`]} `;
    if (sm) className += `${styles[`col-sm-${sm}`]} `;
    if (md) className += `${styles[`col-md-${md}`]} `;
    if (lg) className += `${styles[`col-lg-${lg}`]} `;
    if (xl) className += `${styles[`col-xl-${xl}`]} `;
    return className.trim();
  };

  return <div className={getColumnClass()}>{children}</div>;
}
