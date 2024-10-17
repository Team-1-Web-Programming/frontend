import apiClient from "@/services/api";

export const logout = async () => {
  try {
    await apiClient.post("/logout");
  } catch (error: any) {
    throw new Error(error);
  }
};
