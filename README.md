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
└── package.json
```

## Prerequisites

- Node.js (v18 or higher)
- npm (v7 or higher, for workspace support)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Build Everything

```bash
npm run build
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
npm run dev

# Or start individually
npm run dev:angular    # Angular app at http://localhost:4200
npm run dev:react      # React app at http://localhost:5173
npm run dev:storybook  # Storybook at http://localhost:6006
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run build` | Build everything in correct order |
| `npm run build:core` | Build Stencil components + generate JSX types |
| `npm run build:angular` | Build Angular wrapper library |
| `npm run build:react` | Build React wrapper library |
| `npm run build:app:angular` | Build Angular app |
| `npm run build:app:react` | Build React app |
| `npm run build:storybook` | Build Storybook for deployment |
| `npm run dev` | Build and start both Angular and React apps |
| `npm run dev:angular` | Build core + Angular wrappers, start Angular app |
| `npm run dev:react` | Build core + React wrappers, start React app |
| `npm run dev:storybook` | Build core, start Storybook dev server |
| `npm run start:core` | Start Stencil dev server with hot reload |
| `npm test` | Run tests in all packages |
| `npm run clean` | Remove all node_modules and dist directories |

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
npm run dev:storybook
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
   npm run generate
   ```

2. Implement your component in `src/components/<name>/`

3. Build to generate framework wrappers:
   ```bash
   npm run build:core
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
npm run build:core
```

### TypeScript errors in Storybook

JSX types are auto-generated when building core. If you see type errors, ensure core was built:
```bash
npm run build:core
# or manually regenerate types
npm run generate:jsx-types
```

### Angular/React app not seeing new components

Rebuild the framework wrappers:
```bash
npm run build:angular  # for Angular
npm run build:react    # for React
```
