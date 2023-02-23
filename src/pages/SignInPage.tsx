<<<<<<< HEAD
import SignInput from '@/components/Input/SignInput';
import React from 'react';

const SignInPage = () => {
  const token = window.localStorage.getItem('todos');

  return (
    <div>
      <h1>로그인</h1>
      <SignInput />
=======
import { postSignIn } from '@/api/auth';
import useInputs from '@/lib/hooks/useInputs';
import useValidation from '@/lib/hooks/useValidation';
import { useNavigate } from 'react-router-dom';
import token from '@/lib/token';
import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import { useContext, useState } from 'react';
import { UserContext } from '@/contexts/UserContextProvider';

const SignInpage = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [signInData, onChangeSignInData] = useInputs({
    email: '',
    password: '',
  });
  const { setIsLogin } = useContext(UserContext);
  const [emailStatus, passwordStatus] = useValidation(signInData);

  const onSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isProcessing) {
      setIsProcessing(true);

      postSignIn(signInData)
        .then((res) => {
          token.setToken(ACCESS_TOKEN_KEY, res.data.access_token);
          setIsLogin(!!token.getToken(ACCESS_TOKEN_KEY));
          setIsProcessing(false);
          navigate('/todo');
        })
        .catch((err) => {
          alert(err.response.data.log || err.log);
        });
    }
  };

  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={onSignIn}>
        <input
          type="text"
          placeholder="이메일을 입력해주세요"
          name="email"
          value={signInData.email}
          onChange={onChangeSignInData}
          data-testid="email-input"
        />
        {emailStatus && <div>{emailStatus}</div>}

        <input
          type="password"
          placeholder="패스워드를 입력해주세요"
          autoComplete="off"
          name="password"
          value={signInData.password}
          onChange={onChangeSignInData}
          data-testid="password-input"
        />
        {passwordStatus && <div>{passwordStatus}</div>}

        <button
          type="submit"
          data-testid="signin-button"
          disabled={!!(emailStatus || passwordStatus) || isProcessing}
        >
          로그인
        </button>
      </form>
>>>>>>> 72e892fcd487c03c407e1bc3e3b2886075b1bc6f
    </div>
  );
};

<<<<<<< HEAD
export default SignInPage;
=======
export default SignInpage;
>>>>>>> 72e892fcd487c03c407e1bc3e3b2886075b1bc6f
