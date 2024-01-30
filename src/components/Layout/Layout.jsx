import { Suspense } from 'react';

import Copyright from 'components/Copyright/Copyright';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import Main from 'components/Main/Main';
import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
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
    </div>
  );
};
