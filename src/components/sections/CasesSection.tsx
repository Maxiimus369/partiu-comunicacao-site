"use client";


import { FadeContent } from "../animations/FadeContent";
import DriftWall from "../animations/DriftWall";

export function CasesSection() {
  return (
    <section id="portfolio" className="scroll-mt-24 border-b border-white/5 bg-transparent py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div>
          <FadeContent>
            <div>
              <p className="section-kicker">Portfólio</p>
              <h2 className="mt-6 font-heading text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Estratégia colocada em <span className="text-brand-red">movimento.</span>
              </h2>
            </div>
          </FadeContent>
        </div>
      </div>

      <FadeContent delay={0.12}>
        <div className="mt-12 h-[600px] w-full overflow-hidden border-y border-white/10">
          <DriftWall
            columns={7}
            overlayColor="rgba(10, 10, 10, 0.4)"
            dim={0.85}
            fade={0.35}
            speed={30}
            turn={0}
            tilt={10}
          />
        </div>
      </FadeContent>


    </section>
  );
}
