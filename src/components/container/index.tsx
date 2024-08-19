import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="container mx-auto min-h-screen">{children}</div>;
};
