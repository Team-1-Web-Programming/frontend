"use client";
import Blog from "../page";
import { useQuery } from "@tanstack/react-query";
import getBlogById from "@/app/api/blogs/blog";

export default function BlogById({ params }: { params: { id: string } }) {
  const qBlogById = useQuery({
    queryKey: [`/blog/${params?.id}`],
    queryFn: async () => await getBlogById(params?.id)
  });
  return <Blog data={qBlogById?.data} />;
}
