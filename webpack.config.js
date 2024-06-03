const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const sharedMappings = new mf.SharedMappings();
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  // target:'node12.18',
  // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
  output: {
    uniqueName: "integreat",
    publicPath: "auto",
    scriptType: 'text/javascript',
       
  },
  
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(),new CssMinimizerPlugin()],
    runtimeChunk: false,
    splitChunks: {
        chunks: 'all',
    }
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
      {
        test: /\.js$/i,
        include(file) {
          let dir = file.match(/^.*[/\\]node_modules[/\\](@.*?[/\\])?.*?[/\\]/);
          try {
            return dir && !!require(dir[0] + 'package.json').exports;
          } catch (e) {}
        },
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            configFile: false,
            presets: ['@babel/preset-env'],
          },
        },
      }
    ],
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new CompressionPlugin(),
    new CleanWebpackPlugin(),
    sharedMappings.getPlugin(),
    new ModuleFederationPlugin({
        library: { type: "module" },
        name: "integreat",
        filename: "remoteEntry.js",
        exposes: {
            './Component': '/src/app/app.component.ts',
        },        
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/animations": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/cdk": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/forms": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/material": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/platform-browser": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/service-worker": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/platform-browser-dynamic": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "rxjs":{ singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "tslib":{ singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "exceljs":{ singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "bootstrap":{ singleton: true, strictVersion: true, requiredVersion: 'auto' },
          ...sharedMappings.getDescriptors()
        })
        
    }),
  ],
};
