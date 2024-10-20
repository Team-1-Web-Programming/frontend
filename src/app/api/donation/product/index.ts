import apiClient from "@/services/api";

export default async function getDonationProduct() {
  const res = await apiClient.get("/donation/product");
  return res?.data;
}
