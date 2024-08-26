import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production', // Используйте 'development' для режима разработки
  entry: './src/index.ts', // Входной файл вашей библиотеки
  output: {
    filename: 'my-library.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Путь к выходной директории
    library: {
      name: 'MyLibrary', // Имя глобальной переменной для вашей библиотеки
      type: 'umd', // Формат модуля
    },
    clean: true, // Очистка папки dist перед сборкой
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // Расширения файлов для разрешения
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Обработка файлов с расширением .ts
        use: 'ts-loader', // Использование ts-loader для трансформации TypeScript в JavaScript
        exclude: /node_modules/, // Исключение node_modules
      },
    ],
  },
  externals: {}, // Пустой externals, так как вы не хотите исключать ничего
};

export default config;
