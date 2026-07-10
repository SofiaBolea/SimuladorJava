import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simulador de Eventos Discretos",
  description: "Plataforma interactiva web orientada a explicar un Simulador de Eventos Discretos en Java",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            {children}
          </div>
          <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>Plataforma Interactiva - Simulador de Eventos Discretos</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
