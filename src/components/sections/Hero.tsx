"use client";

import { ArrowDown, Crosshair, TrendingUp } from "lucide-react";
import { FadeContent } from "../animations/FadeContent";
import { SplitText } from "../animations/SplitText";
import { Magnet } from "../animations/Magnet";
import { DarkVeil } from "../animations/DarkVeil";
import TrueFocus from "../animations/TrueFocus";
import { MediaSlot } from "../media/MediaSlot";
import { getMediaSlot, isMediaReady } from "@/data/media-slots";
import { siteConfig } from "@/data/config";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export function Hero() {
  const heroVideo = getMediaSlot("VIDEO_HERO_01");
  const heroPoster = getMediaSlot("VIDEO_HERO_POSTER_01");
  const heroImage = getMediaSlot("IMG_HERO_FALLBACK_01");
  const hasVideo = isMediaReady(heroVideo);
  const heroMedia = hasVideo
    ? { ...heroVideo, poster: isMediaReady(heroPoster) ? heroPoster.src : heroVideo.poster }
    : heroImage;

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#080808] pt-20"
    >
      {/* Background (z-0) */}
      {/* Removed DarkVeil temporarily for preview */}
      
      {/* Background glow simulating the orange theme from the print (z-0) */}
      {/* Removed temporarily for preview */}
      {/* Crosshairs in corners (from print) (z-10) */}
      <div className="pointer-events-none absolute z-10 left-10 top-32 text-white/20 text-xl font-light leading-none">+</div>
      <div className="pointer-events-none absolute z-10 left-10 bottom-16 text-white/20 text-xl font-light leading-none">+</div>
      <div className="pointer-events-none absolute z-10 right-10 top-32 text-white/20 text-xl font-light leading-none hidden lg:block">+</div>
      <div className="pointer-events-none absolute z-10 right-10 bottom-16 text-white/20 text-xl font-light leading-none hidden lg:block">+</div>

      {/* Right Image taking up the space (z-10) */}
      <div className="absolute right-0 top-0 h-full w-[95%] sm:w-[85%] lg:w-[65%] z-10 opacity-75 lg:opacity-90 [mask-image:linear-gradient(to_right,transparent,black_40%,black_100%)] lg:[mask-image:linear-gradient(to_right,transparent,black_30%,black_100%)]">
        <MediaSlot
          media={heroMedia}
          priority
          autoPlay={hasVideo}
          showPlaceholder
          placeholderLabel={hasVideo ? "Adicionar vídeo principal" : "Adicionar foto ou vídeo principal"}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 95vw, 65vw"
          quality={85}
          className="h-full w-full !bg-transparent"
          imgClassName="object-cover object-[65%_center] lg:object-center"
        />
      </div>

      {/* Overlay to darken bottom for text if needed (z-20) */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent lg:bg-gradient-to-t lg:from-[#080808] lg:via-transparent lg:to-transparent" />

      {/* Content (z-30) */}
      <div className="relative z-30 mx-auto grid w-full max-w-[90rem] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.35fr_0.65fr]">
        
        {/* Left Side: Text and Buttons */}
        <div className="max-w-3xl pt-20 pb-20">
          <FadeContent yOffset={12} delay={0.05}>
            <div className="mb-6 flex items-start sm:items-center gap-3 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-brand-red sm:text-xs sm:tracking-[0.24em]">
              <span className="mt-2 sm:mt-0 h-px w-6 sm:w-8 bg-brand-red shrink-0" aria-hidden="true" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span>Marcos Beltrã</span>
                <span className="text-white/25 hidden sm:block">•</span>
                <span>Partiu Comunicação</span>
              </div>
            </div>
          </FadeContent>

          <h1 className="max-w-[60%] sm:max-w-[65%] lg:max-w-[14ch] font-heading text-3xl sm:text-4xl lg:text-[clamp(3rem,7.8vw,6.5rem)] font-bold leading-[1.05] lg:leading-[0.95] tracking-[-0.04em] text-white/95">
            <TrueFocus
              sentence="Marketing que aparece no faturamento, não só no feed."
              manualMode={false}
              blurAmount={4.5}
              borderColor="#df3f21"
              glowColor="rgba(223, 63, 33, 0.6)"
              animationDuration={0.5}
              pauseBetweenAnimations={0.1}
            />
          </h1>

          <FadeContent delay={0.55} yOffset={20}>
            <p className="mt-5 sm:mt-6 max-w-[65%] sm:max-w-[75%] lg:max-w-xl text-[0.8rem] sm:text-sm lg:text-lg leading-[1.6] sm:leading-6 lg:leading-8 text-white/70">
              Estratégia, tráfego, conteúdo e produção audiovisual para empresas que querem crescer com direção, consistência e presença.
            </p>
          </FadeContent>

          <FadeContent delay={0.68} yOffset={20}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Magnet>
                <a
                  href="#portfolio"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-105 sm:w-auto"
                >
                  Conhecer os projetos
                </a>
              </Magnet>
            </div>
          </FadeContent>
        </div>


        
      </div>
    </section>
  );
}
