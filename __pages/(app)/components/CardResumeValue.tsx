import { DollarSign } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/utils";

type PropsCardResumeValue = {
  className?: string;
  title?: string;
  value?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  lastMonthValue?: string;
};

export default function CardResumeValue({
  props,
}: {
  props: PropsCardResumeValue;
}) {
  return (
    <Card
      className={cn(
        `${props.className} w-full  cursor-pointer bg-primary hover:bg-primary/95 transition-all border-none text-muted`
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{props.title}</CardTitle>
        {props.icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{props.value}</div>
        <p className="text-xs text-muted/80">
          {props.lastMonthValue} que o mês passado
        </p>
      </CardContent>
    </Card>
  );
}
