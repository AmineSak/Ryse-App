import { CircleAlert } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CaloriesTooltip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <CircleAlert size={15} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Daily goal not reached</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CaloriesTooltip;
