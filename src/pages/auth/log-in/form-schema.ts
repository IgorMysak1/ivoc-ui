import { z } from "zod";
import { globalValidation } from "@/constants";

const { email, password } = globalValidation;

export const logInSchema = z.object({
  email,
  password,
});

export type SchemaType = z.infer<typeof logInSchema>;
