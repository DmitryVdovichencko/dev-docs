# Разбираемся с процессом авторизации в passport.js

Passport.js - миддлвар для авторизации (позволяющий пользователям логиниться), кооторый может быть полностью кастомизирован и отлично работает в связке с connect/express.

Он является довольно гибким в том смысле,что позволяет использовать разные стратегии авторизации (допустим через Twitter, или с помощью собственной базы данных - за счет установки отдельных модулей и их комбинирования), а также __passport.js__ позволяет определить маршрут или вывод результата авторизации.

Стратегия __`Local Strategy`__ позволяет пользователям авторизоваться, используя базу данных приложения. Для этих случаев есть несколько отличных примеров.

В этой статье, мы разберемся с процессом авторизации, а в следующей разберем несколько практических сценариев использования __`passportjs`__.


## Основные моменты при использовании `passport.js`

Есть 3 момента при использовании passport.js:

    1. Импортируем модуль и вызываем методы `passport.initialize()` и `passport.session()` для миддлвары express.
    
    2. Настраиваем для `passport` хотя бы одну стратегию `Strategy` и подключаем методы `passport` `serializeUser` and `deserializeUser`.
    
    3. Определяем маршрут, в котором будем использовать миддлвар `passport.authenticate` непосредственно для авторизации пользователя.

Примеры в документации достаточно ясно показывают использование этих методов. Поэтому,подробнее здесь мы их не рассматриваем.

## Процесс запроса на авторизацию

Итак, если мы верно настроили `passportjs`, согласно примеру выше, то при поытке пользователя авторизоваться по маршруту [/login](/login), произойдет следующее:

    * Когда пользователь отправит данные формы авторизации, `POST` запрос к маршруту [/login](/login) вызовет выполнение мидлвар `passport.authenticate`, который мы подключили.
    
    * Поскольку миддлвар авторизации для этого маршрута настроен на использование стратегии `LocalStrategy`, `passport` вызовет нашу реализацию `LocalStrategy`.
    
    * `Passport` возьмет из запроса `req.body.username` и `req.body.password` и передаст их нашей функции проверки авторизации в `LocalStrategy`.
    
    * Теперь займемся своими делами: загрузим данные пользователя из базы данных и проверим совпадают ли пароли.
    
    In case of an Error interacting with our database, we need to invoke done(err). When we cannot find the user or the passwords do not watch, we invoke done(null, false). If everything went fine and we want the user to login we invoke done(null, user).
    Calling done will make the flow jump back into passport.authenticate. It's passed the error, user and additional info object (if defined).
    If the user was passed, the middleware will call req.login (a passport function attached to the request).
    This will call our passport.serializeUser method we've defined earlier. This method can access the user object we passed back to the middleware. It's its job to determine what data from the user object should be stored in the session. The result of the serializeUser method is attached to the session as req.session.passport.user = { // our serialised user object // }.
    The result is also attached to the request as req.user.
    Once done, our requestHandler is invoked. In the example the user is redirected to the homepage.

Subsequent authenticated requests flow

On subsequent request, the following occurs:

    Express loads the session data and attaches it to the req. As passport stores the serialised user in the session, the serialised user object can be found at req.session.passport.user.
    The general passport middleware we setup (passport.initialize) is invoked on the request, it finds the passport.user attached to the session. If is doesn't (user is not yet authenticated) it creates it like req.passport.user = {}.
    Next, passport.session is invoked. This middleware is a Passport Strategy invoked on every request. If it finds a serialised user object in the session, it will consider this request authenticated.
    The passport.session middleware calls passport.deserializeUser we've setup. Attaching the loaded user object to the request as req.user.

Summary passport methods and middleware

    passport.initialize middleware is invoked on every request. It ensures the session contains a passport.user object, which may be empty.
    passport.session middleware is a Passport Strategy which will load the user object onto req.user if a serialised user object was found in the server.
    passport.deserializeUser is invoked on every request by passport.session. It enables us to load additional user information on every request. This user object is attached to the request as req.user making it accessible in our request handling.
    Our Local Strategy is only invoked on the route which uses the passport.authenticate middleware.
    Only during this authentication passport.serializeUser is invoked allowing us the specify what user information should be stored in the session.

Overview passport methods attached to the request

To finish an overview of passport methods accessible within request handlers:

    req.login()
    req.logout()
    req.isAuthenticated()
    req.isUnAuthenticated()

