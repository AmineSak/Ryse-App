"use client";
import { MealsTable } from "@/components/meals-table";

const DailyMealsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <MealsTable />
      <MealsTable />
    </div>
  );
};

export default DailyMealsPage;
