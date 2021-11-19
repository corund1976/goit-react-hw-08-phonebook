ххххххххххххххххххххххххххххххххххххххххххх

1. Устанавливаем Create React App (в текущей папке, которая открыта в VSCode)
   npx create-react-app .

2. В package.json добавляем после 3ей строки "private" св-во "homepage"
   (перед "dependencies") со своими значениями
   ("homepage": "https://corund1976.github.io/goit-react-hw-07-phonebook",)
   "homepage": "https://myusername.github.io/my-app"

3. Добавляем 2 новых скрипта в package.json
   "scripts": {
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",

4. Добавляем пакет gh-pages для автоматического деплоя приложения
   npm install --save gh-pages или
   yarn add gh-pages

5. Копируем исходник (папку src) и Запускаем деплой
   npm run deploy

6. Устанавливаем Redux Toolkit (ранее назывался "Redux Starter Kit")
   npm install @reduxjs/toolkit или
   yarn add @reduxjs/toolkit

7. Устанавливаем redux-persist
   npm i redux-persist
   yarn add redux-persist

8. Устанавливаем React Redux для связи React с Redux
   npm i react-redux или
   yarn add react-redux

9. Устанавливаем axios
   npm i axios
10. Устанавливаем react-router
    npm i react-router

11. Запускаем проект локально
    npm start или
    yarn start
