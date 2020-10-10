(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jvUr:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var c=a("7ljp");var s={title:"4 подхода для работы с состоянием компонентов в React.",description:"Перевод статьи Cory House  Handling State in React: Four Immutable Approaches to Consider.",date:"2019-08-24T08:16:49.561Z",categories:[],keywords:[],tags:["react"]},m={_frontmatter:s},n="wrapper";function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,c,s={},m=Object.keys(e);for(c=0;c<m.length;c++)a=m[c],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(c.mdx)(n,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",null,"4 подхода для работы с состоянием компонентов в React."),Object(c.mdx)("p",null,Object(c.mdx)("img",Object.assign({parentName:"p"},{src:"https://miro.medium.com/max/700/1*xtYEQUYzu5qUKuXg-SGx-g.jpeg",alt:null}))),Object(c.mdx)("p",null,"Перевод статьи ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/housecor"}),"Cory House")," ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.freecodecamp.org/news/handling-state-in-react-four-immutable-approaches-to-consider-d1f5c00249d5/"}),"Handling State in React: Four Immutable Approaches to Consider"),"."),Object(c.mdx)("p",null,"На сегодня, возможно самая сложная тема для понимания в React — это состояние: ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"state"),"."),Object(c.mdx)("p",null,"Представим, у вас есть форма для редактирования пользователем. Распространенный подход: создать один обработчик изменений, чтобы работать с изменением любого поля формы."),Object(c.mdx)("p",null,"Выглядит это примерно так:"),Object(c.mdx)("p",null,"О четвертой строке кода стоит поволноваться. Четвертая строка действительно меняет состояние ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"state"),", потому что переменная ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"user")," ссылается на ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"state"),". В ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"react")," состояние трактуется как неизменное."),Object(c.mdx)("p",null,"Из ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://facebook.github.io/react/docs/react-component.html#state"}),"документации React")," :"),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},"Никогда не меняйте ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"this.state")," напрямую, так как вызов ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"setState()"),", в итоге, может перезаписать те изменения, что вы сделали. ",Object(c.mdx)("br",{parentName:"p"}),"\n","Работайте с состоянием ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"this.state"),", как будто оно неизменно.")),Object(c.mdx)("p",null,"Почему?"),Object(c.mdx)("p",null,Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"setState")," работает под капотом. Это означает, что принудительное изменение состояния ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"state")," может быть перезаписано, когда выполнится ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"setState"),".",Object(c.mdx)("br",{parentName:"p"}),"\n","Если вы объявили метод ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"shouldComponentUpdate"),", вы не можете использовать проверку на равенство ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"===")," внутри, т.к. ссылка на объект не изменится. Так что, вышеупомянутый метод может еще и повлиять на производительность.",Object(c.mdx)("br",{parentName:"p"}),"\n","Вообще, примеры выше часто работают нормально, но, чтобы избежать крайних случаев, работайте с состоянием так, как будто оно неизменно."),Object(c.mdx)("p",null,"Есть четыре способа правильной работы с состоянием ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"state"),":"),Object(c.mdx)("h4",null,"Способ 1: Object.assign"),Object(c.mdx)("p",null,Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Object.assign")," создает копию объекта. Первый параметр указывает куда мы будем его копировать, остальные параметры это объекты, которые мы хотим скопировать. Если исправить пример выше, то изменения коснутся строки 3:"),Object(c.mdx)("p",null,"В строке 3, я говорю :"),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},"Создай новый пустой объект и добавь туда все свойства из",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"this.state.user"),". В результате получится отдельная копия объекта ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"user,")," который хранится в ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"state"),".",Object(c.mdx)("br",{parentName:"p"}),"\n","Теперь, я могу спокойно менять объект в строке 4 — это полностью независимый объект от того, что хранится в ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"state"),".")),Object(c.mdx)("p",null,"Убедитесь, что есть полифилл для метода ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Object.assign,")," т.к. он не поддерживается в IE и не транспилируется Babel."),Object(c.mdx)("p",null,"4 источника для ознакомления:"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.npmjs.com/package/object-assign"}),"object-assign")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",Object.assign({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"}),"The MDN docs")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",Object.assign({parentName:"li"},{href:"https://babeljs.io/docs/usage/polyfill/"}),"Babel Polyfill")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",Object.assign({parentName:"li"},{href:"https://polyfill.io/v2/docs/features/#Object_assign"}),"Polyfill.io"))),Object(c.mdx)("h4",null,"Способ 2: Object Spread"),Object(c.mdx)("p",null,"Реализация ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Object spread")," на данный момент находится на стадии 3 и эта возможность языка может быть транспилирована Babel.",Object(c.mdx)("br",{parentName:"p"}),"\n","Этот способ более краткий:"),Object(c.mdx)("p",null,"В строке 3, я говорю:"),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},"Используй все свойства ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"this.state.user")," для создания нового объекта, затем установи для свойства ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"[name]")," новое значение из ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"event.target.value"),".")),Object(c.mdx)("p",null,"Таким образом, этот метод похож на применение ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Object.assign"),", но он имеет 2 преимущества:"),Object(c.mdx)("ol",null,Object(c.mdx)("li",{parentName:"ol"},"Не требуются полифилы, Babel может транспилировать код"),Object(c.mdx)("li",{parentName:"ol"},"Более краткая форма записи")),Object(c.mdx)("p",null,"Можно даже использовать деструктуризацию и уместить все в одну строку:"),Object(c.mdx)("p",null,"Я деструктурировал объект ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"event")," для получения ссылки на ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"event.target"),". Затем, я объявляю, что состояние ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"state")," должно быть копией ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"this.state.user")," с актуальным значением свойства ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"[target.name]"),". Получилось лаконичненько, пожалуй это мой любимый способ для обработчиков изменений."),Object(c.mdx)("p",null,"Эти два способа самые распространенные и простые методы поддержки состояния ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"state")," неизменным. Хотите больше полномочий при работе с состоянием? Тогда посмотрите на следующие два способа."),Object(c.mdx)("h4",null,"Способ 3: Immutability Helper"),Object(c.mdx)("p",null,Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/kolodny/immutability-helper"}),"Immutability-helper")," — внешняя библиотека для копирования данных без изменения исходных данных. Эта библиотека представлена в документации ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://facebook.github.io/react/docs/update.html"}),"React"),"."),Object(c.mdx)("p",null,"В строке 5:"),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},"Я вызываю ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"merge")," — одну из ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/kolodny/immutability-helper#available-commands"}),"команд")," ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"immutability-helper"),". Как и в случае с ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Object.assign"),", первым параметром я передаю целевой объект, а затем определяю свойство, которое будет добавлено и объединено.")),Object(c.mdx)("p",null,"Правда, в случае с ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"immutability-helper")," есть больше возможностей. Здесь используется синтаксис, вдохновленный языком запросов ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"MongoDB"),", что предоставляет ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/kolodny/immutability-helper#available-commands"}),"множество мощных способов для работы с неизменяемыми данными"),"."),Object(c.mdx)("h4",null,"Способ 4: Immutable.js"),Object(c.mdx)("p",null,"Хотите программно применять неизменность? Посмотрите на ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://facebook.github.io/immutable-js/"}),"immutable.js"),". Эта библиотека поддерживает неизменные структуры данных."),Object(c.mdx)("p",null,"Пример с использованием неизменяемой ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"map"),":"),Object(c.mdx)("p",null,"Три шага для использования ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"immutable"),":"),Object(c.mdx)("ol",null,Object(c.mdx)("li",{parentName:"ol"},"Импортируем ",Object(c.mdx)("code",Object.assign({parentName:"li"},{className:"language-text"}),"immutable"),"."),Object(c.mdx)("li",{parentName:"ol"},"Устанавливаем ",Object(c.mdx)("code",Object.assign({parentName:"li"},{className:"language-text"}),"state")," в неизменяемый ",Object(c.mdx)("code",Object.assign({parentName:"li"},{className:"language-text"}),"map")," в ",Object(c.mdx)("code",Object.assign({parentName:"li"},{className:"language-text"}),"constructor")),Object(c.mdx)("li",{parentName:"ol"},"Используем метод ",Object(c.mdx)("code",Object.assign({parentName:"li"},{className:"language-text"}),"set")," в обработчике изменений для создания новой копии объекта ",Object(c.mdx)("code",Object.assign({parentName:"li"},{className:"language-text"}),"user"))),Object(c.mdx)("p",null,"Вся красота ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"immutable.js")," в том, что : если попытаться изменить ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"state")," напрямую, возникнет ошибка. С предыдущими способами, легко об этом забыть, и React не предупредит вас, когда вы попытаетесь изменить ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"state")," напрямую."),Object(c.mdx)("p",null,"Недостатки ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"immutable.js :")),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Раздуваем бандл. ",Object(c.mdx)("code",Object.assign({parentName:"li"},{className:"language-text"}),"Immutable.js")," добавляет ",Object(c.mdx)("code",Object.assign({parentName:"li"},{className:"language-text"}),"57K")," в минифицированном виде. ",Object(c.mdx)("a",Object.assign({parentName:"li"},{href:"https://preactjs.com/"}),"Использование библиотек типа Preact могут заменить React всего")," ",Object(c.mdx)("code",Object.assign({parentName:"li"},{className:"language-text"}),"[3К](https://preactjs.com/)"),", что довольно тяжело принять."),Object(c.mdx)("li",{parentName:"ul"},"Синтаксис. Вам придется ссылаться на свойства объекта через строки и точно также вызывать методы вместо доступа напрямую. Я предпочитаю использовать ",Object(c.mdx)("code",Object.assign({parentName:"li"},{className:"language-text"}),"user.name")," чем ",Object(c.mdx)("code",Object.assign({parentName:"li"},{className:"language-text"}),"user.get('name')"),"."),Object(c.mdx)("li",{parentName:"ul"},"YATTL (Yet another thing to learn) — Еще одна вещь для изучения — любому, кто присоединится к вашей команде, потребуется изучить еще один API для доступа и записи данных также как и новые типы данных.")),Object(c.mdx)("p",null,"Парочка альтернатив:"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/rtfeldman/seamless-immutable"}),"seamless-immutable")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/aweary/react-copy-write"}),"react-copy-write"))),Object(c.mdx)("h4",null,"Предупреждение: Берегитесь Вложенных Объектов!"),Object(c.mdx)("p",null,"Варианты 1 и 2 (",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Object.assign Object spread"),") делают только поверхностную копию. Так что, если ваш объект содержит вложенные объекты, они будут скопированы по ссылке, а не по значению. В этом случае если вы измените вложенный объект, вы повлияете и на исходный вложенный объект."),Object(c.mdx)("p",null,"Будьте хирургически аккуратны с тем, что копируете. Не копируйте все подряд. Копируйте объекты,которые изменились. ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/kolodny/immutability-helper"}),"Immutability-helper")," легко это делает. Также как и альтернативы: ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/mweststrate/immer"}),"immer"),", ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/substantial/updeep"}),"updeep"),", или ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/immutable-data.md#immutable-update-utilities"}),"вот длинный список других вариантов"),"."),Object(c.mdx)("p",null,"Вы можете поддаться искушению использовать инструменты глубокого слияния, например ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/clone-deep"}),"clone-deep")," или ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://lodash.com/docs/#merge"}),"lodash.merge"),", ",Object(c.mdx)("strong",{parentName:"p"},"но избегайте глубокого копирования"),"."),Object(c.mdx)("ol",null,Object(c.mdx)("li",{parentName:"ol"},"Глубокое копирование дорого обходится"),Object(c.mdx)("li",{parentName:"ol"},"Глубокое копирование нерационально ( в отличие от копирования только того, что изменилось)"),Object(c.mdx)("li",{parentName:"ol"},"Глубокое копирование провоцирует необязательный рендеринг, т.к. React думает что все изменилось хотя возможно фактически изменился только определенный дочерний объект.")),Object(c.mdx)("p",null,"Спасибо Дэну Абрамову за рекомендации, которые я указал выше."),Object(c.mdx)("h4",null,"Последний совет: Подумайте над использованием функции setState"),Object(c.mdx)("p",null,"Одна загвоздка может вас зацепить:"),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"setState()")," не изменяет состояние ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"this.state")," немедленно, но создает ожидание перехода состояния. Попытка доступа к ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"this.state")," после вызова этого метода, потенциально может вернуть существующее значение.")),Object(c.mdx)("p",null,"Как только запустится вызов ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"setState"),", код вроде этого приведет к багу:"),Object(c.mdx)("p",null,"Если вы хотите запустить код после завершения вызова ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"setState"),", используйте колбэк ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"setState"),":"),Object(c.mdx)("h4",null,"Мой выбор"),Object(c.mdx)("p",null,"Я предпочитаю простоту и легкость второго варианта: ",Object(c.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Object spread"),". Он не требует полифиллов или сторонних библиотек, я могу объявлять обработчик изменений в одну строку и могу позаботиться только о том, что изменяется. Что касается работы с вложенными объектами я бы предпочел ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/mweststrate/immer"}),"Immer")),Object(c.mdx)("p",null,Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"http://pluralsight.com/author/cory-house"}),Object(c.mdx)("img",Object.assign({parentName:"a"},{src:"https://cdn-images-1.medium.com/max/800/1*xhJGZsL0sh-k1BpESYirNg.png",alt:null})))),Object(c.mdx)("p",null,Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/housecor"}),"Cory House")," автор ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"http://pluralsight.com/author/cory-house"}),"многих курсов JavaScript, React, программированию, .NET, и других на Pluralsight"),". Он является главным консультантом ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"http://www.reactjsconsulting.com/"}),"reactjsconsulting.com"),", архитектором программного обеспечения VinSolutions, a Microsoft MVP, и обучает разработчиков программного обеспечения по всему миру фронтенду и чистому кодингу. Следите за его твитами о фронтенд разработке здесь: ",Object(c.mdx)("a",Object.assign({parentName:"p"},{href:"http://www.twitter.com/housecor"}),"@housecor"),"."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-4-ways-working-with-react-state-md-a587d494fb8ebd97fba9.js.map