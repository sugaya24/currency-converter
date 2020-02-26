module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react']
            }
          }
        ]
      }
    ]
  },
  watch: true
};
