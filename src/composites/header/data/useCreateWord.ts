import { useQueryClient } from "@tanstack/react-query";
import { createWordApi } from "./api.ts";
import { useNotifications } from "@/hooks";
import { QueryKey, Word } from "@/types";
import { WordVariables } from "./type.ts";
import { useMutation } from "@/api";

export const useCreateWord = () => {
  const { showSuccessNotification, showErrorNotification } = useNotifications();
  const queryClient = useQueryClient();

  return useMutation<Word, WordVariables>({
    mutationFn: createWordApi,
    onSuccess: () => {
      showSuccessNotification("Word have been added");
      queryClient.invalidateQueries({ queryKey: [QueryKey.GET_ALL_WORDS] });
    },
    onError: () => {
      showErrorNotification();
    },
  });
};
