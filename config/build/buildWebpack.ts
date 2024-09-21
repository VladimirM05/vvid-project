import webpack from 'webpack';
import { BuildOptions } from './types/types';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
	const { mode, paths } = options;
	const isDev = options.mode === 'development';

	return {
		mode: options.mode ?? 'development',
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: buildPlugins(options),
		resolve: buildResolvers(options),
		module: {
			rules: buildLoaders(options),
		},
		devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
		devServer: isDev ? buildDevServer(options) : undefined,
		performance: {
			hints: false,
		},
	};
}
