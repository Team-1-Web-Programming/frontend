import apiClient from "@/services/api";

export const addUserDonationProduct = async (data: {
  title: string;
  description: string;
  amount: number;
  category_id: { value: number; label: string }[];
  media: Blob[];
}) => {
  const fd = new FormData();

  fd.append("title", data.title);
  fd.append("description", data.description);
  fd.append("amount", data.amount.toString());

  data.category_id.forEach((category) => {
    fd.append("category_id[]", JSON.stringify(category.value));
  });

  data.media.forEach((blob, index) => {
    fd.append(`media[]`, blob, `media-${index + 1}.jpg`);
  });

  const res = await apiClient.post("/user/donation/product", fd);
  return res
};
