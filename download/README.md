# Purefresh Premium Drinking Water — Website

A stunning, high-performance Next.js 16 landing page for Purefresh Premium Drinking Water (Maili Sita, Nakuru, Kenya).

## Tech Stack

- **Framework**: Next.js 16 with App Router (Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui (New York style)
- **Animations**: Framer Motion
- **Fonts**: Poppins (headings) + Inter (body)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Database**: Prisma ORM (SQLite)

## Quick Start

### Prerequisites

- Node.js 18+ or Bun
- A package manager: npm, yarn, pnpm, or bun

### Installation

```bash
# Using bun (recommended — matches the lockfile)
bun install

# OR using npm
npm install
```

### Run the dev server

```bash
# Using bun
bun run dev

# OR using npm
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for production

```bash
bun run build
bun run start
```

## Project Structure

```
purefresh-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Poppins + Inter fonts
│   │   ├── page.tsx            # Home page (assembles all sections)
│   │   ├── globals.css         # Tailwind + custom theme + accessibility utilities
│   │   └── api/
│   │       └── route.ts
│   ├── components/
│   │   ├── site/               # Purefresh-specific sections
│   │   │   ├── site-header.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── why-section.tsx
│   │   │   ├── process-section.tsx
│   │   │   ├── story-section.tsx
│   │   │   ├── impact-section.tsx
│   │   │   ├── cta-banner.tsx
│   │   │   ├── locations-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   ├── site-footer.tsx
│   │   │   └── whatsapp-float.tsx
│   │   └── ui/                 # shadcn/ui components
│   ├── lib/
│   │   ├── images.ts           # Curated image library
│   │   ├── utils.ts
│   │   └── db.ts
│   └── hooks/
├── public/                     # Logo SVGs, robots.txt
├── prisma/                     # Database schema
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Key Features

- **Epic hero** with cinematic dark background, animated water blobs, floating stat cards
- **6 service cards** with imagery, hover effects, and gradient accents
- **4-step purification process** with real photos (borehole → filtration → RO → lab)
- **Story gallery** with bento-style image grid + 3 community testimonials
- **Impact stats** (150+ outlets, 70% cheaper, 6 counties) + partner organizations
- **3 location cards** with Google Maps directions
- **Contact form** that opens WhatsApp with prefilled message
- **Sticky WhatsApp button** with rippling wave animations
- **Fully responsive** (mobile-first, tested at 390×844 and desktop)
- **WCAG-compliant contrast** with solid accessible text colors and text shadows
- **Scroll-adaptive header** (white text on dark hero, dark text on light content)

## Contact Information

- **Phone**: +254 114 247578
- **Email**: purefresh.watershop@gmail.com
- **Facebook**: facebook.com/PureFreshNakuru
- **Locations**: Maili Sita (Nakuru), Nakuru Town, Naivasha

## Customization

All images are centralized in `src/lib/images.ts` — update the URLs there to swap any image.
The brand color palette is defined in `src/app/globals.css` under `:root` and the `@theme` block.
