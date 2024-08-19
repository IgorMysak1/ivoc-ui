import { logInSchema, SchemaType } from "@/pages/auth/log-in/form-schema.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  Input,
  Center,
} from "@/ui";
import { Link } from "react-router-dom";
import { Routes } from "@/types/enums";
import { useLogIn } from "./data/useLogIn.ts";

export const LogInPage = () => {
  const { mutate, isPending } = useLogIn();

  const form = useForm<SchemaType>({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SchemaType) => mutate(values);

  return (
    <Center className="mt-40">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-7/12 flex flex-col gap-4"
        >
          <FormField
            control={form.control}
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link to={Routes.SIGN_UP}>
            <p className="text-sm">Go to Sign Up</p>
          </Link>
          <Button disabled={isPending} type="submit" className={"w-full"}>
            Log In
          </Button>
        </form>
      </Form>
    </Center>
  );
};
