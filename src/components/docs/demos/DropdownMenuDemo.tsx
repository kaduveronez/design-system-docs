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
        <DropdownMenuItem onClick={() => toast.info("Abrindo perfil...")}>
          <User className="h-4 w-4 mr-2" /> Gerenciar Perfil
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toast.info("Carregando QR Codes...")}>
          <QrCode className="h-4 w-4 mr-2" /> Meus QR Codes Dinâmicos
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toast.info("Abrindo relatórios...")}>
          <BarChart className="h-4 w-4 mr-2" /> Estatísticas de Acesso
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => toast.error("Sessão encerrada.")} variant="destructive">
          <LogOut className="h-4 w-4 mr-2" /> Sair da Conta
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
