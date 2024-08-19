import { TableHead, TableHeader as THeader, TableRow } from "@/ui/table.tsx";
import { flexRender, RowData } from "@tanstack/react-table";
import { Table as TableType } from "@tanstack/react-table";

interface Props<TData> {
  table: TableType<TData>;
}

export const TableHeader = <TData extends RowData>({ table }: Props<TData>) => {
  return (
    <THeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id}>
                {!header.isPlaceholder &&
                  flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </THeader>
  );
};
