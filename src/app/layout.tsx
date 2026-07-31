import './globals.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from 'sonner';
import { Plus_Jakarta_Sans, Merriweather, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const serif = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'Gen QRcode Design System Docs',
  description: 'Documentação oficial do Gen QRcode Design System',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${serif.variable} ${mono.variable} ${sans.className}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen bg-background text-foreground antialiased font-sans">
        <RootProvider>
          <TooltipProvider>
            {children}
            <Toaster position="top-right" richColors />
          </TooltipProvider>
        </RootProvider>
      </body>
    </html>
  );
}
