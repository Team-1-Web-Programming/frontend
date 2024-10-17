"use client";
import { getUser } from "@/app/api/user";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function withAuth(Component: any, Skeleton?: any) {
  return function WithAuth(props: any) {
    const router = useRouter();

    const qUser = useQuery({ queryKey: ["/user"], queryFn: getUser });

    console.log(qUser.data?.data, "user");

    if (qUser.isLoading) {
      return Skeleton ? <Skeleton /> : <div>Loading...</div>;
    }

    if (!qUser.data?.data) {
      router.push("/login");
      return null;
    }

    return <Component {...props} />;
  };
}
