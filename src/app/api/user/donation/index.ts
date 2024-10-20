import apiClient from "@/services/api";

export const getUserDonation = async () => {
  const res = await apiClient.get("/user/donation");
  return res;
};
