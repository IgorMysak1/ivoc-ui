import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/ui";
import { Control } from "react-hook-form";
import { SchemaType } from "../form-schema.ts";

interface Props {
  control: Control<SchemaType>;
}

export const EmailField = ({ control }: Props) => {
  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="Enter your email" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
