import {typescriptPaths} from 'rollup-plugin-typescript-paths';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import preserveDirectives from 'rollup-preserve-directives';

const externals = [
  'react',
  'react-dom',
  '@mui/material',
  '@emotion/react',
  '@emotion/styled',
  'markdown-to-jsx',
  'mermaid',
  'prism-react-renderer',
]

const plugins = [
  peerDepsExternal(),
  typescriptPaths({
    tsConfigPath: './tsconfig.json',
  }),
  typescript({
    tsconfig: './tsconfig.json'
  }),
  terser(),
  preserveDirectives(),
]

export default {
  input: {
    index: './src/index.ts',
    client: './src/client.ts',
  },
  output: [
    {
      dir: './dist',
      format: 'cjs',
      exports: 'named',
      entryFileNames: '[name].js',
      sourcemap: true,
    },
    {
      dir: './dist',
      format: 'esm',
      exports: 'named',
      entryFileNames: '[name].esm.js',
      sourcemap: true,
    },
  ],
  external: externals,
  plugins,
};
