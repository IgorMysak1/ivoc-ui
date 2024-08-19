import { z } from "zod";
import { WordsTypes, WordsPriority } from "@/types";

export const globalValidation = {
  email: z.string().email({
    message: "Email is invalid",
  }),
  password: z
    .string()
    .min(8, "First name must be at least 8 letters")
    .max(16, "First name must be no more than 16 letters"),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 letters",
  }),
  word: z.string().min(2, {
    message: "At least 2 letters",
  }),
  translation: z.string().min(2, {
    message: "At least 2 letters",
  }),
  type: z.enum([
    WordsTypes.ADJECTIVE,
    WordsTypes.NOUN,
    WordsTypes.ADVERB,
    WordsTypes.PHRASE,
    WordsTypes.VERB,
  ]),
  wordsPriority: z.enum([
    WordsPriority.ALL,
    WordsPriority.IMPORTED,
    WordsPriority.LESS_IMPORTED,
    WordsPriority.NO_IMPORTED,
  ]),
};
