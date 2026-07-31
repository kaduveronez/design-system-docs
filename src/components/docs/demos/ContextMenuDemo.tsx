"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { toast } from "sonner";
import { Copy, Download, RefreshCw, Trash } from "lucide-react";

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[180px] w-full max-w-sm items-center justify-center rounded-xl border-2 border-dashed border-border bg-card p-6 text-center text-sm font-medium text-muted-foreground select-none hover:border-primary/50 transition-colors">
        <div>
          <p className="font-semibold text-foreground">Clique com o botão direito nesta área</p>
          <p className="text-xs text-muted-foreground mt-1">Para abrir o menu de contexto do Gen QRcode</p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem onClick={() => toast.success("Link do QR Code copiado!")} className="gap-2">
          <Copy className="h-4 w-4" /> Copiar Link de Destino
        </ContextMenuItem>
        <ContextMenuItem onClick={() => toast.success("Download do SVG iniciado!")} className="gap-2">
          <Download className="h-4 w-4" /> Baixar Vetor SVG
        </ContextMenuItem>
        <ContextMenuItem onClick={() => toast.info("URL redirecionada atualizada.")} className="gap-2">
          <RefreshCw className="h-4 w-4" /> Atualizar Redirecionamento
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem onClick={() => toast.error("QR Code desativado.")} variant="destructive" className="gap-2">
          <Trash className="h-4 w-4" /> Desativar QR Code
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
