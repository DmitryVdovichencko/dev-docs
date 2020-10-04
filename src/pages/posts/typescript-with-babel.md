# Typescript и Babel: "Счастливы Вместе"

Перевод статьи [Matt Turnbull](https://iamturns.com/about/) [TypeScript With Babel: A Beautiful Marriage](https://iamturns.com/typescript-babel/)

Использовать TypeScript еще никогда не было так просто: благодаря TypeScript плагину для Babel (`@babel/preset-typescript`), который стал результатом длительного сотрудничества между командами TypeScript и Babel. В этой статье мы узнаем 4 причины, почему TypeScript и Babel идеальная пара, и пройдем пошаговое руководство на TypeScript за 10 минут.

## А? Что? Зачем?

Сначала, я не понимал необходимость использования новых настроек Babel.

Разве Babel и TypeScript не абсолютно разные вещи? Как Babel осуществляет проверку типов TypeScript? TypeScript уже может производить JS код стандарта ES5 также как и Babel, так в чем идея? Похоже обЪединение Babel и TypeScript только все усложняет?

После нескольких часов изучения проблемы, мое заключение:
TypeScript и Babel - это счастливый союз.

И вот почему:

1) Вы уже используете Babel (или должны).
Вы принадлежите одной из 3-х категорий:

Вы уже используете Babel. Может быть неявно, например, когда Webpack настроен на то, чтобы "скормить" `*.js` файлы Babel (это случай большинства boilerplates, включая create-react-app).

Вы используете Typescript без Babel. Подумайте над тем, чтобы добавить Babel в свой арсенал, он предоставляет множество уникальных возможностей. Читайте далее.

Не используете Babel? Самое время начать.
Пишите на современном JavaScript без страха сломать что-либо.
Ваш JavaScript код должен запускаться в старом браузере? Без проблем, Babel транспилирует код так, чтобы все было okay. Без сомнений используйте последние возможности языка.

У компилятора TypeScript есть похожая фича, которая включается, если поставить преобразование к стнадартам типа ES5 или ES6. 

Но, конфигурация Babel делает это лучше с применением `babel-preset-env`. Вместо привязки к возможностям спецификаций JavaScript (ES5, ES6, и т.д.), вы просто перечисляете окружения, которые вам необходимо поддерживать:

```json
"targets": {
	"browsers": ["last 2 versions", "safari >= 7"],
	"node": "6.10"
}
```

Babel использует `compat-table` для проверки тех возможностей JavaScript, которые нуждаются в преобразовании и использовании полифилов в том окружении, которое настроено.
compat-tablecompat-table
Нужно воздать должное, тому кто назвал этот проект `compat-table`.

Интересная техника, которая используется в `create-react-app`: при разработке компилируем для последних версий браузеров (для быстроты), а на продакшене компилируем с поддержкой наибольшего числа браузеров (для совместимости). Отлично.

Babel супер гибкий в настройках.
Нужен JSX? Flow? TypeScript? Просто установите плагин и Babel обо всем позаботится. Есть огромный выбор официальных плагинов, которые позволяют поддерживать появляющиеся возможности JavaScript. 

А также есть множество сторонних плаигнов: улучшение импортов lodash, расширение возможностей `console.log`, или разделение `console.log`. Можно много чего найти в списке плагинов awesome-babel.

Но, будьте осторожны. Если плагин значительно меняет синтаксис, TypeScript может оказаться не в состоянии распарсить его. Например, высоко ожидаемый оператор опциональной последовательности ( для безопасного обращения к цепочкам свойств или методов объекта `user?.email`) имеет свой плагин Babel:`@babel/plugin-proposal-optional-chaining`

Но, к сожалению, TypeScript не умеет распознавать этот обновленный синтакс.

Без паники, у нас есть альтернатива…

Babel Macros
Знаете кто такой Kent C Dodds? Он создал революционный плагин Babel: `babel-plugin-macros`.

Вместо добавления плагинов в файл конфигурации Babel, вы устанавливаете макрос как зависимость и импортируете его в своем коде. Макрос включается при компиляции Babel, и меняет код как будет нужно.

Вот например. Используем `idx.macro` чтобы устранить нашу боль, пока не пояится официальная поддержка оператора опциональной последовательности.

```javascript
import idx from 'idx.macro';

const friends = idx(
	props,
	_ => _.user.friends[0].friends
);
```

Компилируется в:

```javascript
const friends =
	props.user == null ? props.user :
	props.user.friends == null ? props.user.friends :
	props.user.friends[0] == null ? props.user.friends[0] :
	props.user.friends[0].friends
```

Макросы довольно новые, но их поддержка быстро растет. Особенно после появления в  `create-react-app v2.0`. 

CSS in JS поддерживаются: `styled-jsx`, `styled-components`, и `emotion`. 

Webpack плагины: `raw-loader`, `url-loader`, и `filesize-loader`. И остальные в списке `awesome-babel-macros`.

И вот, что самое лучшее: в отличие от плагинов Babel, все макросы Babel совместимы с TypeScript. 

