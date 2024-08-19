import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export const Center = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <div
      className={`flex column flex-col items-center justify-center w-full h-full ${className}`}
    >
      {children}
    </div>
  );
};
