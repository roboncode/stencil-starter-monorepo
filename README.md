# Angular + Stencil Starter

A monorepo starter template for building reusable Stencil web components with Angular integration.

## Project Structure

```
angular-stencil-starter/
├── packages/
│   ├── components/          # Stencil web components library
│   │   ├── src/components/  # Component source files
│   │   └── dist/            # Built component output (gitignored)
│   └── app/                 # Angular application
│       └── src/
├── package.json             # Root workspace config
└── pnpm-workspace.yaml      # PNPM workspace definition
```

## Prerequisites

- Node.js (v18 or higher recommended)
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

This builds the Stencil components first, then builds the Angular app.

### 3. Start Development

```bash
pnpm dev
```

This builds the components and starts the Angular dev server.

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm install` | Install all dependencies across the workspace |
| `pnpm build` | Build components, then build the Angular app |
| `pnpm build:components` | Build only Stencil components |
| `pnpm build:app` | Build only the Angular app |
| `pnpm dev` | Build components and start Angular dev server |
| `pnpm start` | Start Angular dev server (requires components built) |
| `pnpm start:components` | Start Stencil dev server with hot reload |
| `pnpm test` | Run tests in all packages |
| `pnpm clean` | Remove all node_modules directories |

## Using Stencil Components in Angular

### 1. Import and Register Components

In your Angular component, import the components package and add `CUSTOM_ELEMENTS_SCHEMA`:

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'components';

@Component({
  selector: 'app-example',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <my-component first="Hello" middle="+" last="World"></my-component>
  `
})
export class ExampleComponent {}
```

### 2. Use in Templates

Once registered, use Stencil components as regular HTML elements:

```html
<my-component first="Stencil" middle="+" last="Angular"></my-component>
```

### Available Exports

- `components` - Auto-registers all Stencil web components
- `components/my-component` - Individual component imports

## Creating New Stencil Components

Generate a new component in the components package:

```bash
cd packages/components
pnpm generate
```

Follow the prompts to create your component. After creation:

1. Implement your component in `src/components/<name>/`
2. Run `pnpm build:components` to build
3. Import and use in Angular apps

## Adding New Angular Applications

To add another Angular app that uses the shared components:

1. Create a new Angular app in `packages/`:
   ```bash
   cd packages
   ng new my-new-app --skip-git
   ```

2. Add the components dependency to the new app's `package.json`:
   ```json
   {
     "dependencies": {
       "components": "workspace:*"
     }
   }
   ```

3. Run `pnpm install` from the root

4. Import and use components:
   ```typescript
   import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
   import 'components';

   @Component({
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     // ...
   })
   ```

## Architecture Notes

### Why CUSTOM_ELEMENTS_SCHEMA?

Stencil compiles to native Web Components. Using `CUSTOM_ELEMENTS_SCHEMA` tells Angular to allow custom HTML elements that aren't Angular components. This is the simplest integration approach that:

- Works without complex build configuration
- Supports all Stencil features (Shadow DOM, slots, events)
- Requires minimal setup in consuming apps

### Build Order

Components must be built before Angular apps because:

1. Stencil compiles web components to `dist/`
2. Angular apps import from the built `dist/` output

The root `pnpm build` script handles this ordering automatically.

### Event Binding

To listen to Stencil component events in Angular, use standard event binding:

```html
<my-component (myEvent)="handleEvent($event)"></my-component>
```

Note: Event names from Stencil are typically camelCase.
