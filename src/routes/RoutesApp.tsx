import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router';

import { LIST_ROUTES } from '@/routes/routes.config';
import DefaultLayout from '@/layouts/DefaultLayout';
import type { RouteItemDef } from '@/types/routes.types';
const NotFound = lazy(() => import('@/components/NotFound/NotFound'));

const createRoute = (route: RouteItemDef) => {
  const Layout = route.layout ?? DefaultLayout;
  const Page = route.Component ?? NotFound;

  return {
    path: route.path,
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading page...</div>}>
            <Page />
          </Suspense>
        ),
      },
    ],
  };
};

const RoutesApp = () => {
  const routes = LIST_ROUTES.map(createRoute);
  return useRoutes(routes);
};

export default RoutesApp;
