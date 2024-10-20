import apiClient from "@/services/api";

export const editUser = async (data: {
  name: string;
  photo_profile: Blob;
  password: string;
  password_confirmation: string;
}) => {
  const fd = new FormData();

  fd.append("name", data.name);
  fd.append(
    `photo_profile`,
    data.photo_profile,
    `photo_profile-${Date.now()}.jpg`
  );
  fd.append("password", data.password);
  fd.append("password_confirmation", data.password_confirmation);

  const res = await apiClient.post("/user", fd);
  return res;
};
