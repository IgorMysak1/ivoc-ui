import { signUpApi } from "./api.ts";
import { useNavigate } from "react-router-dom";
import { Routes, RoutesParams, WordsPriority } from "@/types";
import { useToken, useNotifications } from "@/hooks";
import { SignUpResponse, SignUpVariables } from "./type.ts";
import { useMutation } from "@/api";

export const useSignUp = () => {
  const { showSuccessNotification, showErrorNotification } = useNotifications();
  const { setToken } = useToken();
  const navigate = useNavigate();

  return useMutation<SignUpResponse, SignUpVariables>({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      if (!data) return;
      setToken(data);
      showSuccessNotification("You have been successfully signed up");
      navigate(`${Routes.HOME.replace(RoutesParams.TAB, WordsPriority.ALL)}`);
    },
    onError: (error) => {
      showErrorNotification(error.message);
    },
  });
};
