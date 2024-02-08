const path = require('path');

module.exports = {
  mode: 'production',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'recharts': 'Recharts',
  },
  entry: './ReactFiles/index.tsx',
  output: {
    path: path.resolve(__dirname, '0src/SiteAssets/ReactTestApp'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/,
          /src/
        ]
      },
    ],
  },
};