Еще они помогают: уменьшить число зависимостей, избежать вычислений на стороне клиента, и выявить ошибки на стадии сборки. Подробнее об этом можно почитать здесь.

Улучшенный `console.log`
`console.log` на максиммалках: `scope.macro`

2) Всегда проще использовать ОДИН компилятор.
TypeScript требует использования собственного компилятора — взамен он дает нам суперспособность проверки типов.

Смутные времена (до Babel 7).

Объединить два разных компилятора (TypeScript и Babel) - задача не из легких. Последовательность компиляции была такой: TS > TS Compiler > JS > Babel > JS (снова).

Webpack часто использовался для решения этой проблемы. 

Настариваем Webpack конфиг чтобы скормить файлы  `*.ts` TypeScript, а результат затем передать Babel. 

Но какой TypeScript loader вы используете? 

Два популярных варианта: `ts-loader` и `awesome-typescript-loader`. `README.md`  `awesome-typescript-loader` упоминает о том, что он может быть медленным при определенной нагрузке, и рекоммендует `ts-loader` с `HappyPack` или `thread-loader`. `README.md` для `ts-loader` рекомендует сочетание с `fork-ts-checker-webpack-plugin`, `HappyPack`, `thread-loader`, и / или `cache-loader`.

Да хорош. Стоп. Здесь большинство людей накрывет и они откладывают TypeScript в ящик “слишком сложно”. И я их не виню.

Не так просто настроить TypeScript

Светлое настоящее (с Babel 7).

Разве не здорово иметь один JavaScript компилятор? Не важно, что используется в вашем коде: воможности ES2015, JSX, TypeScript, или вообще что-нибудь экзотическое  — компилятор знает, что делать.

Я только что описал Babel. Cheeky.

Позволяя Babel работать как единственному компилятору, нет необходимости настраивать, или объединять два компилятора в какой-то запутанной магии Webpack.

Это также упрощает всю JavaScript экосистему. Вместо линтеров, систем тестирования, сборщиков, и бойлерплейтов, поддерживающих разные компиляторы, им всего лишь нужно поддерживать Babel. Вы конфигурируете Babel для поддержки того, что необходимо. Скажите "пока" `ts-node`, `ts-jest`, `ts-karma`, `create-react-app-typescript`, и т.п., и используйте вместо этого поддержку Babel. Поддержка Babel есть везде и всюду, посмотрите на страницу установки Babel:

3) Быстрее компилируется.

Внимание! Вам лучше присесть.
Как Babel поддерживает TypeScript код? Он его удаляет.

Да, он вырезает весь TypeScript, преобразует его в "обычный" JavaScript, и идет дальше своей дорогой.

Звучит нелепо, но у этого метода есть два мощных преимущества.

Первое: ️⚡️ ЭТО МОЛНИЕНОСНО! ⚡️.

Большинство разработчиков Typescript сталкиваются с медленно компиляцией в режиме разработки / наблюдения. Вы покодили, сохранили файл, и… затем… вот сейчас… почти… все, вы можете увидеть ваши изменения. Упс, сделали опечатку, исправляем, сохраняем, иии… эх. Это достаточно меденно, что надоедает и убивает весь энтузиазм.

Сложно винить компилятор TypeScript, он выполняет много работы. Сканирует файлы на определение типов (`*.d.ts`), включая `node_modules`, и убеждается что весь ваш код использует их корректно. Вот почему многие выделяют проверку типов Typescript в отдельный процесс. 

Тем не менее,сочетаие Babel + TypeScript поддерживает более быструю компиляцию благодаря превосходному кэшированию Babel и архитектуре пофайловой обработки.

Итак, если Babel выпиливает весь TypeScript код, какой смысл писать на TypeScript? Это приводит нас ко второму преимуществу…

4) Проверка на ошибки типов только когда вы готовы.

Допустим вы поэксперементировали с кодом, быстренько запилили решение, чтобы посмотреть сработает ли ваша идея. Вы сохраняете файл, и TypeScript орет на вас:

“НЕТ! Я не собираюсь это компилировать! Твой код поломался в 42 разных файлах!”

Естественно, вы знаете, что все сломалось. Возможно вы также поломали парочку юнит тестов. 

Но, вы просто эксперементировали, на данный момент. Это становится невыносимым - постоянно убеждаться в том что весь твой код работает безопасно.

В этом второе преимущество Babel выпиливания кода TypeScript при компиляции. Вы пишете код, сохраняете, и он компилируется (очень быстро), без проверки на безопаснось типов. 

Продолжайте экспериментировать с вашим решением до тех пор, пока не будете готовы проверить код на ошибки. 

Такой рабочий процесс не тревожит вас, пока вы кодите.

Тогда  как запустить проверку на ошибки по типам? Добавьте скрипт `npm run check-types`, который вызовет компилятор TypeScript. Я настроил скрипт для запуска тестирования `npm test` чтобы сначала проверить типы, а затем продолжить запуск юнит-тестов.

