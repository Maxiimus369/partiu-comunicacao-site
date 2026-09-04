import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Marcos Beltrã & Partiu Comunicação | Estratégia, Conteúdo e Performance",
  description:
    "Portfólio de Marcos Beltrã e da Partiu Comunicação: estratégia de marketing, tráfego, conteúdo, fotografia e produção audiovisual para empresas que querem crescer.",
  openGraph: {
    title: "Marcos Beltrã & Partiu Comunicação | Estratégia, Conteúdo e Performance",
    description:
      "Estratégia de marketing, tráfego, conteúdo, fotografia e produção audiovisual conectados ao crescimento do negócio.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcos Beltrã & Partiu Comunicação",
    description: "Marketing que aparece no faturamento, não só no feed.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-brand-black text-brand-white selection:bg-brand-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
