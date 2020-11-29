---
title: "Разбираемся с атрибутом SameSite cookies " 
date: "2020-11-29"
tags: ["js","ru"]
---

Защитите свой сайт, узнав как явно определить кросс-сайтовые cookies.

`Cookies` являются одним из способов хранения состояния на веб-сайтах. Многие годы их возможности росли и развивались, при этом оставляя веб-платформу с некоторыми устаревшими проблемами. Чтобы это исправить, браузеры (включая Chrome, Firefox и Edge) изменили свое поведение в сторону защиты приватных данных пользователей.

Каждый `cookie` представляет собой пару ключ-значение `key = value` с определенным набором атрибутов, которые контролируют когда и где будет использоваться `cookie`. Возможно, вы уже использовали эти атрибуты, чтобы например установить срок действия `cookie`, или передачу только по HTTPS. Сервера устанавливают `cookies` отправляя специальный заголовок `Set-Cookie` в ответе. За всеми подробностями можно обратиться к спецификации RFC6265bis, но вот краткий обзор того, как это работает.

Допустим, у вас есть блог, где вы хотите показывать промо "Что нового" своим подписчикам. Пользователь может пропустить промо, и вряд ли после этого захочет увидеть его снова, по крайней мере, на некоторое время. Вы можете записать эту настройку в `cookie` и установить его срок действия в 1 месяц (2,600,000 сек), а также отправлять его только по HTTPS. В этом случае заголовок будет выглядеть так:

```
Set-Cookie: promo_shown=1; Max-Age=2600000; Secure
```

IMG

Когда ваш посетитель откроет страницу, удовлетворяющую этим требованиям, т.е. соединение защищено и  `cookie` не старше месяца, браузер отправит этот заголовок в своем запросе: 

```
Cookie: promo_shown=1
```

IMG

Вы также можете добавлять и смотреть `cookies` доступные на сайте используя `document.cookie`.
Присваивание значения `document.cookie` создаст или перезапишет `cookie` с этим ключом. Например, попробуйте выполнить следующее в JavaScript консоли своего браузера: 

```javascript
document.cookie = "promo_shown=1; Max-Age=2600000; Secure"
// "promo_shown=1; Max-Age=2600000; Secure"
```

Чтение `document.cookie` выведет все `cookies` доступные в текущем контексте, разделив их `;`