Это неидеальный союз.

Есть четыре возможности TypeScript которые не компилируются в Babel из-за архитектуры пофайловой обработки.

Не волнуйтесь в этом нет ничего страшного. И TypeScript предупредит вас об этих проблемах если флаг `isolatedModules` включен.
1) Пространства имен.

Решение: не используйте их! Они устарели. Вместо них используйте стандартные ES6 модули (import / export). Правило линтера `tslint` поможет убедиться,что они не используются.
2) Кастуем типы с применением синтаксиса `<newtype>x`.

Решение: Используйте `x as newtype`.

3) Константные перечисления.

Стыд и позор. Пока придется использовать обычные перечисления.

4) Устаревший синтаксис import / export.

Например: 
```javascript
import foo = require(...); 
export = foo;

```

За все годы программирования на TypeScript не встречал такого. Кто пишет такой код? Закнчивайте!

Ok, I’m ready to try TypeScript with Babel!
Yeah!Yeah!
Photo by rawpixel.com
Let’s do this! It should only take about 10 minutes.

I’m assuming you have Babel 7 setup. If not, see the Babel Migration Guide.
1) Rename .js files to .ts

Assuming your files are in /src:
find src -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.ts"' {} ;
2) Add TypeScript to Babel

A few dependencies:

npm install --save-dev @babel/preset-typescript @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread
In your Babel config file (.babelrc or babel.config.js):
{
	"presets": [
			"@babel/typescript"
	],
	"plugins": [
			"@babel/proposal-class-properties",
			"@babel/proposal-object-rest-spread"
	]
}
TypeScript has a couple of extra features which Babel needs to know about (via those two plugins listed above).

Babel looks for .js files by default, and sadly this is not configurable within the Babel config file.

If you use Babel CLI, add --extensions '.ts'

If you use Webpack, add 'ts' to resolve.extensions array.
3) Add ‘check-types’ command

In package.json:
"scripts": {
	"check-types": "tsc"
}
This command simply invokes the TypeScript compiler (tsc).
Where does tsc come from? We need to install TypeScript:
npm install --save-dev typescript
To configure TypeScript (and tsc), we need a tsconfig.json file in the root directory:
{
	"compilerOptions": {
		// Target latest version of ECMAScript.
		"target": "esnext",
		// Search under node_modules for non-relative imports.
		"moduleResolution": "node",
		// Process & infer types from .js files.
		"allowJs": true,
		// Don't emit; allow Babel to transform files.
		"noEmit": true,
		// Enable strictest settings like strictNullChecks & noImplicitAny.
		"strict": true,
		// Disallow features that require cross-file information for emit.
		"isolatedModules": true,
		// Import non-ES modules as default imports.
		"esModuleInterop": true
	},
	"include": [
		"src"
	]
}
Done.

Well, the setup is done. Now run npm run check-types (watch mode: npm run check-types -- --watch) and ensure TypeScript is happy with your code. Chances are you’ll find a few bugs you didn’t know existed. This is a good thing! The Migrating from Javascript guide will help here.
Microsoft’s TypeScript-Babel-Starter guide contains additional setup instructions, including installing Babel from scratch, generating type definition (d.ts) files, and using it with React.
What about linting?
Use tslint.

Update (Feb 2019): Use ESlint! The TypeScript team are focusing on ESLint integration since January. It’s easy to configure ESLint thanks to the @typesript-eslint project. For inspiration, check out my mega ESLint config which includes TypeScript, Airbnb, Prettier, and React.
Babel + TypeScript = Beautiful Marriage.
Love heartsLove hearts
Photo by Akshar Dave
Babel is the one-and-only JavaScript compiler you need. It can be configured to handle anything.

There’s no need to battle with two competing JavaScript compilers. Simplify your project configuration and take advantage of Babel’s amazing integration with linters, test runners, build systems, and boilerplates.

The Babel and TypeScript combo is lightning fast to compile, and allows you to stay in the zone as you code, and check types only when you’re ready.

Prediction: TypeScript will rise.
According to the most recent Stack Overflow Developer Survey, JavaScript is the most popular language, with TypeScript trailing at #12. This is still a great achievement for TypeScript, beating out Ruby, Swift, and Go.
Developer survey resultsDeveloper survey results
I predict TypeScript will crack the top 10 by next year.

The TypeScript team are working hard to spread the love. This Babel preset was a year long collaboration, and their new focus is on improving ESLint integration. This is a smart move — leverage the features, community, and plugins of existing tools. To develop competing compilers and linters is wasted effort.
The path to TypeScript is paved by simply tweaking the config of our favourite tools. The barrier to entry has been smashed.

With the rise in popularity of VS Code, developers are already setup with an amazing TypeScript environment. Autocomplete on steroids will bring tears of joy.
It’s also now integrated into create-react-app v2.0, exposing TypeScript to an audience of 200k downloads per month.
If you’ve been put off by TypeScript because it’s difficult to setup, it’s no longer an excuse. It’s time to give it a go.
