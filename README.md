# Front-end startup template

Author: <a href="http://odinokun.com" target="_blank">Odinokun</a>

## Technologies:
* Gulp 4.0
* Pug(Jade)
* Sass(Scss)
* Vanilla JS

## How to use:
1. install node.js(8.9.4)
2. clone this repo
3. cd path/to/this repository
4. npm i gulpjs/gulp-cli -g  // Install the latest Gulp CLI tools globally
5. npm i
6. run "gulp" command to start

## Structure:
* img
* js
* php
* pug
    * elements (мелкие элементы, например кнопки или пагинация)
    * pages
* sprite
* style
  * core (базовые стили)
    * base
    * mixins
    * variables
  * pages (стили для страниц сайта)
* vendors (сюда заливаем все чего нет в NPM и подключаем эти в файлы foundation)
