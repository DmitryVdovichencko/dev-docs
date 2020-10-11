(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"RP/g":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return l}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("q1tI");var c=n("7ljp");var a={layout:"post",title:"Вы не знаете JS. Область видимости и замыкания.",date:"2020-07-24",tags:["js"]},o={_frontmatter:a},s="wrapper";function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,c,a={},o=Object.keys(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(c.mdx)(s,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",null,"Области видимости и замыкания"),Object(c.mdx)("p",null,"Короткие, и надеюсь интересные, конспекты для систематизации знаний по JS после прочтения серии книг You Don't Know JS."),Object(c.mdx)("h2",null,"Разбираемся с областями видимости"),Object(c.mdx)("p",null,Object(c.mdx)("img",Object.assign({parentName:"p"},{src:"../../images/ydkjs-scope-closures/start.jpeg",alt:"start image"})),"\nЧто такое область видимости?"),Object(c.mdx)("p",null,"Основная функция любой программы заключается в возможности сохранять значения в переменных и при необходимости извлекать их. И переменные хранятся в области видимости (",Object(c.mdx)("inlineCode",{parentName:"p"},"scope"),")."),Object(c.mdx)("p",null,"В языках программирования, которые компилируются есть три основных этапа при работе с кодом, прежде чем он будет выполнен:"),Object(c.mdx)("p",null,"Токенизация. Разбитие кода на кусочки, которые несут значение -токены."),Object(c.mdx)("p",null,"Парсинг. Берем массив токенов и составляем из них абстрактное синтаксическое дерево.(AST — Abstract Syntax Tree)"),Object(c.mdx)("p",null,"Генерация кода.Берем AST и преобразуем его в исполняемый код (для работы с памятью и вот это всё)"),Object(c.mdx)("p",null,"У JS нет времени объяснять всё это, т.к. до исполнения кода, у JS есть лишь микросекунды на его обработку."),Object(c.mdx)("p",null,"Попробуем понять как работает область видимости."),Object(c.mdx)("h3",null,"Движок (Engine)"),Object(c.mdx)("p",null,"Image for post"),Object(c.mdx)("p",null,"Отвечает за начало и окончание интерпретации кода и выполнение программы."),Object(c.mdx)("h3",null,"Компилятор (Compiler)."),Object(c.mdx)("p",null,"Image for post"),Object(c.mdx)("p",null,"Один из друзей Движка. Делает грязную работу типа парсинга и генерации исполняемого кода."),Object(c.mdx)("h3",null,"Область видимости (Scope)."),Object(c.mdx)("p",null,"Image for post"),Object(c.mdx)("p",null,"Другой бро Движка: собирает и обслуживает список поиска всех объявленных идентификаторов (переменных)а также следит за соответствием правилам для исполняемого кода."),Object(c.mdx)("p",null,"На простом примере:"),Object(c.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(c.mdx)("code",{parentName:"pre"},Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"var"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"a"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F78C6C"}}),"2"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"))),Object(c.mdx)("p",null,"Что делает компилятор"),Object(c.mdx)("p",null,"Встретив ",Object(c.mdx)("inlineCode",{parentName:"p"},"var a"),", компилятор спрашивает у области видимости: может такая переменная уже есть в области. И, если она уже есть, компилятор игнорит объявление переменной и едет дальше. Если же, такой переменной нет, компилятор просит создать новую переменную с именем ",Object(c.mdx)("inlineCode",{parentName:"p"},"a")," у области видимости."),Object(c.mdx)("p",null,"Потом компилятор готовит код для движка, чтобы затем выполнить присвоение ",Object(c.mdx)("inlineCode",{parentName:"p"},"a = 2")," . "),Object(c.mdx)("p",null,"При этом Движок должен уточнить у области видимости: если переменная есть в текущей области видимости, движок будет использовать именно ее. Если нет — Движок поищет ее где — нибудь еще."),Object(c.mdx)("p",null,"Если Движок ее не найдет, он прекратит поиски и сформирует ошибку."),Object(c.mdx)("p",null,"Движок может производить как левосторонний (LHS — Left Hand Side) так и правосторонний (RHS — Right Hand Side) поиск. "),Object(c.mdx)("p",null,"Поиск распределяется по отношению к оператору присвоения ",Object(c.mdx)("inlineCode",{parentName:"p"},"=")," ."),Object(c.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(c.mdx)("code",{parentName:"pre"},Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFCB6B"}}),"console"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#82AAFF"}}),"log"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"( "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"a"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," )"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#464B5D"}}),"// правосторонний поиск"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"a"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F78C6C"}}),"2"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#464B5D"}}),"//левосторонний поиск"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"function"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#82AAFF"}}),"foo"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FF5370"}}),"a"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"{"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"    "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFCB6B"}}),"console"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#82AAFF"}}),"log"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"( "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"a"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," )"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#464B5D"}}),"// 2"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"}"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#82AAFF"}}),"foo"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"( "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F78C6C"}}),"2"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," )"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#464B5D"}}),"//1) RHS при вызове функции foo() "),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#464B5D"}}),"//2)LHS при передаче аргумента a значения 2 происходит присвоение "),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#464B5D"}}),"//a = 2;"))),Object(c.mdx)("p",null,"Представим разговор Движка и Области видимости:"),Object(c.mdx)("p",null,"Engine: Привет Scope, у меня тут RHS ссылка для ",Object(c.mdx)("inlineCode",{parentName:"p"},"foo"),". Слышал про такое?"),Object(c.mdx)("p",null,"Scope: Да, конечно. Интерпретатор только что объявил ",Object(c.mdx)("inlineCode",{parentName:"p"},"foo"),". Это функция. Вот она."),Object(c.mdx)("p",null,"Engine: Круто, спасибо! OK, выполняю ",Object(c.mdx)("inlineCode",{parentName:"p"},"foo"),"."),Object(c.mdx)("p",null,"Engine: Слушай область видимости, тут еще LHS ссылка для ",Object(c.mdx)("inlineCode",{parentName:"p"},"a"),", слышал о ней?"),Object(c.mdx)("p",null,"Scope: Да. Буквально только что интерпретатор объявил ее как параметр для ",Object(c.mdx)("inlineCode",{parentName:"p"},"foo"),". Вот она."),Object(c.mdx)("p",null,"Engine: Как всегда кстати)). И снова спасибо. Пришло время присвоить значение 2 переменной a."),Object(c.mdx)("p",null,"Engine: Сорри за беспокойство. Мне нужно посмотреть RHS для ",Object(c.mdx)("inlineCode",{parentName:"p"},"console"),". Не слышал?"),Object(c.mdx)("p",null,"Scope: Нет проблем, Engine, это то,что я делаю целый день. Да есть объект ",Object(c.mdx)("inlineCode",{parentName:"p"},"console"),". Он встроенный. Вот пользуйся."),Object(c.mdx)("p",null,"Engine: Отлично. Поищем — ка ",Object(c.mdx)("inlineCode",{parentName:"p"},"log(..)"),". OK, это функция."),Object(c.mdx)("p",null,"Engine: Йоу, Scope. Можешь помочь с RHS ссылкой на a.\nЯ вроде помню его, просто хотел еще раз уточнить."),Object(c.mdx)("p",null,"Scope: Да ты прав, Engine. Та же переменная, значение не изменилось. Можешь пользоваться."),Object(c.mdx)("p",null,"Engine: Круто, значит передаем значение 2 переменной ",Object(c.mdx)("inlineCode",{parentName:"p"},"a"),", а ее затем функции ",Object(c.mdx)("inlineCode",{parentName:"p"},"log(..)"),"."),Object(c.mdx)("p",null,"Также как функция или блок могут быть вложены в другой блок или функцию, области видимости могут быть вложенными."),Object(c.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(c.mdx)("code",{parentName:"pre"},Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"function"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#82AAFF"}}),"foo"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FF5370"}}),"a"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"{"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"    "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFCB6B"}}),"console"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#82AAFF"}}),"log"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"( "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"a"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"+"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"b"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," )"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"}"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"var"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"b"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F78C6C"}}),"2"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#82AAFF"}}),"foo"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"( "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F78C6C"}}),"2"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," )"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(c.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#464B5D"}}),"// 4"))),Object(c.mdx)("p",null,"Engine: “Привет, Scope из функции ",Object(c.mdx)("inlineCode",{parentName:"p"},"foo"),", слышал что нибудь про ",Object(c.mdx)("inlineCode",{parentName:"p"},"b"),"? Только что получил RHS ссылку для него.”"),Object(c.mdx)("p",null,"Scope: “Не не слышал. Поищи в другом месте.”"),Object(c.mdx)("p",null,"Engine: “Хэй, Scope снаружи функции ",Object(c.mdx)("inlineCode",{parentName:"p"},"foo"),", о да ты глобальный ",Object(c.mdx)("inlineCode",{parentName:"p"},"scope"),", OK\nкруто. Слышал что нибудь про ",Object(c.mdx)("inlineCode",{parentName:"p"},"b"),"? Только что получил RHS ссылку для него.”"),Object(c.mdx)("p",null,"Scope: “Да конечно. Вот — пользуйся.”"),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Итак, движок будет искать ссылку начиная с текущей области видимости и заканчивая глобальной.")),Object(c.mdx)("p",null,"Если же, и в глобальной области ссылка не будет найдена, то, в зависимости от того какую ссылку мы ищем, RHS или LHS, могут быть разные результаты."),Object(c.mdx)("p",null,"Если поиск идет по RHS ссылке, то есть по правой стороне, и переменная не найдена, то мы получим ",Object(c.mdx)("inlineCode",{parentName:"p"},"ReferenceError"),"."),Object(c.mdx)("p",null,"Если поиск идет по LHS ссылке, то есть по левой стороне и переменная не найдена, то все зависит от того, используем мы ",Object(c.mdx)("inlineCode",{parentName:"p"},"StrictMode")," или нет."),Object(c.mdx)("p",null,"Если не используем ",Object(c.mdx)("inlineCode",{parentName:"p"},"StrictMode"),", то в глобальной области будет создана переменная с указанным именем и передана движку. "),Object(c.mdx)("p",null,"Если же включен ",Object(c.mdx)("inlineCode",{parentName:"p"},"StrictMode"),", то мы также получим ",Object(c.mdx)("inlineCode",{parentName:"p"},"Reference Error"),"."),Object(c.mdx)("p",null,"Ну, а если поиск по RHS увенчался успехом, но мы пытаемся сделать с результатами поиска что нибудь противоестественное. "),Object(c.mdx)("p",null,"Например, использовать нефункцию как функцию, или ссылаться на свойства, значения которых ",Object(c.mdx)("inlineCode",{parentName:"p"},"null")," или ",Object(c.mdx)("inlineCode",{parentName:"p"},"undefined"),", то мы получим ",Object(c.mdx)("inlineCode",{parentName:"p"},"TypeError"),"."),Object(c.mdx)("h2",null,"Лексическая область видимости."),Object(c.mdx)("p",null,"В языках программирования используется два вида областей видимости: лексическая и динамическая. Для JS используется лексическая область видимости."),Object(c.mdx)("p",null,"В приведенном выше примере кода, движок выполнит ",Object(c.mdx)("inlineCode",{parentName:"p"},"console.log()"),", а значит будет искать три переменные ",Object(c.mdx)("inlineCode",{parentName:"p"},"a"),", ",Object(c.mdx)("inlineCode",{parentName:"p"},"b")," и ",Object(c.mdx)("inlineCode",{parentName:"p"},"c")," . "),Object(c.mdx)("p",null,"Движок начнет искать с самой глубокой области видимости — области видимости функции ",Object(c.mdx)("inlineCode",{parentName:"p"},"bar()")," . "),Object(c.mdx)("p",null,"Поскольку переменной ",Object(c.mdx)("inlineCode",{parentName:"p"},"a")," нет в области видимости функции ",Object(c.mdx)("inlineCode",{parentName:"p"},"bar()")," , поиск перейдет на ближайшую область видимости — область видимости функции ",Object(c.mdx)("inlineCode",{parentName:"p"},"foo()")," . "),Object(c.mdx)("p",null,"То же самое для переменной ",Object(c.mdx)("inlineCode",{parentName:"p"},"b")," . "),Object(c.mdx)("p",null,"Ну а ",Object(c.mdx)("inlineCode",{parentName:"p"},"c")," будет найдена в области видимости ",Object(c.mdx)("inlineCode",{parentName:"p"},"bar()")," . "),Object(c.mdx)("p",null,"Если ",Object(c.mdx)("inlineCode",{parentName:"p"},"a")," и ",Object(c.mdx)("inlineCode",{parentName:"p"},"c")," будут также объявлены в ",Object(c.mdx)("inlineCode",{parentName:"p"},"bar()"),", то при поиске мы не попадем в область функции ",Object(c.mdx)("inlineCode",{parentName:"p"},"foo()")," . Поиск всегда останавливается как только найдет первый результат."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Неважно где, и каким образом функция вызывается, лексическая область видимости всегда определяется там, где функция была объявлена.")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-ydkjs-scope-closures-md-9bbce2e61c9a2008cbd2.js.map