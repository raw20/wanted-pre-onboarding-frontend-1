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
};

export default HomePage;
