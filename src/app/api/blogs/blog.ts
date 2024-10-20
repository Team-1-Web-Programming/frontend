import apiClient from "@/services/api";

export default async function getBlogById(id: string) {
  const res = await apiClient.get(`/blog/${id}`);
  return res?.data;
}
