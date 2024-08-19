import { z } from "zod";
import { globalValidation } from "@/constants";

const { firstName, email, password } = globalValidation;

export const signUpSchema = z.object({
  firstName,
  email,
  password,
});

export type SchemaType = z.infer<typeof signUpSchema>;
