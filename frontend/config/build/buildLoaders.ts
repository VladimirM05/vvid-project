import { BuildOptions } from './types/types';
import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

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

	// const tsLoader = {
	// 	test: /\.tsx?$/,
	// 	use: 'ts-loader',
	// 	exclude: /node_modules/,
	// };

	// const tsLoader = {
	// 	exclude: /node_modules/,
	// 	test: /\.tsx?$/,
	// 	loader: 'ts-loader',
	// 	options: {
	// 		transpileOnly: true,
	// 		getCustomTransformers: () => ({
	// 			before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
	// 		}),
	// 	},
	// };

	const babelLoader = {
		test: /\.tsx?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			// options: {
			// 	presets: [
			// 		'@babel/preset-env',
			// 		'@babel/preset-typescript',
			// 		['@babel/preset-react', { runtime: isDev ? 'automatic' : 'classic' }],
			// 	],
			// },
		},
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

	return [assetLoader, pcssLoader, babelLoader, fontsLoader];
}
