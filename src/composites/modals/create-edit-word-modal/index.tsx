import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Form,
} from "@/ui";
import { SchemaType, wordSchema } from "./form-schema.ts";
import { Word, WordsPriority, WordsTypes } from "@/types";
import { NewWordField } from "./new-word-field.tsx";
import { TranslationField } from "./translation-field.tsx";
import { TypeField } from "./type-field.tsx";
import { WordsPriorityField } from "./words-priority-field.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Row } from "@tanstack/react-table";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  row?: Row<Word> | undefined;
  onSubmit: (values: SchemaType) => void;
  mode: "create" | "edit";
}

export function CreateEditWordModal({
  open,
  onOpenChange,
  row,
  onSubmit,
  mode,
}: Props) {
  const form = useForm<SchemaType>({
    resolver: zodResolver(wordSchema),
    defaultValues: {
      word: row?.original.word ?? "",
      translation: row?.original.translation ?? "",
      type: row?.original.type ?? WordsTypes.NOUN,
      wordsPriority: row?.original.wordsPriority ?? WordsPriority.ALL,
    },
    resetOptions: {
      keepDefaultValues: true,
      // keepValues: true,
    },
  });

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset();
    }
  }, [form, form.formState.isSubmitSuccessful]);

  const title =
    mode === "create" ? "Add new word" : `Edit ${row?.original.word}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className={"flex flex-col gap-4"}
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <NewWordField control={form.control} />
            <TranslationField control={form.control} />
            <TypeField control={form.control} />
            <WordsPriorityField control={form.control} />
            <DialogFooter>
              <Button onClick={() => onOpenChange(false)} variant={"outline"}>
                Cancel
              </Button>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
