import { Suspense } from 'react';

import Copyright from 'components/Footer/Copyright/Copyright';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import Main from 'components/Main/Main';
import Navigation from 'components/Header/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';

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
