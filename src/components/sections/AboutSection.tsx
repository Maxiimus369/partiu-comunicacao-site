"use client";

import { ArrowUpRight } from "lucide-react";
import { FadeContent } from "../animations/FadeContent";
import { ScrollReveal } from "../animations/ScrollReveal";
import { MediaSlot } from "../media/MediaSlot";
import { getMediaSlot } from "@/data/media-slots";
import { siteConfig } from "@/data/config";

export function AboutSection() {
  const portrait = getMediaSlot("IMG_MARCOS_RETRATO_01");
  const atWork = getMediaSlot("IMG_MARCOS_TRABALHO_01");

  return (
    <section id="sobre" className="relative scroll-mt-24 border-b border-white/5 bg-[#080808]/85 py-24 text-white sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/media/fundo%202%20aba.webp')" }}
      />
      <div className="relative z-10 mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
          <FadeContent>
            <div>
              <p className="section-kicker">Sobre Marcos</p>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/48">
                CMO externo de empresas que querem crescer de verdade e fundador da Partiu Comunicação.
              </p>
            </div>
          </FadeContent>
          <FadeContent delay={0.12} yOffset={24}>
            <h2 className="max-w-[18ch] font-heading text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Estratégia de negócio por trás da <span className="text-brand-red">comunicação.</span>
            </h2>
          </FadeContent>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <FadeContent delay={0.1}>
            <div className="grid grid-cols-[1fr_0.58fr] items-end gap-4">
              <MediaSlot
                media={portrait}
                showPlaceholder
                placeholderLabel="Adicionar retrato profissional"
                sizes="(max-width: 768px) 70vw, (max-width: 1024px) 60vw, 30vw"
                quality={92}
                className="aspect-[4/5] rounded-xl"
              />
              <MediaSlot
                media={atWork}
                showPlaceholder
                placeholderLabel="Adicionar registro em trabalho"
                sizes="(max-width: 768px) 45vw, (max-width: 1024px) 34vw, 18vw"
                quality={92}
                className="mb-7 aspect-[3/4] rounded-xl"
              />
            </div>
          </FadeContent>

          <div className="flex flex-col justify-between">
            <FadeContent delay={0.18} yOffset={24}>
              <p className="max-w-2xl text-lg leading-8 text-white/64 sm:text-xl sm:leading-9">
                Marcos Beltrã atua como CMO externo e fundador da Partiu Comunicação, conectando marketing, conteúdo e execução aos objetivos reais de cada empresa. Seu trabalho parte da análise do negócio para construir posicionamento, campanhas e comunicação que não ficam restritos ao feed.
              </p>
              <a
                href={siteConfig.instagram.marcos}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-white transition-colors hover:text-brand-red focus-visible:outline-none"
              >
                Acompanhar Marcos no Instagram
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </FadeContent>

            <div className="mt-16 border-l-2 border-brand-red pl-6 sm:pl-8">
              <div className="max-w-[24ch] font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
                <ScrollReveal text="A comunicação precisa ser criativa, mas também precisa contribuir para o crescimento." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
