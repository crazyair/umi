export default {
  plugins: [
    [
      '../../lib',
      {
        // mobile
        hd: true,
        fastClick: true,

        // dev boost
        dll: true,
        hardSource: false,

        // performace
        pwa: {},
        dynamicImport: {
          webpackChunkName: true,
          loadingComponent: './Loading.js',
        },
        library: 'react',

        // misc
        dva: false,
        polyfills: [],
      },
    ],
  ],
};
