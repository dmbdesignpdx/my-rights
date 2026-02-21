// Theirs
import { useState } from "react";
import { PiX, PiList } from "react-icons/pi";

// Ours
import { type Link } from "@/types/main.d";
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
  links: Link[]
}


export function SiteDrawer({ links }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer
      direction="left"
      open={open}
      onOpenChange={setOpen}
      autoFocus={open}
    >
      <DrawerTrigger asChild>
        <Button
          className="relative -start-3 min-h-11 min-w-11"
          variant="ghost"
          aria-label="open"
        >
          <PiList className="size-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="sr-only">
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerDescription>Menu</DrawerDescription>
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
              aria-label="close"
            >
              <PiX className="size-5" />
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
