import { content } from "@/i18n";

type Message = typeof content.en;

export interface Link {
  label: string;
  href: string,
  id: string;
}
