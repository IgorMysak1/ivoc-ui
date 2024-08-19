export const getUrlForApi = (pathname: string) => {
  return import.meta.env.VITE_APP_URL + pathname;
};
