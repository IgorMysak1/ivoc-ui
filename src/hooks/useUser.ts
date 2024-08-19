import { User } from "@/types";

let user: User | null = null;

export const useUser = () => {
  const setUser = (data: User) => {
    user = data;
  };

  return { user, setUser };
};
