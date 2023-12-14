**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md).**

# React Router. Routing.

## «Movie Search» App.

Create basic routing for a movie search and storage app. Preview of the of the
working application
[see here](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view?usp=sharing).

### 1. API `themoviedb.org`

Use the [themoviedb.org](https://www.themoviedb.org/) API for the backend. You
need to register (you can enter any data) and get an API key. The following
endpoints will be used in this work:

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending)
  a list of the most popular films for today to create a collection on the main
  page.
- [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies)
  search for a film by keyword on the movies page.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)
  Request full details of a film for a movie page.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits)
  Request the cast information for a movie page.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)
  Request movie reviews for a movie page.

[Documentation links](https://developers.themoviedb.org/3/getting-started/introduction)

### 2. Routes

The application should have the following routes. If a user enters the
application via a non-existent route, the user should be redirected to the home
page.

- `'/'` - component `<HomePage/>`, the home page with a list of popular films.
- `'/movies'` - component `<MoviesPage/>`, the page for searching for films by
  keyword.
- `'/movies/:movieId'` - `<MovieDetailsPage/>` component, a page with detailed
  information about the film.
- '/movies/:movieId/cast' - component `<Cast/>`, information about the cast. It
  is rendered on the `<MovieDetailsPage/>` page.
- `/movies/:movieId/reviews` - component `<Reviews/>`, information about
  reviews. It is rendered on the `<MovieDetailsPage/>` page.
- `*` - `<NotFoundPage/>` component, a "404" page or a page with an non-existent
  route, from which the user will be redirected to the home page via a link or
  button.

### 3. Code Splitting

Add asynchronous loading of JS code for application routes using `React.lazy()`
and `Suspense`.
