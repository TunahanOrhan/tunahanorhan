"use client";

import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { EllipsisVertical } from "lucide-react";
import { LINKS } from "@/lib/constants";
import { useMediaQuery } from "@/lib/use-media-query";

export const MobileDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Drawer open={!isDesktop && open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="link" size="icon" className="text-primary-foreground">
          <EllipsisVertical size={24} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>
          <div className="flex flex-col gap-4 p-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium hover:text-primary transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </DrawerTitle>
      </DrawerContent>
    </Drawer>
  );
};
