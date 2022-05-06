import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const plugins = [
  nodeResolve({ preferBuiltins: true }),
  commonjs(),
  json({ namedExports: false }),
  {
    banner() {
      return `/*! ${pkg.name} ${pkg.version} https://github.com/${pkg.repository} @license ${pkg.license} */`;
    }
  }
];

const plugins_minify = [
  terser({
    format: {
      ascii_only: true,
    }
  })
];

export default [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/markdown-it-ignore.js',
        format: 'umd',
        name: 'markdownitIgnore'
      },
      {
        file: 'dist/markdown-it-ignore.min.js',
        format: 'umd',
        name: 'markdownitIgnore',
        plugins: plugins_minify
      }
    ],
    plugins: plugins
  }
];