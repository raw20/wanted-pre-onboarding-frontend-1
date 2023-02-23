import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import routerMeta from '@/lib/routerMeta';
import token from '@/lib/token';
import { Navigate } from 'react-router-dom';
import { UserContext } from '@/contexts/UserContextProvider';
import { useContext } from 'react';

interface IProtectedRoute {
  children: JSX.Element;
  path: string;
}

const ProtectedRoute = ({ children, path }: IProtectedRoute) => {
  const { isLogin } = useContext(UserContext);

  if (!isLogin && path === routerMeta.TodoPage.path) {
    return <Navigate to="/signin" />;
  }

  if (
    isLogin &&
    (path === routerMeta.SignUpPage.path || path === routerMeta.SignInPage.path)
  ) {
    return <Navigate to="/todo" />;
  }

  return children;
};
export default ProtectedRoute;
