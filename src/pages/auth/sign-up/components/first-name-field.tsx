import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  FormMessage,
} from "@/ui";
import { Control } from "react-hook-form";
import { SchemaType } from "../form-schema.ts";

interface Props {
  control: Control<SchemaType>;
}

export const FirstNameField = ({ control }: Props) => {
  return (
    <FormField
      control={control}
      name="firstName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>First name</FormLabel>
          <FormControl>
            <Input placeholder="Enter your first name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
