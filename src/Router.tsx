import routerMeta from './lib/routerMeta';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const lazyImport = (pageName: string) =>
  lazy(() => import(`./pages/${pageName}`));

const assignedRouter = Object.keys(routerMeta).map((componentKey: string) => {
  return {
    Component: lazyImport(componentKey),
    props: routerMeta[componentKey],
  };
});

const Router = () => (
  <Routes>
    {assignedRouter.map(({ Component, props }) => (
      <Route
        key={props.path}
        path={props.path}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        }
      />
    ))}
  </Routes>
);

export default Router;
