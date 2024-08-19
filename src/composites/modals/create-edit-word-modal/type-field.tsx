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
import { WordsTypes } from "@/types/enums";

interface Props {
  control: Control<SchemaType>;
}

export const TypeField = ({ control }: Props) => {
  return (
    <FormField
      control={control}
      name="type"
      render={({ field }) => (
        <FormItem className={"w-full"}>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a type of word" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Object.values(WordsTypes).map((type) => (
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
