import { ApiResponse } from "@/types";
import { GetMeResponse } from "./type.ts";
import apiClient from "@/api";

export const getMeApi = async (): ApiResponse<GetMeResponse> => {
  try {
    const { data } = await apiClient.get("/api/auth/me");
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};
