import { createBrowserRouter, RouterProvider } from 'react-router';
import { MainLayout } from '@/layouts';
import { lazyRoute, withFallback } from '@/routes/routeHelpers.tsx';
import { routePaths } from '@/routes/paths';

const appRouter = createBrowserRouter([
  {
    path: routePaths.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        ...lazyRoute(() => import('@/pages/HomePage')),
      },
    ],
  },
  {
    path: routePaths.notFound,
    ...lazyRoute(() => import('@/pages/NotFound')),
  },
]);

export default function AppRouter() {
  return withFallback(<RouterProvider router={appRouter} />);
}
