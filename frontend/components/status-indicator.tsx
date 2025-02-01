import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "./ui/tooltip";

interface StatusIndicatorProps {
  status: "warning" | "success";
  className?: string;
}

export function StatusIndicator({ status, className }: StatusIndicatorProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <span
            className={cn(
              "inline-block w-2 h-2 rounded-full",
              status === "warning" ? "bg-red-500" : "bg-green-500",
              className
            )}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Daily goal not reached</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
