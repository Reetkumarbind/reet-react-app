# Technology Stack

## Core Technologies
- **React 18** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI

## Key Libraries
- **React Router DOM** - Client-side routing
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling with Zod validation
- **Lucide React** - Icon library
- **next-themes** - Theme switching (dark/light mode)
- **Sonner** - Toast notifications

## Development Tools
- **ESLint** - Code linting with TypeScript support
- **PostCSS** - CSS processing
- **Lovable Tagger** - Development component tagging

## Common Commands

### Development
```bash
npm run dev          # Start development server (localhost:8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Package Management
- Uses npm with package-lock.json
- Also has bun.lockb (Bun compatibility)

## Build Configuration
- Vite with React SWC plugin for fast compilation
- Path alias: `@/` maps to `./src/`
- Development server runs on port 8080
- TypeScript with relaxed settings (noImplicitAny: false)