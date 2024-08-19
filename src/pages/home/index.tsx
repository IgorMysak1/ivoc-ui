import { WordsTable } from "./components/words-table";
import { Tabs, TabsProps } from "@/components";
import { useNavigate, useParams } from "react-router-dom";
import { Routes, RoutesParams, WordsPriority } from "@/types";

const tabs: TabsProps[] = Object.values(WordsPriority).map((tab) => ({
  tabName: tab,
  content: <WordsTable tab={tab} />,
}));

export const HomePage = () => {
  const navigate = useNavigate();
  const { tab } = useParams();

  const changeTab = (value: string) => {
    navigate(`${Routes.HOME.replace(RoutesParams.TAB, value)}`);
  };

  return (
    <Tabs
      tabs={tabs}
      onChange={changeTab}
      defaultValue={tab ?? WordsPriority.ALL}
      className={"pt-10"}
    />
  );
};
