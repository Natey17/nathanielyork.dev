export const PROJECTS = [
  {
    id: "nab-amp",
    name: "NAB amp",
    subtitle: "Amazon FBA Sourcing & Sales Analytics Platform",
    dates: "Aug 2026 – Present",
    stack: ["Full-stack PWA", "JavaScript", "Node.js/Express", "Amazon SP-API", "Google Sheets API"],
    bullets: [
      "Designed and deployed a full-stack progressive web app integrating six Amazon Selling Partner API roles to automate live product-sourcing decisions — barcode/UPC scanning, listing-eligibility checks, and real-time profit/ROI calculations — replacing paid third-party tools",
      "Built a stateless sales-analytics sync pipeline pulling live order and settlement data via the Orders and Finance APIs, with refund-netting logic and a retry queue that resolved a production bug silently blocking order sync",
      "Deployed and in active daily use for real purchasing and sales decisions across 50+ transactions with a business partner; audited credential handling via git-history review",
    ],
    link: null,
  },
  {
    id: "ml-trading-edge-discovery",
    name: "ML Trading Edge Discovery",
    subtitle: "Statistical Research Platform",
    dates: "2026 – Present",
    stack: ["Python", "pandas", "scikit-learn", "LightGBM", "SQLAlchemy", "Streamlit"],
    bullets: [
      "Built a systematic research pipeline to statistically validate (not deploy) candidate trading strategies, with point-in-time feature computation designed to prevent look-ahead bias and purged walk-forward cross-validation with embargo periods",
      "Implemented Benjamini-Hochberg FDR correction and Deflated Sharpe Ratio as enforced statistical gates in a staged hypothesis-screening funnel across correlated instrument groups",
      "Maintained 258+ passing automated tests and reproducible experiment tracking (versioned migrations, config/git-hash snapshots) across an evolving research database",
    ],
    link: null,
  },
  {
    id: "ai-image-renderer",
    name: "AI Image Renderer",
    subtitle: null,
    dates: "Sep 2024 – Dec 2024",
    stack: ["Python", "OpenAI API", "Figma"],
    bullets: [
      "Engineered an AI-powered system to generate client design visuals using OpenAI's API",
      "Reduced concept generation time by 60% through prompt optimization and automation",
      "Delivered production-quality renders used in 3+ client campaigns at Design Hub",
    ],
    link: null,
  },
];
