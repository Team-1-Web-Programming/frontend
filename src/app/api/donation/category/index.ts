import apiClient from "@/services/api";

export default async function getDonationCategories() {
  const res = await apiClient.get("/donation/category");
  return res?.data;
}
