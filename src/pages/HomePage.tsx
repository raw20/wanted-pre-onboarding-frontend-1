import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem('todos');

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
