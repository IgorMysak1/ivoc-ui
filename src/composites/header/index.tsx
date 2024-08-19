import { LogOut, UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  LocalStorageKeys,
  Routes,
  RoutesParams,
  WordsPriority,
} from "@/types/enums";
import { ThemeToggle } from "../header/components/theme-toggle.tsx";
import { Button } from "@/ui";
import { CreateEditWordModal } from "@/composites";
import { useState } from "react";
import { removeFromLS } from "@/utils";
import { useCreateWord } from "@/composites/header/data/useCreateWord.ts";
import { SchemaType } from "@/composites/modals/create-edit-word-modal/form-schema.ts";

export const Header = () => {
  const [createState, setCreateState] = useState(false);
  const navigate = useNavigate();

  const { mutate: createWord } = useCreateWord();

  const onSubmit = (values: SchemaType) => {
    createWord(values, {
      onSuccess: () => {
        setCreateState(false);
      },
    });
  };
  const logOut = () => {
    removeFromLS(LocalStorageKeys.AUTH_TOKEN);
    navigate(Routes.LOG_IN);
  };

  return (
    <>
      <CreateEditWordModal
        mode={"create"}
        open={createState}
        onOpenChange={setCreateState}
        onSubmit={onSubmit}
      />
      <div className="flex justify-between items-center py-3">
        <Link
          to={`${Routes.HOME.replace(RoutesParams.TAB, WordsPriority.ALL)}`}
        >
          <p className="text-3xl font-bold  text-emerald-50">Ivoc</p>
        </Link>
        <div className="flex items-center gap-4">
          <Button onClick={logOut}>
            <LogOut />
          </Button>
          <Link to={Routes.PROFILE}>
            <UserRound />
          </Link>
          <ThemeToggle />
          <Button onClick={() => setCreateState(true)}>Add new word</Button>
        </div>
      </div>
    </>
  );
};
