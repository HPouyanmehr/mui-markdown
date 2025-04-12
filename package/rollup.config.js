import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import preserveDirectives from 'rollup-preserve-directives';
import {typescriptPaths} from 'rollup-plugin-typescript-paths';

export default {
  input: './src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: './dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
  ],
  external: [
    'react',
    'react-dom',
    '@mui/material',
    '@emotion/react',
    '@emotion/styled',
    'markdown-to-jsx',
    'mermaid',
    'prism-react-renderer',
  ],
  plugins: [
    peerDepsExternal(),
    typescriptPaths({
      tsConfigPath: './tsconfig.json',
    }),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    terser(),
    preserveDirectives(),
  ],
};
