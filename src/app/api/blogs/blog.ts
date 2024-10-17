import apiClient from "@/services/api";

export default async function getBlogById(id: string) {
  try {
    const res = await apiClient.get(`/blog/${id}`);
    return res?.data
  } catch (error) {
    throw error;
  }
}
