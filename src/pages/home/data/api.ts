import axios from "axios";
import { ApiResponse } from "@/types";
import {
  EditWordResponse,
  EditWordVariables,
  GetAllWordsVariables,
} from "./type.ts";
import { getUrlForApi } from "@/utils";

export const editWordApi = async ({
  token,
  id,
  ...params
}: EditWordVariables): ApiResponse<EditWordResponse> => {
  try {
    const { data } = await axios.patch(
      getUrlForApi(`/api/words/${id}`),
      params,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};

export const getAllWordsApi = async ({
  wordsPriority,
  token,
}: GetAllWordsVariables) => {
  try {
    const { data } = await axios.get(getUrlForApi("/api/words/all"), {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        wordsPriority,
      },
    });
    return data;
  } catch (err) {
    throw new Error(err as undefined);
  }
};
