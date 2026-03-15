import { type MarkdownHeading } from "astro";
import { type Link } from "@/types/main.d";


interface Extra {
  heading: string;
  id: string;
}


export function generateLinks(headings: MarkdownHeading[], extra?: Extra[]): Link[] {
  const initLinks: Link[] = headings
    .filter(item => item.depth === 2)
    .map(item => ({
      label: item.text,
      id: item.slug,
      href: "#" + item.slug,
    }));

  if (!extra) return initLinks;

  const extraLinks: Link[] = extra.map(item => ({
    label: item.heading,
    id: item.id,
    href: "#" + item.id,
  }));

  return [...initLinks, ...extraLinks];
}
