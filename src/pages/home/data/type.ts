import { Word } from "@/types";

export interface EditWordResponse {
  status: true;
}
export type EditWordVariables = Omit<Word, "_id"> & {
  id: string;
};

export type GetAllWordsResponse = Word[];

export type GetAllWordsVariables = { wordsPriority: string };
