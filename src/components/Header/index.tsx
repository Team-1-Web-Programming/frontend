"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Dropdown from "../Dropdown";
import { logout } from "@/app/api/logout";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/layout/Layout";
import { getUser } from "@/app/api/user";

const routes = {
  admin: {
    home: "/dashboard",
    donasi: "/dashboard/donasi",
    histori: "/donasi/histori",
    kategori: "/dashboard/kategori",
    blog: "/dashboard/blog",
    login: "/dashboard/login",
    profil: "/dashboard/profil",
    // notification: "/notification",
  },
  user: {
    home: "/",
    donasi: "/donasi",
    histori: "/donasi/histori",
    kategori: "/kategori",
    blog: "/blog",
    login: "/login",
    profil: "/profil",
    // notification: "/notification",
  },
  unauthorized: {
    home: "/",
    donasi: "/donasi",
    histori: "/donasi/histori",
    kategori: "/kategori",
    blog: "/blog",
    login: "/login",
    profil: "/profil",
    // notification: "/notification",
  },
};

const COLOR_ACTIVE = {
  color: "var(--primary-green)",
};

export default function Header(props: {
  type: "admin" | "user" | "unauthorized";
}) {
  const router = useRouter();
  const { type = "user" } = props;
  const pathname = usePathname();

  const qUser = useQuery({
    queryKey: ["/user"],
    queryFn: getUser,
    retry(failureCount, error) {
      return failureCount <= 1;
    },
  });

  const { mutate } = useMutation({
    mutationFn: logout,
  });

  const onLogout = () => {
    mutate(undefined, {
      onSuccess: () => {
        toast.success("Logout successful!");
      },
      onSettled: () => {
        router.push("/login");
        queryClient.clear();
      },
    });
  };

  return (
    <header className={styles.navBar}>
      <div className={styles.wrapper}>
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
          {/* {type === "user" && (
            <div>
              <Link href={routes?.[type]?.notification}>
                <Image
                  src="/notification.svg"
                  width={26}
                  height={23}
                  priority
                  alt="notification"
                />
              </Link>
            </div>
          )} */}
          {type !== "unauthorized" && (
            <div style={{ padding: 10 }}>
              <Dropdown
                trigger="hover"
                absolute={false}
                overlay={[
                  {
                    render: (
                      <Link href={routes?.[type]?.profil}>
                        <div>Profil</div>
                      </Link>
                    ),
                  },
                  {
                    render: (
                      <Link href={routes?.[type]?.histori}>
                        <div>Histori</div>
                      </Link>
                    ),
                  },
                  ...(qUser?.data?.data?.email === "admin@admin.com"
                    ? [
                        {
                          render: (
                            <Link href={routes?.["admin"]?.home}>
                              <div>Dashboard</div>
                            </Link>
                          ),
                        },
                      ]
                    : []),
                  {
                    action: onLogout,
                    render: <div style={{ color: "red" }}>Logout</div>,
                  },
                ]}
              >
                <Image
                  src="/profile.png"
                  width={24}
                  height={24}
                  alt="profile"
                />
              </Dropdown>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
