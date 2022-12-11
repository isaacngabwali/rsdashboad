import useSWR from "swr";
import * as api from "../services/api";

export const useFetch = () => {
  return {
    GetInventory: () =>
      useSWR("allInventory", async () => {
        const response = await api.getInventory();
        return response;
      }),
  };
};