import { User } from "@/types";

export type LogInVariables = Pick<User, "email"> & {
  password: string;
};

export type LogInResponse = { token: string };
