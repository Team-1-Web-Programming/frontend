import apiClient from "@/services/api";
import { toast } from "react-toastify";

type TAddresses = {
  id: number;
  user_id: number;
  is_default: number;
  name: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  country: string;
  postal_code: string;
  created_at: string | Date;
  updated_at: string | Date;
}[];

export const getAddresses = async () => {
  try {
    const res = await apiClient.get("/addresses");
    console.log(res);
  } catch (error: any) {
    toast.error(error || error?.message, { pauseOnHover: true });
  }
};
