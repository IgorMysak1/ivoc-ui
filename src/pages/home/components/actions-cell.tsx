import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Word } from "@/types";
import { Row } from "@tanstack/react-table";
import { CreateEditWordModal, DeleteWordModal } from "@/composites";
import { useEditWord } from "@/pages/home/data/useEditWord.ts";
import { SchemaType } from "@/composites/modals/create-edit-word-modal/form-schema.ts";
import { useState } from "react";

interface Props {
  row: Row<Word> | undefined;
}

export const ActionsCell = ({ row }: Props) => {
  const [editState, setEditState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);

  const { mutate: editWord } = useEditWord();

  const onSubmit = (values: SchemaType) => {
    editWord(
      { ...values, id: row?.original._id ?? "" },
      {
        onSuccess: () => {
          setEditState(false);
        },
      },
    );
  };

  return (
    <>
      {editState && (
        <CreateEditWordModal
          open={editState}
          onOpenChange={setEditState}
          onSubmit={onSubmit}
          row={row}
          mode="edit"
        />
      )}
      {deleteState && (
        <DeleteWordModal
          row={row}
          open={deleteState}
          onOpenChange={setDeleteState}
        />
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setEditState(true)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDeleteState(true)}>
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a
              target={"_blank"}
              href={`https://dictionary.cambridge.org/dictionary/english/${row?.original.word.toLowerCase()}`}
            >
              Cambridge dictionary
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
