// Ours
import { type Language } from "@/constants/lang";
import { getTranslations } from "@/i18n";
import {
  Select as ChakraSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";


interface Props {
  locale: Language;
  options: { label: string, value: string, id: string }[]
}


export function Select({ locale, options }: Props) {
  const t = getTranslations(locale);

  const getCurrent = (id: string) => {
    return options.find((item) => item.id === id);
  };

  const current = getCurrent(locale);

  function navigate(e: string) {
    window.location.href = e;
  }

  return (
    <ChakraSelect
      value={current?.value}
      onValueChange={navigate}
    >
      <SelectTrigger
        className="min-h-11 w-16"
        aria-label={t.label.select}
      >
        <SelectValue>{current?.label}</SelectValue>
      </SelectTrigger>
      <SelectContent
        className="min-w-0"
        position="popper"
      >
        <SelectGroup>

          {options.map((item) => (
            <SelectItem
              value={item.value}
              key={item.label}
            >
              {item.label}
            </SelectItem>
          ))}

        </SelectGroup>
      </SelectContent>
    </ChakraSelect>
  );
}
