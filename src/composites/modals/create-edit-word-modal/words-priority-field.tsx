import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui";
import { Control } from "react-hook-form";
import { SchemaType } from "./form-schema.ts";
import { WordsPriority } from "@/types/enums";

interface Props {
  control: Control<SchemaType>;
}

export const WordsPriorityField = ({ control }: Props) => {
  return (
    <FormField
      control={control}
      name="wordsPriority"
      render={({ field }) => (
        <FormItem className={"w-full"}>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a type of word" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Object.values(WordsPriority).map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
