import { Theme } from "@/types";

export const assignClasses = (theme: Theme) => {
  const root = window.document.documentElement;

  root.classList.remove(...Object.values(Theme));

  if (theme === Theme.SYSTEM) {
    const systemTheme = window.matchMedia(
      `(prefers-color-scheme: ${Theme.DARK})`,
    ).matches
      ? Theme.DARK
      : Theme.LIGHT;

    root.classList.add(systemTheme);
    return;
  }

  root.classList.add(theme);
};
