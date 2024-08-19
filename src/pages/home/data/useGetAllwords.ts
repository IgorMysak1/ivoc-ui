import { useQuery, useToken } from "@/hooks";
import { QueryKey } from "@/types";
import { getAllWordsApi } from "@/pages/home/data/api.ts";
import { useParams } from "react-router-dom";
import { GetAllWordsResponse } from "./type.ts";

export const useGetAllWords = () => {
  const { token } = useToken();
  const { tab = "" } = useParams();

  return useQuery<GetAllWordsResponse>({
    queryKey: [QueryKey.GET_ALL_WORDS, tab],
    queryFn: () => getAllWordsApi({ token, wordsPriority: tab }),
  });
};
