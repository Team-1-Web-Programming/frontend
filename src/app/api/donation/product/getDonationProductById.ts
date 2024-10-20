import apiClient from "@/services/api";

export default async function getDonationProductById({ queryKey }: any) {
  const [_, id] = queryKey;
  if (!id) throw new Error("Province ID is required");
  const res = await apiClient.get(`/donation/product/${id}`);
  return res?.data;
}
