**Читать на других языках: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md).**

# React Router. Маршрутизация.

## Приложение - «Кинопоиск».

Приложение для поиска и хранения фильмов с базовой маршрутизацией. Превью
рабочего приложения
[смотри по ссылке](https://drive.google.com/file/d/1RGJvTXLM8cSTtc9CUXUjcFf1WteMzrS3/view?usp=sharing).

### 1. API `themoviedb.org`

Для бекенда используется [themoviedb.org](https://www.themoviedb.org/) API.
Необходимо зарегистриваться (можно ввести произвольные данные) и получить
API-ключ. В этом приложении будут использоваться следующие ендпоинты:

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending) -
  список самых популярных фильмов на сегодня для создания коллекции на главной
  странице.
- [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies) -
  поиск кинофильма по ключевому слову на странице фильмов.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details) -
  запрос полной информации о фильме для страницы кинофильма.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits) -
  запрос информации о актёрском составе для страницы кинофильма.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews) -
  запрос обзоров для страницы кинофильма.

[Ссылка на документацию](https://developers.themoviedb.org/3/getting-started/introduction)
по работе с The Movie Database (TMDB) API.

### 2. Маршруты

Если пользователь зашел по несуществующему маршруту, его необходимо
перенаправлять на домашнюю страницу. В приложении будут использоваться следующие
маршруты:

- `'/'` - компонент `<HomePage />`, домашняя страница со списком популярных
  кинофильмов.
- `'/movies'` - компонент `<MoviesPage />`, страница поиска фильмов по ключевому
  слову.
- `'/movies/:movieId'` - компонент `<MovieDetailsPage />`, страница с детальной
  информацией о кинофильме.
- `/movies/:movieId/cast` - компонент `<Cast />`, информация о актерском
  составе. Рендерится на странице `<MovieDetailsPage />`.
- `/movies/:movieId/reviews` - компонент `<Reviews />`, информация об обзорах.
  Рендерится на странице `<MovieDetailsPage />`.
- `*` - компонент `<NotFoundPage />`, страница "404" или страница с
  несуществующим маршрутом, с которой пользователь будет перенаправляться на
  домашнюю страницу с помощью ссылки или кнопки.

### 3. Code Splitting (разделение кода)

Для маршрутов приложения добавляется асинхронная загрузка JS-кода, используя
`React.lazy()` и `Suspense`.
