import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/config";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import CircularText from "../animations/CircularText";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent pb-8 pt-16 text-white/50">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="grid gap-12 pb-14 md:grid-cols-[1.15fr_0.65fr_0.7fr]">
          <div>
            <a href="#inicio" className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline-none">
              <span className="flex items-center justify-center">
                <CircularText
                  text="MARCOS BELTRÃ "
                  onHover="speedUp"
                  spinDuration={20}
                  className="text-xs text-white/90"
                  radius={2}
                />
              </span>
              <span className="font-heading text-lg font-bold text-white transition-colors group-hover:text-brand-red">
                Marcos Beltrã <span className="text-white/25">×</span> Partiu
              </span>
            </a>
            <p className="mt-6 max-w-md text-sm leading-6">
              Estratégia, tráfego e conteúdo conectados ao crescimento do negócio.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Navegação</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {siteConfig.navigation.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="rounded-sm transition-colors hover:text-brand-red focus-visible:outline-none">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Contato & Redes</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm text-white/70 transition-colors hover:text-[#25D366] focus-visible:outline-none"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  Conversar no WhatsApp
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram.marcos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-brand-red focus-visible:outline-none"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Marcos Beltrã
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram.partiu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-brand-red focus-visible:outline-none"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Partiu Comunicação
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>Marcos Beltrã & Partiu Comunicação.</p>
          <p>Marketing que aparece no faturamento, não só no feed.</p>
        </div>
      </div>
    </footer>
  );
}
