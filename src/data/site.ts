// Single source of truth for site content.
// Edit this file to update copy, links, and highlighted work.
// Structured so a future `site.pt.ts` can drop in cleanly for bilingual support.

export const site = {
  url: "https://alexandrealvaro.com.br",
  locale: "en",
  name: "Alexandre Mendonça Alvaro",
  shortName: "Alexandre Alvaro",
  initials: "A.A.",
  role: "Senior Software Engineer",
  headline:
    "Senior Software Engineer — AI Systems, Computer Vision, Software Architecture",
  tagline:
    "I build AI and software systems for real-world, performance-critical environments.",
  description:
    "Senior Software Engineer building AI and software systems since 2007. Computer vision, production ML, software architecture, and performance-critical systems.",
  location: "Based in Brazil · Working worldwide",
} as const;

export type NavLink = { label: string; href: string };

export const nav: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const links = {
  email: "alexandre@baunilha.dev",
  github: "https://github.com/alexandremendoncaalvaro",
  linkedin: "https://www.linkedin.com/in/alexandrealvaro",
  website: "https://alexandrealvaro.com.br/",
  baunilha: "https://baunilha.dev/",
  studioBaunilha: "https://studio.baunilha.dev/",
  fala: "https://studio.baunilha.dev/fala/",
  kofi: "https://ko-fi.com/alexandrealvaro",
} as const;

export const hero = {
  eyebrow: "Senior Software Engineer",
  title:
    "AI systems, computer vision, and software architecture for real-world environments.",
  supporting:
    "Nearly 20 years building software across computer vision, production ML, and constrained environments where reliability and practical deployment matter.",
  primaryCta: { label: "View work", href: "/work" },
  secondaryCta: { label: "GitHub", href: links.github },
} as const;

export const focus = {
  title: "Current focus",
  items: [
    "AI systems and inference runtimes",
    "Computer vision for production environments",
    "Software architecture for performance-critical systems",
    "Developer tools and applied tooling",
  ],
} as const;

export const credibility = {
  title: "Selected credibility",
  items: [
    "Led architecture for AB InBev's SODA Vision — a proprietary end-to-end computer vision platform deployed across factories worldwide.",
    "Delivers applied AI and computer vision systems for global clients through Baunilha Systems.",
    "Built CorridorKey-Runtime in collaboration with Corridor Digital — a native AI keying runtime with an OFX plugin for DaVinci Resolve.",
  ],
  foundation:
    "Built on a foundation of industrial software, automation, and mission-critical systems — spanning airport infrastructure, offshore operations, and public utilities.",
} as const;

