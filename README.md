# Stencil Starter Monorepo

A monorepo for building reusable Stencil web components with framework wrappers for Angular and React, including full type safety, auto-completion, and Storybook documentation.

## Project Structure

```
stencil-starter-monorepo/
├── packages/
│   ├── components/
│   │   ├── core/                 # @components/core - Stencil web components
│   │   ├── angular/              # @components/angular - Angular wrappers
│   │   └── react/                # @components/react - React wrappers
│   └── apps/
│       ├── angular/              # @app/angular - Angular demo app
│       ├── react/                # @app/react - React demo app
│       └── storybook/            # @app/storybook - Component documentation
├── package.json
└── pnpm-workspace.yaml
```

## Prerequisites

- Node.js (v18 or higher)
- PNPM (v10 or higher)

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Build Everything

```bash
pnpm build
```

This builds in order:
1. `@components/core` - Stencil components (also generates framework wrappers)
2. `@components/angular` - Angular wrapper library
3. `@components/react` - React wrapper library
4. `@app/angular` - Angular application
5. `@app/react` - React application

### 3. Start Development

```bash
# Start both Angular and React apps
pnpm dev

# Or start individually
pnpm dev:angular    # Angular app at http://localhost:4200
pnpm dev:react      # React app at http://localhost:5173
pnpm dev:storybook  # Storybook at http://localhost:6006
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm install` | Install all dependencies |
| `pnpm build` | Build everything in correct order |
| `pnpm build:core` | Build Stencil components + generate JSX types |
| `pnpm build:angular` | Build Angular wrapper library |
| `pnpm build:react` | Build React wrapper library |
| `pnpm build:app:angular` | Build Angular app |
| `pnpm build:app:react` | Build React app |
| `pnpm build:storybook` | Build Storybook for deployment |
| `pnpm dev` | Build and start both Angular and React apps |
| `pnpm dev:angular` | Build core + Angular wrappers, start Angular app |
| `pnpm dev:react` | Build core + React wrappers, start React app |
| `pnpm dev:storybook` | Build core, start Storybook dev server |
| `pnpm start:core` | Start Stencil dev server with hot reload |
| `pnpm test` | Run tests in all packages |
| `pnpm clean` | Remove all node_modules and dist directories |

## Using Components

### In Angular

```typescript
import { Component } from '@angular/core';
import { UiChip, UiChipGroup } from '@components/angular';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [UiChip, UiChipGroup],
  template: `
    <ui-chip-group [multiple]="true" (valueChange)="onSelect($event)">
      <ui-chip value="one">Option 1</ui-chip>
      <ui-chip value="two">Option 2</ui-chip>
      <ui-chip value="three">Option 3</ui-chip>
    </ui-chip-group>
  `
})
export class ExampleComponent {
  onSelect(event: CustomEvent<string[]>) {
    console.log('Selected:', event.detail);
  }
}
```

### In React

```tsx
import { UiChip, UiChipGroup } from '@components/react';

function Example() {
  return (
    <UiChipGroup multiple onValueChange={(e) => console.log(e.detail)}>
      <UiChip value="one">Option 1</UiChip>
      <UiChip value="two">Option 2</UiChip>
      <UiChip value="three">Option 3</UiChip>
    </UiChipGroup>
  );
}
```

### Directly as Web Components

```html
<script type="module" src="@components/core"></script>
<link rel="stylesheet" href="@components/core/styles/themes.css">
<link rel="stylesheet" href="@components/core/styles/tokens.css">

<ui-chip-group multiple>
  <ui-chip value="one">Option 1</ui-chip>
  <ui-chip value="two">Option 2</ui-chip>
</ui-chip-group>
```

## Storybook

Storybook provides interactive documentation for all components with:
- Live examples with controls
- Auto-generated documentation from TypeScript types
- Theme switching (light/dark mode)
- Full JSX auto-completion in story files

```bash
pnpm dev:storybook
```

Stories are written in TSX with full type support:

```tsx
// packages/apps/storybook/src/stories/UiChip.stories.tsx
import '@components/core';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/UiChip',
  render: (args) => (
    <ui-chip value="example" variant={args.variant}>
      Chip Label
    </ui-chip>
  ),
};
```

## Creating New Components

1. Generate a new component:
   ```bash
   cd packages/components/core
   pnpm generate
   ```

2. Implement your component in `src/components/<name>/`

3. Build to generate framework wrappers:
   ```bash
   pnpm build:core
   ```

4. The component is now available in:
   - `@components/core` (web component)
   - `@components/angular` (Angular wrapper)
   - `@components/react` (React wrapper)

## Architecture

### Build Pipeline

```
@components/core (Stencil)
    │
    ├── Compiles web components
    ├── Generates Angular wrappers → @components/angular
    ├── Generates React wrappers → @components/react
    └── Generates JSX types → @app/storybook/src/jsx.d.ts

@components/angular
    └── Compiles Angular wrappers with ng-packagr

@components/react
    └── Bundles React wrappers with TypeScript
```

### Package Dependencies

```
@app/angular ──────► @components/angular ──────► @components/core
@app/react ────────► @components/react ─────────► @components/core
@app/storybook ────► @components/core
```

### Framework Wrappers

The Angular and React wrappers provide:
- **Type Safety**: Full TypeScript support for props and events
- **Auto-completion**: IDE support for all component properties
- **Native Bindings**: Use `[prop]`/`(event)` in Angular, standard props in React
- **Tree-shaking**: Only bundle the components you use

### Theming

Components support light and dark themes via CSS custom properties:

```html
<!-- Set theme on root element -->
<html data-theme="dark">
```

Theme tokens are defined in `@components/core/styles/`:
- `themes.css` - Light/dark theme definitions
- `tokens.css` - Design tokens (spacing, colors, etc.)

## Troubleshooting

### Components not updating after changes

Rebuild the core package to regenerate wrappers:
```bash
pnpm build:core
```

### TypeScript errors in Storybook

JSX types are auto-generated when building core. If you see type errors, ensure core was built:
```bash
pnpm build:core
# or manually regenerate types
pnpm generate:jsx-types
```

### Angular/React app not seeing new components

Rebuild the framework wrappers:
```bash
pnpm build:angular  # for Angular
pnpm build:react    # for React
```
