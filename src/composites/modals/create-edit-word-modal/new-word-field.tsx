import { FormControl, FormField, FormItem, FormMessage, Input } from "@/ui";
import { SchemaType } from "./form-schema.ts";
import { Control } from "react-hook-form";

interface Props {
  control: Control<SchemaType>;
}

export const NewWordField = ({ control }: Props) => {
  return (
    <FormField
      control={control}
      name="word"
      render={({ field }) => (
        <FormItem className={"w-full"}>
          <FormControl>
            <Input placeholder="Enter new word" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
