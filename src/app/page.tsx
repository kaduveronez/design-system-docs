import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Layers, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm mb-8">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        Geist Design System
      </div>

      <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
        Design System Docs
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Documentação completa de componentes UI, guiados pelos padrões visuais e arquiteturais do Geist da Vercel.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/docs/button">
          <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:opacity-90">
            Explorar Documentação <ArrowRight className="h-4 w-4" />
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
            Sintaxe moderna com tokens customizados de tema dark e light.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <BookOpen className="h-6 w-6 text-primary mb-3" />
          <h3 className="font-semibold text-foreground">Fumadocs MDX</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Motor de documentação veloz com busca nativa e suporte a código interativo.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <Sparkles className="h-6 w-6 text-primary mb-3" />
          <h3 className="font-semibold text-foreground">shadcn/ui</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Componentes desacoplados, acessíveis e customizáveis.
          </p>
        </div>
      </div>
    </div>
  );
}
