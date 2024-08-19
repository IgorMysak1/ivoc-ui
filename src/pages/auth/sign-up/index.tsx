import { Form, Button, Center } from "@/ui";
import { SchemaType } from "./form-schema.ts";
import { Link } from "react-router-dom";
import { Routes } from "@/types/enums";
import { useSignUp } from "./data/useSignUp.ts";
import { FirstNameField, EmailField, PasswordField } from "./components";
import { useForm } from "./useForm.ts";

export const SignUpPage = () => {
  const form = useForm();
  const { mutate: signUp, isPending } = useSignUp();

  const onSubmit = ({ firstName, password, email }: SchemaType) => {
    signUp({
      firstName,
      email,
      password,
    });
  };

  return (
    <Center className="mt-40">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-7/12 flex flex-col gap-4"
        >
          <FirstNameField control={form.control} />
          <EmailField control={form.control} />
          <PasswordField control={form.control} />
          <Link to={Routes.LOG_IN}>Go to Log In</Link>
          <Button type="submit" disabled={isPending} className={"w-full"}>
            Sign Up
          </Button>
        </form>
      </Form>
    </Center>
  );
};
