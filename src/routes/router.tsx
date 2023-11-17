import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Layout from 'components/layout/layout';

import ErrorBoundary from 'routes/error-boundary';

import Error from 'pages/error/error';
import Presentations from 'pages/presentation/presentations';

import { PrivateRoutes } from './private-routes';
import WithSuspense from './with-suspense';

function AppRoutes() {
  // TODO: get current user from AUTH context
  const currentUser = null;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<ErrorBoundary />}>
        <Route path='/' element={<Presentations />} />

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
