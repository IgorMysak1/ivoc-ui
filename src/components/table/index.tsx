import { ColumnDef, RowData } from "@tanstack/react-table";

import { Toolbar } from "./components/toolbar.tsx";
import { TableContent } from "./components/table-content.tsx";
import { TablePagination } from "./components/table-pagination.tsx";
import { ToolbarConfig } from "./types.ts";
import { useTable } from "@/components/table/useTable.ts";

interface TableProps<TData> {
  data: TData[] | undefined;
  loading: boolean;
  error: Error | null;
  columns: ColumnDef<TData>[];
  toolbar?: ToolbarConfig<TData>;
}

export const Table = <TData extends RowData>({
  data,
  loading,
  error,
  columns,
  toolbar,
}: TableProps<TData>) => {
  const table = useTable<TData>({ data: data ?? [], columns });

  // Todo: Handle it better

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <div className="w-full">
      {toolbar && <Toolbar<TData> table={table} config={toolbar} />}
      <TableContent<TData> table={table} />
      <TablePagination<TData> table={table} />
    </div>
  );
};
