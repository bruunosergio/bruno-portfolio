import { education, experience } from "@/data/profile";

export function Path() {
  return (
    <section id="trajetoria" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-accent uppercase">
          Trajetória
        </p>
        <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
          SI no IFAL e dez anos de balcão
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-[family-name:var(--font-mono)] text-xs tracking-[0.16em] text-muted uppercase">
              Experiência
            </h3>
            <ul className="mt-6 space-y-8">
              {experience.map((item) => (
                <li key={item.title} className="border-l border-line pl-5">
                  <p className="text-lg font-medium text-fg">{item.title}</p>
                  <p className="mt-1 text-sm text-warm">{item.period}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-mono)] text-xs tracking-[0.16em] text-muted uppercase">
              Formação
            </h3>
            <ul className="mt-6 space-y-8">
              {education.map((item) => (
                <li key={item.title} className="border-l border-accent pl-5">
                  <p className="text-lg font-medium text-fg">{item.title}</p>
                  <p className="mt-1 text-sm text-warm">{item.period}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
