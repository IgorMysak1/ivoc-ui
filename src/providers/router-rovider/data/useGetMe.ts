import { QueryKey } from "@/types";
import { getMeApi } from "@/providers/router-rovider/data/api.ts";
import { GetMeResponse } from "@/providers/router-rovider/data/type.ts";
import { useQuery } from "@/api";

export const useGetMe = ({ isProtectedPage }: { isProtectedPage: boolean }) => {
  return useQuery<GetMeResponse>({
    queryKey: [QueryKey.GET_ME],
    queryFn: getMeApi,
    enabled: isProtectedPage,
  });
};
