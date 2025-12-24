import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'core',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'styles/themes.css', dest: 'styles/themes.css' },
        { src: 'styles/tokens.css', dest: 'styles/tokens.css' },
        { src: 'styles/selection-tokens.css', dest: 'styles/selection-tokens.css' },
      ],
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@components/core',
      outputType: 'standalone',
      directivesProxyFile: '../angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/src/lib/stencil-generated/index.ts',
    }),
    reactOutputTarget({
      outDir: '../react/src/lib/stencil-generated/',
    }),
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
