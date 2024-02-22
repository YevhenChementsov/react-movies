import { Suspense } from 'react';

import Container from 'components/Container/Container';
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <Header />

      <main className="my-5">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </Container>
  );
};
