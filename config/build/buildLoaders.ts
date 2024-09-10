import { BuildOptions } from './types/types';
import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
	const isDev = options.mode === 'development';

	// const svgrLoader = {
	// 	test: /\.svg$/,
	// 	issuer: /\.[jt]sx?$/,
	// 	use: [{ loader: '@svgr/webpack', options: { icon: true } }],
	// };

	const assetLoader = {
		test: /\.(png|svg|jpe?g|webp)$/,
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

	return [assetLoader, pcssLoader, tsLoader, fontsLoader];
}
