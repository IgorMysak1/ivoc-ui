import { SchemaType, signUpSchema } from "@/pages/auth/sign-up/form-schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useF } from "react-hook-form";

export const useForm = () => {
  return useF<SchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
    },
  });
};
