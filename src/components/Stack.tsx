import { stackGroups } from "@/data/profile";

export function Stack() {
  return (
    <section id="stack" className="border-b border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-accent uppercase">
          Stack
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
          O que aparece nos repos
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-[family-name:var(--font-mono)] text-xs tracking-[0.16em] text-warm uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-fg md:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
