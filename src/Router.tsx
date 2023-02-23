<<<<<<< HEAD
import HomePage from '@/pages/HomePage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';
import TodoPage from '@/pages/TodoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
=======
import routerMeta from './lib/routerMeta';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '@/components/HOC/ProtectedRoute';

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
    {assignedRouter.map(({ Component, props }: any) => (
      <Route
        key={props.path}
        path={props.path}
        element={
          <ProtectedRoute path={props.path}>
            <Suspense fallback={<div>Loading...</div>}>
              <Component />
            </Suspense>
          </ProtectedRoute>
        }
      />
    ))}
  </Routes>
);
>>>>>>> 72e892fcd487c03c407e1bc3e3b2886075b1bc6f

export default Router;
