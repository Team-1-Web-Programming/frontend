import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.navBar}>
      <div className={styles.logoContainer}>
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="Guna Ulang Logo"
            className={styles.logo}
            width={250}
            height={35}
            priority
          />
        </Link>
      </div>
      <div className={styles.tabsContainer}>
        <Link href={"/"}>Beranda</Link>
        <Link href={"/donasi"}>Donasi</Link>
        <Link href={"/kategori"}>Kategori</Link>
        <Link href={"/blog"}>Blog</Link>
      </div>
      <div className={styles.profileGroupContainer}>
        <Link href={"/login"}>
          <Image
            src="/notification.svg"
            width={26}
            height={23}
            priority
            alt="notification"
          />
        </Link>
        <Link href={"/profil"}>
          <Image src="/profile.png" width={24} height={24} alt="profile" />
        </Link>
      </div>
    </header>
  );
}
