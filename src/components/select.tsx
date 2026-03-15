// Ours
import { type LanguageCode } from "@/constants/lang";
import { getTranslations } from "@/i18n";
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";


interface Props {
  locale: LanguageCode;
  options: { value: string, id: string }[]
}


export function Select({ locale, options }: Props) {
  const t = getTranslations(locale);

  function getCurrent(id: string) {
    const current = options.find((item) => item.id === id);
    return current?.id.toLocaleUpperCase() || "EN";
  };

  function navigate(e: string) {
    window.location.href = e;
  }

  return (
    <ShadcnSelect
      value={getCurrent(locale)}
      onValueChange={navigate}
    >
      <SelectTrigger
        className="min-h-11 w-16"
        aria-label={t.label.select}
      >
        <SelectValue>{getCurrent(locale)}</SelectValue>
      </SelectTrigger>
      <SelectContent
        className="min-w-0"
        position="popper"
      >
        <SelectGroup>

          {options.map((item) => (
            <SelectItem
              value={item.value}
              key={item.id}
            >
              {item.id.toLocaleUpperCase()}
            </SelectItem>
          ))}

        </SelectGroup>
      </SelectContent>
    </ShadcnSelect>
  );
}
