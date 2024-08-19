import { WordsTypes, WordsPriority } from "@/types/enums";

export interface Word {
  _id: string;
  word: string;
  translation: string;
  type: WordsTypes;
  wordsPriority: WordsPriority;
}
