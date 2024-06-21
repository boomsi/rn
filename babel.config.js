
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
// module.exports = {
//   presets: [
//     'module:@react-native/babel-preset',
//     'module:metro-react-native-babel-preset',
//   ],
//   plugins: [
//     [
//       'module-resolver',
//       {
//         root: ['./src'],
//         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
//         alias: {
//           tests: ['./tests/'],
//           '@components': './src/components',
//         },
//       },
//     ],
//   ],
//   env: {
//     production: {
//       plugins: ['react-native-paper/babel'],
//     },
//   },
// };
