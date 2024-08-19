import { Table } from "@/components";
import { Word } from "@/types/word.ts";
import { columns } from "../constant.tsx";
import { useGetAllWords } from "../data/useGetAllwords.ts";
import { WordsPriority } from "@/types";

export function WordsTable({ tab }: { tab: WordsPriority }) {
  const { data, isPending, error } = useGetAllWords(tab);

  return (
    <Table<Word>
      data={data}
      loading={isPending}
      error={error}
      columns={columns}
      toolbar={{
        input: {
          placeholder: "Search by words...",
          columnToFilter: "word",
        },
      }}
    />
  );
}
