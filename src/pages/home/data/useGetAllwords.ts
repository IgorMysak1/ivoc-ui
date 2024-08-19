import { QueryKey } from "@/types";
import { getAllWordsApi } from "@/pages/home/data/api.ts";
import { useParams } from "react-router-dom";
import { GetAllWordsResponse } from "./type.ts";
import { useQuery } from "@/api";

export const useGetAllWords = () => {
  const { tab = "" } = useParams();

  return useQuery<GetAllWordsResponse>({
    queryKey: [QueryKey.GET_ALL_WORDS, tab],
    queryFn: () => getAllWordsApi({ wordsPriority: tab }),
  });
};
