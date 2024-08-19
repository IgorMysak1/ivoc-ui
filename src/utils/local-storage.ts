import { LocalStorageKeys } from "@/types/enums";

export const getFromLS = <T = string>(key: LocalStorageKeys): T | null => {
  return localStorage.getItem(key) as T;
};

export const setToLS = (key: LocalStorageKeys, value: string) => {
  localStorage.setItem(key, value);
};

export const removeFromLS = (key: LocalStorageKeys) => {
  localStorage.removeItem(key);
};
