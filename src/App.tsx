import { ThemeProvider, RouterProvider, QueryProvider } from "@/providers";
import { Toaster } from "@/ui";

export const App = () => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <RouterProvider />
        <Toaster />
      </ThemeProvider>
    </QueryProvider>
  );
};
