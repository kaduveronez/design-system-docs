"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DropdownMenuContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownMenuContext = React.createContext<DropdownMenuContextType | null>(null);

function useDropdownMenu() {
  const context = React.useContext(DropdownMenuContext);
  if (!context) {
    throw new Error("DropdownMenu components must be used within a DropdownMenu provider");
  }
  return context;
}

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div ref={containerRef} className="relative inline-block text-left">
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
}

export function DropdownMenuTrigger({
  render,
  children,
  className,
  ...props
}: {
  render?: React.ReactElement<any>;
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const { open, setOpen } = useDropdownMenu();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  if (render) {
    return React.cloneElement(render, {
      onClick: handleClick,
      "aria-expanded": open,
      className: cn(render.props?.className, className),
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-expanded={open}
      className={cn("inline-flex items-center justify-center cursor-pointer", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function DropdownMenuContent({
  children,
  className,
  align = "start",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end";
  [key: string]: any;
}) {
  const { open } = useDropdownMenu();

  if (!open) return null;

  return (
    <div
      className={cn(
        "absolute z-50 mt-2 min-w-[14rem] overflow-hidden rounded-xl border border-border bg-popover p-1.5 text-popover-foreground shadow-xl ring-1 ring-black/5 animate-in fade-in-0 zoom-in-95",
        align === "end" ? "right-0" : align === "center" ? "left-1/2 -translate-x-1/2" : "left-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuLabel({
  children,
  className,
  inset,
  ...props
}: React.ComponentProps<"div"> & { inset?: boolean }) {
  return (
    <div className={cn("px-2 py-1.5 text-xs font-semibold text-muted-foreground", inset && "pl-8", className)} {...props}>
      {children}
    </div>
  );
}

export function DropdownMenuItem({
  children,
  className,
  onClick,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { inset?: boolean; variant?: "default" | "destructive" }) {
  const { setOpen } = useDropdownMenu();

  const handleItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) onClick(e);
    setOpen(false);
  };

  return (
    <div
      onClick={handleItemClick}
      className={cn(
        "relative flex cursor-pointer select-none items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        inset && "pl-8",
        variant === "destructive" && "text-destructive hover:bg-destructive/10 hover:text-destructive",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />;
}

export function DropdownMenuGroup({ children, className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("space-y-0.5", className)} {...props}>{children}</div>;
}

export function DropdownMenuPortal({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function DropdownMenuCheckboxItem({ children, className, onClick, ...props }: any) {
  const { setOpen } = useDropdownMenu();
  return (
    <div
      onClick={(e) => {
        if (onClick) onClick(e);
        setOpen(false);
      }}
      className={cn("relative flex cursor-pointer select-none items-center rounded-lg px-2 py-1.5 text-xs hover:bg-accent", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuRadioGroup({ children }: any) {
  return <div>{children}</div>;
}

export function DropdownMenuRadioItem({ children, className, onClick }: any) {
  const { setOpen } = useDropdownMenu();
  return (
    <div
      onClick={(e) => {
        if (onClick) onClick(e);
        setOpen(false);
      }}
      className={cn("relative flex cursor-pointer select-none items-center rounded-lg px-2 py-1.5 text-xs hover:bg-accent", className)}
    >
      {children}
    </div>
  );
}

export function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("ml-auto text-[10px] tracking-widest text-muted-foreground", className)} {...props} />;
}

export function DropdownMenuSub({ children }: any) {
  return <div>{children}</div>;
}

export function DropdownMenuSubTrigger({ children, className }: any) {
  return <div className={cn("flex cursor-pointer items-center rounded-lg px-2 py-1.5 text-xs hover:bg-accent", className)}>{children}</div>;
}

export function DropdownMenuSubContent({ children, className }: any) {
  return <div className={cn("p-1 bg-popover border border-border rounded-lg shadow-lg", className)}>{children}</div>;
}
