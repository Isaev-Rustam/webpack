import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',  // Режим 'production' или 'development'
  target: 'node',      // Указывает, что цель сборки — Node.js
  entry: './src/index.ts',  // Точка входа
  output: {
    filename: 'index.js',    // Имя файла на выходе
    path: path.resolve(__dirname, 'dist'),  // Директория вывода
    libraryTarget: 'commonjs2',  // Указывает на CommonJS модули
  },
  resolve: {
    extensions: ['.ts', '.js'],  // Расширения файлов для обработки
  },
  module: {
    rules: [
      {
        test: /\.ts$/,             // Файлы с расширением .ts
        use: 'ts-loader',          // Использование ts-loader
        exclude: /node_modules/,   // Исключение node_modules
      },
    ],
  },
  externals: [                   // Экстерналы (не включать в сборку)
    /^[a-z\-0-9]+$/ // Игнорировать node_modules
  ],
};

export default config;
