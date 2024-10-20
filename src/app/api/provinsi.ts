import { transformCapitalPlaceNames } from "@/utils/string";
import axios from "axios";

export const getProvince = async () => {
  const res = await axios.get(
    "http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
  );
  const transformData = transformCapitalPlaceNames(res?.data, {
    asOptions: true,
  });
  return transformData;
};
