import apiClient from "@/services/api";

export default async function getBlogs() {
  const res = await apiClient.get("/blog");
  return res?.data;
}
