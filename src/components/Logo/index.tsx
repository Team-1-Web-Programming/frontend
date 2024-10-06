import Image from "next/image";
import styles from "./Logo.module.css";

export default function LogoWhite() {
  return (
    <div className={styles.logoContainer}>
      <Image src="/logo.svg" width={234} height={63} alt="Logo" />
    </div>
  );
}
