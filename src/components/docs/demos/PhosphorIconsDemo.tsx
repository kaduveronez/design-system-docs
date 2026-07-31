"use client";

import {
  QrCode,
  Sparkle,
  CheckCircle,
  Copy,
  ArrowRight,
  Gear,
  DownloadSimple,
  ShareNetwork,
  Link,
  ShieldCheck,
  Lightning,
} from "@phosphor-icons/react";

export function PhosphorIconsDemo() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <QrCode size={32} className="text-primary" weight="regular" />
          <span className="text-[11px] font-mono">QrCode</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Sparkle size={32} className="text-primary" weight="fill" />
          <span className="text-[11px] font-mono">Sparkle (fill)</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <CheckCircle size={32} className="text-green-600" weight="duotone" />
          <span className="text-[11px] font-mono">CheckCircle (duotone)</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Copy size={32} className="text-foreground" weight="bold" />
          <span className="text-[11px] font-mono">Copy (bold)</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ArrowRight size={32} className="text-foreground" weight="regular" />
          <span className="text-[11px] font-mono">ArrowRight</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Gear size={32} className="text-muted-foreground" weight="duotone" />
          <span className="text-[11px] font-mono">Gear (duotone)</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <DownloadSimple size={32} className="text-primary" weight="regular" />
          <span className="text-[11px] font-mono">DownloadSimple</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ShareNetwork size={32} className="text-foreground" weight="duotone" />
          <span className="text-[11px] font-mono">ShareNetwork</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Link size={32} className="text-primary" weight="bold" />
          <span className="text-[11px] font-mono">Link</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Lightning size={32} className="text-amber-500" weight="fill" />
          <span className="text-[11px] font-mono">Lightning</span>
        </div>
      </div>

      <div className="pt-4 border-t border-border flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground">
        <span>Pesos Suportados:</span>
        <span className="px-2 py-1 bg-card border rounded-md text-foreground">thin</span>
        <span className="px-2 py-1 bg-card border rounded-md text-foreground">light</span>
        <span className="px-2 py-1 bg-card border rounded-md text-foreground font-semibold">regular</span>
        <span className="px-2 py-1 bg-card border rounded-md text-foreground font-bold">bold</span>
        <span className="px-2 py-1 bg-card border rounded-md text-foreground">fill</span>
        <span className="px-2 py-1 bg-card border rounded-md text-primary font-bold">duotone</span>
      </div>
    </div>
  );
}
