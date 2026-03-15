import { type ResourceState } from "@/actions/getResources";
import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemActions,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";


interface Props {
  list: ResourceState;
  isPending: boolean;
}


function badgeClass(value: string): string {
  switch (value) {
    case "Social":
      return "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300";
    case "Legal":
      return "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300";
    case "Government":
      return "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300";
    case "Education":
      return "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300";
    default:
      return "";
  }
}

export function SearchResults({ isPending, list }: Props) {
  if (isPending) return (
    <div className="mt-6 flex w-full flex-col gap-4">
      <Skeleton className="h-13.5 w-full" />
      <Skeleton className="h-13.5 w-full" />
      <Skeleton className="h-13.5 w-full" />
    </div>
  );

  return (
    <ItemGroup className="mt-6">

      {list.map(item => (
        <Item
          className="
            relative bg-sidebar
            hover:bg-sidebar-accent
          "
          role="listitem"
          key={item.link}
        >
          <ItemTitle className="text-base">
            <a
              className="
                hover:text-black
                dark:hover:text-white
              "
              href={item.link}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {item.name}
              <span className="absolute inset-0 size-full" />
            </a>
          </ItemTitle>
          <ItemActions>

            {item.tags && item.tags.split(",").map(tag => (
              <Badge
                key={item.link + tag}
                variant="outline"
                className={badgeClass(tag)}
              >
                {tag.trim()}
              </Badge>
            ))}

          </ItemActions>
        </Item>
      ))}

    </ItemGroup>
 );
}
