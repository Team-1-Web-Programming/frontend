"use client";
import styles from './Pill.module.css'

export default function Pill(props?: any) {
  return (
    <button
      className={`${styles.pill} ${props?.isSelected ? styles.active : styles.inactive}`}
      onClick={props?.onClick}
    >
      {props?.label || props?.children}
    </button>
  );
}
