"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react";

export function ToastDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button
        variant="default"
        className="gap-2 bg-green-700 hover:bg-green-800 text-white"
        onClick={() => toast.success("QR Code dinâmico salvo com sucesso!", {
          description: "A URL de destino já está ativa no servidor.",
        })}
      >
        <CheckCircle2 className="h-4 w-4" /> Disparar Sucesso
      </Button>

      <Button
        variant="destructive"
        className="gap-2"
        onClick={() => toast.error("Falha ao validar URL", {
          description: "O servidor de destino respondeu com erro 404.",
        })}
      >
        <AlertCircle className="h-4 w-4" /> Disparar Erro
      </Button>

      <Button
        variant="secondary"
        className="gap-2"
        onClick={() => toast.info("Link copiado!", {
          description: "Copiado para a área de transferência.",
        })}
      >
        <Info className="h-4 w-4" /> Informação
      </Button>

      <Button
        variant="outline"
        className="gap-2 border-amber-500 text-amber-700 dark:text-amber-400"
        onClick={() => toast.warning("QR Code perto de expirar", {
          description: "Sua chave temporária expira em 2 dias.",
        })}
      >
        <AlertTriangle className="h-4 w-4" /> Aviso
      </Button>
    </div>
  );
}
