import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Input,
} from "@/ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { RowData, Table } from "@tanstack/react-table";
import { ToolbarConfig } from "../types.ts";

interface Props<TData> {
  table: Table<TData>;
  config: ToolbarConfig<TData>;
}

export const Toolbar = <TData extends RowData>({
  table,
  config,
}: Props<TData>) => {
  const getColumns = () =>
    table.getAllColumns().filter((column) => column.getCanHide());

  return (
    <div className="flex items-center py-4">
      <Input
        placeholder={config.input.placeholder}
        value={
          (table
            .getColumn(config.input.columnToFilter as string)
            ?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table
            .getColumn(config.input.columnToFilter as string)
            ?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {getColumns().map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
