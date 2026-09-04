"use client";

import { ArrowUpRight, Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { siteConfig } from "@/data/config";
import { FadeContent } from "../animations/FadeContent";

export function TestimonialsSection() {
  const approvedTestimonials = testimonials.filter(
    (testimonial) => testimonial.authorizationConfirmed && testimonial.text,
  );

  return (
    <section className="border-b border-white/5 bg-transparent py-24 text-white sm:py-28">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <FadeContent>
          <div className="grid overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] lg:grid-cols-[0.75fr_1.25fr]">
            <div className="flex min-h-[18rem] flex-col justify-between bg-brand-red p-7 sm:p-10">
              <Quote className="h-10 w-10 text-white/45" />
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/65">Depoimentos</p>
                <p className="mt-4 max-w-[16ch] font-heading text-3xl font-bold leading-tight sm:text-4xl">
                  Confiança também precisa de prova.
                </p>
              </div>
            </div>

            <div className="flex min-h-[18rem] flex-col justify-center p-7 sm:p-10 lg:p-14">
              {approvedTestimonials.length > 0 ? (
                approvedTestimonials.map((testimonial) => (
                  <blockquote key={testimonial.id}>
                    <p className="text-lg leading-8 text-white/72">“{testimonial.text}”</p>
                    <footer className="mt-6 text-sm text-white/45">
                      {testimonial.name} · {testimonial.company}
                    </footer>
                  </blockquote>
                ))
              ) : (
                <>
                  <h2 className="font-heading text-2xl font-bold sm:text-3xl">Relatos em curadoria.</h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/52">
                    Esta seção recebe apenas depoimentos com autoria, contexto e autorização confirmados. Enquanto a seleção é validada, os trabalhos e bastidores continuam disponíveis no Instagram da Partiu.
                  </p>
                  <a
                    href={siteConfig.instagram.partiu}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-max items-center gap-2 rounded-sm text-sm font-bold text-white transition-colors hover:text-brand-red focus-visible:outline-none"
                  >
                    Acompanhar a Partiu
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </>
              )}
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
