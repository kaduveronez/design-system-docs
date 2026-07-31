import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Layers, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm mb-8">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        Gen QRcode Design System
      </div>

      <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
        Gen QRcode Design System
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Documentação oficial completa de componentes UI, tokens e padrões visuais do ecossistema Gen QRcode.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/docs/actions/button">
          <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:opacity-90">
            Explorar Componentes <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="/docs">
          <Button variant="outline" size="lg" className="gap-2 border-border">
            <BookOpen className="h-4 w-4" /> Visão Geral
          </Button>
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl text-left">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <Layers className="h-6 w-6 text-primary mb-3" />
          <h3 className="font-semibold text-foreground">Tailwind CSS v4</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Sintaxe moderna com tokens customizados de tema dark e light da marca Gen QRcode.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <BookOpen className="h-6 w-6 text-primary mb-3" />
          <h3 className="font-semibold text-foreground">Renderização Interativa</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            MDX com suporte a preview visual interativo e código pronto para copiar.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <Sparkles className="h-6 w-6 text-primary mb-3" />
          <h3 className="font-semibold text-foreground">shadcn/ui Base</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Arquitetura desacoplada, acessível e pronta para escalar novos componentes.
          </p>
        </div>
      </div>
    </div>
  );
}
