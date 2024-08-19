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

export const PasswordField = ({ control }: Props) => {
  return (
    <FormField
      control={control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input placeholder="Enter password" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
