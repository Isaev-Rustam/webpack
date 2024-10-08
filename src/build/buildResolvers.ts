// buildResolvers.ts
import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';

export function buildResolvers(
  options: BuildOptions
): Configuration['resolve'] {
  return {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Расширения файлов для обработки
    alias: {
      '@': options.paths.src,
    },
  };
}
