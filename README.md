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

8.  Запускаем проект локально
    npm start или
    yarn start

9.  Loader react-loader-spinner
    npm install react-loader-spinner --save
    yarn add react-loader-spinner

xxxxxxxxxxxxxxxxxxxxxxxxxxx
Деплой Netlify

1.Создать файл netlify.toml
[build]
publish = "build"

[[redirects]]
from = "/\*"
to = "/index.html"
status = 200

2.Установить набор инструментов Netlify
npm install netlify -cli -g или
yarn add netlify-cli

3.Подтверждаем авторизацию
netlify login
и в открывшемся браузере нажимаем Authorize

4.В package.json а scripts добавляем 2 строки:
"predeploy": "npm run build",
"deploy": "netlify deploy -p"

5.Стрелками на клавиатуре подтверждаем выбор
2х пунктов последовательно

6. Получаем ссылку на Live URL
   Website URL: https://corund1976-goit-react-hw-05-movies.netlify.app

7.После обновления приложения перед загрузкой на хостинг
каждый раз запускаем
npm run deploy

хххххххххххххххххххххххх
Абсолютные импорты
https://create-react-app.dev/docs/importing-a-component/#absolute-imports

1. создаем jsconfig.json
2. наполняем, указываем относительный корень, например "src"
   {
   "compilerOptions": {
   "baseUrl": "src"
   },
   "include": ["src"]
   }
3. теперь при импортах указываем короткий путь,
   относительно "src"
   вместо пути src/components/Button.js теперь пишем
   import Button from 'components/Button';
