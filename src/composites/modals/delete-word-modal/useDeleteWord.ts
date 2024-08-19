import { useMutation } from "@/hooks";
import { deleteWordApi } from "./api.ts";
import { QueryKey } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { DeleteWordResponse, DeleteWordVariables } from "./type.ts";

export const useDeleteWord = () => {
  const queryClient = useQueryClient();
  return useMutation<DeleteWordResponse, DeleteWordVariables>({
    mutationFn: deleteWordApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.GET_ALL_WORDS] });
    },
  });
};
