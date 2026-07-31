"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import { toast } from "sonner";

export function PopoverDemo() {
  const handleApply = () => {
    toast.info("Filtros aplicados à busca!");
  };

  return (
    <Popover>
      <PopoverTrigger render={
        <Button variant="outline" className="gap-2 border-border">
          <Filter className="h-4 w-4" /> Filtros Avançados (Popover)
        </Button>
      } />
      <PopoverContent className="w-80">
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-foreground">Filtrar QR Codes</h4>
          <p className="text-xs text-muted-foreground">
            Defina os critérios de busca por data ou tags de campanha.
          </p>
          <div className="space-y-2">
            <Input placeholder="Tag da Campanha (ex: Verão)" className="text-xs" />
          </div>
          <Button onClick={handleApply} className="w-full h-8 text-xs bg-primary text-primary-foreground">
            Aplicar Filtro
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
