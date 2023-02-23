import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import routerMeta from '@/lib/routerMeta';
import token from '@/lib/token';
import { Navigate } from 'react-router-dom';

interface IProtectedRoute {
  children: JSX.Element;
  path: string;
}

const ProtectedRoute = ({ children, path }: IProtectedRoute) => {
  if (!token.getToken(ACCESS_TOKEN_KEY) && path === routerMeta.TodoPage.path) {
    return <Navigate to="/signin" />;
  }

  if (
    token.getToken(ACCESS_TOKEN_KEY) &&
    (path === routerMeta.SignUpPage.path || path === routerMeta.SignInPage.path)
  ) {
    return <Navigate to="/todo" />;
  }

  return children;
};
export default ProtectedRoute;
