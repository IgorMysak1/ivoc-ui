import { z } from "zod";
import { globalValidation } from "@/constants";

const { word, translation, type, wordsPriority } = globalValidation;

export const wordSchema = z.object({
  word,
  translation,
  type,
  wordsPriority,
});

export type SchemaType = z.infer<typeof wordSchema>;
