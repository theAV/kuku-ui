import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
export const config: Config = {
  globalStyle:"src/global/styles/style.scss", 
  namespace: 'kuku-ui',
  srcDir: 'src',
  plugins: [
    sass({
      injectGlobalPaths:[
        './node_modules/kuku-ui-style-guide/index.scss'
      ]
    })
  ],
  bundles:[],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
      strict: true
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
