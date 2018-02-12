import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';

// rollup.config.js
export default { // can be an array (for multiple inputs)
  // core input options
  input: "src/index.js", // required
  plugins: [
    nodeResolve({ jsnext: true, main: true }),
    commonjs({ include: 'node_modules/**' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify("development")
    }),
    babel({
      exclude: './node_modules/**' // only transpile our source code
    })
  ],
  globals: {
    "blockstack": "blockstack",
  },
  output: { // required (can be an array, for multiple outputs)
    // core output options
    format: "iife", // required
    file: "bundle.js",
    dir: "public",
    name: "f12Chat",

  },
  watch: {
    //    include: 'src/**'
  }
};
