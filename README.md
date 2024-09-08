# Конфигурация Webpack для проектов на TypeScript

Этот проект предоставляет набор функций для настройки Webpack с поддержкой TypeScript. Функции позволяют настраивать плагины, загрузчики, резолверы и сервер разработки для удобной сборки проектов.

## Основные функции

- **Поддержка TypeScript** — с помощью `ts-loader` проект компилирует файлы `.ts` и `.tsx`.
- **Поддержка горячей перезагрузки** — включена возможность обновлять код без перезагрузки страницы.
- **Ассет-лоадеры** — загружаются и обрабатываются изображения и другие статические ресурсы.
- **Темизация** — поддержка разных платформ: мобильная и десктопная версия.
- **Анализатор бандлов** — возможность включения плагина для анализа финальной сборки (Webpack Bundle Analyzer).
- **Оптимизация для различных режимов** — сборка адаптируется под режимы разработки и продакшн.

## Установка

1. Клонируйте репозиторий:
   git clone

2. npm install

3. ```ts
   export interface BuildPaths {
     entry: string; // Путь к главному файлу вашего проекта
     output: string; // Путь к директории для сборки
     public: string; // Путь к директории с публичными файлами
     html: string; // Путь к HTML-шаблону
     src: string; // Путь к исходному коду
   }
   ```

4. npm run dev

## Использование

Конфигурация Webpack
Основная функция buildWebpack собирает все части конфигурации Webpack: плагины, загрузчики, резолверы и сервер разработки.

```ts
import webpack from 'webpack';
import { buildWebpack } from './buildWebpack';
import { BuildOptions } from './types/types';

const options: BuildOptions = {
  port: 3000,
  paths: {
    entry: './src/index.tsx',
    output: './dist',
    public: './public',
    html: './public/index.html',
    src: './src',
  },
  mode: 'development',
  platform: 'desktop',
  analyzer: true,
};

const config: webpack.Configuration = buildWebpack(options);
```

## Структура проекта

buildWebpack.ts — основная функция сборки Webpack.
buildLoaders.ts — конфигурация загрузчиков.
buildPlugins.ts — подключение и настройка плагинов.
buildResolvers.ts — настройка резолверов для расширений файлов.
buildDevServer.ts — конфигурация сервера разработки.
types.ts — типы для конфигурации сборки.
