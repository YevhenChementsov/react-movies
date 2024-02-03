import { Suspense } from 'react';

import Copyright from 'components/Layout/Footer/Copyright/Copyright';
import Footer from 'components/Layout/Footer/Footer';
import Header from 'components/Layout/Header/Header';
import Loader from 'components/Loader/Loader';
import Main from 'components/Layout/Main/Main';
import Navigation from 'components/Layout/Header/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Container from 'components/Layout/Container/Container';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <Copyright />
      </Footer>
    </Container>
  );
};
