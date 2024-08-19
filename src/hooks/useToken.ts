import { getFromLS, setToLS } from "@/utils";
import { LocalStorageKeys } from "@/types";

export const useToken = () => {
  const token = getFromLS(LocalStorageKeys.AUTH_TOKEN);
  const setToken = ({ token }: { token: string }) => {
    setToLS(LocalStorageKeys.AUTH_TOKEN, token);
  };

  return { token: token, setToken };
};
