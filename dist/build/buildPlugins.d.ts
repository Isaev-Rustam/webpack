import { Configuration } from 'webpack';
import { BuildOptions } from './types/';
export declare function buildPlugins({ mode, paths, platform, }: BuildOptions): Configuration['plugins'];
