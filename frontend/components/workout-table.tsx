import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const workoutData = [
  { exercise: "Squats", sets: 3, reps: 10, weight: "100 lbs" },
  { exercise: "Bench Press", sets: 3, reps: 8, weight: "135 lbs" },
  { exercise: "Deadlifts", sets: 3, reps: 5, weight: "185 lbs" },
  { exercise: "Pull-ups", sets: 3, reps: 8, weight: "Body weight" },
];

export function WorkoutTable() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Today's Workout</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Exercise</TableHead>
              <TableHead>Sets</TableHead>
              <TableHead>Reps</TableHead>
              <TableHead>Weight</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workoutData.map((row) => (
              <TableRow key={row.exercise}>
                <TableCell className="font-medium">{row.exercise}</TableCell>
                <TableCell>{row.sets}</TableCell>
                <TableCell>{row.reps}</TableCell>
                <TableCell>{row.weight}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
