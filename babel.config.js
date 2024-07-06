// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current' // Ensure compatibility with the current Node.js version
      },
      modules: 'commonjs'
    }]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining'
  ],
  ignore: [
    '**/*.d.ts'
  ]
};
