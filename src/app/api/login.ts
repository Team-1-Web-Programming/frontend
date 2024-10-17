import apiClient from "@/services/api";

export const login = async (data: { email: string; password: string }) => {
  try {
    const fd = new FormData();
    fd.append("email", data?.email);
    fd.append("password", data?.password);
    await apiClient.get("/token");
    const res = await apiClient.post("/login", fd);
    console.log(res);
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};
