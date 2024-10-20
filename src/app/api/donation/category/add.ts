import apiClient from "@/services/api";

export default async function addDonationCategories(data: {
  parent_id: number;
  title: string;
}) {
  const res = await apiClient.post("/donation/category", data);
  return res?.data;
}
