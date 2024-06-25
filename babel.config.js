module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-class-properties', {loose: true}],
    ['@babel/plugin-transform-private-methods', {loose: true}],
    ['@babel/plugin-transform-private-property-in-object', {loose: true}],
  ],
  env: {
    production: {
      plugins: [
        // 'react-native-paper/babel',
        ['@babel/plugin-transform-class-properties', {loose: true}],
        ['@babel/plugin-transform-private-methods', {loose: true}],
        ['@babel/plugin-transform-private-property-in-object', {loose: true}],
      ],
    },
  },
};
