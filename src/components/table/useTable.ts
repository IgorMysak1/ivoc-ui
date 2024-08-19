import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as React from "react";
import { RowData } from "@tanstack/table-core";

interface Props<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

export const useTable = <TData extends RowData>({
  data,
  columns,
}: Props<TData>) => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  return useReactTable<TData>({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnFilters,
    },
  });
};
