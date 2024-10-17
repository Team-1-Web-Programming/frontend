"use client";
import { usePathname } from "next/navigation";
import AdminLayout from "@/layout/AdminLayout";
import UserLayout from "@/layout/UserLayout";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useCallback, useEffect, useRef, useState } from "react";
import UnauthorizedLayout from "./UnauthorizedLayout";
import { getToken } from "@/app/api/token";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const authPages = ["/login", "/signup"];
export default function Layout({ children, token }: any) {
  const pathname = usePathname();
  const isAuthPages = authPages.includes(pathname);
  const isAdminPages = pathname.startsWith("/dashboard");
  const initialRender = useRef(true);
  const renderLayout = useCallback(() => {
    if (isAuthPages) {
      return <UnauthorizedLayout>{children}</UnauthorizedLayout>;
    }
    if (!isAuthPages && isAdminPages) {
      return <AdminLayout>{children}</AdminLayout>;
    }
    return <UserLayout>{children}</UserLayout>;
  }, [pathname]);

  useEffect(() => {
    if (initialRender.current) {
      getToken();
      initialRender.current = false;
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {renderLayout()}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
