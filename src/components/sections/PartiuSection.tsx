"use client";

import { ArrowUpRight } from "lucide-react";
import { FadeContent } from "../animations/FadeContent";
import { MediaSlot } from "../media/MediaSlot";
import { getMediaSlot } from "@/data/media-slots";
import AccordionGallery from "../animations/AccordionGallery";
import { siteConfig } from "@/data/config";

export function PartiuSection() {
  const team = getMediaSlot("IMG_PARTIU_EQUIPE_01");

  const galleryItems = [
    { image: "/media/efeito1.webp" },
    { image: "/media/efeito2.webp" },
    { image: "/media/efeito3.webp" },
    { image: "/media/efeito4.webp" },
    { image: "/media/retrato1.webp" },
  ];

  return (
    <section className="border-b border-white/5 bg-transparent py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-12">
            <FadeContent>
              <p className="section-kicker">Partiu Comunicação</p>
              <h2 className="mt-6 font-heading text-4xl font-bold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-5xl xl:text-6xl">
                O setor de marketing que faltava na sua empresa.
              </h2>
              <p className="mt-7 text-base leading-7 text-white/58">
                A Partiu Comunicação atua dentro da realidade de cada negócio, unindo estratégia, tráfego, conteúdo e produção para criar uma presença consistente e orientada a objetivos comerciais.
              </p>
              <a
                href={siteConfig.instagram.partiu}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-white transition-colors hover:text-brand-red focus-visible:outline-none"
              >
                Ver a operação da Partiu
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </FadeContent>

            <div className="relative flex flex-col border-l border-white/5">
              {siteConfig.pillars.map((pillar, index) => (
                <FadeContent key={pillar.title} delay={index * 0.08} yOffset={16}>
                  <article className={`relative py-8 pl-8 sm:pl-10 ${index !== siteConfig.pillars.length - 1 ? 'border-b border-white/5' : ''}`}>
                    <div className="absolute -left-[4.5px] top-[2.4rem] h-2 w-2 rounded-full bg-brand-red" />
                    <div className="flex gap-4 sm:gap-6 items-start">
                      <span className="text-sm font-bold text-brand-red pt-[2px]">{pillar.number}</span>
                      <div>
                        <p className="font-heading text-lg font-bold text-white">{pillar.title}</p>
                        <p className="mt-2 text-sm leading-6 text-white/48">{pillar.description}</p>
                      </div>
                    </div>
                  </article>
                </FadeContent>
              ))}
            </div>
          </div>

          <FadeContent delay={0.15} yOffset={24}>
            <div className="flex flex-col gap-4">
              <MediaSlot
                media={team}
                showPlaceholder
                placeholderLabel="Adicionar equipe ou bastidores"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
                quality={92}
                className="aspect-[4/3] w-full rounded-xl"
              />
              <div className="w-full rounded-xl overflow-hidden">
                <AccordionGallery 
                  items={galleryItems}
                  defaultIndex={2}
                  expandRatio={0.52}
                  trigger="hover"
                  accentColor="#ffffff"
                  overlayColor="#060010"
                  textColor="#ffffff"
                  grayscale
                  showLabels
                  duration={0.6}
                  ease="power3.out"
                  parallax={0.5}
                  tilt={8}
                  stagger={0.06}
                  height={320}
                  gap={10}
                  radius={16}
                  orientation="horizontal"
                />
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
