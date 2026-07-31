"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, User, QrCode, BarChart, LogOut } from "lucide-react";
import { toast } from "sonner";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={
        <Button variant="outline" className="gap-2 border-border shadow-sm">
          Minha Conta Gen QRcode <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      } />
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => toast.info("Abrindo perfil...")} className="gap-2">
          <User className="h-4 w-4" /> Gerenciar Perfil
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toast.info("Carregando QR Codes...")} className="gap-2">
          <QrCode className="h-4 w-4" /> Meus QR Codes Dinâmicos
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toast.info("Abrindo relatórios...")} className="gap-2">
          <BarChart className="h-4 w-4" /> Estatísticas de Acesso
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => toast.error("Sessão encerrada.")} variant="destructive" className="gap-2 font-medium">
          <LogOut className="h-4 w-4" /> Sair da Conta
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
