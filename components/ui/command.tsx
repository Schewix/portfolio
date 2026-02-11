"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils";

export const CommandDialog = ({
  open,
  onOpenChange,
  children
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-border/70 bg-card/95 shadow-soft">
        <CommandPrimitive className="text-sm text-foreground">
          {children}
        </CommandPrimitive>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="border-b border-border/60 px-4 py-3">
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "w-full bg-transparent text-base outline-none placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

export const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[360px] overflow-y-auto p-2", className)}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

export const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn("px-2 py-1 text-xs text-muted-foreground", className)}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

export const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "flex cursor-pointer items-center justify-between gap-4 rounded-xl px-3 py-2 text-sm text-foreground aria-selected:bg-muted/60",
      className
    )}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

export const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className={cn("px-4 py-8 text-center text-sm text-muted-foreground", className)}
    {...props}
  />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

export const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("my-2 h-px bg-border/60", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
