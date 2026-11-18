import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="no-print">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © 2026 {profile.name}
        </p>
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-wide">
          Portfólio · Next.js
        </p>
      </div>
    </footer>
  );
}
