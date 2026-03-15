// Theirs
import { useState } from "react";
import { PiX, PiList } from "react-icons/pi";

// Ours
import { type Link } from "@/types/main.d";
import { type LanguageCode } from "@/constants/lang";
import { getTranslations } from "@/i18n";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";


interface Props {
  locale: LanguageCode;
  links: Link[];
}


export function SiteDrawer({ links, locale }: Props) {
  const [open, setOpen] = useState(false);
  const t = getTranslations(locale);

  return (
    <Drawer
      direction="left"
      open={open}
      onOpenChange={setOpen}
      autoFocus={open}
    >
      <DrawerTrigger asChild>
        <Button
          className="relative -inset-s-3 min-h-11 min-w-11"
          variant="ghost"
          aria-label={t.label.open}
          aria-controls="site-drawer"
          aria-expanded={open}
        >
          <PiList className="size-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent id="site-drawer">
        <DrawerHeader className="sr-only">
          <DrawerTitle>{t.label.menu}</DrawerTitle>
          <DrawerDescription>{t.label.menu}</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col p-6">

          {links.map(link => (
            <DrawerClose
              key={"nav-" + link.id}
              asChild
            >
              <Button
                asChild
                className="min-h-11 justify-start"
                variant="ghost"
                size="lg"
              >
                <a href={link.href}>
                  {link.label}
                </a>
              </Button>
            </DrawerClose>
          ))}

        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              className="min-h-11 min-w-11 self-center"
              size="lg"
              aria-label={t.label.close}
              aria-controls="site-drawer"
              aria-expanded={open}
            >
              <PiX className="size-5" />
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
