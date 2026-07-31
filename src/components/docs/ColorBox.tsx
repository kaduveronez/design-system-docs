"use client";
import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export function ColorBox({ name, variable, hex }: { name: string; variable: string; hex: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`var(${variable})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className="group flex flex-col text-left border border-border rounded-lg overflow-hidden transition-all hover:shadow-md bg-card cursor-pointer"
    >
      <div className="h-24 w-full relative" style={{ backgroundColor: `var(${variable})` }}>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? <Check className="text-white h-6 w-6" /> : <Copy className="text-white h-6 w-6" />}
        </div>
      </div>
      <div className="p-3">
        <p className="font-medium text-sm text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground font-mono mt-1">{variable}</p>
        <p className="text-xs text-muted-foreground font-mono">{hex}</p>
      </div>
    </button>
  );
}
