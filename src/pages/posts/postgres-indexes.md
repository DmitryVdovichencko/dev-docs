---
title: "PostgreSQL индексы" 
date: "2020-03-29"
tags: ["pg"]
---

# Разбираемся с индексами в Postgres

[Вся правда об индексах в PostgreSQL](https://youtu.be/aaecM4wKdhY)

[Серия статей на Хабре](https://habr.com/ru/company/postgrespro/blog/326096/)

__Индекс__ - дополнительня структура данных для ускорения работы запросов.

* Помогает при поиске
* Ограничение целостности данных
* Сортировка группировка и соединение таблиц

Индекс полезен тогда, когда есть много разных вариантов значений. Если, вариантов значений всего два, например, то индекс будет обладать малой селективностью и затраты на его содержание будут неоправданы.

## Об индексах

* Индексы - вторичны, отделены от таблиц. Инфа о них содержится в системном каталоге.

* Индексы связывают ключи и TID - tuple id. 

Запись - это данные дб на логическом уровне. Например запись таблицы `users`

| id | user_name | login | password |
|----|-----------|-------|----------|
| 1  | dmitry    | admin | 12345    |

В силу многоверсионности у каждой записи может быть несколько версий. Эти версии называют `tuple`.
Индексы не содержат инфу о видимости. Каждая транзакция видит свою версию (snapshot) базы данных и соседняя транзакция ничего не знает об изменениях сделанных текущей транзакцией.

Исходя из многоверсионности нужно определить является ли запись видимой а для этого нужно сходить в табличку.

Любое обновление записи в таблице ведет к появлению новой записи в индексе => `index bloating`.

Индексы могут использоваться как для поиска так и для сортировки.

## Условия использования индекса

* Должны совпадать типы аргументов и оператор. Важен порядок аргумент `=>` оператор `=>` аргумент.

* Индекс должен быть валиден

* План с использованием индекса оптимален


