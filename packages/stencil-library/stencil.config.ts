import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
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
      componentCorePackage: 'stencil-library',
      outputType: 'standalone',
      directivesProxyFile: '../angular-library/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-library/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
