import {
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";

import { routes } from "./constants";
import { Container } from "@/components";
import { Header } from "@/composites";
import { ProtectedRoutes } from "./components/protected-routes.tsx";

const router = createBrowserRouter(
  routes.map(({ element, showHeader, isProtectedPage = false, ...rest }) => {
    return {
      element: (
        <ProtectedRoutes isProtectedPage={isProtectedPage}>
          <Container>
            {showHeader && <Header />}
            {element}
          </Container>
        </ProtectedRoutes>
      ),
      ...rest,
    };
  }),
);

export const RouterProvider = () => {
  return <Provider router={router} />;
};
