"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Images, X } from "lucide-react";
import { galleryCategories } from "@/data/portfolio";
import { isMediaReady, mediaSlots, type MediaSlot as MediaSlotData } from "@/data/media-slots";
import { siteConfig } from "@/data/config";
import { FadeContent } from "../animations/FadeContent";
import { GlareHover } from "../animations/GlareHover";
import { MediaSlot } from "../media/MediaSlot";

type GalleryCategory = (typeof galleryCategories)[number];

const categoryCycle: Exclude<GalleryCategory, "Todos">[] = [
  "Estratégia",
  "Bastidores",
  "Fotografia esportiva",
  "Campanhas",
  "Reels",
  "Eventos",
  "Clientes",
];

function getCategory(media: MediaSlotData, index: number): Exclude<GalleryCategory, "Todos"> {
  if (media.slot.startsWith("VIDEO_VERTICAL") || media.slot.startsWith("IMG_REEL_POSTER")) return "Reels";
  if (media.slot.startsWith("VIDEO_HORIZONTAL")) return "Campanhas";
  return categoryCycle[index % categoryCycle.length];
}

function GalleryDialog({ media, onClose }: { media: MediaSlotData | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (media && !dialog.open) dialog.showModal();
    if (!media && dialog.open) dialog.close();
  }, [media]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-label={media?.alt || "Visualização da mídia"}
      className="m-auto w-[min(92vw,68rem)] max-w-none rounded-xl border border-white/15 bg-[#090909] p-0 text-white shadow-2xl backdrop:bg-black/80"
    >
      {media ? (
        <div className="relative p-3 sm:p-5">
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white hover:bg-brand-red focus-visible:outline-none"
            aria-label="Fechar visualização"
          >
            <X className="h-5 w-5" />
          </button>
          <MediaSlot
            media={media}
            controls={media.type === "video"}
            sizes="92vw"
            className={`${media.height > media.width ? "mx-auto aspect-[9/16] max-h-[82vh] w-auto" : "aspect-video w-full"} rounded-lg`}
          />
          {media.caption ? <p className="px-2 pb-1 pt-4 text-sm text-white/60">{media.caption}</p> : null}
        </div>
      ) : null}
    </dialog>
  );
}

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("Todos");
  const [selectedMedia, setSelectedMedia] = useState<MediaSlotData | null>(null);
  const isDevelopment = process.env.NODE_ENV === "development";

  const entries = useMemo(() => {
    const eligible = mediaSlots.filter(
      (media) =>
        media.slot.startsWith("IMG_GALLERY") ||
        media.slot.startsWith("VIDEO_VERTICAL") ||
        media.slot.startsWith("VIDEO_HORIZONTAL") ||
        media.slot.startsWith("IMG_REEL_POSTER"),
    );
    const ready = eligible.filter(isMediaReady);
    const visible = ready.length > 0 ? ready : isDevelopment ? eligible.slice(0, 6) : [];

    return visible.map((media) => ({
      media,
      category: getCategory(media, eligible.indexOf(media)),
    }));
  }, [isDevelopment]);

  const filteredEntries = entries.filter(
    (entry) => activeCategory === "Todos" || entry.category === activeCategory,
  );

  return (
    <section id="galeria" className="border-b border-white/5 bg-transparent py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <FadeContent>
            <div>
              <p className="section-kicker">Galeria</p>
              <h2 className="mt-6 max-w-[16ch] font-heading text-4xl font-bold leading-[1.03] tracking-[-0.04em] sm:text-6xl">
                Trabalhos em imagem e <span className="text-brand-red">movimento.</span>
              </h2>
            </div>
          </FadeContent>
          <FadeContent delay={0.1}>
            <p className="max-w-xl text-base leading-7 text-white/52 lg:ml-auto">
              Fotografia, campanhas, Reels, eventos e bastidores organizados para crescer junto com o acervo.
            </p>
          </FadeContent>
        </div>

        <FadeContent delay={0.08}>
          <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filtrar galeria por categoria">
            {galleryCategories.map((category) => {
              const active = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors focus-visible:outline-none ${
                    active
                      ? "border-brand-red bg-brand-red text-white"
                      : "border-white/10 text-white/50 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </FadeContent>

        {filteredEntries.length > 0 ? (
          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {filteredEntries.map(({ media, category }, index) => {
              const vertical = media.height > media.width;
              const ready = isMediaReady(media);
              return (
                <FadeContent key={media.slot} delay={index * 0.04} yOffset={16}>
                  <GlareHover className="rounded-lg">
                    <button
                      type="button"
                      disabled={!ready}
                      onClick={() => ready && setSelectedMedia(media)}
                      className="group block w-full rounded-lg text-left disabled:cursor-default focus-visible:outline-none"
                      aria-label={ready ? `Abrir ${media.alt}` : `${media.alt} — aguardando mídia`}
                    >
                      <MediaSlot
                        media={media}
                        placeholderLabel="Slot pronto para receber mídia"
                        className={`${vertical ? "aspect-[4/5]" : "aspect-video"} rounded-lg`}
                        sizes="(max-width: 768px) 48vw, 24vw"
                      />
                      <div className="flex items-center justify-between gap-2 px-1 pt-3">
                        <span className="text-xs font-semibold text-white/55">{category}</span>
                        <span className="text-[0.62rem] font-bold uppercase tracking-wider text-brand-red">
                          {media.type === "video" ? "Vídeo" : "Foto"}
                        </span>
                      </div>
                    </button>
                  </GlareHover>
                </FadeContent>
              );
            })}
          </div>
        ) : (
          <FadeContent delay={0.1}>
            <div className="mt-10 flex min-h-[18rem] flex-col items-center justify-center rounded-xl border border-dashed border-white/12 bg-white/[0.018] px-6 text-center">
              <Images className="h-8 w-8 text-brand-red" />
              <h3 className="mt-5 font-heading text-2xl font-bold">Galeria em curadoria</h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/48">
                As mídias serão publicadas aqui depois da confirmação de autoria, crédito e autorização — sem links temporários ou imagens quebradas.
              </p>
              <a
                href={siteConfig.instagram.partiu}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-white hover:text-brand-red focus-visible:outline-none"
              >
                Ver o acervo atual no Instagram
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </FadeContent>
        )}
      </div>

      <GalleryDialog media={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </section>
  );
}
