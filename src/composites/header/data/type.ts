import { Word } from "@/types";

export type WordVariables = Omit<Word, "_id"> & { token: string };
