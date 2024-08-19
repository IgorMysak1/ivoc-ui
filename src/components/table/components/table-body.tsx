import { TableBody as TBody, TableCell, TableRow } from "@/ui/table.tsx";
import { columns } from "@/pages/home/constant.tsx";
import { flexRender, RowData, Table } from "@tanstack/react-table";

interface Props<TData> {
  table: Table<TData>;
}
export const TableBody = <TData extends RowData>({ table }: Props<TData>) => {
  if (!table.getRowModel().rows?.length) {
    return (
      <TBody>
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      </TBody>
    );
  }

  return (
    <TBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
          {row.getVisibleCells().map((cell) => (
            <TableCell
              style={{ width: `${cell.column.getSize()}px` }}
              key={cell.id}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TBody>
  );
};
