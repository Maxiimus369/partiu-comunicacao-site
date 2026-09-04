"use client";

import { siteConfig } from "@/data/config";
import { FadeContent } from "../animations/FadeContent";

export function ProcessSection() {
  return (
    <section id="metodo" className="scroll-mt-24 border-b border-white/5 bg-transparent py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div>
          <FadeContent>
            <div>
              <p className="section-kicker">Método</p>
              <h2 className="mt-6 max-w-[16ch] font-heading text-4xl font-bold leading-[1.03] tracking-[-0.04em] sm:text-6xl">
                Marketing dentro da realidade do <span className="text-brand-red">negócio.</span>
              </h2>
            </div>
          </FadeContent>
        </div>

        <ol className="relative mt-16 border-l border-white/10 md:grid md:grid-cols-5 md:border-l-0 md:border-t">
          {siteConfig.process.map((step, index) => (
            <FadeContent key={step.title} delay={index * 0.08} yOffset={18}>
              <li className="relative pb-10 pl-10 last:pb-0 md:pb-0 md:pl-0 md:pr-6 md:pt-10">
                <span className="absolute -left-[0.45rem] top-1 h-3.5 w-3.5 rounded-full border-4 border-[#090909] bg-brand-red shadow-[0_0_0_1px_rgba(255,26,26,0.4)] md:-top-[0.45rem] md:left-0" />
                <span className="text-xs font-bold text-brand-red">{step.number}</span>
                <h3 className="mt-4 font-heading text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/48">{step.description}</p>
              </li>
            </FadeContent>
          ))}
        </ol>
      </div>
    </section>
  );
}
