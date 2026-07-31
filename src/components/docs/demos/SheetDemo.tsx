"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Settings, Sliders } from "lucide-react";
import { toast } from "sonner";

export function SheetDemo() {
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    setOpen(false);
    toast.success("Configurações do QR Code aplicadas com sucesso!");
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={
        <Button variant="outline" className="gap-2 border-border">
          <Sliders className="h-4 w-4" /> Configurações de Estilo (Sheet)
        </Button>
      } />
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" /> Estilização do QR Code
          </SheetTitle>
          <SheetDescription>
            Personalize as propriedades visuais da imagem gerada.
          </SheetDescription>
        </SheetHeader>
        <div className="py-6 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-foreground">Cor Primária dos Módulos</label>
            <div className="flex items-center gap-3">
              <Input type="color" defaultValue="#644a40" className="h-10 w-16 p-1 cursor-pointer" />
              <span className="text-xs font-mono text-muted-foreground">#644a40</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-xs font-semibold text-foreground">Logotipo Central</label>
              <p className="text-[11px] text-muted-foreground">Exibir o logo Gen QRcode no centro</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="space-y-2 pt-4">
            <Button onClick={handleSave} className="w-full bg-primary text-primary-foreground">
              Salvar Alterações
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
