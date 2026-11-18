import { profile } from "@/data/profile";

export function Contact() {
  const email = profile.links.email;
  const linkedin = profile.links.linkedin;

  return (
    <section id="contato" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-accent uppercase">
          Contato
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
          Tem uma vaga de backend ou mobile?
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Me chama por e-mail ou LinkedIn. Respondo com currículo, links dos
          repos e o que eu construí em cada um.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {email ? (
            <a
              href={`mailto:${email}?subject=Vaga%20/%20oportunidade%20-%20Bruno%20Sergio`}
              className="bg-accent px-5 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              Escrever no e-mail
            </a>
          ) : null}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Ver GitHub
          </a>
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
