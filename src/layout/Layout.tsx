"use client";
import { usePathname } from "next/navigation";
import AdminLayout from "@/layout/AdminLayout";
import UserLayout from "@/layout/UserLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
      refetchOnWindowFocus: false, 
      retry: 2, 
    },
  },
});

export default function Layout({ children }: any) {
  const pathname = usePathname();
  return (
    <QueryClientProvider client={queryClient}>
      {pathname.startsWith("/dashboard") ? (
        <AdminLayout>{children}</AdminLayout>
      ) : (
        <UserLayout>{children}</UserLayout>
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
