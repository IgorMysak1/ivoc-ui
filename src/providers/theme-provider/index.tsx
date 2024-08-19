import { PropsWithChildren, useEffect, useState } from "react";

import { LocalStorageKeys, Theme } from "@/types/enums";
import { ThemeProviderContext } from "@/context";
import { getFromLS, setToLS } from "@/utils";
import { assignClasses } from "./assign-classes.ts";

interface ThemeProviderProps {
  defaultTheme?: Theme;
  storageKey?: LocalStorageKeys;
}

export function ThemeProvider({
  children,
  defaultTheme = Theme.SYSTEM,
  storageKey = LocalStorageKeys.THEME,
}: PropsWithChildren<ThemeProviderProps>) {
  const [theme, setTheme] = useState<Theme>(
    () => getFromLS(storageKey) || defaultTheme,
  );

  useEffect(() => {
    assignClasses(theme);
  }, [theme]);

  return (
    <ThemeProviderContext.Provider
      value={{
        theme,
        setTheme: (theme: Theme) => {
          setToLS(storageKey, theme);
          setTheme(theme);
        },
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}
