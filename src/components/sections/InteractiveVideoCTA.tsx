"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, RotateCcw, Volume2, VolumeX, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/config";
import { Magnet } from "../animations/Magnet";

export function InteractiveVideoCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const delayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [hasStarted, setHasStarted] = useState(false);
  const [showBalloon, setShowBalloon] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const hasTriggeredRef = useRef(false);

  // Inicia o vídeo SOMENTE quando o usuário rolar até o final da página (apenas 1 vez)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const playVideoOnce = () => {
      if (hasTriggeredRef.current || !videoRef.current) return;
      hasTriggeredRef.current = true;
      setHasStarted(true);

      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Só dispara se o usuário realmente navegou e o bloco entrou no campo de visão (pelo menos 40% visível)
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.35 &&
          !hasTriggeredRef.current
        ) {
          // Garante que não dispare no topo da página por atraso de renderização
          if (window.scrollY > 150) {
            playVideoOnce();
            observer.disconnect();
          } else {
            // Se estiver no topo, escuta o primeiro scroll antes de dar play
            const onScroll = () => {
              if (window.scrollY > 150 && !hasTriggeredRef.current) {
                window.removeEventListener("scroll", onScroll);
                playVideoOnce();
                observer.disconnect();
              }
            };
            window.addEventListener("scroll", onScroll, { passive: true });
          }
        }
      },
      {
        threshold: [0.35, 0.5],
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Limpa o timer de 2 segundos caso o componente desmonte
  useEffect(() => {
    return () => {
      if (delayTimerRef.current) {
        clearTimeout(delayTimerRef.current);
      }
    };
  }, []);

  const handleVideoEnded = () => {
    // Aguarda exatamente 2 segundos após o término do vídeo para exibir o balão
    if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
    delayTimerRef.current = setTimeout(() => {
      setShowBalloon(true);
    }, 2000);
  };

  const handleReplay = () => {
    if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
    setShowBalloon(false);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleSkip = () => {
    if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowBalloon(true);
  };

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mt-10 w-full max-w-4xl bg-transparent"
    >
      {/* Container proporcional ao vídeo (16:9), sem nenhuma borda dura */}
      <div className="relative aspect-[16/9] min-h-[380px] w-full overflow-hidden rounded-3xl bg-transparent sm:min-h-[440px]">
        {/* Vídeo com visibilidade alta (100%) e bordas esfumaçadas que se fundem à página */}
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 86% at 50% 50%, black 45%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.3) 85%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 90% 86% at 50% 50%, black 45%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.3) 85%, transparent 100%)",
          }}
        >
          <video
            ref={videoRef}
            src="/media/video%20p%C3%A1gina.mp4"
            playsInline
            muted={isMuted}
            preload="metadata"
            onTimeUpdate={(e) => {
              const v = e.currentTarget;
              if (v.duration) {
                setProgress((v.currentTime / v.duration) * 100);
              }
            }}
            onEnded={handleVideoEnded}
            className="h-full w-full object-cover opacity-100 transition-all duration-700"
          />
        </div>

        {/* Barra de progresso sutil centralizada na parte inferior */}
        {!showBalloon && (
          <div className="absolute inset-x-8 bottom-3 z-20 mx-auto max-w-md h-1 overflow-hidden rounded-full bg-white/10 backdrop-blur-sm">
            <div
              className="h-full bg-brand-red transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Controles discretos durante a reprodução */}
        {!showBalloon && (
          <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4 sm:p-6">
            <div className="flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-md border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
              Apresentação
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleSound}
                className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white/85 backdrop-blur-md border border-white/10 transition hover:bg-black/75 hover:text-white"
                title={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="h-3.5 w-3.5 text-brand-red" />
                    <span className="hidden sm:inline">Ativar som</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="h-3.5 w-3.5 text-green-400" />
                    <span className="hidden sm:inline">Com som</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleSkip}
                className="rounded-full bg-black/35 px-3 py-1.5 text-xs font-medium text-white/60 backdrop-blur-md border border-white/10 transition hover:bg-black/60 hover:text-white"
              >
                Pular
              </button>
            </div>
          </div>
        )}

        {/* Balão com as informações (mede a mesma proporção exata do vídeo) */}
        <AnimatePresence>
          {showBalloon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-0 z-30 flex h-full w-full flex-col items-center justify-center rounded-3xl bg-brand-red p-6 text-center text-white shadow-[0_0_90px_rgba(223,63,33,0.4)] sm:p-12 md:p-16"
            >
              {/* Textura sutil do balão */}
              <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_28%),radial-gradient(circle_at_80%_70%,black_0,transparent_32%)]" />

              <div className="relative z-10 flex max-w-2xl flex-col items-center">
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white">
                  <Sparkles className="h-3 w-3" />
                  Próximo Passo
                </div>

                <h2 className="font-heading text-2xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-4xl md:text-5xl">
                  Sua empresa precisa de mais do que presença. Precisa de direção.
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
                  Vamos transformar objetivos comerciais em estratégia, conteúdo e ação.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <Magnet>
                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-sm bg-white px-7 py-3.5 text-sm font-bold text-brand-red shadow-xl transition-transform hover:scale-105 hover:bg-[#f3f3f0] focus-visible:outline-none"
                    >
                      Começar uma conversa
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Magnet>

                  <button
                    type="button"
                    onClick={handleReplay}
                    className="inline-flex items-center gap-2 rounded-sm border border-white/25 bg-black/20 px-4 py-3.5 text-xs font-semibold text-white/90 backdrop-blur-sm transition-colors hover:bg-black/35 hover:text-white focus-visible:outline-none"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Rever vídeo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
