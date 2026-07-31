"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarIcon, Check } from "lucide-react";
import { toast } from "sonner";

export function DatePickerDemo() {
  const [selectedDate, setSelectedDate] = useState("2026-12-31");
  const [preset, setPreset] = useState("30d");

  const handleSelectPreset = (days: number, key: string, label: string) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    const dateStr = d.toISOString().split("T")[0];
    setSelectedDate(dateStr);
    setPreset(key);
    toast.info(`Expiração configurada para: ${label}`);
  };

  return (
    <div className="w-full max-w-sm p-6 border border-border rounded-xl bg-card shadow-sm space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
          <CalendarIcon className="h-4 w-4 text-primary" /> Data de Expiração do QR Code
        </label>
        <p className="text-[11px] text-muted-foreground">
          Após esta data, o QR Code redirecionará para a página de aviso.
        </p>
      </div>

      <div className="flex gap-2">
        <Button
          type="button"
          size="sm"
          variant={preset === "7d" ? "default" : "outline"}
          className={preset === "7d" ? "bg-primary text-primary-foreground text-xs" : "text-xs border-border"}
          onClick={() => handleSelectPreset(7, "7d", "7 Dias")}
        >
          7 Dias
        </Button>
        <Button
          type="button"
          size="sm"
          variant={preset === "30d" ? "default" : "outline"}
          className={preset === "30d" ? "bg-primary text-primary-foreground text-xs" : "text-xs border-border"}
          onClick={() => handleSelectPreset(30, "30d", "30 Dias")}
        >
          30 Dias
        </Button>
        <Button
          type="button"
          size="sm"
          variant={preset === "1y" ? "default" : "outline"}
          className={preset === "1y" ? "bg-primary text-primary-foreground text-xs" : "text-xs border-border"}
          onClick={() => handleSelectPreset(365, "1y", "1 Ano")}
        >
          1 Ano
        </Button>
      </div>

      <div className="relative">
        <Input
          type="date"
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
            setPreset("custom");
          }}
          className="w-full text-xs font-mono bg-background border-border"
        />
      </div>

      <div className="pt-1 flex items-center justify-between text-xs text-muted-foreground">
        <span>Status da Validade:</span>
        <span className="font-semibold text-green-700 dark:text-green-400 flex items-center gap-1">
          <Check className="h-3.5 w-3.5" /> Ativo até {selectedDate}
        </span>
      </div>
    </div>
  );
}
