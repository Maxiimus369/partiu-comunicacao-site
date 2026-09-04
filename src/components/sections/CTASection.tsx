"use client";

import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/config";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { FadeContent } from "../animations/FadeContent";
import { Magnet } from "../animations/Magnet";
import { InteractiveVideoCTA } from "./InteractiveVideoCTA";

const contactCards = [
  {
    eyebrow: "Estratégia",
    title: "Fale com Marcos",
    text: "Converse sobre estratégia, posicionamento e os próximos passos do seu negócio.",
    label: "Abrir Instagram de Marcos",
    href: siteConfig.instagram.marcos,
  },
  {
    eyebrow: "Operação",
    title: "Conheça a Partiu Comunicação",
    text: "Veja projetos, conteúdos, clientes e bastidores da agência.",
    label: "Abrir Instagram da Partiu",
    href: siteConfig.instagram.partiu,
  },
] as const;

export function CTASection() {
  return (
    <section id="contato" className="scroll-mt-24 bg-transparent py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <FadeContent>
          <div className="mb-12">
            <p className="section-kicker">Contato</p>
            <h2 className="mt-6 max-w-[16ch] font-heading text-4xl font-bold leading-[1.03] tracking-[-0.04em] sm:text-6xl">
              Vamos falar sobre o próximo passo do seu negócio.
            </h2>
          </div>
        </FadeContent>

        <div className="grid gap-4 md:grid-cols-2">
          {contactCards.map((card, index) => (
            <FadeContent key={card.href} delay={index * 0.08} yOffset={20}>
              <article className="group flex min-h-[20rem] flex-col rounded-xl border border-white/10 bg-[#0e0e0e] p-7 transition-colors hover:border-white/20 sm:p-9">
                <div className="flex items-center justify-between">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand-red">{card.eyebrow}</p>
                  <InstagramIcon className="h-5 w-5 text-white/25 transition-colors group-hover:text-brand-red" />
                </div>
                <div className="mt-auto pt-16">
                  <h3 className="font-heading text-3xl font-bold">{card.title}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-white/52">{card.text}</p>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-white transition-colors hover:text-brand-red focus-visible:outline-none"
                  >
                    {card.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </FadeContent>
          ))}
        </div>

        <FadeContent delay={0.1} yOffset={24}>
          <InteractiveVideoCTA />
        </FadeContent>
      </div>
    </section>
  );
}
