"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { QrCode, Plus } from "lucide-react";

export function DialogDemo() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("Campanha de Verão");
  const [url, setUrl] = useState("https://genqrcode.com/promo");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    toast.success(`QR Code "${name}" criado com sucesso!`, {
      description: `Redirecionando para ${url}`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={
        <Button variant="default" className="gap-2 bg-primary text-primary-foreground">
          <Plus className="h-4 w-4" /> Criar QR Code Dinâmico
        </Button>
      } />
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <QrCode className="h-5 w-5 text-primary" /> Criar QR Code Dinâmico
            </DialogTitle>
            <DialogDescription>
              Preencha os dados abaixo. Você poderá alterar o destino a qualquer momento.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground">Nome do QR Code</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground">URL de Destino</label>
              <Input value={url} onChange={(e) => setUrl(e.target.value)} type="url" required />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground">
              Salvar & Gerar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
