import { projects } from "@/data/profile";

export function Projects() {
  return (
    <section id="projetos" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-accent uppercase">
          Projetos
        </p>
        <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
          Produto na loja, SaaS de clínica, Java e Flutter
        </h2>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="grid gap-8 py-12 md:grid-cols-[auto_1fr] md:gap-12"
            >
              <span className="font-[family-name:var(--font-mono)] text-sm text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-fg md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-warm">{project.role}</p>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                    {project.blurb}
                  </p>
                  <dl className="mt-6 space-y-3 text-sm leading-relaxed">
                    <div>
                      <dt className="font-[family-name:var(--font-mono)] text-xs tracking-wide text-accent uppercase">
                        Problema
                      </dt>
                      <dd className="mt-1 text-muted">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-[family-name:var(--font-mono)] text-xs tracking-wide text-accent uppercase">
                        Solução
                      </dt>
                      <dd className="mt-1 text-muted">{project.solution}</dd>
                    </div>
                  </dl>
                </div>

                <div className="space-y-6">
                  <ul className="space-y-2">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-accent pl-3 text-sm leading-relaxed text-fg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-line px-2.5 py-1 font-[family-name:var(--font-mono)] text-[11px] tracking-wide text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 pt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-accent underline-offset-4 transition-opacity hover:underline hover:opacity-90"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
