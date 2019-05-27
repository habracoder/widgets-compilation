const babel = require('../node_modules/@babel/core');
const presetEnv = require("@babel/preset-env");
const presetMinify = require("babel-preset-minify");
const InlineReplaceVariables = require("babel-plugin-inline-replace-variables");

let phpOptions = JSON.parse(JSON.stringify(PHP.babelOptions));
let variables = JSON.parse(JSON.stringify(PHP.variables));

let presets = [presetEnv];

if ((phpOptions.hasOwnProperty('compact') && phpOptions.compact) || (phpOptions.hasOwnProperty('minified') && phpOptions.minified)) {
  presets.push([
    presetMinify,
    {
      "evaluate": false,
    }
  ]);

  phpOptions.minified = true;
  phpOptions.compact = true;
  phpOptions.comments = false
}

let options = Object.assign({
  presets: presets,
  babelrc: false,
  configFile: false,
  plugins: [
    [
      InlineReplaceVariables, variables
    ]
  ],
}, phpOptions);

print(babel.transform(PHP.sourceCode, options).code);
