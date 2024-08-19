import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks";
import { Theme } from "@/types/enums";
import { Dropdown } from "@/components";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const options = Object.values(Theme).map((theme) => ({
    text: theme.toLocaleUpperCase(),
    onClick: () => setTheme(theme),
  }));

  return (
    <Dropdown options={options}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Dropdown>
  );
}
