import axios from "axios";
import { SignUpResponse, SignUpVariables } from "./type.ts";
import { ApiResponse } from "@/types";
import { getUrlForApi } from "@/utils";

export const signUpApi = async (
  params: SignUpVariables,
): ApiResponse<SignUpResponse> => {
  try {
    const { data } = await axios.post(
      getUrlForApi("/api/auth/sign-up"),
      params,
    );
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};
