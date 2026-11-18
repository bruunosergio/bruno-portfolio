import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import {
  education,
  experience,
  profile,
  projects,
  stackGroups,
} from "@/data/profile";

export const metadata: Metadata = {
  title: "Currículo",
  description: `Currículo de ${profile.name} — desenvolvedor júnior backend/mobile.`,
};

export default function ResumePage() {
  const contactBits: string[] = [profile.location];
  if (profile.links.email) contactBits.push(profile.links.email);
  contactBits.push(profile.links.github.replace("https://", ""));
  if (profile.links.linkedin) {
    contactBits.push(profile.links.linkedin.replace("https://", ""));
  }

  return (
    <div className="min-h-full bg-bg text-fg">
      <div className="no-print mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="text-sm text-muted transition-colors hover:text-fg">
          ← Portfólio
        </Link>
        <PrintButton />
      </div>

      <article className="mx-auto max-w-3xl px-6 pb-16 print:max-w-none print:px-0 print:pb-0">
        <header className="border-b border-line pb-6 print-break">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-muted">{profile.headline}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted print:text-fg">
            {profile.summary}
          </p>
          <p className="mt-4 font-[family-name:var(--font-mono)] text-xs leading-relaxed text-muted">
            {contactBits.join(" · ")}
          </p>
        </header>

        <section className="mt-8 print-break">
          <h2 className="font-[family-name:var(--font-mono)] text-xs tracking-[0.18em] text-accent uppercase">
            Projetos
          </h2>
          <ul className="mt-4 space-y-5">
            {projects.map((project) => (
              <li key={project.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <span className="text-xs text-muted">{project.role}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted print:text-fg">
                  {project.blurb}
                </p>
                <p className="mt-2 font-[family-name:var(--font-mono)] text-[11px] text-muted">
                  {project.stack.join(" · ")}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted print:text-fg">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 print-break">
          <h2 className="font-[family-name:var(--font-mono)] text-xs tracking-[0.18em] text-accent uppercase">
            Experiência
          </h2>
          <ul className="mt-4 space-y-4">
            {experience.map((item) => (
              <li key={item.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <span className="text-xs text-muted">{item.period}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted print:text-fg">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 print-break">
          <h2 className="font-[family-name:var(--font-mono)] text-xs tracking-[0.18em] text-accent uppercase">
            Formação
          </h2>
          <ul className="mt-4 space-y-4">
            {education.map((item) => (
              <li key={item.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <span className="text-xs text-muted">{item.period}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted print:text-fg">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 print-break">
          <h2 className="font-[family-name:var(--font-mono)] text-xs tracking-[0.18em] text-accent uppercase">
            Competências
          </h2>
          <ul className="mt-4 space-y-2">
            {stackGroups.map((group) => (
              <li key={group.title} className="text-sm">
                <span className="font-medium text-fg">{group.title}: </span>
                <span className="text-muted print:text-fg">
                  {group.items.join(", ")}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
