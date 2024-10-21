import apiClient from "@/services/api";

export const claimDonationProduct = async (data: {
  amount: number;
  id: string | number;
}) => {
  if (!data?.id) throw new Error("Province ID is required");
  const res = await apiClient.put(`/user/donation/claim/${data?.id}`, data);
  return res;
};

export const updateDonationProduct = async (data: {
  status: string;
  id: string | number;
}) => {
  if (!data?.id) throw new Error("Donation ID is required");
  const res = await apiClient.put(`/user/donation/status/${data?.id}`, data);
  return res;
};
