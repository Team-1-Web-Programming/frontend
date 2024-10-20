import apiClient from "@/services/api";

export default async function addBlog(data: any) {
  const res = await apiClient.post("/blog", data);
  return res?.data;
}
