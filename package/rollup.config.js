import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const config = [
  {
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
      '@mui/joy',
      '@emotion/react',
      '@emotion/styled',
      'markdown-to-jsx',
      'prism-react-renderer',
    ],
    plugins: [
      external(),
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            declarationDir: './dist/types',
          },
        },
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }),
      commonjs(),
      terser(),
    ],
  },
];

export default config;
