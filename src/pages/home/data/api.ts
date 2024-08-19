import { ApiResponse } from "@/types";
import {
  EditWordResponse,
  EditWordVariables,
  GetAllWordsVariables,
} from "./type.ts";
import apiClient from "@/api";

export const editWordApi = async ({
  id,
  ...params
}: EditWordVariables): ApiResponse<EditWordResponse> => {
  try {
    const { data } = await apiClient.patch(`/api/words/${id}`, params);
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};

export const getAllWordsApi = async ({
  wordsPriority,
}: GetAllWordsVariables) => {
  try {
    const { data } = await apiClient.get("/api/words/all", {
      params: {
        wordsPriority,
      },
    });
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};
