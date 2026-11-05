# AIC Cloud Documentation Portal

## Overview

The **AIC Cloud Documentation Portal** is a production-grade documentation platform delivering comprehensive technical documentation for AIC Cloud. It is architected to host:

1. **User Documentation**: Customer onboarding, core feature guides, management portal tutorials, and best practices.
2. **Developer Documentation**: REST APIs, SDK references, webhook specifications, authentication flows, and architectural deep dives.

The architecture is designed to support a premium documentation experience with clean information architecture, clear content presentation, and intuitive navigation.

---

## Technology Stack

| Layer / Concern | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | 19.x | Component-based UI library |
| **Build Tool** | [Vite](https://vite.dev/) | 8.x | High-performance build tool and HMR dev server |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | 7.x | Strict type safety and maintainable contracts |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS via `@tailwindcss/vite` |
| **Routing** | [React Router DOM](https://reactrouter.com/) | 7.x | Client-side routing with nested layouts |
| **Icons** | [Lucide React](https://lucide.dev/) | 1.x | Clean, consistent SVG icon set |
| **Motion** | [Framer Motion](https://motion.dev/) | 14.x | Production animation and layout transitions |
| **Markdown** | [React Markdown](https://github.com/remarkjs/react-markdown) | 10.x | Markdown rendering engine |
| **Syntax Highlighting** | [PrismJS](https://prismjs.com/) | 1.x | Code syntax highlighting support |
| **Linter** | [Oxlint](https://oxc.rs/) | 1.x | Fast static analysis |

---

## Project Structure

```text
src/
├── assets/                  # Static assets (images, logos, media)
├── components/              # Modular UI components
│   ├── common/              # Shared primitive UI elements (buttons, badges, inputs)
│   ├── layout/              # Structural wrappers (container, header, footer)
│   ├── navigation/          # Navigation components (sidebar, breadcrumbs, toc)
│   └── documentation/       # Doc-specific widgets (code blocks, callouts, tables)
├── layouts/                 # Page layout shells (RootLayout, DocsLayout)
├── pages/                   # Application route pages
│   ├── user-docs/           # Customer/user guide route views
│   ├── developer-docs/      # Developer reference and API route views
│   └── errors/              # 404 and error boundary fallbacks
├── content/                 # Documentation source content
│   ├── user-docs/           # User markdown guides and assets
│   └── developer-docs/      # Developer markdown guides and API specs
├── config/                  # Portal configuration and site metadata
├── hooks/                   # Custom reusable React hooks
├── routes/                  # React Router definitions and route trees
├── types/                   # Centralized TypeScript definitions & interfaces
├── utils/                   # Reusable utility functions
├── styles/                  # Global styles and Tailwind entry points
├── App.tsx                  # Root application entry component
└── main.tsx                 # Application DOM mount point
```

---

## Getting Started

### Prerequisites

- **Node.js**: v20.x or v22.x LTS (tested on Node v22.18.0)
- **Package Manager**: npm v10+

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

By default, Vite runs the development server at `http://localhost:5173/` (or the next available port).

### Production Build & Type Checking

To validate TypeScript compilation and generate an optimized production bundle:

```bash
npm run build
```

This executes:
1. `tsc -b`: Strict project-wide TypeScript type checking.
2. `vite build`: Tree-shaking, minification, CSS bundling via Tailwind v4, and chunk generation in `dist/`.

### Preview Production Build

To preview the generated production build locally:

```bash
npm run preview
```

### Linting

To run static analysis checks across the codebase:

```bash
npm run lint
```
