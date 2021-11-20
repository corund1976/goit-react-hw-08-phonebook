ххххххххххххххххххххххххххххххххххххххххххх

1. Устанавливаем Create React App (в текущей папке, которая открыта в VSCode)
   npx create-react-app .

2. Копируем исходники с предыдущего проектка в папку src

3. Устанавливаем Redux Toolkit (ранее назывался "Redux Starter Kit")
   npm install @reduxjs/toolkit или
   yarn add @reduxjs/toolkit

4. Устанавливаем redux-persist
   npm i redux-persist
   yarn add redux-persist

5. Устанавливаем React Redux для связи React с Redux
   npm i react-redux или
   yarn add react-redux

6. Устанавливаем axios
   npm i axios

7. Устанавливаем react-router более ранней верси !!!!! ВАЖНО !!!!!
   npm i react-router-dom@5.3.0

Или все 5 одной командой
npm i @reduxjs/toolkit redux-persist react-redux react-router-dom@5.3.0 axios

8. Запускаем проект локально
   npm start или
   yarn start

Для деплоя на GitHub Pages: 9. В package.json добавляем после 3ей строки "private" св-во "homepage"
(перед "dependencies") со своими значениями
("homepage": "https://corund1976.github.io/goit-react-hw-07-phonebook",)
"homepage": "https://myusername.github.io/my-app"

10. Добавляем 2 новых скрипта в package.json
    "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",

11. Добавляем пакет gh-pages для автоматического деплоя приложения
    npm install --save gh-pages или
    yarn add gh-pages

12. Запускаем деплой
    npm run deploy
