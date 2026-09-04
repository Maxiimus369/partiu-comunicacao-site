"use client";

import Image from "next/image";
import { ImageIcon, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { isMediaReady, type MediaSlot as MediaSlotData } from "@/data/media-slots";

interface MediaSlotProps {
  media: MediaSlotData;
  className?: string;
  sizes?: string;
  priority?: boolean;
  showPlaceholder?: boolean;
  placeholderLabel?: string;
  autoPlay?: boolean;
  controls?: boolean;
  imgClassName?: string;
  quality?: number;
}

function ViewportVideo({
  media,
  autoPlay,
  controls,
  imgClassName = "object-cover",
}: {
  media: MediaSlotData;
  autoPlay: boolean;
  controls: boolean;
  imgClassName?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlay) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [autoPlay]);

  return (
    <video
      ref={videoRef}
      className={`h-full w-full ${imgClassName}`}
      muted={autoPlay}
      loop={autoPlay}
      playsInline
      controls={controls}
      preload={autoPlay ? "metadata" : "none"}
      poster={media.poster || undefined}
      aria-label={media.alt}
    >
      {media.mobileSrc ? (
        <>
          <source src={media.mobileSrc} type="video/mp4" media="(max-width: 767px)" />
          <source src={media.src} type="video/mp4" />
        </>
      ) : (
        <source src={media.src} type="video/mp4" />
      )}
      Seu navegador não oferece suporte a vídeo HTML5.
    </video>
  );
}

export function MediaSlot({
  media,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  showPlaceholder = false,
  placeholderLabel = "Mídia em curadoria",
  autoPlay = false,
  controls = false,
  imgClassName = "object-cover",
  quality = 75,
}: MediaSlotProps) {
  const ready = isMediaReady(media);
  const isDevelopment = process.env.NODE_ENV === "development";

  if (!ready && !showPlaceholder && !isDevelopment) return null;

  return (
    <div
      className={`relative overflow-hidden bg-[#0e0e0e] ${className}`}
      data-media-slot={media.slot}
      data-media-status={ready ? "ready" : media.authorizationStatus}
    >
      {ready && media.type === "image" ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={imgClassName}
          quality={quality}
        />
      ) : null}

      {ready && media.type === "video" ? (
        <ViewportVideo media={media} autoPlay={autoPlay} controls={controls} imgClassName={imgClassName} />
      ) : null}

      {!ready ? (
        <div className="absolute inset-0 isolate flex items-end border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.035),transparent_45%,rgba(255,26,26,0.07))] p-5">
          <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:36px_36px]" />
          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/55">
            {media.type === "video" ? <Play className="h-4 w-4" /> : <ImageIcon className="h-4 w-4" />}
          </div>
          <div>
            <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand-red">
              {media.type === "video" ? "Vídeo" : "Imagem"}
            </p>
            <p className="max-w-[18rem] text-sm font-medium text-white/75">{placeholderLabel}</p>
            {isDevelopment ? (
              <code className="mt-2 block text-[0.65rem] text-white/35">[{media.slot}]</code>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
