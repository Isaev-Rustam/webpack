import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';
export declare function buildPlugins({ mode, paths, analyzer, platform, shouldCopyAssets, }: BuildOptions): Configuration['plugins'];
