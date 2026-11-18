import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteHeader() {
  return (
    <header className="no-print absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.08em] text-fg uppercase"
        >
          {profile.shortName}
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted">
          <a href="#projetos" className="transition-colors hover:text-fg">
            Projetos
          </a>
          <a href="#trajetoria" className="transition-colors hover:text-fg">
            Trajetória
          </a>
          <Link
            href="/resume"
            className="border border-line px-3 py-1.5 text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Currículo
          </Link>
        </nav>
      </div>
    </header>
  );
}
