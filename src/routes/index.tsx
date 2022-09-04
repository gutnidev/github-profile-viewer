import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';

export enum EAppRoutes {
    HOME = '/',
    RESUME = '/:username',
}

// pages
const Home = lazy(() => import('pages/Home'));
const Resume = lazy(() => import('pages/Resume'));

export const APP_ROUTES: RouteObject[] = [
  {
    path: EAppRoutes.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: EAppRoutes.RESUME,
        element: <Resume />,
      },
    ],
  },
];
