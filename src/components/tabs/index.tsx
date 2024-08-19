import { Tabs as T, TabsContent, TabsList, TabsTrigger } from "@/ui";
import React from "react";

export interface TabsProps {
  tabName: string;
  content: React.ReactElement;
}
interface Props {
  defaultValue?: string;
  tabs: TabsProps[];
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}
export const Tabs = ({
  className,
  defaultValue,
  value,
  onChange,
  tabs,
}: Props) => {
  return (
    <T
      onValueChange={onChange}
      value={value}
      defaultValue={defaultValue ?? tabs[0].tabName}
      className={`w-full ${className}`}
    >
      <div className="flex">
        {tabs.map(({ tabName }) => (
          <TabsList key={tabName} className="w-full">
            <TabsTrigger className="w-full" value={tabName}>
              {tabName}
            </TabsTrigger>
          </TabsList>
        ))}
      </div>
      {tabs.map(({ tabName, content }) => (
        <TabsContent key={tabName} value={tabName}>
          {content}
        </TabsContent>
      ))}
    </T>
  );
};
