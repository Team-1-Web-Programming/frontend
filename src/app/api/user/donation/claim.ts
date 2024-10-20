import apiClient from "@/services/api";

export const claimDonationProduct = async (data: {
  amount: number;
  id: string | number;
}) => {
  if (!data?.id) throw new Error("Province ID is required");
  const res = await apiClient.put(`/user/donation/claim/${data?.id}`, {
    amount: data?.amount,
  });
  return res;
};
