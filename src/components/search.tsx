// Theirs
import { useActionState } from "react";

// Ours
import { type Translations } from "@/i18n";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { Button } from "@/components/ui/button";
import { SearchResults } from "./results";
import { getResources } from "@/actions/getResources";


interface Props {
  items: string[];
  content: Translations["resources"]["section"]["local"];
}


export function SearchSelect({ items, content }: Props) {
  const [resources, dispatch, isPending] = useActionState(getResources, []);

  return (
    <article className="mt-20">
      <h3 className="sr-only">{content.heading}</h3>
      <form action={dispatch} className="mt-4 flex flex-wrap gap-6">
        <label
          htmlFor="search-bar"
          className="w-full text-2xl font-bold trim"
        >
          {content.filter.label}
        </label>
        <Combobox
          items={items}
          name="search"
        >
          <ComboboxInput
            id="search-bar"
            className="flex-1"
            placeholder={content.filter.placeholder}
            showClear
          />
        <ComboboxContent>
          <ComboboxEmpty>{content.filter.more}</ComboboxEmpty>
          <ComboboxList>

            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}

          </ComboboxList>
        </ComboboxContent>
        </Combobox>
        <Button
          type="submit"
          disabled={isPending}
        >
          {content.filter.search}
        </Button>
      </form>
      <SearchResults
        list={resources}
        isPending={isPending}
      />
    </article>
  );
}
