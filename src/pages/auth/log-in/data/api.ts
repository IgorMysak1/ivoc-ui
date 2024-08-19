import { LogInResponse, LogInVariables } from "./type.ts";
import { ApiResponse } from "@/types";
import apiClient from "@/api";

export const logInApi = async (
  params: LogInVariables,
): ApiResponse<LogInResponse> => {
  try {
    const { data } = await apiClient.post("/api/auth/log-in", params);
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};
