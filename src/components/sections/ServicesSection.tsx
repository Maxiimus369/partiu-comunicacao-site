"use client";

import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/config";
import { FadeContent } from "../animations/FadeContent";
import { SpotlightCard } from "../animations/SpotlightCard";

export function ServicesSection() {
  return (
    <section id="servicos" className="scroll-mt-24 border-b border-white/5 bg-transparent py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <FadeContent>
            <div>
              <p className="section-kicker">Serviços</p>
              <h2 className="mt-6 max-w-[15ch] font-heading text-4xl font-bold leading-[1.03] tracking-[-0.04em] sm:text-6xl">
                Estratégia, tráfego e conteúdo conectados ao <span className="text-brand-red">crescimento.</span>
              </h2>
            </div>
          </FadeContent>
          <FadeContent delay={0.12}>
            <p className="max-w-xl text-base leading-7 text-white/52 lg:ml-auto">
              Marcos define a direção. A Partiu conecta planejamento e execução para a comunicação avançar junto com o negócio.
            </p>
          </FadeContent>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.services.map((service, index) => (
            <FadeContent key={service.id} delay={index * 0.07} yOffset={22} className="h-full">
              <SpotlightCard className="group flex h-full min-h-[21rem] flex-col border-white/10 bg-[#0e0e0e] p-7 sm:p-8">
                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-heading text-sm font-bold text-brand-red">{service.number}</span>
                  <ArrowUpRight className="h-5 w-5 text-white/25 transition-colors group-hover:text-brand-red" />
                </div>
                <div className="relative z-10 mt-auto pt-16">
                  <h3 className="max-w-[18ch] font-heading text-2xl font-bold leading-tight sm:text-[1.7rem]">{service.title}</h3>
                  <p className="mt-5 text-sm leading-6 text-white/52">{service.description}</p>
                </div>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>

        <FadeContent delay={0.15}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-xl border border-white/10 bg-white/[0.025] p-6 sm:flex-row sm:items-center sm:p-8">
            <p className="font-heading text-xl font-bold">Precisa combinar estratégia e operação?</p>
            <a
              href={siteConfig.instagram.marcos}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm text-sm font-bold text-white transition-colors hover:text-brand-red focus-visible:outline-none"
            >
              Conversar sobre o momento da empresa
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
