import SignInput from '@/components/Input/SignInput';
import React from 'react';

const SignInPage = () => {
  const token = window.localStorage.getItem('todos');

  return (
    <div>
      <h1>로그인</h1>
      <SignInput />
    </div>
  );
};

export default SignInPage;