```javascript
document.cookie;
// "promo_shown=1; color_theme=peachpuff; sidebar_loc=left"
````

IMG

Если вы попробуете выполнить это на одном из популярных сайтов, то заметите, что большинство из них устанавливают значительно больше чем 3 `cookies`. Чаще всего, эти `cookies` отправляются в каждом запросе к домену, что приводит к ряду последствий. Обычно, для пользователей, ограничение исходящего трафика более строгое чем входящего. Так что, все излишние издержки на трафик исходящих запросов приводят к потерям в скорости. Будьте консервативными к числу и размеру `cookies`, которые вы устанавливаете. Используйте аттрибут `Max-Age`, чтобы убедиться, что `cookies` не хранятся дольше чем необходимо.  


## Какие `cookies` являются основными а какие сторонними?

Если вернуться к тем популярным сайтам на которые мы смотрели выше, вы, возможно, заметили что `cookies` представлены для разных доменов, а не только для того, на котором вы находитесь. 

__`Cookies` домен которых совпадает с текщим доменом из адресной строки браузера являются основными.__

__Соответственно, `Cookies` домен которых отличается от текщего  являются сторонними.__

Эти определения не являются абсолютными, они зависят от окружения пользователя: один и тот же `cookie` может быть как основным так и сторонним в заисимости от сайта, на котором находится пользователь в текущий момент.

IMG

Продолжим с примером блога, допустим в одном из постов есть прикольная картинка с котэ и она хостится на `/blog/img/amazing-cat.png`. Поскольку картинка очень крутая, другой пользователь захотел использовать ее у себя на сайте. Если, пользователь уже посещал ваш блог, и у него есть `cookie` `promo-shown`, то когда он захочет посмотреть на картику с котэ на другом сайте `cookie` будет прикреплен к запосу на получение картинки. Это определенно никому не нужно, т.к. `promo_shown` не используется на другом сайте, это излишняя нагрузка на запрос

Если это незапланированный эффект, зачем вам это делать? Существует механизм, позволяющий сайтам хранить
состояние, когда они используются в стороннем контексте. Например, вы добавили видео с YouTube на своем сайте. В плеере, посетитель увидит кнопку "Посмотреть позже". Если ваш посетитель уже залогинен на YouTube, то его сессия доступна во встроенном плеере через сторонние `cookies`. Это значит, что кнопка "Посмотреть позже" просто сохранит видео, вместо запроса на логин или редиректа на YouTube.

IMG

Одна из традиционных особенностей веба в том, что веб, по умолчанию, привык быть открытым. Поэтому, так много людей могут создавать приложения и размещать контент. Однако, эта особенность приводит к появлению ряда проблем в безопасности и приватности данных пользователя. Атаки фальсификации межсайтовых запросов (CSRF - Cross-Site Request Forgery) основаны на том факте, что `cookies` прикрепляются к каждому запросу, в независимости от того, кто является инициатором запроса. Например, если вы зашли на `evil.example`, то он может сделать запрос на `your-blog.example` и ваш браузер спокойненько прикрепит соответствующие `cookies`. И если ваш блог не запотится о проверке запросов то `evil.example` может спровоцировать действия типа удаления постов, или размещения собственного контента. 

Пользователи также становятся более уязвимыми, от того как `cookies` используются для отслеживания их активности по разным сайтам. Тем не менее, до сих пор, отсутствовал способ явно заявить о намерениях использования `cookies`. Ваш `cookie` `promo_shown` должен отправляться только в основном контексте, учитывая при этом `cookie` сессии для встраиваемых виджетов, которые позволяют хранить состояние авторизации других сайтов в стороннем контексте.  

## Объявляем об использовании `cookies` с аттрибутом `SameSite`

Включение аттрибута `SameSite` (определенного в RFC6265bis) позволяет вам определить: должен ли ваш `cookie` использоваться только в основном или `same-site` контексте. Полезно понимать что вообще здесь значит `site`. `Site` - сочетание суффикса домена и части домена перед ним. Например, `www.web.dev` домен - часть сайта `web.dev`


__Ключевое понятие:__

Если пользователь находится на `www.web.dev` и запрашивает изображение с `static.web.dev` то это является `same-site` запросом.

Список суффиксов доменов определен здесь, так что это не только домены высшего уровня типа `.com`  но также и сервисы например `github.io`. Это позволяет считать `your-project.github.io` и `my-project.github.io` разными сайтами.

__Ключевое понятие:__

Если пользователь на `your-project.github.io` и запрашивает изображение с `my-project.github.io` то это 
межсайтовый (cross-site) запрос.

Включение аттрибута `SameSite` в `cookie` предоставляет три возможных варианта управления поведением. Вы можете не определять аттрибут, либо использовать `Strict` или `Lax` для ограничения передачи `cookie`только на собственном сайте.

Если вы назначите `SameSite` значение `Strict`, ваш `cookie` будет пересылаться только в основном контексте. Для пользователя, это означает что `cookie` будет отправлен только сайту из адресной строки браузера. Так что, если `promo_shown` `cookie` будет определен следующим образом:

```javascript
Set-Cookie: promo_shown=1; SameSite=Strict
```
Когда ваш пользователь находится у вас на сайте, `cookie` будет отправлен в запросе, как и ожидается. С другой стороны, когда пользователь пройдет по ссылке на ваш сайт, например, с другого сайта или из email от своего друга, в инициализирующем запросе `cookie` отправлен не будет. Это хорошо в том случае, если `cookies` относятся к функционалу за пределами начальной навигации, такому как смена пароля или создание заказа. Но, это слишком строго для `promo_shown`. Если ваш пользователь пройдет по ссылке на сайт, он бы хотел чтобы `cookie` был отправлен и, соответственно его выбор не смотреть промо сработал корректно. 

Здесь нам поможет `SameSite=Lax`, разрешая отправлять `cookie` на верхнем уровне навигации. Давайте посетим страницу с постом о котэ, перейдя на нее с другого сайта по ссылке на оригинальный пост. Другой сайт может использовать фото котэ с вашего сайта напрямую и предоставить ссылку на оригинальный пост. 

```html
<p>Look at this amazing cat!</p>
<img src="https://blog.example/blog/img/amazing-cat.png" />
<p>Read the <a href="https://blog.example/blog/cat.html">article</a>.</p>
```

А `cookie` установлен следующим образом:

```javascript
Set-Cookie: promo_shown=1; SameSite=Lax
```

Когда пользователь придет на другой сайт,`cookie` не будет прикреплен к запросу на получение `amazing-cat.png`. Однако при переходе по ссылке к оригинальному посту `cat.html` в вашем блоге, запрос будет включать `cookie`. Это делает `Lax` хорошим выбором для `cookies` влиящих на отображение, тогда как `Strict` полезен для `cookies`, которые относятся к действиям пользователя


__Предупреждение:__

Ни `Strict` ни `Lax` не являются полноценным решением для обеспечения безопасности сайта. `Cookies` отправляются как часть запросов пользователя и с ними нужно обращаться также как и с другими пользовательскими данными. Нужно следить за чистотой и корректностью передаваемых данных. Никогда не используйте `cookies` для хранения секретных данных со стороны сервера.

Наконец, есть вариант не определять значение, что подразумевает собой отправку `cookies` во всех конекстах. В последнем черновике спецификации RFC6265bis это можно сделать яно определив `SameSite=None`. Это означает что можно использовать `None` если вы намеренно хотите отправлять `cookies` сторонним сайтам.

IMG

Если вы предоставляете сервис, которые другие сайты добавляют как виджет, встраиваемое содержимое, рекламу, или вам необходимо поодержка авторизации на разных сайтах, необходимо использовать `None`, чтобы ваши намерения были ясны.

## Изменения в стандартном поведении без SameSite

Несмотря на то, что аттрибут `SameSite` широко поддерживается, он, к сожалению, мало используется разработчиками.

While the SameSite attribute is widely supported, it has unfortunately not been widely adopted by developers. The open default of sending cookies everywhere means all use cases work but leaves the user vulnerable to CSRF and unintentional information leakage. To encourage developers to state their intent and provide users with a safer experience, the IETF proposal, Incrementally Better Cookies lays out two key changes:

    Cookies without a SameSite attribute will be treated as SameSite=Lax.
    Cookies with SameSite=None must also specify Secure, meaning they require a secure context.

Chrome implements this default behavior as of version 84. Firefox has them available to test as of Firefox 69 and will make them default behaviors in the future. To test these behaviors in Firefox, open about:config and set network.cookie.sameSite.laxByDefault. Edge also plans to change its default behaviors.

This article will be updated as additional browsers announce support.
SameSite=Lax by default #

No attribute set

Set-Cookie: promo_shown=1

If you send a cookie without any SameSite attribute specified…

Default behavior applied

Set-Cookie: promo_shown=1; SameSite=Lax

The browser will treat that cookie as if SameSite=Lax was specified.

While this is intended to apply a more secure default, you should ideally set an explicit SameSite attribute rather than relying on the browser to apply that for you. This makes your intent for the cookie explicit and improves the chances of a consistent experience across browsers.

Caution:

The default behaviour applied by Chrome is slightly more permissive than an explicit SameSite=Lax as it will allow certain cookies to be sent on top-level POST requests. You can see the exact details on the blink-dev announcement. This is intended as a temporary mitigation, you should still be fixing your cross-site cookies to use SameSite=None; Secure.
SameSite=None must be secure #

Rejected

Set-Cookie: widget_session=abc123; SameSite=None

Setting a cookie without Secure will be rejected.

Accepted

Set-Cookie: widget_session=abc123; SameSite=None; Secure

You must ensure that you pair SameSite=None with the Secure attribute.

You can test this behavior as of Chrome 76 by enabling chrome://flags/#cookies-without-same-site-must-be-secure and from Firefox 69 in about:config by setting network.cookie.sameSite.noneRequiresSecure.

You will want to apply this when setting new cookies and actively refresh existing cookies even if they are not approaching their expiry date.

If you rely on any services that provide third-party content on your site, you should also check with the provider that they are updating their services. You may need to update your dependencies or snippets to ensure that your site picks up the new behavior.

Both of these changes are backwards-compatible with browsers that have correctly implemented the previous version of the SameSite attribute, or just do not support it at all. By applying these changes to your cookies, you are making their intended use explicit rather than relying on the default behavior of the browser. Likewise, any clients that do not recognize SameSite=None as of yet should ignore it and carry on as if the attribute was not set.

Warning:

A number of older versions of browsers including Chrome, Safari, and UC browser are incompatible with the new None attribute and may ignore or restrict the cookie. This behavior is fixed in current versions, but you should check your traffic to determine what proportion of your users are affected. You can see the list of known incompatible clients on the Chromium site.
SameSite cookie recipes #

For further detail on exactly how to update your cookies to successfully handle these changes to SameSite=None and the difference in browser behavior, head to the follow up article, SameSite cookie recipes.

Kind thanks for contributions and feedback from Lily Chen, Malte Ubl, Mike West, Rob Dodson, Tom Steiner, and Vivek Sekhar

Cookie hero image by Pille-Riin Priske on Unsplash