import { logInApi } from "./api.ts";
import { useNavigate } from "react-router-dom";
import { Routes, RoutesParams, WordsPriority } from "@/types";
import { useToken, useNotifications } from "@/hooks";
import { LogInResponse, LogInVariables } from "./type.ts";
import { useMutation } from "@/api";

export const useLogIn = () => {
  const { showSuccessNotification, showErrorNotification } = useNotifications();
  const { setToken } = useToken();
  const navigate = useNavigate();

  return useMutation<LogInResponse, LogInVariables>({
    mutationFn: logInApi,
    onSuccess: (data) => {
      if (!data) return;
      setToken(data);
      showSuccessNotification("You have been successfully logged in");
      navigate(`${Routes.HOME.replace(RoutesParams.TAB, WordsPriority.ALL)}`);
    },
    onError: (_, { email }) => {
      showErrorNotification(`User ${email} was not found`);
    },
  });
};
