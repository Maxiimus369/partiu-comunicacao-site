"use client";

import { ScrollVelocity } from "../animations/ScrollVelocity";

export function MarqueeSection() {
  return (
    <section className="py-12 bg-transparent text-white overflow-hidden">
      <ScrollVelocity
        text="ESTRATÉGIA • SOCIAL MEDIA • TRÁFEGO PAGO • PRODUÇÃO AUDIOVISUAL • IA CRIATIVA • COPYWRITING •"
        baseVelocity={2}
        className="text-4xl md:text-5xl font-heading font-black tracking-wider opacity-90"
      />
    </section>
  );
}
