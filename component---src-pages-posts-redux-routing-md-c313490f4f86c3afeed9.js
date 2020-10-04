(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9ivy":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return o}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("q1tI");var n=t("7ljp");var s={title:"Покоряем управление навигацией с React-router и Redux",date:"2020-01-08",tags:["redux"]},c={_frontmatter:s},m="wrapper";function o(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.mdx)(m,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),Object(n.mdx)("h1",null,"Покоряем управление навигацией с React-router и Redux :rocket:"),Object(n.mdx)("p",null,"Основной компонент общий для традиционных приложений и SPA это навигация от одной страницы к другой."),Object(n.mdx)("p",null,"В этой статье мы рассмотрим как собрать навигацию для React/Redux приложений и посмотрим как поддерживать состояние при переходах по навигации."),Object(n.mdx)("h2",null,"Приложение с которым мы собираемся работать"),Object(n.mdx)("p",null,"Чтобы разобраться с навигацией я создал небольшое простое приложение EmojiLand"),Object(n.mdx)("p",null,"EmojiLand простое приложение, но достаточно хорошее, чтобы переварить те мысли, которыми я поделюсь в этой статье."),Object(n.mdx)("p",null,"Заметьте, что приложение остается на выбранном маршруте, но, когда будет нажата кнопка, оно выполнит какой-то фальшивый ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"action")," и, по его завершении перейдет на другой маршрут."),Object(n.mdx)("p",null,"В реальном мире, это фальшивое действие может быть запросом на какой-нибудь ресурс или любое другое асинхронное действие."),Object(n.mdx)("h2",null,"Краткий обзор EmojiLand"),Object(n.mdx)("p",null,"Клонируем репозиторий с GitHub"),Object(n.mdx)("p",null,Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"git clone https://github.com/ohansemmanuel/nav-state-react-router.git")),Object(n.mdx)("p",null,"Переходим в директорию репозитория: "),Object(n.mdx)("p",null,Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"cd nav-state-react-router")),Object(n.mdx)("p",null,"Устанавливаем зависимости: "),Object(n.mdx)("p",null,Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"yarn install"),"\nили\n",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"npm install")),Object(n.mdx)("p",null,"Запускаем приложение:"),Object(n.mdx)("p",null,Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"yarn start"),"\nили\n",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"npm start")),Object(n.mdx)("p",null,"Приложение построено на базе ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"react")," и ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"redux")," а также ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"react-router")),Object(n.mdx)("p",null,"В ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"containers/App.js")," вы найдете 6 маршрутов этого приложения."),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function-variable function"}),"App")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"Router",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"Switch",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n      ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"Route exact path",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"/"')," component",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"AngryDude",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n      ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"Route path",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"/quiet"')," component",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"KeepQuiet",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n      ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"Route path",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"/smile"')," component",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"SmileLady",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n      ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"Route path",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"/think"')," component",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"ThinkHard",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n      ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"Route path",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"/thumbs"')," component",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"ThumbsUp",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n      ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"Route path",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"/excited"')," component",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"BeExcited",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),"Switch",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),"Router",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("p",null,"Каждый маршрут ведет к emoji компоненту. ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"/quiet")," например отобразит компонент ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"KeepQuiet"),"."),Object(n.mdx)("p",null,"А вот как выглядит компонент ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"KeepQuiet"),":"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," React ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"react"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," EmojiLand ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"../components/EmojiLand"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," keepQuietImg ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"../Images/keepquiet.png"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," emojiLand ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"./emojiLand"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function-variable function"}),"KeepQuiet")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," appState",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),",")," handleEmojiAction ",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"EmojiLand\n      EmojiBg",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"'),"\n      EmojiImg",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"keepQuietImg",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n      EmojiBtnText",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"Keep Calm and Stay Quiet."'),"\n      HandleEmojiAction",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"handleEmojiAction",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n      appState",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"appState",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"export")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"default")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"emojiLand"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"KeepQuiet",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("p",null,"Это простой функциональный компонент который отображает EmojiLand компонент"),Object(n.mdx)("p",null,"Важно то, что EmojiLand принимает несколько свойств таких как фоновый градиент, изображение, и текст кнопки"),Object(n.mdx)("p",null,"Более деликатным является экспортируемый компонент"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"export")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"default")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"emojiLand"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"KeepQuiet",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("p",null,Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"emojiLand")," здесь это компонент высокого порядка. Все что он делает, это когда вы кликаете на кнопку любого из emoji компонентов, симулируется фейковое действие на 1000мс, на практике это может быть сетевой запрос."),Object(n.mdx)("p",null,Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"emojiLand")," компонент высшего порядка делает это передачей свойств ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"appState")," emoji компонентам. В нашем случае, ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"KeepQuiet")),Object(n.mdx)("p",null,"Когда любой из компонентов ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"emoji")," впервые отрендерится, ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"appState")," пустая строка, ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),'""'),". После ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"1000мс"),", ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"appState")," изменится на ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"DO_SOMETHING_OVER")),Object(n.mdx)("p",null,Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"DO_SOMETHING_OVER")," представлено как константа:"),Object(n.mdx)("p",null,"В ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"constants/action-types"),":"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"export")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token constant"}),"DO_SOMETHING_OVER")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"DO_SOMETHING_OVER"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("p",null,"Примерно так работает каждый ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"emoji")," компонент в этом приложении.\nТакже помните, что каждый маршрут это отдельный рендеринг EmojiLand компонента"),Object(n.mdx)("h2",null,"Перемещайся по React приложению как чемпион"),Object(n.mdx)("p",null,"Допустим по завершению ложного действия мы хотим перейти на другой маршрут приложенния EmojiLand"),Object(n.mdx)("p",null,"Как это сделать?"),Object(n.mdx)("p",null,"Во-первых, помним что при переходе на стартовый маршрут будет отображен компонент ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"theAngryDude")),Object(n.mdx)("p",null,"Наиболее декларативный подход для поддержки перемещения это использование компонента ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Redirect")," из ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"React-router")),Object(n.mdx)("p",null,"Раз мы хотим переместится из компонента ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"AngryDude"),", сначала, импортируем его в ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"containers/AngryDude.js"),":"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," Redirect ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"react-router-dom"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("p",null,"Для того чтобы редирект сработал он должен быть отображен как обычный компонент. В нашем случае мы перенаправимся когда ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"appState")," установится в значение ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"DO_SOMETHING_OVER"),", т.е. ложное действие окончено."),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function-variable function"}),"AngryDude")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," appState",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),",")," handleEmojiAction ",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," appState ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"===")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token constant"}),"DO_SOMETHING_OVER")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"Redirect to",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"/thumbs"')," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n      ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"EmojiLand\n        EmojiBg",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"linear-gradient(-180deg, #611A51 0%, #10096D 100%)"'),"\n        EmojiImg",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"angryDudeImg",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n        EmojiBtnText",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"I\'m so pissed. Click me"'),"\n        HandleEmojiAction",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"_handleEmojiAction",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n        appState",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"props",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"appState",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")))),Object(n.mdx)("p",null," То же самое выполним для остальных компонентов. Что ж похоже это было довольно просто? Но есть проблемка"),Object(n.mdx)("h3",null,"Избегайте перезаписи редиректов в истории браузера"),Object(n.mdx)("p",null,"Я открою новый браузер прокликаю все приложение, но, в какой-то момент я попробую вернуться назад с помощью кнопки браузера ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Назад"),"."),Object(n.mdx)("p",null,"В результате я не вернусь к предыдущему маршруту, а перейду к стартовой странице своего браузера."),Object(n.mdx)("p",null,"Почему?"),Object(n.mdx)("p",null,"Это потому, что по умолчанию использование компонента ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Redirect")," заменит текущую локацию в истории браузера."),Object(n.mdx)("p",null,"Так что даже если мы прошли несколько маршрутов, они подменяли друг друга в записях браузера."),Object(n.mdx)("p",null,"А значит, с точки зрения браузера мы посетили лишь один маршрут и таким образом нажав на кнопку ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Назад")," мы попадем на домашнюю страницу."),Object(n.mdx)("p",null,"Это как с массивами: вместо чтобы добавлять эдеметы в массив через ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"push "),", мы меняем в нем текущее значение."),Object(n.mdx)("p",null,"Вот как это исправить."),Object(n.mdx)("p",null,"Компонент ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Redirect")," может принимать свойство ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"push")," которое позволит избежать подобное поведение. Со свойством ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"push")," вы будете добавлять (",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"pushить"),") каждый маршрут в стэк истории браузера и они НЕ будут заменены."),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," appState ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"===")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token constant"}),"DO_SOMETHING_OVER")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"Redirect push to",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"/thumbs"')," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"EmojiLand\n      EmojiBg",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"linear-gradient(-180deg, #611A51 0%, #10096D 100%)"'),"\n      EmojiImg",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"angryDudeImg",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n      EmojiBtnText",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"I\'m so pissed. Click me"'),"\n      HandleEmojiAction",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"handleEmojiAction",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n      appState",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"appState",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("h3",null,"Поддержка состояния при навигации"),Object(n.mdx)("p",null,"Перемещаясь от одного маршрута к другому, переменные предыдущего маршрута не передадлутся следующему маршруту. Они потеряны."),Object(n.mdx)("p",null,"Да потеряны, если вы ничего не предпримите."),Object(n.mdx)("p",null,"Что интересно компонент ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Redirect")," делает это достточно легко"),Object(n.mdx)("p",null,"Вся штука в том, чтор в свойствах ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Redirect")," можно передать как строку так и объект.\nА значит, помимо маршрута назначения ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"to")," можно передать и объект ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"state"),"."),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"Redirect\n      push\nto",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        pathname",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"/thumbs"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        state",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n          humanType",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"Cat Person"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n          age",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"12"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n          sex",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"none"'),"\n        ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n      ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-redux-routing-md-c313490f4f86c3afeed9.js.map