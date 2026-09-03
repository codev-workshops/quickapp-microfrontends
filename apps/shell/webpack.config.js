const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    uniqueName: 'shell',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        identityMfe: 'identityMfe@http://localhost:4201/remoteEntry.js',
        customerMfe: 'customerMfe@http://localhost:4202/remoteEntry.js',
        orderMfe: 'orderMfe@http://localhost:4203/remoteEntry.js',
        productMfe: 'productMfe@http://localhost:4204/remoteEntry.js',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      },
    }),
  ],
};
