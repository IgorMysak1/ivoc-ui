import {
  DefaultError,
  UseMutationOptions,
  useMutation as useMutationTanStack,
  QueryClient,
} from "@tanstack/react-query";

export const useMutation = <T, V>(
  options: UseMutationOptions<T | undefined, DefaultError, V, unknown>,
  queryClient?: QueryClient,
) => {
  return useMutationTanStack<T | undefined, DefaultError, V, unknown>(
    options,
    queryClient,
  );
};
