// Theirs
import { type PropsWithChildren } from "react";
import { PiLightbulb, PiWarning } from "react-icons/pi";

// Ours
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { cn } from "@/lib/utils";


type CalloutType = "info" | "warning" | "text";

export interface CalloutProps extends PropsWithChildren {
  text: string;
  type: CalloutType;
  title?: string;
}


const styles: Record<CalloutType, string> = {
  info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200",
  warning: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200",
  text: "border-purple-200 bg-purple-50 text-purple-800 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-200",
};

const icon: Record<CalloutType, React.ReactNode> = {
  info: <PiLightbulb aria-hidden="true" />,
  warning: <PiWarning aria-hidden="true" />,
  text: null,
};

export function Callout({
  type,
  text,
  title,
}: CalloutProps) {
  return (
    <Alert className={cn(styles[type], "tracking-wide")} >
      {icon[type]}
      {title && (
        <AlertTitle className="
          text-zinc-800
          dark:text-zinc-200
        ">
          {title}
        </AlertTitle>
      )}
      <AlertDescription className={cn(
        type === "text" && `
          text-lg
          before:[content:open-quote]
          after:[content:close-quote]
        `,
        "text-inherit",
      )}>
        {text}
      </AlertDescription>
    </Alert>
  );
}
