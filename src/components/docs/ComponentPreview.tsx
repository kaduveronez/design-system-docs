"use client";
import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ComponentPreview({ children, code }: { children: React.ReactNode; code: string }) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = React.useCallback(() => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  }, [code]);

  return (
    <div className="relative my-4 flex flex-col space-y-2">
      <div className="group relative flex min-h-[350px] w-full items-center justify-center rounded-xl border border-border bg-card p-10 text-card-foreground shadow-sm">
        {children}
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100"
          onClick={copyToClipboard}
        >
          {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
