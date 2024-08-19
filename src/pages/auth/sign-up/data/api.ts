import { SignUpResponse, SignUpVariables } from "./type.ts";
import { ApiResponse } from "@/types";
import apiClient from "@/api";

export const signUpApi = async (
  params: SignUpVariables,
): ApiResponse<SignUpResponse> => {
  try {
    const { data } = await apiClient.post("/api/auth/sign-up", params);
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};
