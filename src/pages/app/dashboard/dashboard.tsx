import { Helmet } from "react-helmet-async";
import MonthJustifications from "./month-justifications";
import YearJustifications from "./year-justifications";
import PendingJustificationsMonthAmount from "./pending-justifcations-month-amount";
import UnjustifiedInconsistencies from "./unjustified-inconsistencies";
import JustificationsChart from "./justifications-chart";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <UnjustifiedInconsistencies />
          <MonthJustifications />
          <PendingJustificationsMonthAmount />
          <YearJustifications />
        </div>

        <div className="">
          <JustificationsChart />
        </div>
      </div>
    </>
  );
}
