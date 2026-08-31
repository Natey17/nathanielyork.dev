export const PROJECTS = [
  {
    id: "nab-amp",
    name: "NAB Amp",
    icon: "/nab-amp-mark.png",
    preview: "/nab-amp-preview.png",
    tagline:
      "Live sourcing decisions, direct from the Amazon SP-API. In daily production use.",
    tags: ["JavaScript", "Node.js", "Amazon SP-API", "PWA"],
    // same-origin route — change to a full https:// URL if hosted elsewhere
    url: "/projects/nab-amp",
    github: null,
  },
  {
    id: "edgeine",
    name: "Edgeine",
    icon: "/edgeine-logo.png",
    preview: "/edgeine-preview.png",
    tagline:
      "Validating trading strategies against their own false positives. 258+ automated tests.",
    tags: ["Python", "scikit-learn", "LightGBM", "SQLAlchemy"],
    url: "/projects/edgeine",
    github: null,
  },
  {
    id: "tracewell",
    name: "Tracewell",
    // icon/preview pending — cover image to be added
    icon: null,
    preview: null,
    tagline:
      "One stuck record can stall a pipeline without erroring. Tracewell catches it, traces the cause, and writes up what it found.",
    tags: [
      "TypeScript",
      "Express",
      "Prisma · Postgres",
      "React",
      "Claude tool-use",
      "Docker Compose",
    ],
    url: "/projects/tracewell",
    github: "https://github.com/Natey17/Tracewell",
  },
];
