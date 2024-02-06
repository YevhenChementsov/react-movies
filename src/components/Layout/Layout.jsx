import { Suspense } from 'react';

import Container from 'components/Layout/Container';
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import Main from 'components/Layout/Main';
import Loader from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Container>
  );
};
