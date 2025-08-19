# Project Structure

## Root Level
- Configuration files for build tools, linting, and styling
- `components.json` - shadcn/ui configuration
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Build configuration with path aliases

## Source Organization (`src/`)

### Core Files
- `main.tsx` - Application entry point
- `App.tsx` - Root component with providers and routing
- `index.css` - Global styles and CSS variables
- `vite-env.d.ts` - Vite type definitions

### Folder Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Navigation.tsx  # Site navigation
├── pages/              # Route components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
│   ├── use-mobile.tsx  # Mobile detection
│   └── use-toast.ts    # Toast notifications
├── lib/                # Utility functions
│   └── utils.ts        # Common utilities (cn, etc.)
└── assets/             # Static assets
    └── profile-avatar.png
```

## Architecture Patterns

### Component Organization
- **UI Components**: Located in `components/ui/` (shadcn/ui)
- **Feature Components**: Located in `components/` (Hero, About, etc.)
- **Page Components**: Located in `pages/` (route-level components)

### Path Aliases
- `@/` - Maps to `src/` directory
- `@/components` - UI components
- `@/lib` - Utilities
- `@/hooks` - Custom hooks

### Routing
- Uses React Router DOM with BrowserRouter
- Catch-all route for 404 handling
- New routes should be added above the "*" catch-all route

### Styling
- Tailwind CSS with custom design system
- CSS variables for theming (light/dark mode)
- Component-specific styles using Tailwind classes
- Custom animations and gradients defined in tailwind.config.ts

### State Management
- TanStack Query for server state
- React Hook Form for form state
- Context providers wrapped in App.tsx