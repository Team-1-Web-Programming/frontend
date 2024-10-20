import apiClient from "@/services/api";

export const getUserDonation = async () => {
  try {
    const res = await apiClient.get("/user/donation");
    return res;
  } catch (error) {
    throw error;
  }
};
