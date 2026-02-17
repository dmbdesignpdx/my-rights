// Theirs
import { type PropsWithChildren } from "react";
import { PiLightbulb, PiWarning } from "react-icons/pi";

// Ours
import { Alert as ShadcnAlert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";


export interface CalloutProps extends PropsWithChildren {
  text: string;
  type: "info" | "warning";
}


export function Callout({ type, text }: CalloutProps) {
  const info = type === "info";

  return (
    <ShadcnAlert
      className={cn(
        info ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700",
        "tracking-wide"
      )}
    >
      {info ? <PiLightbulb aria-hidden="true" /> : <PiWarning aria-hidden="true" />}
      <AlertDescription className="text-inherit">
        {text}
      </AlertDescription>
    </ShadcnAlert>
  );
}
