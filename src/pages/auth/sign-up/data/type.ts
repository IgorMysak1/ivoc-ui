import { User } from "@/types";

export type SignUpVariables = Pick<User, "firstName" | "email"> & {
  password: string;
};

export type SignUpResponse = { token: string };
