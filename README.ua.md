**Читати іншими мовами: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md).**

# React Router. Маршрутизація.

## Застосунок - «Кінопошук».

Створи базову маршрутизацію для застосунку пошуку і зберігання фільмів. Прев'ю
робочого застосунку
[дивись за посиланням](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view?usp=sharing).

### 1. API `themoviedb.org`

Для бекенду використовуй [themoviedb.org](https://www.themoviedb.org/) API.
Необхідно зареєструватися (можна ввести довільні дані) та отримати API-ключ. У
цій роботі будуть використовуватися наступні ендпоінти:

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending)
  список найпопулярніших фільмів на сьогодні для створення колекції на головній
  сторінці.
- [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies)
  пошук фільму за ключовим словом на сторінці фільмів.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)
  запит повної інформації про фільм для сторінки кінофільму.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits)
  запит інформації про акторський склад для сторінки кінофільму.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)
  запит оглядів для сторінки кінофільму.

[Посилання на документацію](https://developers.themoviedb.org/3/getting-started/introduction)

### 2. Маршрути

У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим
маршрутом, його необхідно перенаправляти на домашню сторінку.

- `'/'` – компонент `<HomePage/>`, домашня сторінка зі списком популярних
  кінофільмів.
- `'/movies'` – компонент `<MoviesPage/>`, сторінка пошуку кінофільмів за
  ключовим словом.
- `'/movies/:movieId'` – компонент `<MovieDetailsPage/>`, сторінка з детальною
  інформацією про кінофільм.
- `/movies/:movieId/cast` – компонент `<Cast/>`, інформація про акторський
  склад. Рендериться на сторінці `<MovieDetailsPage/>`.
- `/movies/:movieId/reviews` – компонент `<Reviews/>`, інформація про огляди.
  Рендериться на сторінці `<MovieDetailsPage/>`.
- `*` - компонент `<NotFoundPage/>`, сторінка "404" або сторінка з неіснуючим
  маршрутом, з якої користувач буде перенаправлятися на домашню сторінку за
  допомогою посилання або кнопки.

### 3. Code Splitting (поділ коду)

Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи
`React.lazy()` і `Suspense`.
