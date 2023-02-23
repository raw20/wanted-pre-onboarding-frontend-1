const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

const tsConfigPath = path.resolve(__dirname, './tsconfig.json');

module.exports = {
  reactScriptsVersion: 'react-scripts',
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    plugins: [new TsconfigPathsPlugin({ configFile: tsConfigPath })],
  },
<<<<<<< HEAD
};
=======
};
>>>>>>> 72e892fcd487c03c407e1bc3e3b2886075b1bc6f
