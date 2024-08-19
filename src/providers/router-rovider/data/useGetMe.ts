import { useQuery } from "@/hooks";
import { QueryKey } from "@/types";
import { getMeApi } from "@/providers/router-rovider/data/api.ts";
import {
  GetMeResponse,
  GetMeVariables,
} from "@/providers/router-rovider/data/type.ts";

export const useGetMe = ({
  token,
  isProtectedPage,
}: GetMeVariables & { isProtectedPage: boolean }) => {
  return useQuery<GetMeResponse>({
    queryKey: [QueryKey.GET_ME],
    queryFn: () => getMeApi({ token }),
    enabled: isProtectedPage,
  });
};
