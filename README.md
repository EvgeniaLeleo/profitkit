# Тестовое задание ProfitKit

[Demo](https://profitkit-leleo.onrender.com/)

[<img width="639" alt="image" src="https://user-images.githubusercontent.com/88904845/218285184-ce3a7abe-5a62-444b-aa70-4a8c5ff800d6.png">](https://profitkit-leleo.onrender.com/)

## Установка

Склонируйте репозиторий и установите зависимости

```sh
cd profitkit
npm install
```

Для development сборки выполните команду:

```sh
npm run build:d
```

Для production сборки:

```sh
npm run build
```

Для запуска сервера в development-режиме:

```sh
npm run start
```

## Структура и функционал приложения

- [x] на странице отображаются карточки товаров, данные которых находятся в файле `data.json`
- [x] реализованы табы для перехода в разделы "Популярные товары", "Недавно купили", "Вас может заинтересовать"
- [x] реализованы слайдеры для карточек и фотографий товаров
- [x] на карточках имеется поле "количество", при этом нельзя уменьшить его до 0 (кнопка `-` блокируется), и нельзя положить в корзину больше товаров, чем указано в поле `rest` для данного товара в базе данных (при достижении максимального количества товара кнопка `+` блокируется)
- [x] вводимые в поле "количество" символы валидируются: ввести можно только цифры от 0 до 9, при этом число не превзойдет общее количество товара `rest` и будет не меньше 1
- [x] при нажатии на клавиатуре клавиш 🔽 и 🔼 значение в поле "количество" уменьшается или увеличивается

## Особенности реализации

- [x] приложение реализовано как SPA
- [x] в проекте настроено рабочее окружение и настроен единый стиль кодирования:

  - [x] линтер для JS кода:

  ```sh
  npm run lint:js
  ```

  - [x] линтер для SCSS кода:

  ```sh
  npm run lint:scss
  ```

  - [x] prettier для форматирования кода:

  ```sh
  npm run format
  ```

  - [x] единая команда для форматирования JS и SCSS кода:

  ```sh
  npm run lint
  ```

- [x] запуск проверки типов осуществляется перед созданием коммита автоматически (с помощью husky)

- [x] реализована адаптивная верстка при `width > 260px`

## Технический стек приложения

- [x] HTML, SCSS, JavaScript
- [x] Webpack
- [x] Husky
- [x] Eslint, Prettier
