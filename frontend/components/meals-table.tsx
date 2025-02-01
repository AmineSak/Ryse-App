import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { AddMealDialog } from "./add-meal-dialog";

const MealsData = [
  { meal: "Chicken Breast", protein: 31, carbs: 0, fats: 3, calories: 165 },
  { meal: "Brown Rice", protein: 5, carbs: 45, fats: 1, calories: 215 },
  { meal: "Broccoli", protein: 3, carbs: 11, fats: 0, calories: 55 },
  { meal: "Almonds", protein: 6, carbs: 6, fats: 14, calories: 164 },
  { meal: "Greek Yogurt", protein: 10, carbs: 6, fats: 0, calories: 100 },
];

export function MealsTable() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex flex-1 items-center gap-3 ">
          Today's meals
          <AddMealDialog />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Meals</TableHead>
              <TableHead>Protein</TableHead>
              <TableHead>Carbs</TableHead>
              <TableHead>Fats</TableHead>
              <TableHead>Calories</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MealsData.map((row) => (
              <TableRow key={row.meal}>
                <TableCell className="font-medium">{row.meal}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.fats}</TableCell>
                <TableCell>{row.calories}</TableCell>
              </TableRow>
            ))}
            <TableRow className="text-primary">
              <TableCell className="font-medium ">Total</TableCell>
              <TableCell>
                {MealsData.reduce((acc, row) => acc + (row.protein || 0), 0)} /
                150
              </TableCell>
              <TableCell>
                {MealsData.reduce((acc, row) => acc + (row.carbs || 0), 0)} /
                200
              </TableCell>
              <TableCell>
                {MealsData.reduce((acc, row) => acc + (row.fats || 0), 0)} / 80
              </TableCell>
              <TableCell>
                {MealsData.reduce((acc, row) => acc + (row.calories || 0), 0)} /
                2400
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
