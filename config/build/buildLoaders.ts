import { BuildOptions } from './types/types';
import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
	const isDev = options.mode === 'development';

	const pcssLoader = {
		test: /\.pcss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			'css-loader',
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: ['autoprefixer'],
					},
				},
			},
		],
	};

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const imgLoader = {
		test: /\.(jpe?g|png|svg|webp)$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: '[path][name].[hash].[ext]',
					type: 'asset/resource',
				},
			},
		],
	};

	const fontsLoader = {
		test: /\.(woff|woff2|eot|ttf|otf)$/,
		use: {
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				outputPath: 'fonts/',
			},
		},
	};

	return [pcssLoader, tsLoader, imgLoader, fontsLoader];
}
