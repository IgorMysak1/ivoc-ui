import axios from "axios";
import { LogInResponse, LogInVariables } from "./type.ts";
import { ApiResponse } from "@/types";
import { getUrlForApi } from "@/utils";

export const logInApi = async (
  params: LogInVariables,
): ApiResponse<LogInResponse> => {
  try {
    const { data } = await axios.post(getUrlForApi("/api/auth/log-in"), params);
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};
