"use client";

import { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, QrCode, UserPlus, Check } from "lucide-react";

export function HoverCardDemo() {
  const [following, setFollowing] = useState(false);

  return (
    <HoverCard>
      <HoverCardTrigger render={
        <Button variant="link" className="text-primary font-semibold text-base underline underline-offset-4">
          @genqrcode_oficial
        </Button>
      } />
      <HoverCardContent className="w-80 p-4">
        <div className="flex justify-between space-x-4">
          <Avatar className="h-12 w-12 border border-border">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-primary text-primary-foreground font-bold">GQ</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-foreground">Gen QRcode Platform</h4>
              <Badge className="bg-primary text-primary-foreground text-[10px] py-0">Oficial</Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Gerador e gerenciador de QR Codes dinâmicos em alta definição para campanhas.
            </p>
            <div className="flex items-center pt-2 text-[11px] text-muted-foreground gap-3">
              <span className="flex items-center gap-1 font-medium text-foreground">
                <QrCode className="h-3.5 w-3.5 text-primary" /> 12.4k QR Codes
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> Desde 2026
              </span>
            </div>
            <div className="pt-3">
              <Button
                size="sm"
                variant={following ? "outline" : "default"}
                className={following ? "w-full text-xs h-7 border-border" : "w-full text-xs h-7 bg-primary text-primary-foreground"}
                onClick={() => setFollowing(!following)}
              >
                {following ? (
                  <>
                    <Check className="h-3.5 w-3.5 mr-1" /> Seguindo
                  </>
                ) : (
                  <>
                    <UserPlus className="h-3.5 w-3.5 mr-1" /> Seguir Conta
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
