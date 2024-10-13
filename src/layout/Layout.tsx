'use client'
import { usePathname } from "next/navigation";
import AdminLayout from "@/layout/AdminLayout";
import UserLayout from "@/layout/UserLayout";

export default function Layout({ children }: any) {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return <AdminLayout children={children} />;
  }

  return <UserLayout children={children} />;
}
