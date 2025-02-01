import { CaloriesChart } from "@/components/calories-chart";
import { WeightChart } from "@/components/weight-chart";
import { WorkoutTable } from "@/components/workout-table";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <Link href="/dashboard/daily-workouts" passHref>
          <WorkoutTable />
        </Link>
        <Link href="/dashboard/daily-meals" passHref>
          <CaloriesChart />
        </Link>
      </div>
      <WeightChart />
    </div>
  );
};
export default page;