export type WorkItem = {
  slug: string;
  title: string;
  kind: string; // e.g. "Open source" · "Enterprise" · "Applied AI"
  summary: string;
  role: string;
  impact?: string;
  stack?: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const work: WorkItem[] = [
  {
    slug: "corridorkey-runtime",
    title: "CorridorKey-Runtime",
    kind: "Open source · Applied AI",
    summary:
      "Native runtime and OFX plugin for neural green screen keying in DaVinci Resolve, with GPU acceleration for NVIDIA RTX and Apple Silicon. Built in collaboration with Corridor Digital, with a deterministic inference path designed for real post-production workflows.",
    role: "Engineering lead — runtime architecture, OFX plugin, cross-platform inference (CUDA / MLX), packaging.",
    impact:
      "Brings Corridor's keying model into a professional editing tool as a production-ready plugin, without a cloud dependency.",
    stack: ["C++", "Python", "CUDA", "MLX", "ONNX", "OFX"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/alexandremendoncaalvaro/CorridorKey-Runtime",
      },
      {
        label: "Original Corridor video",
        href: "https://www.youtube.com/watch?v=3Ploi723hg4",
      },
    ],
    featured: true,
  },
  {
    slug: "soda-vision",
    title: "SODA Vision — AB InBev",
    kind: "Enterprise · Computer vision platform",
    summary:
      "End-to-end computer vision platform used across AB InBev factories. I led architecture for the ecosystem, separating a cloud-based editor and management layer from a deterministic runtime. Introduced a domain-specific language to standardize industrial vision pipelines and a standardized inference node architecture with offline execution and industrial data publishing.",
    role: "Software Architecture — platform design, DSL, runtime, inference node architecture.",
    impact:
      "Standardized how computer vision is built, deployed, and operated across a global manufacturing footprint. Co-created the LAHBS Box initiative, which evolved into a commercial offering.",
    stack: ["Python", "C++", "PyTorch", "OpenCV", "Docker", "Linux"],
  },
  {
    slug: "colgate-visual-inspection",
    title: "Visual inspection system — Colgate-Palmolive",
    kind: "Enterprise · Applied AI",
    summary:
      "A deep-learning visual inspection system that replaced legacy sensors on high-speed production lines across facilities in the USA and Mexico. Delivered through Baunilha Systems: calibration workflows, GPU-accelerated industrial PCs, on-site validation and production rollout.",
    role: "Architect and tech lead — model integration, deployment, validation, on-site rollout support.",
    impact:
      "Reduced false rejection rates and enabled real-time quality analytics on high-speed lines.",
    stack: ["Python", "PyTorch", "OpenCV", "Industrial PCs", "Linux"],
  },
  {
    slug: "marvitech-fleet",
    title: "Marvitech — Multi-tenant backend & device fleet",
    kind: "Enterprise · Systems",
    summary:
      "A multi-tenant backend in .NET and PostgreSQL, plus fleet management for Raspberry Pi devices with reliable OTA updates in low-connectivity environments. Paired with an offline-first Flutter mobile app with background synchronization.",
    role: "Architecture and delivery — backend, device fleet, mobile sync.",
    stack: [".NET", "PostgreSQL", "Flutter", "Raspberry Pi", "Linux"],
  },
  {
    slug: "vlm-ocr",
    title: "vlm-ocr",
    kind: "Open source · Applied AI",
    summary:
      "OCR experiments with multimodal models and local inference workflows.",
    role: "Author.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/alexandremendoncaalvaro/vlm-ocr",
      },
    ],
  },
  {
    slug: "blueprint",
    title: "macos-blueprint / blueprint",
    kind: "Open source · Developer tools",
    summary:
      "Reproducible development environment tooling for macOS and Fedora Atomic / Bluefin. Small, opinionated tools for keeping engineer machines consistent.",
    role: "Author.",
    links: [
      {
        label: "macos-blueprint",
        href: "https://github.com/alexandremendoncaalvaro/macos-blueprint",
      },
      {
        label: "blueprint",
        href: "https://github.com/alexandremendoncaalvaro/blueprint",
      },
    ],
  },
  {
    slug: "face-access",
    title: "face-access / severinopi",
    kind: "Open source · Computer vision",
    summary:
      "Face recognition access control projects for PC and Raspberry Pi — practical examples of deploying computer vision on constrained hardware.",
    role: "Author.",
    links: [
      {
        label: "face-access",
        href: "https://github.com/alexandremendoncaalvaro/face-access",
      },
      {
        label: "severinopi",
        href: "https://github.com/alexandremendoncaalvaro/severinopi",
      },
    ],
  },
];

export type Experience = {
  company: string;
  title: string;
  period: string;
  description: string;
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    company: "Baunilha Systems",
    title: "Principal AI Systems Architect & Tech Lead",
    period: "Present",
    description:
      "Leading consulting engagements focused on applied AI, computer vision, and software systems for real-world operations.",
    highlights: [
      "Colgate-Palmolive — architected and deployed a deep-learning visual inspection system replacing legacy sensors across production lines in the USA and Mexico. Led validation and on-site rollout.",
      "Marvitech — multi-tenant .NET / PostgreSQL backend, Raspberry Pi fleet management with OTA in low-connectivity environments, and an offline-first Flutter app with background sync.",
    ],
  },
  {
    company: "AB InBev / Ambev Tech",
    title: "Software Architecture",
    period: "Previous",
    description:
      "Led the engineering of SODA Vision, AB InBev's proprietary end-to-end computer vision platform used across factories worldwide.",
    highlights: [
      "Designed the core architecture of the ecosystem, separating cloud-based editor and management workflows from a deterministic runtime.",
      "Created a domain-specific language to standardize industrial vision pipelines.",
      "Developed a standardized inference node architecture with offline execution and industrial data publishing.",
      "Co-created the LAHBS Box initiative, which evolved from an intrapreneurship program into a commercial offering.",
    ],
  },
];

