import apiClient from "@/services/api";

export default async function getBlogs() {
  try {
    const res = await apiClient.get("/blog");
    return res?.data
  } catch (error) {
    throw error;
  }
}
