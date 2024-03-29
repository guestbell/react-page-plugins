module.exports = {
  presets: [['@babel/env', { loose: false, modules: false }], '@babel/typescript', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-static-block',
    ['@babel/proposal-class-properties', { loose: true }],
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    'inline-react-svg',
  ],
};
