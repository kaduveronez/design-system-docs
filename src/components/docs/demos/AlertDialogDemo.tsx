"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

export function AlertDialogDemo() {
  const [open, setOpen] = useState(false);

  const handleConfirmDelete = () => {
    setOpen(false);
    toast.error("QR Code excluído com sucesso!");
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger render={
        <Button variant="destructive" className="gap-2">
          <Trash2 className="h-4 w-4" /> Excluir QR Code (Alert Dialog)
        </Button>
      } />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza que deseja excluir?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. O QR Code deixará de redirecionar para a página configurada.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmDelete} className="bg-destructive text-destructive-foreground">
            Confirmar Exclusão
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
