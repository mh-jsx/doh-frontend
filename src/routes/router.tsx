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

import Error from 'pages/error/error';

import { PrivateRoutes } from './private-routes';
import WithSuspense from './with-suspense';

const Orders = lazy(() => import('pages/orders/orders'));
const OrderPlaced = lazy(() => import('pages/orders/order-placed'));
const PersonalAssistant = lazy(() => import('pages/personal-assistant/personal-assistant'));
const Presentations = lazy(() => import('pages/presentation/presentations'));
const Report = lazy(() => import('pages/report/report'));
const Controls = lazy(() => import('pages/controls/controls'));
const Custom = lazy(() => import('pages/controls/custom/custom'));

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
        <Route path='orders' element={<Outlet />}>
          <Route index element={<Orders />} />
          <Route path='order-placed' element={<OrderPlaced />} />
        </Route>
        <Route path='report' element={<Report />} />
        <Route path='personal-assistant' element={<PersonalAssistant />} />

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
