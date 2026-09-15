# Choir Master

Choir Master is a work-in-progress web application for organizing the people, music, and planning involved in running a choir. The project is currently focused on building the responsive dashboard and reusable component system that will support the larger application.

> [!NOTE]
> Choir Master is in active development. The current dashboard uses placeholder content while the choir-specific features and data model are being implemented.

## Current progress

- Responsive dashboard shell with collapsible navigation
- Summary cards and interactive data visualization
- Reusable table, form, navigation, and feedback components
- Mobile-aware layouts and navigation behavior
- Custom button component documented in Storybook
- Shared styling and design tokens built with Tailwind CSS

## Planned direction

Choir Master is intended to give choir leaders one place to coordinate their ensemble. Planned product areas include choir-member management, music and repertoire organization, rehearsal and service planning, and at-a-glance activity summaries.

## Tech stack

| Area | Technology |
| --- | --- |
| Application | React 19, TypeScript |
| Build tooling | Vite 8 |
| Styling | Tailwind CSS 4 |
| UI foundation | Base UI, shadcn/ui patterns |
| Data display | TanStack Table, Recharts |
| Interactions | dnd kit |
| Icons | Hugeicons |
| Component development | Storybook 10 |
| Quality | ESLint, Vitest, Playwright |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19 or newer (Node 22.12+ is also supported)
- npm

### Installation

```bash
git clone https://github.com/cameroncrobinson/choir-master.git
cd choir-master
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal, typically `http://localhost:5173`.

### Run Storybook

```bash
npm run storybook
```

Storybook runs at `http://localhost:6006` and is used to develop components in isolation.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Preview the production build locally |
| `npm run storybook` | Start the Storybook development server |
| `npm run build-storybook` | Create a static Storybook build |

## Project structure

```text
src/
├── app/dashboard/       # Dashboard sample data
├── components/
│   ├── atoms/           # Project-specific reusable components and stories
│   └── ui/              # Shared UI primitives
├── hooks/               # Reusable React hooks
├── lib/                 # Shared utilities
├── App.tsx              # Application root
└── index.css            # Global styles and design tokens
```

Storybook configuration lives in `.storybook/`, while Vite, TypeScript, ESLint, Tailwind CSS, and PostCSS are configured at the project root.

## Development workflow

1. Create or update shared components in `src/components`.
2. Add Storybook stories for project-specific components when appropriate.
3. Run `npm run lint` and `npm run build` before opening a pull request.
4. Keep application-specific data and features separate from the shared UI primitives.

## Contributing

This is an early-stage project, so the architecture and feature set may continue to change. If you would like to contribute, open an issue to discuss the change before submitting a pull request.

## Author

Built by [Cameron Robinson](https://github.com/cameroncrobinson).
