// buildDevServer.ts
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 8000,
    open: true,
    historyApiFallback: true,
    hot: true,// позволяет обновлять код без перезагрузки страницы
  };
}
