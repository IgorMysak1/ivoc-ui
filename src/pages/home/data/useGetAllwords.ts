import { QueryKey, WordsPriority } from "@/types";
import { getAllWordsApi } from "@/pages/home/data/api.ts";
import { GetAllWordsResponse } from "./type.ts";
import { useQuery } from "@/api";

export const useGetAllWords = (tab: WordsPriority) => {
  return useQuery<GetAllWordsResponse>({
    queryKey: [QueryKey.GET_ALL_WORDS, tab],
    queryFn: () => getAllWordsApi({ wordsPriority: tab }),
  });
};
