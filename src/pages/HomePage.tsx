<<<<<<< HEAD
import { TOKEN_KEY } from '@/constants/tokenKey';
import { Token } from '@/lib/common/token';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const jwtToken = new Token();
  const token = jwtToken.getToken(TOKEN_KEY);

  useEffect(() => {
    if (!token) {
      navigate('/signin');
    } else {
      navigate('/todo');
    }
  }, []);
  return <></>;
=======
import routerMeta from '@/lib/routerMeta';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  return <Navigate to={routerMeta.TodoPage.path} replace={true} />;
>>>>>>> 72e892fcd487c03c407e1bc3e3b2886075b1bc6f
};

export default HomePage;
