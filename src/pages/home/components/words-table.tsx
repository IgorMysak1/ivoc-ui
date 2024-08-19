import { Table } from "@/components";
import { Word } from "@/types/word.ts";
import { columns } from "../constant.tsx";
import { useGetAllWords } from "@/pages/home/data/useGetAllwords.ts";

export function WordsTable() {
  const { data, isPending, error } = useGetAllWords();

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
