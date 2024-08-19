import { useQueryClient } from "@tanstack/react-query";
import { useNotifications } from "@/hooks";
import { QueryKey } from "@/types";

import { editWordApi } from "./api.ts";
import { EditWordVariables, EditWordResponse } from "./type.ts";
import { useMutation } from "@/api";

export const useEditWord = () => {
  const queryClient = useQueryClient();
  const { showSuccessNotification, showErrorNotification } = useNotifications();

  return useMutation<EditWordResponse, EditWordVariables>({
    mutationFn: editWordApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.GET_ALL_WORDS] });
      showSuccessNotification();
    },
    onError: () => {
      showErrorNotification();
    },
  });
};
