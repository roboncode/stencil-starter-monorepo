import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'styles/themes.css', dest: 'styles/themes.css' },
        { src: 'styles/tokens.css', dest: 'styles/tokens.css' },
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
      componentCorePackage: 'web-components',
      outputType: 'standalone',
      directivesProxyFile: '../angular-components/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-components/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
