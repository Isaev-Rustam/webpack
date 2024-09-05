// buildPlugins.ts
import { Configuration, DefinePlugin } from 'webpack';
import { BuildOptions } from './types/';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export function buildPlugins({
  mode,
  paths,
  platform,
}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.ico'),
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      __ENV__: JSON.stringify(mode),
    }),
  ];

  if (isDev) {
  }

  if (isProd) {
  }

  return plugins;
}
