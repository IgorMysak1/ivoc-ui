import { QueryKey } from "@/types";
import {
  DefaultError,
  UndefinedInitialDataOptions,
  useQuery as useQueryTanStack,
  QueryClient,
} from "@tanstack/react-query";

type QueryKeys = [(typeof QueryKey)[keyof typeof QueryKey], ...string[]];

export const useQuery = <T>(
  options: UndefinedInitialDataOptions<
    T | undefined,
    DefaultError,
    T | undefined,
    QueryKeys
  >,
  queryClient?: QueryClient,
) => {
  return useQueryTanStack<
    T | undefined,
    DefaultError,
    T | undefined,
    QueryKeys
  >(options, queryClient);
};
