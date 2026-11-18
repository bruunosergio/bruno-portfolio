export const profile = {
  name: "Bruno Sérgio",
  shortName: "Bruno",
  headline:
    "Dev júnior de backend e mobile — SI no IFAL, 10 anos em autopeças",
  summary:
    "Estou no 8º período de Sistemas de Informação e migro para TI com produto próprio na loja: o Meu Copiloto organiza faltas de estoque que antes iam para o caderno. Também construo backends em Nest/Spring e app Flutter com arquitetura hexagonal.",
  location: "Arapiraca, AL · remoto e freela",
  focus: ["Backend", "Mobile", "Arquitetura hexagonal"],
  links: {
    github: "https://github.com/bruunosergio",
    linkedin: "https://www.linkedin.com/in/bruunosergio/",
    email: "brunosergio-10@hotmail.com",
    resume: "/resume",
  },
} as const;

export const projects = [
  {
    slug: "meu-copiloto",
    title: "Meu Copiloto",
    role: "Produto na loja · autopeças",
    blurb:
      "Tira o caderno de faltas da balcão. Vendedor registra a peça que faltou; comprador trabalha numa fila com status e histórico.",
    problem:
      "No papel, falta some, compra atrasa e a conversa entre loja e estoque vira telefone sem fio.",
    solution:
      "API REST (NestJS hexagonal) + painel web com JWT. Fase 1 no ar na operação. WhatsApp e IA estão no roadmap.",
    stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "React", "Docker"],
    highlights: [
      "Uso real na reposição da loja",
      "Domínio isolado, ADRs e roadmap escritos",
      "Painel com fluxo offline no terminal da loja",
    ],
    links: [
      {
        label: "Backend",
        href: "https://github.com/bruunosergio/meu-copiloto-backend",
      },
      {
        label: "Web",
        href: "https://github.com/bruunosergio/meu-copiloto-web",
      },
    ],
  },
  {
    slug: "starticoins",
    title: "StartiCoins",
    role: "Faculdade · backend",
    blurb:
      "API de gamificação e produtividade em Java 21 / Spring Boot, com hexagonal e testes que barram o domínio de importar framework.",
    problem:
      "Regra de negócio misturada com Spring fica difícil de testar e de trocar detalhes de infra.",
    solution:
      "Camadas domain / application / infrastructure, JWT, Flyway, Docker e ArchitectureBoundaryTest.",
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "Gradle", "Docker"],
    highlights: [
      "Fronteira de arquitetura coberta por teste",
      "Value objects, JWT e migrações versionadas",
      "Docs de arquitetura e contrato de API",
    ],
    links: [
      {
        label: "Repositório",
        href: "https://github.com/starti-projetos/starticoins-backend",
      },
    ],
  },
  {
    slug: "inbordal",
    title: "Inbordal Mobile",
    role: "Faculdade · mobile (IFAL / DIT)",
    blurb:
      "App Flutter de domínio (bordado), com UI / domain / infra separados, BLoC e Dio.",
    problem:
      "Widget acoplado em HTTP e regra de negócio vira teste caro e mudança arriscada.",
    solution:
      "Ports & adapters, flutter_bloc, get_it, go_router, Dio e secure storage.",
    stack: ["Flutter", "Dart", "BLoC", "Dio", "get_it", "go_router"],
    highlights: [
      "Domain sem import de Flutter",
      "DI no composition root (get_it)",
      "Mesmo raciocínio hexagonal dos backends",
    ],
    links: [
      {
        label: "Repositório",
        href: "https://github.com/DIT-IFAL/inbordal-mobile",
      },
    ],
  },
] as const;

export const stackGroups = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "NestJS", "TypeScript", "REST", "JWT"],
  },
  {
    title: "Dados & infra",
    items: ["PostgreSQL", "Prisma", "JPA", "Flyway", "Docker"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "BLoC", "Dio"],
  },
  {
    title: "Práticas",
    items: ["Arquitetura hexagonal", "Clean Architecture", "ADRs", "Testes", "Git"],
  },
] as const;

export const experience = [
  {
    title: "Gestão e operação — comércio de autopeças",
    period: "≈ 10 anos",
    detail:
      "Loja, estoque e reposição no dia a dia. O Meu Copiloto nasceu dessa rotina: software escrito para a dor que eu via no balcão.",
  },
] as const;

export const education = [
  {
    title: "Sistemas de Informação — IFAL Arapiraca",
    period: "Em finalização · 8º período",
    detail:
      "StartiCoins (backend Java) e Inbordal (Flutter) saíram da formação, com foco em arquitetura e entrega.",
  },
] as const;
