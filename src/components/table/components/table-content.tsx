import { Table } from "@/ui/table.tsx";

import { RowData, Table as TableType } from "@tanstack/react-table";

import { TableHeader } from "./table-header.tsx";
import { TableBody } from "./table-body.tsx";

interface Props<TData> {
  table: TableType<TData>;
}

export const TableContent = <TData extends RowData>({
  table,
}: Props<TData>) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader<TData> table={table} />
        <TableBody<TData> table={table} />
      </Table>
    </div>
  );
};
