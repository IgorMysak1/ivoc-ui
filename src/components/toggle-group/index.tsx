import { ToggleGroup as TG, ToggleGroupItem, toggleVariants } from "@/ui";
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { VariantProps } from "class-variance-authority";

export interface ToggleItems {
  content: React.ReactNode;
  value: string;
}

export type ToggleProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Root
> &
  VariantProps<typeof toggleVariants> & { items: ToggleItems[] };

export function ToggleGroup({ items, ...toggleProps }: ToggleProps) {
  return (
    <TG {...toggleProps}>
      {items.map(({ content, value }) => (
        <ToggleGroupItem key={value} value={value} aria-label="Toggle bold">
          {content}
        </ToggleGroupItem>
      ))}
    </TG>
  );
}