export const about = {
  title: "About",
  paragraphs: [
    "Building software since 2007 — AI systems, computer vision, software architecture, and production environments where reliability and practical deployment matter.",
    "My work spans computer vision, production ML, software architecture, and performance-critical systems where reliability, operational constraints, and practical deployment matter.",
    "My engineering foundation was built in industrial software, embedded systems, and control software for mission-critical environments — including airport infrastructure, offshore oil systems, and public utilities. Experience in environments where reliability constraints are non-negotiable shapes how I approach AI and software systems today.",
    "At AB InBev, I led architecture for SODA Vision, the company's proprietary end-to-end computer vision platform. Through Baunilha Systems, I deliver applied AI solutions for global clients — including vision systems, offline-first inference pipelines, and software that bridges cloud workflows with deterministic execution in constrained environments.",
    "I'm especially interested in computer vision, AI runtimes, developer tools, and software systems that need to be both technically strong and practical to operate.",
  ],
  strengths: {
    title: "Core strengths",
    items: [
      "AI Systems & Computer Vision",
      "Software Architecture",
      "Production Systems",
    ],
  },
  stack: {
    title: "Hands-on with",
    items: [
      "Python",
      "C++",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Docker",
      "Linux",
    ],
  },
} as const;

// ─── Industrial systems foundation ──────────────────────────────────────────

export type IndustrialCase = {
  slug: string;
  title: string;
  context: string; // e.g. "Airport infrastructure · Critical systems"
  summary: string;
  role: string;
  impact: string;
};

export const industrialSection = {
  eyebrow: "Foundation",
  title: "Industrial systems foundation",
  intro:
    "Before focusing more heavily on AI systems and computer vision, a substantial part of my early engineering work was in industrial software and mission-critical environments. These projects formed the systems thinking that runs through everything I build today.",
} as const;

export const industrialWork: IndustrialCase[] = [
  {
    slug: "infraero",
    title: "Emergency systems software — Infraero",
    context: "Airport infrastructure · Safety-critical systems",
    summary:
      "Embedded and control software for airport fire trucks deployed across Brazilian airports. Built for operational reliability in safety-critical, time-sensitive environments where system failure has direct consequences.",
    role: "Software development — embedded control systems, operational interfaces, field deployment.",
    impact:
      "Deployed across multiple Brazilian airports in a high-consequence operational context.",
  },
  {
    slug: "petrobras",
    title: "Control systems software — Petrobras",
    context: "Offshore infrastructure · Mission-critical systems",
    summary:
      "Software for control and monitoring systems in offshore oil infrastructure. Designed around high-consequence constraints where reliability, fault tolerance, and deterministic behavior are non-negotiable.",
    role: "Software development — control systems, monitoring, industrial protocols.",
    impact:
      "Deployed in offshore environments where system availability is directly tied to operational and safety continuity.",
  },
  {
    slug: "aysa",
    title: "Infrastructure control systems — AySA",
    context: "Public utility · Industrial control",
    summary:
      "Control software for sluice gate and sanitation infrastructure in Buenos Aires' water and wastewater network. Public utility-scale systems with continuous operational requirements and no tolerance for downtime.",
    role: "Software development — control systems, infrastructure software, PLC integration.",
    impact:
      "Contributed to the reliable operation of public sanitation infrastructure serving the Buenos Aires metropolitan area.",
  },
  {
    slug: "tmg",
    title: "Automation and systems software — TMG",
    context: "Agricultural genetics · Technical automation",
    summary:
      "Software systems for an agricultural genetics and crop improvement operation. Spanned automation, data management, and domain-specific tooling for precision agricultural workflows.",
    role: "Software development — automation systems, operational tooling, process integration.",
    impact:
      "Brought engineering discipline to domain-specific operational workflows, reducing manual overhead in specialized genetics processes.",
  },
];

// ─── Secondary products ──────────────────────────────────────────────────────

export type SecondaryItem = {
  name: string;
  description: string;
  href: string;
};

export const secondary: {
  title: string;
  intro: string;
  items: SecondaryItem[];
} = {
  title: "Other work",
  intro:
    "Smaller products and tools that come out of the same engineering practice.",
  items: [
    {
      name: "Baunilha",
      description: "Consulting practice for applied AI and software systems.",
      href: links.baunilha,
    },
    {
      name: "Studio Baunilha",
      description: "Studio brand for smaller products and experiments.",
      href: links.studioBaunilha,
    },
    {
      name: "Fala",
      description: "A focused product from Studio Baunilha.",
      href: links.fala,
    },
  ],
};
