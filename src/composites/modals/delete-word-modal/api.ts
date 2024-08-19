import { DeleteWordResponse, DeleteWordVariables } from "./type.ts";
import { ApiResponse } from "@/types";
import apiClient from "@/api";

export const deleteWordApi = async ({
  id,
}: DeleteWordVariables): ApiResponse<DeleteWordResponse> => {
  try {
    const { data } = await apiClient.delete(`/api/words/${id}`);
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};
