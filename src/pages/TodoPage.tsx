import { UserContext } from '@/contexts/UserContextProvider';
import routerMeta from '@/lib/routerMeta';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const TodoPage = () => {
  const { isLogin } = useContext(UserContext);
  console.log(isLogin);

  if (!isLogin) return <Navigate to={routerMeta.SignInPage.path} />;

  return <>TodoPage</>;
};

export default TodoPage;
