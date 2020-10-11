---
title: "Используем Redux и Immutable.js правильно" 
date: "2020-10-11"
tags: ["js","ru"]
---

# Используем Immutable.JS с Redux

## Table of Contents

- [Why should I use an immutable-focused library such as Immutable.JS?](#why-should-i-use-an-immutable-focused-library-such-as-immutablejs)
- [Why should I choose Immutable.JS as an immutable library?](#why-should-i-choose-immutablejs-as-an-immutable-library)
- [What are the issues with using Immutable.JS?](#what-are-the-issues-with-using-immutablejs)
- [Is Immutable.JS worth the effort?](#is-using-immutablejs-worth-the-effort)
- [What are some opinionated Best Practices for using Immutable.JS with Redux?](#what-are-some-opinionated-best-practices-for-using-immutablejs-with-redux)

## Зачем вообще использовать библиотеки для работы с неизменяемыми структурами данных типа Immutable.JS?

Библиотеки для неизменяемых данных, такие как Immutable.JS, разработаны чтобы преодолеть проблемы с неизменностью в JavaScript, они предоставляют преимущества использования неизменных структур данных, поддерживая производительность, которая необходима вашему приложению.

Выберите ли вы использование таких библиотек, или продолжите использовать чистый JavaScript, зависит от готовности добавить еще одну зависимость в ваш проект, или от твоей уверенности что ты сможешь избежать ошибок и подводных камней  при работе с неизменностью в JavaScript.

В независимости от твоего выбора, убедись что ты знаком с концепцией [immutability, side effects and mutation](./structuring-reducers/PrerequisiteConcepts.md#note-on-immutability-side-effects-and-mutation). В частности, нужно хорошо представлять что делает JavaScript при обновлении и копировании значений, чтобы защититься от внезапных изменений которые могут снизить производительность приложения или вобще его крашнуть.

#### Подробная информация

**Документация**

- [Recipes: immutability, side effects and mutation](./structuring-reducers/PrerequisiteConcepts.md#note-on-immutability-side-effects-and-mutation)

**Статьи**

- [Introduction to Immutable.js and Functional Programming Concepts](https://auth0.com/blog/intro-to-immutable-js/)
- [Pros and Cons of using immutability with React.js](http://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/)

## Почему я должен выбрать Immutable.JS в качестве библиотеки для работы с неизменностью?

Immutable.JS был разработан для работы с неизменностью в JavaScript  без потерь производительности. Его основные преимущества:

#### Гарантированная неизменность

Данные собранные в объекты Immutable.JS никогда не меняются. Всегда возвращается новая копия. В отличие от JavaScript, где некоторые операции не менют данных (ну например методы массивов Array, такие как map, filter, concat, forEach, и т.д.), но некоторые меняют ( методы массивов Array pop, push, splice, и т.д.).

#### Богатое API

Immutable.JS предоставляет широкий выбор структур для хранения данных (например Maps, Lists, Sets, Records, etc.), и значительный спектр методов для манипуляций с данными, для сортировки, фиьтрации, группировки, реверсирования, сворачивания, и создания подколлекций.

#### Производительность

Под капотом Immutable.JS много работает на оптимизацию производительности. В этом его сила, потому как использование неизменных структур данных способствует частому копированию значений. В частности, при работе с неизменностью в сложных структурах данных, таких как вложенное дерево состояния Redux, может генерироваться множество промежуточных объектов, которые жрут память и тормозят производительность пока сборщик мусора в браузере все это вычищает.

Immutable.JS избегает этого [разумно отдавая данные](https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2#.z1g1ofrsi), минимизируя копирование данных. Это включает в себя сложную цепочку операций которую нужно поддерживать не создавая ненужных (и дорогих) клонированных промежуточных данных, которые затем быстро выбросят в мусорку.

Конечно, вы этого не увидите  - данные передаваемые в объект Immutable.JS неизменны. В отличие от, _промежуточных_ данных сгенерированных цепочкой методов Immutable.JS, которые могут свободно меняться. А вы тем временем получите все преимущества работы с неизмменными данными практически без потерь производительности.

#### Что почитать?

**Статьи**

- [Immutable.js, persistent data structures and structural sharing](https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2#.6nwctunlc)
- [PDF: JavaScript Immutability - Don’t go changing](https://www.jfokus.se/jfokus16/preso/JavaScript-Immutability--Dont-Go-Changing.pdf)

**Библиотеки**

- [Immutable.js](https://facebook.github.io/immutable-js/)

## Какие проблемы при использовании Immutable.JS?

Силу Immutable.JS нужно использовать разумно,иначе это может привести к определенным проблемам. Заметьте, все эти проблемы по силам преодолеть если акуратно писать код.

#### Сложности взаимодействия

JavaScript не предоставляет неизменных структур данных. Так что, чтобы юзать Immutable.JS со всеми плюшками неизменности, данные придется хранить в объектах Immutable.JS (типа `Map` или `List`, и т.д.). Когда мы их собираем таким способом, становится сложнее взаимодействовать с простыми объектами JavaScript.

Например, вы большете не сможете обращаться к свойствам объекта по старинке, как в JavaScript через точку или квадратные скобки. Вместо них придется юзать методы Immutable.JS’s `get()` или `getIn()`, котрый использует страшный синтаксис в виде массива строк, каждая из которых является свойством объекта.

Например, вместо `myObj.prop1.prop2.prop3`, используйте `myImmutableMap.getIn([‘prop1’, ‘prop2’, ‘prop3’])`.

Это не только делает ужасным взаимодествие с вашим кодом, но и с другими библиотекми, такими как lodash или ramda, котрые ожидают простые объекты JavaScript.

Вообще, у Immutable.JS объектов есть метод `toJS()`, который возвращает стандартные JavaScript структуры данных, но этот метод очень медленный, и его повсеместное использование убивает все примущества производительности Immutable.JS.

### Попробовав раз,ем и сейчас. После применения Immutable.JS расползется по всему вашему коду

Однажды собрав данные с Immutable.JS, придется везде и всюду использовать методы Immutable.JS’s `get()` или `getIn()` для доступа к данным.

Появляется эффект распространения Immutable.JS по всему коду, включая компоненты, где бы не очень хотелось его видеть. Ваш код должен знать что есть Immutable.JS объект, а что нет. И это делает сложным выпиливание Immutable.JS из вашего приложения в будущем, если это понадобится.

Этих проблем можно избежать [разделяя логику приложения и структуры данных](https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2#.z1g1ofrsi), как отмечено в разделе [лучших практик](#what-are-some-opinionated-best-practices-for-using-immutablejs-with-redux) далее.

### Отсутствие деструктуризации и spread

Поскольку данные теперь достаем с помощью методов Immutable.JS `get()` и `getIn()`, больше нельзя использовать деструктуризацию или spread JavaScript, что делает код не таким элегантным.

### Не вписывается для маленьких данных которые часто меняются

Immutable.JS works best for collections of data, and the larger the better. It can be slow when your data comprises lots of small, simple JavaScript objects, with each comprising a few keys of primitive values.

Note, however, that this does not apply to the Redux state tree, which is (usually) represented as a large collection of data.

### Difficult to Debug

Immutable.JS objects, such as `Map`, `List`, etc., can be difficult to debug, as inspecting such an object will reveal an entire nested hierarchy of Immutable.JS-specific properties that you don’t care about, while your actual data that you do care about is encapsulated several layers deep.

To resolve this issue, use a browser extension such as the [Immutable.js Object Formatter](https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog), which surfaces your data in Chrome Dev Tools, and hides Immutable.JS’s properties when inspecting your data.

### Breaks object references, causing poor performance

One of the key advantages of immutability is that it enables shallow equality checking, which dramatically improves performance.

If two different variables reference the same immutable object, then a simple equality check of the two variables is enough to determine that they are equal, and that the object they both reference is unchanged. The equality check never has to check the values of any of the object’s properties, as it is, of course, immutable.

However, shallow checking will not work if your data encapsulated within an Immutable.JS object is itself an object. This is because Immutable.JS’s `toJS()` method, which returns the data contained within an Immutable.JS object as a JavaScript value, will create a new object every time it’s called, and so break the reference with the encapsulated data.

Accordingly, calling `toJS()` twice, for example, and assigning the result to two different variables will cause an equality check on those two variables to fail, even though the object values themselves haven’t changed.

This is a particular issue if you use `toJS()` in a wrapped component’s `mapStateToProps` function, as React-Redux shallowly compares each value in the returned props object. For example, the value referenced by the `todos` prop returned from `mapStateToProps` below will always be a different object, and so will fail a shallow equality check.

```js
// AVOID .toJS() in mapStateToProps
function mapStateToProps(state) {
  return {
    todos: state.get('todos').toJS() // Always a new object
  }
}
```

When the shallow check fails, React-Redux will cause the component to re-render. Using `toJS()` in `mapStateToProps` in this way, therefore, will always cause the component to re-render, even if the value never changes, impacting heavily on performance.

This can be prevented by using `toJS()` in a Higher Order Component, as discussed in the [Best Practices section](#what-are-some-opinionated-best-practices-for-using-immutablejs-with-redux) below.

#### Further Information

**Articles**

- [Immutable.js, persistent data structures and structural sharing](https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2#.hzgz7ghbe)
- [Immutable Data Structures and JavaScript](http://jlongster.com/Using-Immutable-Data-Structures-in-JavaScript)
- [React.js pure render performance anti-pattern](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.9ucv6hwk4)
- [Building Efficient UI with React and Redux](https://www.toptal.com/react/react-redux-and-immutablejs)

**Chrome Extension**

- [Immutable Object Formatter](https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog)

## Is Using Immutable.JS worth the effort?

Frequently, yes. There are various tradeoffs and opinions to consider, but there are many good reasons to use Immutable.JS. Do not underestimate the difficulty of trying to track down a property of your state tree that has been inadvertently mutated.

Components will both re-render when they shouldn’t, and refuse to render when they should, and tracking down the bug causing the rendering issue is hard, as the component rendering incorrectly is not necessarily the one whose properties are being accidentally mutated.

This problem is caused predominantly by returning a mutated state object from a Redux reducer. With Immutable.JS, this problem simply does not exist, thereby removing a whole class of bugs from your app.

This, together with its performance and rich API for data manipulation, is why Immutable.JS is worth the effort.

#### Further Information

**Documentation**

- [Troubleshooting: Nothing happens when I dispatch an action](./Troubleshooting.md#nothing-happens-when-i-dispatch-an-action)

## What are some opinionated Best Practices for using Immutable.JS with Redux?

Immutable.JS can provide significant reliability and performance improvements to your app, but it must be used correctly. If you choose to use Immutable.JS (and remember, you are not required to, and there are other immutable libraries you can use), follow these opinionated best practices, and you’ll be able to get the most out of it, without tripping up on any of the issues it can potentially cause.

### Never mix plain JavaScript objects with Immutable.JS

Never let a plain JavaScript object contain Immutable.JS properties. Equally, never let an Immutable.JS object contain a plain JavaScript object.

#### Further Information

**Articles**

- [Immutable Data Structures and JavaScript](http://jlongster.com/Using-Immutable-Data-Structures-in-JavaScript)

### Make your entire Redux state tree an Immutable.JS object

For a Redux app, your entire state tree should be an Immutable.JS object, with no plain JavaScript objects used at all.

- Create the tree using Immutable.JS’s `fromJS()` function.

- Use an Immutable.JS-aware version of the `combineReducers` function, such as the one in [redux-immutable](https://www.npmjs.com/package/redux-immutable), as Redux itself expects the state tree to be a plain JavaScript object.

- When adding JavaScript objects to an Immutable.JS Map or List using Immutable.JS’s `update`, `merge` or `set` methods, ensure that the object being added is first converted to an Immutable object using `fromJS()`.

**Example**

```js
// avoid
const newObj = { key: value }
const newState = state.setIn(['prop1'], newObj)
// newObj has been added as a plain JavaScript object, NOT as an Immutable.JS Map

// recommended
const newObj = { key: value }
const newState = state.setIn(['prop1'], fromJS(newObj))
// newObj is now an Immutable.JS Map
```

#### Further Information

**Articles**

- [Immutable Data Structures and JavaScript](http://jlongster.com/Using-Immutable-Data-Structures-in-JavaScript)

**Libraries**

- [redux-immutable](https://www.npmjs.com/package/redux-immutable)

### Use Immutable.JS everywhere except your dumb components

Using Immutable.JS everywhere keeps your code performant. Use it in your smart components, your selectors, your sagas or thunks, action creators, and especially your reducers.

Do not, however, use Immutable.JS in your dumb components.

#### Further Information

**Articles**

- [Immutable Data Structures and JavaScript](http://jlongster.com/Using-Immutable-Data-Structures-in-JavaScript)
- [Smart and Dumb Components in React](http://jaketrent.com/post/smart-dumb-components-react/)

### Limit your use of `toJS()`

`toJS()` is an expensive function and negates the purpose of using Immutable.JS. Avoid its use.

#### Further Information

** Discussions**

- [Lee Byron on Twitter: “Perf tip for #immutablejs…”](https://twitter.com/leeb/status/746733697093668864)

### Your selectors should return Immutable.JS objects

Always. This practice has several advantages:

- It avoids unnecessary rerenders caused by calling `.toJS()` in selectors (since `.toJS()` will always return a new object).
  - It is possible to memoize selectors where you call `.toJS()`, but it’s redundant when just returning Immutable.js objects without memoizing will suffice.
- It establishes a consistent interface for selectors; you won’t have to keep track of whether an Immutable.js object or plain JavaScript object will be returned.

### Use Immutable.JS objects in your Smart Components

Smart components that access the store via React Redux’s `connect` function must use the Immutable.JS values returned by your selectors. Make sure you avoid the potential issues this can cause with unnecessary component re-rendering. Memoize your selectors using a library such as reselect if necessary.

#### Further Information

**Documentation**

- [Recipes: Computing Derived Data](./ComputingDerivedData.md)
- [FAQ: Immutable Data](../faq/ImmutableData.md#immutability-issues-with-react-redux)
- [Reselect Documentation: How do I use Reselect with Immutable.js?](https://github.com/reduxjs/reselect/#q-how-do-i-use-reselect-with-immutablejs)

**Articles**

- [Redux Patterns and Anti-Patterns](https://tech.affirm.com/redux-patterns-and-anti-patterns-7d80ef3d53bc#.451p9ycfy)

**Libraries**

- [Reselect: Selector library for Redux](https://github.com/reduxjs/reselect)

### Never use `toJS()` in `mapStateToProps`

Converting an Immutable.JS object to a JavaScript object using `toJS()` will return a new object every time. If you do this in `mapStateToProps`, you will cause the component to believe that the object has changed every time the state tree changes, and so trigger an unnecessary re-render.

#### Further Information

**Documentation**

- [FAQ: Immutable Data](../faq/ImmutableData.md#how-can-immutability-in-mapstatetoprops-cause-components-to-render-unnecessarily)

### Never use Immutable.JS in your Dumb Components

Your dumb components should be pure; that is, they should produce the same output given the same input, and have no external dependencies. If you pass such a component an Immutable.JS object as a prop, you make it dependent upon Immutable.JS to extract the prop’s value and otherwise manipulate it.

Such a dependency renders the component impure, makes testing the component more difficult, and makes reusing and refactoring the component unnecessarily difficult.

#### Further Information

**Articles**

- [Immutable Data Structures and JavaScript](http://jlongster.com/Using-Immutable-Data-Structures-in-JavaScript)
- [Smart and Dumb Components in React](http://jaketrent.com/post/smart-dumb-components-react/)
- [Tips For a Better Redux Architecture: Lessons for Enterprise Scale](https://hashnode.com/post/tips-for-a-better-redux-architecture-lessons-for-enterprise-scale-civrlqhuy0keqc6539boivk2f)

### Use a Higher Order Component to convert your Smart Component’s Immutable.JS props to your Dumb Component’s JavaScript props

Something needs to map the Immutable.JS props in your Smart Component to the pure JavaScript props used in your Dumb Component. That something is a Higher Order Component (HOC) that simply takes the Immutable.JS props from your Smart Component, and converts them using `toJS()` to plain JavaScript props, which are then passed to your Dumb Component.

An example of such a HOC follows. A similar HOC is available as an NPM package for your convenience: [with-immutable-props-to-js](https://www.npmjs.com/package/with-immutable-props-to-js).

```js
import React from 'react'
import { Iterable } from 'immutable'

export const toJS = WrappedComponent => wrappedComponentProps => {
  const KEY = 0
  const VALUE = 1

  const propsJS = Object.entries(wrappedComponentProps).reduce(
    (newProps, wrappedComponentProp) => {
      newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
        wrappedComponentProp[VALUE]
      )
        ? wrappedComponentProp[VALUE].toJS()
        : wrappedComponentProp[VALUE]
      return newProps
    },
    {}
  )

  return <WrappedComponent {...propsJS} />
}
```

And this is how you would use it in your Smart Component:

```js
import { connect } from 'react-redux'

import { toJS } from './to-js'
import DumbComponent from './dumb.component'

const mapStateToProps = state => {
  return {
    // obj is an Immutable object in Smart Component, but it’s converted to a plain
    // JavaScript object by toJS, and so passed to DumbComponent as a pure JavaScript
    // object. Because it’s still an Immutable.JS object here in mapStateToProps, though,
    // there is no issue with errant re-renderings.
    obj: getImmutableObjectFromStateTree(state)
  }
}
export default connect(mapStateToProps)(toJS(DumbComponent))
```

By converting Immutable.JS objects to plain JavaScript values within a HOC, we achieve Dumb Component portability, but without the performance hits of using `toJS()` in the Smart Component.

_Note: if your app requires high performance, you may need to avoid `toJS()` altogether, and so will have to use Immutable.JS in your dumb components. However, for most apps this will not be the case, and the benefits of keeping Immutable.JS out of your dumb components (maintainability, portability and easier testing) will far outweigh any perceived performance improvements of keeping it in._

_In addition, using `toJS` in a Higher Order Component should not cause much, if any, performance degradation, as the component will only be called when the connected component’s props change. As with any performance issue, conduct performance checks first before deciding what to optimize._

#### Further Information

**Documentation**

- [React: Higher-Order Components](https://facebook.github.io/react/docs/higher-order-components.html)

**Articles**

- [React Higher Order Components in depth](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.dw2qd1o1g)

**Discussions**

- [Reddit: acemarke and cpsubrian comments on Dan Abramov: Redux is not an architecture or design pattern, it is just a library.](https://www.reddit.com/r/javascript/comments/4rcqpx/dan_abramov_redux_is_not_an_architecture_or/d5rw0p9/?context=3)

**Gists**

- [cpsubrian: React decorators for redux/react-router/immutable ‘smart’ components](https://gist.github.com/cpsubrian/79e97b6116ab68bd189eb4917203242c#file-tojs-js)

### Use the Immutable Object Formatter Chrome Extension to Aid Debugging

Install the [Immutable Object Formatter](https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog) , and inspect your Immutable.JS data without seeing the noise of Immutable.JS's own object properties.

#### Further Information

**Chrome Extension**

- [Immutable Object Formatter](https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog)
