module.exports = {
  presets: [
    ['@babel/env', { loose: false, modules: false }],
    '@babel/typescript',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    'inline-react-svg',
  ],
};
