import axios from "axios";

import { ApiResponse } from "@/types";
import { GetMeResponse, GetMeVariables } from "./type.ts";
import { getUrlForApi } from "@/utils";

export const getMeApi = async ({
  token,
}: GetMeVariables): ApiResponse<GetMeResponse> => {
  try {
    const { data } = await axios.get(getUrlForApi("/api/auth/me"), {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};
