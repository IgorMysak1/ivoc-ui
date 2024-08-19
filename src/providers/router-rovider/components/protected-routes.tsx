import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { useToken, useUser } from "@/hooks";
import { LocalStorageKeys, Routes } from "@/types";
import { setToLS } from "@/utils";

import { useGetMe } from "../data/useGetMe.ts";

interface Props {
  isProtectedPage: boolean;
}

export const ProtectedRoutes = ({
  children,
  isProtectedPage,
}: PropsWithChildren<Props>) => {
  const { token } = useToken();
  const { setUser } = useUser();

  // Don't make request if isProtectedPage is false
  const { data, isSuccess, isLoading } = useGetMe({ token, isProtectedPage });

  if (!isProtectedPage) {
    return children;
  }

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (data && isSuccess) {
    setToLS(LocalStorageKeys.AUTH_TOKEN, token as string);
    setUser(data);
    return children;
  }

  // If error occurred
  return <Navigate to={Routes.LOG_IN} />;
};
