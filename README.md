# Angular + Stencil Starter

A monorepo starter template for building reusable Stencil web components with full Angular integration, including type safety and auto-completion.

## Project Structure

```
angular-stencil-starter/
├── packages/
│   ├── components/              # Stencil web components library
│   │   ├── src/components/      # Component source files
│   │   └── dist/                # Built component output
│   ├── components-angular/      # Angular wrapper library
│   │   ├── projects/
│   │   │   └── component-library/
│   │   │       └── src/lib/stencil-generated/  # Generated wrappers
│   │   └── dist/                # Built Angular library
│   └── app/                     # Angular application
│       └── src/
├── package.json                 # Root workspace config
└── pnpm-workspace.yaml          # PNPM workspace definition
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

This builds in order:
1. Stencil components (generates Angular wrappers)
2. Angular wrapper library (compiles wrappers)
3. Angular application

### 3. Start Development

```bash
pnpm dev
```

This builds components and the Angular library, then starts the Angular dev server.

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm install` | Install all dependencies across the workspace |
| `pnpm build` | Build everything in correct order |
| `pnpm build:components` | Build Stencil components |
| `pnpm build:components-angular` | Build Angular wrapper library |
| `pnpm build:app` | Build Angular app |
| `pnpm dev` | Build components + wrappers, then start dev server |
| `pnpm start` | Start Angular dev server (requires prior build) |
| `pnpm start:components` | Start Stencil dev server with hot reload |
| `pnpm test` | Run tests in all packages |
| `pnpm clean` | Remove all node_modules and dist directories |

## Using Stencil Components in Angular

### Importing Components

Import components directly with full type safety and auto-completion:

```typescript
import { Component } from '@angular/core';
import { MyComponent } from 'component-library';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [MyComponent],
  template: `
    <my-component
      [first]="firstName"
      [last]="lastName"
      (myEvent)="handleEvent($event)">
    </my-component>
  `
})
export class ExampleComponent {
  firstName = 'Hello';
  lastName = 'World';

  handleEvent(event: CustomEvent) {
    console.log(event.detail);
  }
}
```

### Benefits of Angular Wrappers

- **Type Safety**: Full TypeScript support with proper types for inputs/outputs
- **Auto-completion**: IDE support for component properties and events
- **Angular Bindings**: Use `[property]` and `(event)` syntax naturally
- **RxJS Integration**: Events can be converted to Observables
- **No CUSTOM_ELEMENTS_SCHEMA**: Components are proper Angular directives

## Creating New Stencil Components

Generate a new component in the components package:

```bash
cd packages/components
pnpm generate
```

After creating your component:

1. Implement your component in `src/components/<name>/`
2. Run `pnpm build:components` to generate Angular wrappers
3. Run `pnpm build:components-angular` to compile wrappers
4. Import and use in Angular apps via `component-library`

## Adding New Angular Applications

To add another Angular app that uses the shared components:

1. Create a new Angular app in `packages/`:
   ```bash
   cd packages
   ng new my-new-app --skip-git
   ```

2. Add dependencies to the new app's `package.json`:
   ```json
   {
     "dependencies": {
       "component-library": "file:../components-angular/dist/component-library",
       "components": "workspace:*"
     }
   }
   ```

3. Run `pnpm install` from the root

4. Import and use components:
   ```typescript
   import { MyComponent } from 'component-library';

   @Component({
     imports: [MyComponent],
     // ...
   })
   ```

## Architecture Notes

### Build Order

The build order is important:

1. **Stencil components** (`pnpm build:components`)
   - Compiles web components to `dist/`
   - Generates Angular wrappers to `components-angular/projects/component-library/src/lib/stencil-generated/`

2. **Angular wrapper library** (`pnpm build:components-angular`)
   - Compiles TypeScript wrappers with Angular's AOT compiler
   - Outputs to `components-angular/dist/component-library/`

3. **Angular applications** (`pnpm build:app`)
   - Import compiled library from `component-library`

### Why a Separate Angular Library?

The Angular wrappers must be compiled by Angular's AOT compiler (ng-packagr) to:
- Generate proper Angular metadata
- Enable tree-shaking
- Support AOT compilation in consuming apps
- Provide proper `.d.ts` type definitions

### Event Binding

Stencil events are automatically converted to Angular outputs:

```typescript
// In Stencil component
@Event() myEvent: EventEmitter<string>;

// In Angular template
<my-component (myEvent)="handler($event)"></my-component>
```
