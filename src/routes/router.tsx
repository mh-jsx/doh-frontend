import { lazy } from 'react';
import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from 'components/layout/layout';

import ErrorBoundary from 'routes/error-boundary';

import Custom from 'pages/controls/custom/cusstom';
import Error from 'pages/error/error';

import { PrivateRoutes } from './private-routes';
import WithSuspense from './with-suspense';

const Orders = lazy(() => import('pages/orders/orders'));
const PersonalAssistant = lazy(() => import('pages/personal-assistant/personal-assistant'));
const Presentations = lazy(() => import('pages/presentation/presentations'));
const Report = lazy(() => import('pages/report/report'));
const Controls = lazy(() => import('pages/controls/controls'));

function AppRoutes() {
  // TODO: get current user from AUTH context
  const currentUser = null;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<ErrorBoundary />}>
        <Route path='/' element={<Presentations />} />
        <Route path='controls' element={<Outlet />}>
          <Route index element={<Controls />} />
          <Route path='custom' element={<Custom />} />
        </Route>
        <Route path='/orders' element={<Orders />} />
        <Route path='/report' element={<Report />} />
        <Route path='/personal-assistant' element={<PersonalAssistant />} />

        {currentUser && (
          <>
            <Route path='/*' element={<PrivateRoutes />} />
            <Route path='auth/*' element={<Navigate to='/auth/sign-in' />} />
          </>
        )}

        {/* Unknown path redirect */}
        <Route path='/error/:error_type' element={<Error />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    )
  );

  return (
    <WithSuspense>
      <RouterProvider router={router} />
    </WithSuspense>
  );
}

export default AppRoutes;
