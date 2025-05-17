# Webpack React Ts default build

## Основные возможности

- **React 18** и **TypeScript** для строгой типизации и масштабируемости.
- **Webpack 5** с модульной конфигурацией для гибкой настройки.
- Поддержка **HMR (Hot Module Replacement)** и **React Refresh** для быстрой разработки.
- Оптимизация CSS с помощью **MiniCssExtractPlugin** и **cssnano** в продакшене.
- **Tree Shaking** и **Code Splitting** для минимизации бандлов.
- Анализ бандлов с **Webpack Bundle Analyzer**.
- Поддержка **CSS Modules** и автоматическое добавление браузерных префиксов через **Autoprefixer**.
- Быстрая проверка типов с **ForkTsCheckerWebpackPlugin**.
- Копирование статических ресурсов (например, локализаций) с **CopyWebpackPlugin**.

## Доступные скрипты

В проекте настроены следующие команды:

- **`npm run start`**
    Запускает dev-сервер с HMR и React Refresh на порту 3000 (или другом, указанном через `--env port=XXXX`).

- **`npm run build:dev`**
    Собирает проект в режиме разработки (без минификации, с source maps).

- **`npm run build:prod`**
    Собирает оптимизированный продакшен-бандл (с минификацией, tree shaking и source maps).

- **`npm run build:analyzer`**
    Собирает продакшен-бандл и запускает Webpack Bundle Analyzer для анализа размера бандлов.

## Структура проекта

```
├── config/               # Конфигурация Webpack
│   ├── buildWebpack.ts   # Основная функция сборки
│   ├── utils/            # Утилиты (например, CSS-лоадеры)
│   └── types/            # Типы для конфигурации
├── public/               # Статические файлы
│   ├── index.html        # HTML-шаблон
│   ├── favicon.ico       # Иконка
│   └── locales/          # Файлы локализации (копируются в build)
├── src/                  # Исходный код приложения
│   ├── index.tsx         # Точка входа
│   └── ...               # Компоненты, стили и т.д.
├── build/                # Собранные файлы (создается при сборке)
├── package.json          # Зависимости и скрипты
└── README.md             # Документация
```

## Конфигурация Webpack

Webpack настроен с учетом современных практик:

- **Входная точка**: `src/index.tsx`.
- **Выходная папка**: `build/`.
- **Лоадеры**:
    - `ts-loader` с `ReactRefreshTypeScript` для TypeScript и HMR.
    - `css-loader` с поддержкой CSS Modules.
    - `postcss-loader` с плагинами `autoprefixer` и `cssnano` (в продакшене).
    - `asset/resource` для обработки изображений (PNG, SVG, JPG, etc.).
- **Плагины**:
    - `HtmlWebpackPlugin`: генерирует HTML с подключением бандлов.
    - `MiniCssExtractPlugin`: извлекает CSS в отдельные файлы (продакшен).
    - `ForkTsCheckerWebpackPlugin`: ускоряет проверку типов.
    - `ReactRefreshWebpackPlugin`: обеспечивает React Refresh в dev-режиме.
    - `CopyWebpackPlugin`: копирует статические ресурсы (например, локализации).
    - `BundleAnalyzerPlugin`: анализирует размер бандлов (опционально).
- **Dev Server**:
    - Порт: 3000 (настраиваемый).
    - HMR и `historyApiFallback` для поддержки SPA.
- **Source Maps**:
    - `eval-cheap-module-source-map` в dev-режиме.
    - `source-map` в продакшене.
- **Оптимизация**:
    - Tree Shaking для удаления неиспользуемого кода.
    - Минификация CSS и JS в продакшене.
    - Хеширование имен файлов для кеширования.

## Разработка

1. Создавайте компоненты в папке `src/`.
2. Используйте CSS Modules для стилизации (например, `styles.module.css`).
3. Для локализации добавляйте файлы в `public/locales/` — они автоматически копируются в `build/locales/`.

## Содействие

1. Форкните репозиторий.
2. Создайте ветку: `git checkout -b feature/ваша-фича`.
3. Внесите изменения и закоммитьте: `git commit -m "Добавлена ваша фича"`.
4. Отправьте в репозиторий: `git push origin feature/ваша-фича`.
5. Создайте Pull Request.

Сообщения об ошибках и предложения приветствуются в [Issues](https://github.com/Isaev-Rustam/webpack-default-build/issues).
