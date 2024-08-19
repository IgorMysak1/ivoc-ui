import { Navigate, RouteObject } from "react-router-dom";

import { Routes, RoutesParams, WordsPriority } from "@/types/enums";

import {
  NotFoundPage,
  HomePage,
  SignUpPage,
  LogInPage,
  ProfilePage,
} from "@/pages";

type RoutesInterface = RouteObject & {
  isProtectedPage?: boolean;
  showHeader?: boolean;
};

export const routes: RoutesInterface[] = [
  {
    path: Routes.AUTH,
    element: <Navigate to={Routes.LOG_IN} />,
  },
  {
    path: Routes.INITIAL,
    element: (
      <Navigate
        to={`${Routes.HOME.replace(RoutesParams.TAB, WordsPriority.ALL)}`}
      />
    ),
    showHeader: true,
  },
  {
    path: Routes.LOG_IN,
    element: <LogInPage />,
  },
  {
    path: Routes.SIGN_UP,
    element: <SignUpPage />,
  },
  {
    path: Routes.PROFILE,
    element: <ProfilePage />,
    isProtectedPage: true,
    showHeader: true,
  },
  {
    path: Routes.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: Routes.HOME,
    element: <HomePage />,
    isProtectedPage: true,
    showHeader: true,
  },
];
