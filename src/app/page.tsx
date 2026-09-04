import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PartiuSection } from "@/components/sections/PartiuSection";

import { CasesSection } from "@/components/sections/CasesSection";

import { ProcessSection } from "@/components/sections/ProcessSection";

import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import Grainient from "@/components/animations/Grainient";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Grainient
          color1="#dc6f24"
          color2="#000000"
          color3="#525151"
          timeSpeed={0.4}
          colorBalance={-0.29}
          warpStrength={1.5}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={1.4}
        />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <MarqueeSection />
          <AboutSection />
          <PartiuSection />

          <CasesSection />

          <ProcessSection />

          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
