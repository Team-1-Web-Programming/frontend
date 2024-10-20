import { transformCapitalPlaceNames } from "@/utils/string";
import axios from "axios";

export const getCitiesByProvince = async ({ queryKey }: any) => {
  const [_, provinceId] = queryKey;
  if (!provinceId) throw new Error("Province ID is required");
  const res = await axios.get(
    `http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
  );
  const transformData = transformCapitalPlaceNames(res?.data, {
    asOptions: true,
  });
  return transformData;
};
