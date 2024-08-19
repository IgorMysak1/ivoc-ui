import { Word } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ActionsCell } from "./components/actions-cell.tsx";

export const columns: ColumnDef<Word>[] = [
  {
    accessorKey: "word",
    header: "word",
    cell: ({ row }) => <div className="capitalize">{row.getValue("word")}</div>,
  },
  {
    accessorKey: "translation",
    header: "translation",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("translation")}</div>
    ),
  },
  {
    accessorKey: "type",
    header: "type",
    cell: ({ row }) => <div className="lowercase">{row.getValue("type")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    enableResizing: true,
    size: 30,
    cell: ({ row }) => <ActionsCell row={row} />,
  },
];
