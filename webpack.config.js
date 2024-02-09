const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  externals: {
    '@fluentui/react': 'FluentUIReact',
    'prop-types': 'PropTypes',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'recharts': 'Recharts',
  },
  // plugins: [    
  //   new BundleAnalyzerPlugin(),
  // ],
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