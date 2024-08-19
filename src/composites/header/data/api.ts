import { ApiResponse, Word } from "@/types";
import { WordVariables } from "./type.ts";
import apiClient from "@/api";

export const createWordApi = async (
  params: WordVariables,
): ApiResponse<Word> => {
  try {
    const { data } = await apiClient.post("/api/words", params);
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};
