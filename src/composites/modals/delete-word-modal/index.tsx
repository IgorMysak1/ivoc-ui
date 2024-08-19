import { Word } from "@/types";
import { Row } from "@tanstack/react-table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Button,
} from "@/ui";
import { useDeleteWord } from "./useDeleteWord.ts";
import { useToken } from "@/hooks";

interface Props {
  row: Row<Word> | undefined;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteWordModal({ row, open, onOpenChange }: Props) {
  const { token } = useToken();
  const { mutate: deleteWord } = useDeleteWord();

  const onDelete = () => {
    deleteWord(
      { token, id: row?.original._id ?? "" },
      {
        onSuccess: () => {
          onOpenChange(false);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete word</DialogTitle>
        </DialogHeader>
        <p>{`Are you sure that you would like to delete the ${row?.original.word} word`}</p>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={onDelete} variant={"destructive"}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
