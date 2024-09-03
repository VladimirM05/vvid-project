const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.tsx", // Путь к вашему главному файлу
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true, // Очищать выходную папку перед каждым сборкой
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".pcss"], // Расширения файлов
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/, // Для файлов .ts и .tsx
				use: "ts-loader",
				exclude: /node_modules/, // Исключить папку с зависимостями
			},
			{
				test: /\.pcss$/, // Обработка файлов .pcss
				use: [
					MiniCssExtractPlugin.loader, // Извлекает CSS в отдельные файлы
					"css-loader", // Загружает и обрабатывает файлы css
					{
						loader: "postcss-loader", // Добавляет PostCSS
						options: {
							postcssOptions: {
								plugins: [
									"autoprefixer", // Используем Autoprefixer
								],
							},
						},
					},
				],
			},
			{
				test: /\.(jpe?g|png|svg|webp)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[path][name].[hash].[ext]", // Настройка имени выходного файла
							type: "asset/resource",
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "fonts/",
					},
				},
			},
		],
	},
	devServer: {
		historyApiFallback: true, // Эта опция позволяет обрабатывать маршруты на стороне клиента
		static: path.join(__dirname, "dist"), // Укажите папку, где находятся ваши скомпилированные файлы
		port: 3000, // Порт сервера
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html", // Шаблон для выхода
			filename: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css", // Имя выходного CSS файла
			chunkFilename: "[id].css",
		}),
	],
	mode: "development", // Или 'production'
};
