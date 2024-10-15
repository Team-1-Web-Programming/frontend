"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = {
  admin: {
    home: "/dashboard",
    donasi: "/dashboard/donasi",
    kategori: "/dashboard/kategori",
    blog: "/dashboard/blog",
    login: "/dashboard/login",
    profil: "/dashboard/profil",
  },
  user: {
    home: "/",
    donasi: "/donasi",
    kategori: "/kategori",
    blog: "/blog",
    login: "/login",
    profil: "/profil",
  },
};

const COLOR_ACTIVE = {
  color: "var(--primary-green)",
};

export default function Header(props: { type?: "admin" | "user" }) {
  const { type = "user" } = props;
  const pathname = usePathname();

  return (
    <header className={styles.navBar}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Link href={routes?.[type]?.home}>
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
        {type === "user" && (
          <div className={styles.tabsContainer}>
            <Link
              href={routes?.[type]?.home}
              style={pathname === routes?.[type]?.home ? COLOR_ACTIVE : {}}
            >
              Beranda
            </Link>
            <Link
              href={routes?.[type]?.donasi}
              style={pathname === routes?.[type]?.donasi ? COLOR_ACTIVE : {}}
            >
              Donasi
            </Link>
            <Link
              href={routes?.[type]?.kategori}
              style={pathname === routes?.[type]?.kategori ? COLOR_ACTIVE : {}}
            >
              Kategori
            </Link>
            <Link
              href={routes?.[type]?.blog}
              style={pathname === routes?.[type]?.blog ? COLOR_ACTIVE : {}}
            >
              Blog
            </Link>
          </div>
        )}
        <div className={styles.profileGroupContainer}>
          {type === "user" && (
            <Link href={routes?.[type]?.login}>
              <Image
                src="/notification.svg"
                width={26}
                height={23}
                priority
                alt="notification"
              />
            </Link>
          )}
          <Link href={routes?.[type]?.profil}>
            <Image src="/profile.png" width={24} height={24} alt="profile" />
          </Link>
        </div>
      </div>
    </header>
  );
}
