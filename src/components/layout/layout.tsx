import { Outlet } from 'react-router-dom';

import WithSuspense from 'routes/with-suspense';

import Footer from './footer';
import Header from './header';

function Layout() {
  return (
    <>
      <Header />

      <WithSuspense>
        <Outlet />
      </WithSuspense>

      <Footer />
    </>
  );
}

export default Layout;
