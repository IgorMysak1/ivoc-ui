import { Button } from "@/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu.tsx";
import { PropsWithChildren } from "react";

interface Props {
  options: {
    text: string;
    onClick: VoidFunction;
  }[];
}

export function Dropdown({ options, children }: PropsWithChildren<Props>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="icon">
          {children}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map(({ text, onClick }) => (
          <DropdownMenuItem key={text} onClick={onClick}>
            {text}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
