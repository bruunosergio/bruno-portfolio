import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="sobre" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-28">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-accent uppercase">
            Para quem contrata
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
            Júnior com domínio de loja e código com arquitetura
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
          <p>
            Passei uma década em autopeças. Sei o que quebra quando a falta
            fica no caderno — e construo API e app para isso, com hexagonal em
            Nest, Spring e Flutter.
          </p>
          <p>
            Busco vaga ou freela em{" "}
            <span className="text-fg">backend</span> ou{" "}
            <span className="text-fg">mobile</span>. Se a equipe precisar de
            outra ponta, eu adapto.
          </p>
          <p className="text-sm text-muted">{profile.location}</p>
          <ul className="flex flex-wrap gap-2 pt-2">
            {profile.focus.map((item) => (
              <li
                key={item}
                className="border border-line bg-accent-dim px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs tracking-wide text-fg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
