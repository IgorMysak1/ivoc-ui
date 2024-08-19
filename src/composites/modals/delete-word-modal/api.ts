import { DeleteWordResponse, DeleteWordVariables } from "./type.ts";
import { ApiResponse } from "@/types";
import axios from "axios";
import { getUrlForApi } from "@/utils";

export const deleteWordApi = async ({
  id,
  token,
}: DeleteWordVariables): ApiResponse<DeleteWordResponse> => {
  try {
    const { data } = await axios.delete(getUrlForApi(`/api/words/${id}`), {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};
