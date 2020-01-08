---
title: "Покоряем управление навигацией с React-router и Redux" 
date: "2020-01-08"
tags: ["redux"]
---

# Покоряем управление навигацией с React-router и Redux :rocket:

Основной компонент общий для традиционных приложений и SPA это навигация от одной страницы к другой.

В этой статье мы рассмотрим как собрать навигацию для React/Redux приложений и посмотрим как поддерживать состояние при переходах по навигации.

## Приложение с которым мы собираемся работать

Чтобы разобраться с навигацией я создал небольшое простое приложение EmojiLand



EmojiLand простое приложение, но достаточно хорошее, чтобы переварить те мысли, которыми я поделюсь в этой статье.

Заметьте, что приложение остается на выбранном маршруте, но, когда будет нажата кнопка, оно выполнит какой-то фальшивый `action` и, по его завершении перейдет на другой маршрут.

В реальном мире, это фальшивое действие может быть запросом на какой-нибудь ресурс или любое другое асинхронное действие.

## Краткий обзор EmojiLand

Клонируем репозиторий с GitHub

`git clone https://github.com/ohansemmanuel/nav-state-react-router.git`

Переходим в директорию репозитория: 

`cd nav-state-react-router`

Устанавливаем зависимости: 

`yarn install`
или
`npm install`

Запускаем приложение:

`yarn start` 
или 
`npm start`

Приложение построено на базе `react` и `redux` а также `react-router`

В `containers/App.js` вы найдете 6 маршрутов этого приложения.

```javascript
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={AngryDude} />
      <Route path="/quiet" component={KeepQuiet} />
      <Route path="/smile" component={SmileLady} />
      <Route path="/think" component={ThinkHard} />
      <Route path="/thumbs" component={ThumbsUp} />
      <Route path="/excited" component={BeExcited} />
    </Switch>
  </Router>
);
```
Каждый маршрут ведет к emoji компоненту. `/quiet` например отобразит компонент `KeepQuiet`.

А вот как выглядит компонент `KeepQuiet`:

```javascript
import React from "react";
import EmojiLand from "../components/EmojiLand";
import keepQuietImg from "../Images/keepquiet.png";
import emojiLand from "./emojiLand";
const KeepQuiet = ({ appState, handleEmojiAction }) => (
    <EmojiLand
      EmojiBg="linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"
      EmojiImg={keepQuietImg}
      EmojiBtnText="Keep Calm and Stay Quiet."
      HandleEmojiAction={handleEmojiAction}
      appState={appState}
    />
  );
export default emojiLand(KeepQuiet);
```

Это простой функциональный компонент который отображает EmojiLand компонент

Важно то, что EmojiLand принимает несколько свойств таких как фоновый градиент, изображение, и текст кнопки

Более деликатным является экспортируемый компонент

```javascript
export default emojiLand(KeepQuiet);
```

`emojiLand` здесь это компонент высокого порядка. Все что он делает, это когда вы кликаете на кнопку любого из emoji компонентов, симулируется фейковое действие на 1000мс, на практике это может быть сетевой запрос.

`emojiLand` компонент высшего порядка делает это передачей свойств `appState` emoji компонентам. В нашем случае, `KeepQuiet`



Когда любой из компонентов `emoji` впервые отрендерится, `appState` пустая строка, `""`. После `1000мс`, `appState` изменится на `DO_SOMETHING_OVER`

`DO_SOMETHING_OVER` представлено как константа:

В `constants/action-types`:

```javascript
export const DO_SOMETHING_OVER = "DO_SOMETHING_OVER";
```
Примерно так работает каждый `emoji` компонент в этом приложении.
Также помните, что каждый маршрут это отдельный рендеринг EmojiLand компонента

## Перемещайся по React приложению как чемпион

Допустим по завершению ложного действия мы хотим перейти на другой маршрут приложенния EmojiLand

Как это сделать?

Во-первых, помним что при переходе на стартовый маршрут будет отображен компонент `theAngryDude`

Наиболее декларативный подход для поддержки перемещения это использование компонента `Redirect` из `React-router`


Раз мы хотим переместится из компонента `AngryDude`, сначала, импортируем его в `containers/AngryDude.js`:

```javascript
import { Redirect } from "react-router-dom";
```
Для того чтобы редирект сработал он должен быть отображен как обычный компонент. В нашем случае мы перенаправимся когда `appState` установится в значение `DO_SOMETHING_OVER`, т.е. ложное действие окончено.

```javascript
const AngryDude = ({ appState, handleEmojiAction }) => {
    return appState === DO_SOMETHING_OVER ? (
<Redirect to="/thumbs" />
    ) : (
      <EmojiLand
        EmojiBg="linear-gradient(-180deg, #611A51 0%, #10096D 100%)"
        EmojiImg={angryDudeImg}
        EmojiBtnText="I'm so pissed. Click me"
        HandleEmojiAction={this._handleEmojiAction}
        appState={this.props.appState}
 />
 ```
 
 То же самое выполним для остальных компонентов. Что ж похоже это было довольно просто? Но есть проблемка
 
 ### Избегайте перезаписи редиректов в истории браузера
 
Я открою новый браузер прокликаю все приложение, но, в какой-то момент я попробую вернуться назад с помощью кнопки браузера `Назад`.

В результате я не вернусь к предыдущему маршруту, а перейду к стартовой странице своего браузера.

Почему?

Это потому, что по умолчанию использование компонента `Redirect` заменит текущую локацию в истории браузера.

Так что даже если мы прошли несколько маршрутов, они подменяли друг друга в записях браузера.

А значит, с точки зрения браузера мы посетили лишь один маршрут и таким образом нажав на кнопку `Назад` мы попадем на домашнюю страницу.

Это как с массивами: вместо чтобы добавлять эдеметы в массив через `push `, мы меняем в нем текущее значение.

Вот как это исправить.

Компонент `Redirect` может принимать свойство `push` которое позволит избежать подобное поведение. Со свойством `push` вы будете добавлять (`pushить`) каждый маршрут в стэк истории браузера и они НЕ будут заменены.

```javascript
return appState === DO_SOMETHING_OVER ? (
    <Redirect push to="/thumbs" />
  ) : (
    <EmojiLand
      EmojiBg="linear-gradient(-180deg, #611A51 0%, #10096D 100%)"
      EmojiImg={angryDudeImg}
      EmojiBtnText="I'm so pissed. Click me"
      HandleEmojiAction={handleEmojiAction}
      appState={appState}
    />
  );
```

### Поддержка состояния при навигации

Перемещаясь от одного маршрута к другому, переменные предыдущего маршрута не передадлутся следующему маршруту. Они потеряны.

Да потеряны, если вы ничего не предпримите.

Что интересно компонент `Redirect` делает это достточно легко

Вся штука в том, чтор в свойствах `Redirect` можно передать как строку так и объект.
А значит, помимо маршрута назначения `to` можно передать и объект `state`.

```javascript
<Redirect
      push
to={{
        pathname: "/thumbs",
        state: {
          humanType: "Cat Person",
          age: 12,
          sex: "none"
        }
      }}
    />
```

