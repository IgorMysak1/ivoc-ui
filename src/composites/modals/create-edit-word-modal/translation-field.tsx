import { FormControl, FormField, FormItem, FormMessage, Input } from "@/ui";
import { Control } from "react-hook-form";
import { SchemaType } from "./form-schema.ts";

interface Props {
  control: Control<SchemaType>;
}

export const TranslationField = ({ control }: Props) => {
  return (
    <FormField
      control={control}
      name="translation"
      render={({ field }) => (
        <FormItem className={"w-full"}>
          <FormControl>
            <Input placeholder="Enter translation" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
