import { lazy } from 'react';

import { Layout } from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const Cast = lazy(() => import('components/Main/Cast/Cast'));
const Reviews = lazy(() => import('components/Main/Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
