import Link from "next/link";
import { profile } from "@/data/profile";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, #071214 0%, #071214 42%, transparent 72%), radial-gradient(ellipse 80% 70% at 78% 45%, var(--hero-glow), transparent 55%), linear-gradient(160deg, #071214 0%, #0a1a1f 50%, #071214 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,240,236,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(232,240,236,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="pointer-events-none absolute inset-y-0 right-0 w-full max-w-3xl opacity-90 md:w-[58%]">
        <HeroVisual />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-end px-6 pb-16 pt-28 md:items-center md:px-8 md:pb-24 md:pt-24">
        <div className="max-w-xl">
          <h1 className="animate-rise font-[family-name:var(--font-display)] text-5xl leading-[0.95] font-bold tracking-tight text-fg sm:text-6xl md:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <div className="animate-draw mt-5 h-px w-24 bg-accent" />
          <p className="animate-rise-delay-1 mt-6 text-xl leading-snug text-fg md:text-2xl">
            {profile.headline}
          </p>
          <p className="animate-rise-delay-2 mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Código em NestJS, Spring e Flutter. O Meu Copiloto roda na loja de
            autopeças onde eu trabalho.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="bg-accent px-5 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              Ver o que eu construí
            </a>
            <Link
              href="/resume"
              className="border border-line bg-bg/50 px-5 py-3 text-sm font-medium text-fg backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              Currículo em PDF
            </Link>
            {profile.links.github ? (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-sm font-medium text-muted transition-colors hover:text-fg"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
