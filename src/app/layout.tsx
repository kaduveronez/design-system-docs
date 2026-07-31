import './globals.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Gen QRcode Design System Docs',
  description: 'Documentação oficial do Gen QRcode Design System',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-background text-foreground antialiased">
        <RootProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </RootProvider>
      </body>
    </html>
  );
}
