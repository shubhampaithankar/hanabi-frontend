import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { FormPage, HomePage, ResultPage } from '../Pages';

export const routes = [
  {
    path: '',
    children: [
      {
        path: '/',
        element: <Navigate to='/home' />
      },
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/form', //:username
        element: <FormPage />
      },
      {
        path: '/result',
        element: <ResultPage />
      },
      {
        path: '*',
        element: <>404 - Not Found</>
      }
    ]
  }
];

export default () => {
  return useRoutes([
    ...routes
  ]);
};