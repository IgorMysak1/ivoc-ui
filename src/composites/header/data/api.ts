import axios from "axios";
import { ApiResponse, Word } from "@/types";
import { WordVariables } from "./type.ts";
import { getUrlForApi } from "@/utils";

export const createWordApi = async ({
  token,
  ...params
}: WordVariables): ApiResponse<Word> => {
  try {
    const { data } = await axios.post(getUrlForApi("/api/words"), params, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};
