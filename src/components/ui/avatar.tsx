"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.ComponentProps<"div"> {
  size?: "default" | "sm" | "lg";
}

export function Avatar({
  className,
  size = "default",
  children,
  ...props
}: AvatarProps) {
  return (
    <div
      data-slot="avatar"
      data-size={size}
      className={cn(
        "relative inline-flex shrink-0 rounded-full border border-border bg-muted select-none items-center justify-center",
        size === "sm" && "size-8",
        size === "default" && "size-10",
        size === "lg" && "size-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function AvatarImage({
  className,
  src,
  alt = "",
  ...props
}: React.ComponentProps<"img">) {
  const [hasError, setHasError] = React.useState(false);

  if (hasError || !src) return null;

  return (
    <img
      data-slot="avatar-image"
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={cn(
        "absolute inset-0 aspect-square size-full rounded-full object-cover z-10",
        className
      )}
      {...props}
    />
  );
}

export function AvatarFallback({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted font-semibold text-muted-foreground text-xs uppercase z-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-20 block rounded-full ring-2 ring-background bg-green-500 size-3 shrink-0",
        className
      )}
      {...props}
    />
  );
}

export function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "flex -space-x-2 *:ring-2 *:ring-background",
        className
      )}
      {...props}
    />
  );
}
