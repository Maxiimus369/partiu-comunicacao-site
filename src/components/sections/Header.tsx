"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/config";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Magnet } from "../animations/Magnet";
import CircularText from "../animations/CircularText";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "border-white/10 bg-brand-black/90 py-3 backdrop-blur-xl"
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[86rem] items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="group flex items-center gap-3 rounded-sm focus-visible:outline-none">
          <span className="flex items-center justify-center">
            <CircularText
              text="MARCOS BELTRÃ "
              onHover="speedUp"
              spinDuration={20}
              className="text-xs text-white/90"
              radius={2}
            />
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {siteConfig.navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm font-medium text-white/60 transition-colors hover:text-white focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.instagram.partiu}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-sm text-xs font-semibold text-white/55 transition-colors hover:text-white focus-visible:outline-none"
          >
            <InstagramIcon className="h-4 w-4" />
            Instagram da Partiu
          </a>
          <Magnet>
            <a
              href={siteConfig.instagram.marcos}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-brand-red px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#e71616] focus-visible:outline-none"
            >
              Falar com Marcos
              <span aria-hidden="true">↗</span>
            </a>
          </Magnet>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 text-white transition-colors hover:border-white/25 lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div id="mobile-navigation" className="absolute left-0 right-0 top-full border-b border-white/10 bg-brand-black px-5 py-6 shadow-2xl lg:hidden">
          <nav aria-label="Navegação móvel" className="mx-auto flex max-w-[86rem] flex-col">
            {siteConfig.navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/5 py-3.5 font-heading text-lg font-semibold text-white/75 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={siteConfig.instagram.marcos}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-brand-red px-5 py-3.5 text-center text-sm font-bold text-white"
              >
                Falar com Marcos ↗
              </a>
              <a
                href={siteConfig.instagram.partiu}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-white/15 px-5 py-3.5 text-center text-sm font-bold text-white"
              >
                Instagram da Partiu ↗
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
