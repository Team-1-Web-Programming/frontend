import apiClient from "@/services/api";

export default async function getDonationCategories() {
  try {
    const res = await apiClient.get("/donation/category");
    return res?.data;
  } catch (error) {
    throw error;
  }
}
