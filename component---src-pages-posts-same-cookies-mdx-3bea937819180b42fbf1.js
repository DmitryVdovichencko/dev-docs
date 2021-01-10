(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5UI+":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var n=a("7ljp"),c=a("q52W");var o={title:"Разбираемся с атрибутом SameSite cookies ",date:"2020-12-20",tags:["js","ru"]},m={_frontmatter:o},s="wrapper";function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,["components"]);return Object(n.mdx)(s,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("h1",null,"Разбираемся с атрибутом ",Object(n.mdx)("inlineCode",{parentName:"h1"},"SameSite")," ",Object(n.mdx)("strong",{parentName:"h1"},"cookies")),Object(n.mdx)(c.a,{url:"same-cookies/cookie-hero.jpg",mdxType:"Picture"}),Object(n.mdx)("p",null,"Перевод статьи ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://web.dev/authors/rowan_m/"}),"Rowan Merewood")," ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://web.dev/samesite-cookies-explained/?utm_source=devtools"}),"SameSite cookies explained")),Object(n.mdx)("p",null,"Защитите свой сайт, узнав как явно определить кросс-сайтовые cookies."),Object(n.mdx)("p",null,Object(n.mdx)("inlineCode",{parentName:"p"},"Cookies")," являются одним из способов хранения состояния на веб-сайтах. Многие годы их возможности росли и развивались, при этом оставляя веб-платформу с некоторыми устаревшими проблемами. Чтобы это исправить, браузеры (включая Chrome, Firefox и Edge) изменили свое поведение в сторону защиты приватных данных пользователей."),Object(n.mdx)("p",null,"Каждый ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," представляет собой пару ключ-значение ",Object(n.mdx)("inlineCode",{parentName:"p"},"key = value")," с определенным набором атрибутов, которые контролируют когда и где будет использоваться ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie"),". Возможно, вы уже использовали эти атрибуты, чтобы например установить срок действия ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie"),", или передачу только по HTTPS. Сервера устанавливают ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," отправляя специальный заголовок ",Object(n.mdx)("inlineCode",{parentName:"p"},"Set-Cookie")," в ответе. За всеми подробностями можно обратиться к спецификации RFC6265bis, но вот краткий обзор того, как это работает."),Object(n.mdx)("p",null,'Допустим, у вас есть блог, где вы хотите показывать промо "Что нового" своим подписчикам. Пользователь может пропустить промо, и вряд ли после этого захочет увидеть его снова, по крайней мере, на некоторое время. Вы можете записать эту настройку в ',Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," и установить его срок действия в 1 месяц (2,600,000 сек), а также отправлять его только по HTTPS. В этом случае заголовок будет выглядеть так:"),Object(n.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(n.mdx)("code",{parentName:"pre"},Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFCB6B"}}),"Set"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"-"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Cookie"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),": "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"promo_shown"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F78C6C"}}),"1"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Max"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"-"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Age"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F78C6C"}}),"2600000"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Secure"))),Object(n.mdx)(c.a,{url:"same-cookies/set-cookie-response-header.png",title:"Сервера устанавливают cookies, используя заголовок Set-Cookie",mdxType:"Picture"}),Object(n.mdx)("p",null,"Когда ваш посетитель откроет страницу, удовлетворяющую этим требованиям, т.е. соединение защищено и  ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," не старше месяца, браузер отправит этот заголовок в своем запросе: "),Object(n.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(n.mdx)("code",{parentName:"pre"},Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Cookie"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),": "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"promo_shown"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F78C6C"}}),"1"))),Object(n.mdx)(c.a,{url:"same-cookies/cookie-request-header.png",title:"Ваш браузер отправляет cookies обратно в заголовке Cookie",mdxType:"Picture"}),Object(n.mdx)("p",null,"Вы также можете добавлять и смотреть ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," доступные на сайте используя ",Object(n.mdx)("inlineCode",{parentName:"p"},"document.cookie"),".\nПрисваивание значения ",Object(n.mdx)("inlineCode",{parentName:"p"},"document.cookie")," создаст или перезапишет ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," с этим ключом. Например, попробуйте выполнить следующее в JavaScript консоли своего браузера: "),Object(n.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(n.mdx)("code",{parentName:"pre"},Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"document"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"cookie "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),'"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C3E88D"}}),"promo_shown=1; Max-Age=2600000; Secure"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),'"'),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#464B5D"}}),'// "promo_shown=1; Max-Age=2600000; Secure"'))),Object(n.mdx)("p",null,"Чтение ",Object(n.mdx)("inlineCode",{parentName:"p"},"document.cookie")," выведет все ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," доступные в текущем контексте, разделив их ",Object(n.mdx)("inlineCode",{parentName:"p"},";")),Object(n.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(n.mdx)("code",{parentName:"pre"},Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"document"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"cookie"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#464B5D"}}),'// "promo_shown=1; color_theme=peachpuff; sidebar_loc=left"'))),Object(n.mdx)(c.a,{url:"same-cookies/document-cookie.png",title:"JavaScript получает доступ к cookies с помощью document.cookie",mdxType:"Picture"}),Object(n.mdx)("p",null,"Если вы попробуете выполнить это на одном из популярных сайтов, то заметите, что большинство из них устанавливают значительно больше чем 3 ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies"),". Чаще всего, эти ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," отправляются в каждом запросе к домену, что приводит к ряду последствий. Обычно, для пользователей, ограничение исходящего трафика более строгое чем входящего. Так что, все излишние издержки на трафик исходящих запросов приводят к потерям в скорости. Будьте консервативными к числу и размеру ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies"),", которые вы устанавливаете. Используйте аттрибут ",Object(n.mdx)("inlineCode",{parentName:"p"},"Max-Age"),", чтобы убедиться, что ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," не хранятся дольше чем необходимо.  "),Object(n.mdx)("h2",null,"Какие ",Object(n.mdx)("inlineCode",{parentName:"h2"},"cookies")," являются основными а какие сторонними?"),Object(n.mdx)("p",null,"Если вернуться к тем популярным сайтам на которые мы смотрели выше, вы, возможно, заметили что ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," представлены для разных доменов, а не только для того, на котором вы находитесь. "),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},Object(n.mdx)("inlineCode",{parentName:"strong"},"Cookies")," домен которых совпадает с текщим доменом из адресной строки браузера являются основными.")),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Соответственно, ",Object(n.mdx)("inlineCode",{parentName:"strong"},"Cookies")," домен которых отличается от текщего  являются сторонними.")),Object(n.mdx)("p",null,"Эти определения не являются абсолютными, они зависят от окружения пользователя: один и тот же ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," может быть как основным так и сторонним в заисимости от сайта, на котором находится пользователь в текущий момент."),Object(n.mdx)(c.a,{url:"same-cookies/cross-site-set-cookie-response-header.png",title:"Cookies могут приходить с множества разных доменов на одной странице.",mdxType:"Picture"}),Object(n.mdx)("p",null,"Продолжим с примером блога, допустим в одном из постов есть прикольная картинка с котэ и она хостится на ",Object(n.mdx)("inlineCode",{parentName:"p"},"/blog/img/amazing-cat.png"),". Поскольку картинка очень крутая, другой пользователь захотел использовать ее у себя на сайте. Если, пользователь уже посещал ваш блог, и у него есть ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," ",Object(n.mdx)("inlineCode",{parentName:"p"},"promo-shown"),", то когда он захочет посмотреть на картику с котэ на другом сайте ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," будет прикреплен к запосу на получение картинки. Это определенно никому не нужно, т.к. ",Object(n.mdx)("inlineCode",{parentName:"p"},"promo_shown")," не используется на другом сайте, это излишняя нагрузка на запрос"),Object(n.mdx)("p",null,'Если это незапланированный эффект, зачем вам это делать? Существует механизм, позволяющий сайтам хранить\nсостояние, когда они используются в стороннем контексте. Например, вы добавили видео с YouTube на своем сайте. В плеере, посетитель увидит кнопку "Посмотреть позже". Если ваш посетитель уже залогинен на YouTube, то его сессия доступна во встроенном плеере через сторонние ',Object(n.mdx)("inlineCode",{parentName:"p"},"cookies"),'. Это значит, что кнопка "Посмотреть позже" просто сохранит видео, вместо запроса на логин или редиректа на YouTube.'),Object(n.mdx)(c.a,{url:"same-cookies/cross-site-cookie-request-header.png",title:"Сookie в стороннем контексте отправляются при посещении разных страниц.",mdxType:"Picture"}),Object(n.mdx)("p",null,"Одна из традиционных особенностей веба в том, что веб, по умолчанию, привык быть открытым. Поэтому, так много людей могут создавать приложения и размещать контент. Однако, эта особенность приводит к появлению ряда проблем в безопасности и приватности данных пользователя. Атаки фальсификации межсайтовых запросов (CSRF - Cross-Site Request Forgery) основаны на том факте, что ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," прикрепляются к каждому запросу, в независимости от того, кто является инициатором запроса. Например, если вы зашли на ",Object(n.mdx)("inlineCode",{parentName:"p"},"evil.example"),", то он может сделать запрос на ",Object(n.mdx)("inlineCode",{parentName:"p"},"your-blog.example")," и ваш браузер спокойненько прикрепит соответствующие ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies"),". И если ваш блог не запотится о проверке запросов то ",Object(n.mdx)("inlineCode",{parentName:"p"},"evil.example")," может спровоцировать действия типа удаления постов, или размещения собственного контента. "),Object(n.mdx)("p",null,"Пользователи также становятся более уязвимыми, от того как ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," используются для отслеживания их активности по разным сайтам. Тем не менее, до сих пор, отсутствовал способ явно заявить о намерениях использования ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies"),". Ваш ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," ",Object(n.mdx)("inlineCode",{parentName:"p"},"promo_shown")," должен отправляться только в основном контексте, учитывая при этом ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," сессии для встраиваемых виджетов, которые позволяют хранить состояние авторизации других сайтов в стороннем контексте.  "),Object(n.mdx)("h2",null,"Объявляем об использовании ",Object(n.mdx)("inlineCode",{parentName:"h2"},"cookies")," с аттрибутом ",Object(n.mdx)("inlineCode",{parentName:"h2"},"SameSite")),Object(n.mdx)("p",null,"Включение аттрибута ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite")," (определенного в RFC6265bis) позволяет вам определить: должен ли ваш ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," использоваться только в основном или ",Object(n.mdx)("inlineCode",{parentName:"p"},"same-site")," контексте. Полезно понимать что вообще здесь значит ",Object(n.mdx)("inlineCode",{parentName:"p"},"site"),". ",Object(n.mdx)("inlineCode",{parentName:"p"},"Site")," - сочетание суффикса домена и части домена перед ним. Например, ",Object(n.mdx)("inlineCode",{parentName:"p"},"www.web.dev")," домен - часть сайта ",Object(n.mdx)("inlineCode",{parentName:"p"},"web.dev")),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Ключевое понятие:")),Object(n.mdx)("p",null,"Если пользователь находится на ",Object(n.mdx)("inlineCode",{parentName:"p"},"www.web.dev")," и запрашивает изображение с ",Object(n.mdx)("inlineCode",{parentName:"p"},"static.web.dev")," то это является ",Object(n.mdx)("inlineCode",{parentName:"p"},"same-site")," запросом."),Object(n.mdx)("p",null,"Список суффиксов доменов определен здесь, так что это не только домены высшего уровня типа ",Object(n.mdx)("inlineCode",{parentName:"p"},".com"),"  но также и сервисы например ",Object(n.mdx)("inlineCode",{parentName:"p"},"github.io"),". Это позволяет считать ",Object(n.mdx)("inlineCode",{parentName:"p"},"your-project.github.io")," и ",Object(n.mdx)("inlineCode",{parentName:"p"},"my-project.github.io")," разными сайтами."),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Ключевое понятие:")),Object(n.mdx)("p",null,"Если пользователь на ",Object(n.mdx)("inlineCode",{parentName:"p"},"your-project.github.io")," и запрашивает изображение с ",Object(n.mdx)("inlineCode",{parentName:"p"},"my-project.github.io")," то это\nмежсайтовый (cross-site) запрос."),Object(n.mdx)("p",null,"Включение аттрибута ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite")," в ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," предоставляет три возможных варианта управления поведением. Вы можете не определять аттрибут, либо использовать ",Object(n.mdx)("inlineCode",{parentName:"p"},"Strict")," или ",Object(n.mdx)("inlineCode",{parentName:"p"},"Lax")," для ограничения передачи ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie"),"только на собственном сайте."),Object(n.mdx)("p",null,"Если вы назначите ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite")," значение ",Object(n.mdx)("inlineCode",{parentName:"p"},"Strict"),", ваш ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," будет пересылаться только в основном контексте. Для пользователя, это означает что ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," будет отправлен только сайту из адресной строки браузера. Так что, если ",Object(n.mdx)("inlineCode",{parentName:"p"},"promo_shown")," ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," будет определен следующим образом:"),Object(n.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(n.mdx)("code",{parentName:"pre"},Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFCB6B"}}),"Set"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"-"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Cookie"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),": "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"promo_shown"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F78C6C"}}),"1"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"SameSite"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Strict"))),Object(n.mdx)("p",null,"Когда ваш пользователь находится у вас на сайте, ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," будет отправлен в запросе, как и ожидается. С другой стороны, когда пользователь пройдет по ссылке на ваш сайт, например, с другого сайта или из email от своего друга, в инициализирующем запросе ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," отправлен не будет. Это хорошо в том случае, если ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," относятся к функционалу за пределами начальной навигации, такому как смена пароля или создание заказа. Но, это слишком строго для ",Object(n.mdx)("inlineCode",{parentName:"p"},"promo_shown"),". Если ваш пользователь пройдет по ссылке на сайт, он бы хотел чтобы ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," был отправлен и, соответственно его выбор не смотреть промо сработал корректно. "),Object(n.mdx)("p",null,"Здесь нам поможет ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite=Lax"),", разрешая отправлять ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," на верхнем уровне навигации. Давайте посетим страницу с постом о котэ, перейдя на нее с другого сайта по ссылке на оригинальный пост. Другой сайт может использовать фото котэ с вашего сайта напрямую и предоставить ссылку на оригинальный пост. "),Object(n.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(n.mdx)("code",{parentName:"pre"},Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"<"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F07178"}}),"p"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),">"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"Look at this amazing cat!"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"</"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F07178"}}),"p"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),">"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"<"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F07178"}}),"img"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}})," "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFCB6B"}}),"src"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),'"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C3E88D"}}),"https://blog.example/blog/img/amazing-cat.png"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),'"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}})," />"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"<"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F07178"}}),"p"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),">"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"Read the "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"<"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F07178"}}),"a"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}})," "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFCB6B"}}),"href"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),'"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C3E88D"}}),"https://blog.example/blog/cat.html"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),'"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),">"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"article"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"</"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F07178"}}),"a"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),">"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),"</"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F07178"}}),"p"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),">"))),Object(n.mdx)("p",null,"А ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," установлен следующим образом:"),Object(n.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(n.mdx)("code",{parentName:"pre"},Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFCB6B"}}),"Set"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"-"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Cookie"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),": "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"promo_shown"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F78C6C"}}),"1"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"SameSite"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Lax"))),Object(n.mdx)("p",null,"Когда пользователь придет на другой сайт,",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," не будет прикреплен к запросу на получение ",Object(n.mdx)("inlineCode",{parentName:"p"},"amazing-cat.png"),". Однако при переходе по ссылке к оригинальному посту ",Object(n.mdx)("inlineCode",{parentName:"p"},"cat.html")," в вашем блоге, запрос будет включать ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie"),". Это делает ",Object(n.mdx)("inlineCode",{parentName:"p"},"Lax")," хорошим выбором для ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," влиящих на отображение, тогда как ",Object(n.mdx)("inlineCode",{parentName:"p"},"Strict")," полезен для ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies"),", которые относятся к действиям пользователя"),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Предупреждение:")),Object(n.mdx)("p",null,"Ни ",Object(n.mdx)("inlineCode",{parentName:"p"},"Strict")," ни ",Object(n.mdx)("inlineCode",{parentName:"p"},"Lax")," не являются полноценным решением для обеспечения безопасности сайта. ",Object(n.mdx)("inlineCode",{parentName:"p"},"Cookies")," отправляются как часть запросов пользователя и с ними нужно обращаться также как и с другими пользовательскими данными. Нужно следить за чистотой и корректностью передаваемых данных. Никогда не используйте ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," для хранения секретных данных со стороны сервера."),Object(n.mdx)("p",null,"Наконец, есть вариант не определять значение, что подразумевает собой отправку ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," во всех конекстах. В последнем черновике спецификации RFC6265bis это можно сделать яно определив ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite=None"),". Это означает что можно использовать ",Object(n.mdx)("inlineCode",{parentName:"p"},"None")," если вы намеренно хотите отправлять ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," сторонним сайтам."),Object(n.mdx)(c.a,{url:"same-cookies/samesite-none-lax-strict.png",title:"Определяйте контекст использования cookie явно, через: None, Lax, или Strict.",mdxType:"Picture"}),Object(n.mdx)("p",null,"Если вы предоставляете сервис, которые другие сайты добавляют как виджет, встраиваемое содержимое, рекламу, или вам необходимо поодержка авторизации на разных сайтах, необходимо использовать ",Object(n.mdx)("inlineCode",{parentName:"p"},"None"),", чтобы ваши намерения были ясны."),Object(n.mdx)("h2",null,"Изменения в стандартном поведении без SameSite"),Object(n.mdx)("p",null,"Несмотря на то, что аттрибут ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite")," широко поддерживается, он, к сожалению, мало используется разработчиками. По умолчанию, такое открытое поведение при отправке ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies"),", позволит во всех случаях их использовать, но при этом сделает пользователя уязвимым для CSRF атак и непредвиденных утечек личной информации. Чтобы обязать разработчиков явно заявлять о намерениях при использовании ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," и предоставлять пользователям более безопасные приложения, Инженерный Совет Интернета (IETF - Internet Engineering Task Force) предложил улучшение работы с ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," с двумя изменениями:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},Object(n.mdx)("strong",{parentName:"p"},Object(n.mdx)("inlineCode",{parentName:"strong"},"Cookies")," без аттрибута ",Object(n.mdx)("inlineCode",{parentName:"strong"},"SameSite")," трактуются как: ",Object(n.mdx)("inlineCode",{parentName:"strong"},"SameSite=Lax"),"."))),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},Object(n.mdx)("strong",{parentName:"p"},Object(n.mdx)("inlineCode",{parentName:"strong"},"Cookies")," с аттрибутом ",Object(n.mdx)("inlineCode",{parentName:"strong"},"SameSite=None")," должны также содержать аттрибут ",Object(n.mdx)("inlineCode",{parentName:"strong"},"Secure"),", и передаваться только по защищенному протоколу.")))),Object(n.mdx)("p",null,"Chrome добавил эти изменения начиная с версии 84. В Firefox они тестируются с версии 69 и в дальнейшем будут активны по умолчанию. Чтобы протестировать эти изменения в Firefox, откройте ",Object(n.mdx)("inlineCode",{parentName:"p"},"about:config")," и включите опцию ",Object(n.mdx)("inlineCode",{parentName:"p"},"network.cookie.sameSite.laxByDefault"),". Edge также планирует изменить свое стандартное поведение."),Object(n.mdx)("h2",null,Object(n.mdx)("inlineCode",{parentName:"h2"},"SameSite=Lax")," по умолчанию"),Object(n.mdx)("p",null,"Аттрибут не выбран:"),Object(n.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(n.mdx)("code",{parentName:"pre"},Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFCB6B"}}),"Set"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"-"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Cookie"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),": "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"promo_shown"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F78C6C"}}),"1"))),Object(n.mdx)("p",null,"Если вы отправите ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," без аттрибута ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite"),"…"),Object(n.mdx)("p",null,"Применится стандартное поведение:"),Object(n.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(n.mdx)("code",{parentName:"pre"},Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFCB6B"}}),"Set"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"-"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Cookie"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),": "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"promo_shown"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#F78C6C"}}),"1"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"SameSite"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Lax"))),Object(n.mdx)("p",null,"Браузер будет работать с ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," как при ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite=Lax"),"."),Object(n.mdx)("p",null,"Даже несмотря на то что теперь предоставляется более безопасное поведение по умолчанию, вам лучше явно определить ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite"),", чем предоставить это решение браузеру. Это сделает ваши намерения в отношении ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," прозрачными и улучшит кросс-браузерную поддержку."),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Внимание:")),Object(n.mdx)("p",null,"Стандартное поведение Chrome чуть менее строгое чем явный ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite=Lax"),", поскольку разрешена отправка некоторых ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," для POST запросов верхнего уровня. Подробнее об этом можно узнать здесь. Это временное снижение ограничений, если вам нужно передавать ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," сторонним сайтам, необходимо использовать: ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite=None; Secure"),"."),Object(n.mdx)("h2",null,Object(n.mdx)("inlineCode",{parentName:"h2"},"SameSite=None")," должны быть безопасными"),Object(n.mdx)("p",null,"Отклонено:"),Object(n.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(n.mdx)("code",{parentName:"pre"},Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFCB6B"}}),"Set"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"-"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Cookie"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),": "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"widget_session"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"abc123"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"SameSite"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"None"))),Object(n.mdx)("p",null,"Назначение ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie")," без ",Object(n.mdx)("inlineCode",{parentName:"p"},"Secure")," будет отклонено."),Object(n.mdx)("p",null,"Принято:"),Object(n.mdx)("pre",{className:"shiki",style:{backgroundColor:"#0F111A"}},Object(n.mdx)("code",{parentName:"pre"},Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFCB6B"}}),"Set"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"-"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Cookie"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}}),": "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"widget_session"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"abc123"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"SameSite"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#C792EA"}}),"="),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"None"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#89DDFF"}}),";"),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#FFFFFF"}})," "),Object(n.mdx)("span",Object.assign({parentName:"code"},{style:{color:"#8F93A2"}}),"Secure"))),Object(n.mdx)("p",null,"Вы должны быть уверены что аттрибут ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite=None")," используется в паре с аттрибутом ",Object(n.mdx)("inlineCode",{parentName:"p"},"Secure"),"."),Object(n.mdx)("p",null,"Вы можете протестировать это поведение с версии Chrome 76 включив ",Object(n.mdx)("inlineCode",{parentName:"p"},"chrome://flags/#cookies-without-same-site-must-be-secure")," и в Firefox 69 в ",Object(n.mdx)("inlineCode",{parentName:"p"},"about:config"),", установив ",Object(n.mdx)("inlineCode",{parentName:"p"},"network.cookie.sameSite.noneRequiresSecure"),"."),Object(n.mdx)("p",null,"Вам нужно их применить, когда вы устанавливаете новые ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," и активно обновляете существующие ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookies")," даже если не истек их срок действия."),Object(n.mdx)("p",null,"Если вы зависите от сервисов, которые предоставляют сторонний контент на вашем сайте, вы также должны следить за тем что они обновляют свое поведение. Вам необходимо обновлять зависимости,чтобы быть уверенным, что ваш сайт поддерживает новое поведение."),Object(n.mdx)("p",null,"Оба этих изменения обратно-совместимы с браузерами, которые корректно воспроизводят предыдущую версию аттрибута ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite")," или вообще ее не поддерживают. Аналогично, любые клиенты не поддерживающие ",Object(n.mdx)("inlineCode",{parentName:"p"},"SameSite=None")," до сих пор, должны игнорировать его и обрабатывать таким образом, как будто этот аттрибут не задан."),Object(n.mdx)("p",null,"Предупреждение:"),Object(n.mdx)("p",null,"Определенное число старых версий браузеров Chrome, Safari, и UC несовместимы с новым значением ",Object(n.mdx)("inlineCode",{parentName:"p"},"None")," и могут игнорировать или отклонять ",Object(n.mdx)("inlineCode",{parentName:"p"},"cookie"),". Это поведение исправлено в текущих версиях, но необходимо проверить соотношение пользователей использующих старые версии. Список неподдерживаемых клиентов можно найти на сайте Chromium."),Object(n.mdx)("p",null,"Огромное спасибо за участие и обратную связь Lily Chen, Malte Ubl, Mike West, Rob Dodson, Tom Steiner, и Vivek Sekhar"))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-same-cookies-mdx-3bea937819180b42fbf1.js.map