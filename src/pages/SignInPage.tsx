import { postSignIn } from '@/api/auth';
import useInputs from '@/lib/hooks/useInputs';
import useValidation from '@/lib/hooks/useValidation';
import { Navigate, useNavigate } from 'react-router-dom';
import token from '@/lib/token';
import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContextProvider';
import routerMeta from '@/lib/routerMeta';

const SignInpage = () => {
  const navigate = useNavigate();
  const [signInData, onChangeSignInData] = useInputs({
    email: '',
    password: '',
  });
  const { isLogin, setIsLogin } = useContext(UserContext);
  const [emailStatus, passwordStatus] = useValidation(signInData);

  const onSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postSignIn(signInData)
      .then((res) => {
        token.setToken(ACCESS_TOKEN_KEY, res.data.access_token);
        setIsLogin(!!token.getToken(ACCESS_TOKEN_KEY));
        navigate('/todo');
      })
      .catch((err) => {
        alert(err.response.data.log || err.log);
      });
  };

  if (isLogin) return <Navigate to={routerMeta.TodoPage.path} />;

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
          disabled={!!(emailStatus || passwordStatus)}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignInpage;
