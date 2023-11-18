import { Outlet } from 'react-router-dom';

import Container from 'components/core-ui/container/container';

import WithSuspense from 'routes/with-suspense';

import Aside from './aside';
import Header from './header';
import MainHeading from './heading';

function Layout() {
  return (
    <Container>
      <Header />

      <div className='flex gap-8 aspect-auto ps-12 h-[44rem]'>
        <main className='flex-1 bg-gray rounded-xl backdrop-blur-2xl'>
          <MainHeading />
          <WithSuspense>
            <Outlet />
          </WithSuspense>
        </main>

        <Aside />
      </div>
    </Container>
  );
}

export default Layout;
