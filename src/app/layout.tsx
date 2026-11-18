import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Bruno Sérgio — Portfólio",
    template: "%s · Bruno Sérgio",
  },
  description:
    "Desenvolvedor júnior em transição para TI. Backend (NestJS, Spring) e mobile (Flutter), com domínio em varejo de autopeças e produtos reais.",
  openGraph: {
    title: "Bruno Sérgio — Portfólio",
    description:
      "Backend, mobile e produtos usados na operação. Sistemas de Informação — IFAL Arapiraca.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
