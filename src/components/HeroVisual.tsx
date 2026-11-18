export function HeroVisual() {
  return (
    <div
      className="animate-drift relative h-full min-h-[280px] w-full md:min-h-[420px]"
      aria-hidden
    >
      <svg
        viewBox="0 0 640 520"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#123038" />
            <stop offset="100%" stopColor="#0a1c22" />
          </linearGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3ecf8e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3ecf8e" stopOpacity="0.15" />
          </linearGradient>
          <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M 28 0 L 0 0 0 28"
              fill="none"
              stroke="rgba(232,240,236,0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="640" height="520" fill="url(#grid)" />

        {/* outer frame */}
        <rect
          x="48"
          y="56"
          width="544"
          height="408"
          rx="4"
          stroke="rgba(232,240,236,0.16)"
          strokeWidth="1.5"
        />

        {/* infrastructure layer */}
        <g transform="translate(88, 320)">
          <rect width="464" height="96" fill="url(#panel)" stroke="rgba(232,240,236,0.12)" />
          <text
            x="20"
            y="36"
            fill="#8fa89c"
            fontFamily="ui-monospace, monospace"
            fontSize="14"
          >
            infra
          </text>
          <text
            x="20"
            y="64"
            fill="#e8f0ec"
            fontFamily="ui-monospace, monospace"
            fontSize="16"
          >
            Prisma · JPA · Docker · JWT
          </text>
        </g>

        {/* domain layer */}
        <g transform="translate(128, 196)">
          <rect
            width="384"
            height="100"
            fill="#10262c"
            stroke="url(#edge)"
            strokeWidth="1.5"
          />
          <text
            x="20"
            y="38"
            fill="#3ecf8e"
            fontFamily="ui-monospace, monospace"
            fontSize="14"
          >
            domain
          </text>
          <text
            x="20"
            y="68"
            fill="#e8f0ec"
            fontFamily="ui-monospace, monospace"
            fontSize="16"
          >
            regras · ports · casos de uso
          </text>
        </g>

        {/* ui / api layer */}
        <g transform="translate(168, 78)">
          <rect
            width="304"
            height="92"
            fill="#0d1f24"
            stroke="rgba(224,176,122,0.45)"
            strokeWidth="1.5"
          />
          <text
            x="20"
            y="36"
            fill="#e0b07a"
            fontFamily="ui-monospace, monospace"
            fontSize="14"
          >
            adapters
          </text>
          <text
            x="20"
            y="64"
            fill="#e8f0ec"
            fontFamily="ui-monospace, monospace"
            fontSize="16"
          >
            REST · Flutter · React
          </text>
        </g>

        {/* connectors */}
        <path
          d="M320 170 V196"
          stroke="#3ecf8e"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.7"
        />
        <path
          d="M320 296 V320"
          stroke="#3ecf8e"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
