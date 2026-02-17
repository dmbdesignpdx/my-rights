// Ours
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";


interface CardProps {
  heading: string;
  copy: string;
  link: string;
  label: string;
}


export function Card({
  heading,
  copy,
  link,
  label,
}: CardProps) {
  return (
    <ShadcnCard>
      <CardHeader>
        <CardTitle>
          {heading}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          {copy}
        </CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          asChild
          size="lg"
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            {label}
          </a>
        </Button>
      </CardFooter>
    </ShadcnCard>
  );
}
